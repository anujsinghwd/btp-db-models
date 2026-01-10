import mongoose, { Schema, Document } from "mongoose";

export interface IPackageBooking extends Document {
  user_id: mongoose.Types.ObjectId;
  booking_id?: string;
  btp_booking_id: string;
  description?: string;
  location?: string;
  duration?: number;
  client_name: string;
  package_info?: Record<string, any>;
  total_persons?: number;
  phone_no?: number;
  whatsapp_no?: number;
  aadhar_card_no?: number;
  name_of_persons?: any[];
  email_id?: string;
  package_booking_date?: Date;
  journey_date?: Date;
  return_date?: Date;
  total_package_amount: number;
  advance: number;
  package_payment_history?: Array<{
    amount: number;
    date: Date;
    mode: string;
    status: 'received' | 'pending';
    transaction_id?: string;
    remark?: string;
  }>;
  payment_history?: Array<{
    category: 'transport' | 'accommodation' | 'other';
    sub_category: string;
    amount: number;
    status: 'paid' | 'pending' | 'partial';
    date?: Date;
    remark?: string;
  }>;
  hotel_info?: any[];
  cab_info?: any[];
  meal_type?: string;
  camp_info?: any[];
  bus_info?: any[];
  sales_excutive_name?: string;
  assigned_person?: mongoose.Types.ObjectId;
  is_active: boolean;
  status?: string;
  feedbacks?: any[];
  on_hold: boolean;
  final_package_profit: number;
  created_by?: string;
  updated_by?: string;
  isDeleted: boolean;
  email_history: Array<{
    user?: mongoose.Types.ObjectId;
    emailType?: string;
    payload?: Record<string, any>;
    createdAt?: Date;
  }>;
  assignment_history: Array<{
    assignedTo?: mongoose.Types.ObjectId;
    assignedBy?: mongoose.Types.ObjectId;
    createdAt?: Date;
  }>;
  created_at?: Date;
  updated_at?: Date;
}

const emailHistorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "booking_admin_users",
    },
    emailType: String,
    payload: {},
  },
  { timestamps: true }
);

const assignmentHistorySchema = new Schema(
  {
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "booking_admin_users",
    },
    assignedBy: {
      type: Schema.Types.ObjectId,
      ref: "booking_admin_users",
    },
  },
  { timestamps: true }
);

const ExpenseSchema = new Schema({
  category: {
    type: String,
    enum: ['transport', 'accommodation', 'other'],
    required: true
  },
  sub_category: {
    type: String, // e.g., 'cab', 'bus', 'flight', 'hotel', 'camp'
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['paid', 'pending', 'partial'],
    default: 'pending'
  },
  date: {
    type: Date,
    default: Date.now
  },
  remark: String
});

const CustomerPaymentSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  mode: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['received', 'pending'],
    default: 'received'
  },
  transaction_id: String,
  remark: String
});

const PackageBookingSchema: Schema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "booking_users",
  },
  booking_id: {
    type: String,
  },
  btp_booking_id: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  duration: {
    type: Number,
  },
  client_name: {
    type: String,
    required: true,
  },
  package_info: {
    type: {},
  },
  total_persons: {
    type: Number,
  },
  phone_no: {
    type: Number,
  },
  whatsapp_no: {
    type: Number,
  },
  aadhar_card_no: {
    type: Number,
  },
  name_of_persons: {
    type: Array,
  },
  email_id: {
    type: String,
  },
  package_booking_date: {
    type: Date,
  },
  journey_date: {
    type: Date,
    default: null,
  },
  return_date: {
    type: Date,
    default: null,
  },
  total_package_amount: {
    type: Number,
    default: 0,
  },
  advance: {
    type: Number,
    default: 0,
  },
  package_payment_history: [CustomerPaymentSchema],
  payment_history: [ExpenseSchema],
  hotel_info: {
    type: Array,
  },
  cab_info: {
    type: Array,
  },
  meal_type: {
    type: String,
  },
  camp_info: {
    type: Array,
  },
  bus_info: {
    type: Array,
  },
  sales_excutive_name: {
    type: String,
  },
  assigned_person: {
    type: Schema.Types.ObjectId,
    ref: "booking_admin_users",
  },
  is_active: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
  },
  feedbacks: {
    type: Array,
  },
  on_hold: {
    type: Boolean,
    default: false,
  },
  final_package_profit: {
    type: Number,
    default: 0,
  },
  created_by: {
    type: String,
  },
  updated_by: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  email_history: [emailHistorySchema],
  assignment_history: [assignmentHistorySchema],
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});

export const PackageBooking = mongoose.model<IPackageBooking>("package_bookings", PackageBookingSchema);
