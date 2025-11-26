import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { HOTEL_USER_ROLE } from "../constants/hotel.user.constant";

export interface IHotelUser extends Document {
  user_id: string;
  hotel_id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  mobile: number;
  password: string;
  raw_password?: string;
  role: string;
  permissions: {
    can_create_booking: boolean;
    can_edit_booking: boolean;
    can_cancel_booking: boolean;
    can_manage_rooms: boolean;
    can_view_reports: boolean;
    can_manage_users: boolean;
    can_manage_pricing: boolean;
    can_process_payments: boolean;
  };
  profile_image?: string;
  is_active: boolean;
  last_login?: Date;
  accessToken?: string;
  created_by?: mongoose.Types.ObjectId;
  isDeleted: boolean;
  other_config: Record<string, any>;
  created_at: Date;
  updated_at: Date;
}

const HotelUserSchema: Schema = new Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4()
  },
  hotel_id: {
    type: Schema.Types.ObjectId,
    ref: 'hotels',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  mobile: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  raw_password: {
    type: String
  },
  role: {
    type: String,
    enum: Object.values(HOTEL_USER_ROLE),
    default: HOTEL_USER_ROLE.RECEPTIONIST
  },
  permissions: {
    can_create_booking: { type: Boolean, default: true },
    can_edit_booking: { type: Boolean, default: true },
    can_cancel_booking: { type: Boolean, default: false },
    can_manage_rooms: { type: Boolean, default: false },
    can_view_reports: { type: Boolean, default: false },
    can_manage_users: { type: Boolean, default: false },
    can_manage_pricing: { type: Boolean, default: false },
    can_process_payments: { type: Boolean, default: true }
  },
  profile_image: { type: String },
  is_active: { type: Boolean, default: true },
  last_login: { type: Date },
  accessToken: { type: String },
  created_by: { type: Schema.Types.ObjectId, ref: 'hotel_users' },
  isDeleted: { type: Boolean, default: false },
  other_config: { type: Object, default: {} },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

HotelUserSchema.index({ hotel_id: 1, email: 1 }, { unique: true });
HotelUserSchema.index({ hotel_id: 1, role: 1 });
HotelUserSchema.index({ hotel_id: 1, is_active: 1 });

HotelUserSchema.pre<IHotelUser>('save', function(next) {
  this.updated_at = new Date();
  next();
});

export const HotelUser = mongoose.model<IHotelUser>("hotel_users", HotelUserSchema);
