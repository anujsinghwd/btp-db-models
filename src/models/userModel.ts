import mongoose, { Schema, Document } from "mongoose";
import { ROLES } from "../constants/roles";

export interface IUser extends Document {
  user_id: string;
  gender?: "M" | "F" | "O";
  name: string;
  dob?: Date;
  mobile?: string;
  email: string;
  password: string;
  raw_password: string;
  role: string;
  routes: any[];
  scopes: string[];
  permissions: any[];
  capabilities: Record<string, any>;
  image?: string;
  accessToken?: string;
  isAgent: boolean;
  isActive: boolean;
  isAdmin: boolean;
  created_by?: string;
  isDeleted: boolean;
  created_at?: Date;
  updated_at?: Date;
  lastActiveAt: Date;
  connectionStatus: 'online' | 'offline';
}

const UserSchema: Schema = new Schema({
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
    type: String,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  raw_password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: ROLES.ADMIN,
    enum: [ROLES.BASIC, ROLES.SUPERVISOR, ROLES.ADMIN, ROLES.SUPERADMIN],
  },
  routes: {
    type: Array,
    default: [],
  },
  scopes: {
    type: Array,
    default: ["BTP_BOOKING_ADMIN"],
  },
  permissions: {
    type: Array,
    default: [],
  },
  capabilities: {
    type: Object,
    default: {}
  },
  image: {
    type: String,
  },
  accessToken: {
    type: String,
  },
  isAgent: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  created_by: {
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
  lastActiveAt: {
    type: Date,
    default: Date.now
  },
  connectionStatus: {
    type: String,
    enum: ['online', 'offline'],
    default: 'offline'
  }
});

export const User = mongoose.model<IUser>("booking_admin_users", UserSchema);
