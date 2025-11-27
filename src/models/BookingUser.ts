import mongoose, { Schema, Document } from "mongoose";
import { ROLES } from "../constants/roles";

export interface IBookingUser extends Document {
  user_id: string;
  gender?: "M" | "F" | "O";
  name: string;
  dob?: Date;
  mobile?: number;
  altername_mobile_number?: number;
  whatsapp_no?: number;
  social_links?: Record<string, any>;
  email: string;
  aadhar_card_no?: number;
  id_proofs?: {
    id_type: string;
    id_number: string;
    urls: string[];
  }[];
  password: string;
  raw_password: string;
  routes: any[];
  scopes: string[];
  permissions: any[];
  capabilities?: Record<string, any>;
  role: string;
  image?: string;
  accessToken?: string;
  isActive: boolean;
  created_by?: string;
  otp_info?: Record<string, any>;
  updated_by?: string;
  isDeleted: boolean;
  created_at?: Date;
  updated_at?: Date;
}

const BookingUserSchema: Schema = new Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["M", "F", "O"],
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  mobile: {
    type: Number,
  },
  altername_mobile_number: {
    type: Number,
  },
  whatsapp_no: {
    type: Number,
  },
  social_links: {
    type: Object,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  aadhar_card_no: {
    type: Number,
  },
  id_proofs: [
    {
      id_type: { type: String },
      id_number: { type: String },
      urls: [{ type: String }],
    },
  ],
  password: {
    type: String,
    required: true,
  },
  raw_password: {
    type: String,
    required: true,
  },
  routes: {
    type: Array,
    default: [],
  },
  scopes: {
    type: Array,
    default: ["BTP_BOOKING_USER"],
  },
  permissions: {
    type: Array,
    default: [],
  },
  capabilities: {
    type: Object,
  },
  role: {
    type: String,
    default: ROLES.BASIC,
    enum: [ROLES.BASIC],
  },
  image: {
    type: String,
  },
  accessToken: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  created_by: {
    type: String,
  },
  otp_info: {
    type: Object,
  },
  updated_by: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});

export const BookingUser = mongoose.model<IBookingUser>("booking_users", BookingUserSchema);
