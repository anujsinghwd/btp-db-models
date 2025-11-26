import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import {
  BOOKING_STATUS,
  PAYMENT_STATUS,
  PAYMENT_METHOD,
  SERVICE_TYPE,
  SERVICE_STATUS,
  BOOKING_SOURCE,
  MEAL_PLAN,
  ID_PROOF_TYPE
} from "../constants/hotel.booking.constant";

import { 
  IHotelBooking, 
  IGuestInfo, 
  IServiceCharge, 
  IPaymentTransaction, 
  IRoomAssignment 
} from "../interfaces/IHotelBooking";

// Schemas
const guestInfoSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  gender: { type: String, enum: ['M', 'F', 'O'] },
  id_type: { type: String, enum: Object.values(ID_PROOF_TYPE) },
  id_number: { type: String },
  is_primary: { type: Boolean, default: false }
}, { _id: false });

const serviceChargeSchema = new Schema({
  charge_id: { type: String, default: () => uuidv4() },
  service_type: { type: String, enum: Object.values(SERVICE_TYPE), required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1, default: 1 },
  unit_price: { type: Number, required: true, min: 0 },
  total_amount: { type: Number, required: true, min: 0 },
  status: { type: String, enum: Object.values(SERVICE_STATUS), default: SERVICE_STATUS.PENDING },
  ordered_at: { type: Date, default: Date.now },
  completed_at: { type: Date },
  notes: { type: String }
}, { _id: false });

const paymentTransactionSchema = new Schema({
  transaction_id: { type: String, default: () => uuidv4() },
  amount: { type: Number, required: true, min: 0 },
  payment_method: { type: String, enum: Object.values(PAYMENT_METHOD), required: true },
  payment_status: { type: String, enum: Object.values(PAYMENT_STATUS), default: PAYMENT_STATUS.UNPAID },
  paid_at: { type: Date },
  transaction_reference: { type: String },
  received_by: { type: Schema.Types.ObjectId, ref: 'hotel_users' },
  notes: { type: String }
}, { _id: false });

const roomAssignmentSchema = new Schema({
  room_id: { type: Schema.Types.ObjectId, ref: "rooms_enhanced", required: true },
  room_number: { type: String },
  room_type: { type: String },
  check_in_date: { type: Date, required: true },
  check_out_date: { type: Date, required: true },
  guests: [guestInfoSchema],
  base_price: { type: Number, default: 0 },
  extra_charges: { type: Number, default: 0 }
}, { _id: false });

const HotelBookingSchema: Schema = new Schema({
  booking_id: {
    type: String,
    required: true,
    unique: true,
    default: () => `HB${Date.now()}${Math.floor(Math.random() * 1000)}`
  },
  hotel_id: { type: Schema.Types.ObjectId, ref: 'hotels', required: true },
  guest_info: {
    name: { type: String, required: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    mobile: { type: Number, required: true },
    alternate_mobile: { type: Number },
    aadhar_number: { type: String },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      pincode: String
    },
    nationality: { type: String, default: 'Indian' },
    id_proof_type: { type: String, enum: Object.values(ID_PROOF_TYPE) },
    id_proof_number: { type: String },
    id_proof_images: [String]
  },
  guests: [guestInfoSchema],
  guest_count: {
    adults: { type: Number, required: true, default: 1 },
    children: { type: Number, default: 0 },
    infants: { type: Number, default: 0 }
  },
  check_in_date: { type: Date, required: true },
  check_out_date: { type: Date, required: true },
  actual_check_in: { type: Date },
  actual_check_out: { type: Date },
  nights: { type: Number, required: true },
  assigned_rooms: [roomAssignmentSchema],
  total_rooms: { type: Number, required: true, default: 1 },
  pricing: {
    room_charges: { type: Number, default: 0 },
    extra_bed_charges: { type: Number, default: 0 },
    service_charges_total: { type: Number, default: 0 },
    food_charges: { type: Number, default: 0 },
    tax_percentage: { type: Number, default: 0, min: 0, max: 100 },
    tax_amount: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    discount_reason: String,
    total_amount: { type: Number, required: true, default: 0 }
  },
  service_charges: [serviceChargeSchema],
  payment_info: {
    payment_status: { type: String, enum: Object.values(PAYMENT_STATUS), default: PAYMENT_STATUS.UNPAID },
    advance_paid: { type: Number, default: 0 },
    paid_amount: { type: Number, default: 0 },
    balance_amount: { type: Number, default: 0 }
  },
  payment_transactions: [paymentTransactionSchema],
  status: { type: String, enum: Object.values(BOOKING_STATUS), default: BOOKING_STATUS.PENDING },
  meal_plan: { type: String, enum: Object.values(MEAL_PLAN), default: MEAL_PLAN.EP },
  special_requests: { type: String },
  internal_notes: { type: String },
  guest_notes: { type: String },
  booking_source: { type: String, enum: Object.values(BOOKING_SOURCE), default: BOOKING_SOURCE.DIRECT },
  package_booking_ref: { type: Schema.Types.ObjectId, ref: 'package_bookings' },
  cancellation_info: {
    cancelled_at: Date,
    cancelled_by: { type: Schema.Types.ObjectId, ref: 'hotel_users' },
    cancellation_reason: String,
    refund_amount: Number,
    cancellation_charges: Number
  },
  created_by: { type: Schema.Types.ObjectId, ref: 'hotel_users', required: true },
  updated_by: { type: Schema.Types.ObjectId, ref: 'hotel_users' },
  checked_in_by: { type: Schema.Types.ObjectId, ref: 'hotel_users' },
  checked_out_by: { type: Schema.Types.ObjectId, ref: 'hotel_users' },
  isDeleted: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Pre-save hook
HotelBookingSchema.pre<IHotelBooking>("save", function (next) {
  const serviceTotal = this.service_charges && this.service_charges.length > 0
    ? this.service_charges.reduce((sum, charge) => sum + charge.total_amount, 0)
    : 0;
  
  this.pricing.service_charges_total = serviceTotal;

  const subtotal = (this.pricing.room_charges || 0) + 
                   serviceTotal + 
                   (this.pricing.extra_bed_charges || 0) +
                   (this.pricing.food_charges || 0);

  this.pricing.tax_amount = (subtotal * (this.pricing.tax_percentage || 0)) / 100;
  this.pricing.total_amount = subtotal + this.pricing.tax_amount - (this.pricing.discount || 0);
  this.payment_info.balance_amount = this.pricing.total_amount - (this.payment_info.paid_amount || 0);

  const currentPaidAmount = this.payment_info.paid_amount || 0;
  if (currentPaidAmount === 0) {
    this.payment_info.payment_status = PAYMENT_STATUS.UNPAID;
  } else if (currentPaidAmount >= this.pricing.total_amount) {
    this.payment_info.payment_status = PAYMENT_STATUS.PAID;
  } else {
    this.payment_info.payment_status = PAYMENT_STATUS.PARTIALLY_PAID;
  }

  this.updated_at = new Date();
  next();
});

// Indexes
HotelBookingSchema.index({ booking_id: 1 }, { unique: true });
HotelBookingSchema.index({ 'guest_info.email': 1 });
HotelBookingSchema.index({ 'guest_info.mobile': 1 });
HotelBookingSchema.index({ hotel_id: 1, check_in_date: 1, check_out_date: 1 });
HotelBookingSchema.index({ hotel_id: 1, status: 1 });
HotelBookingSchema.index({ hotel_id: 1, 'payment_info.payment_status': 1 });
HotelBookingSchema.index({ 'assigned_rooms.room_id': 1 });
HotelBookingSchema.index({ package_booking_ref: 1 });
HotelBookingSchema.index({ created_at: -1 });

export const HotelBooking = mongoose.model<IHotelBooking>("hotel_bookings", HotelBookingSchema);
