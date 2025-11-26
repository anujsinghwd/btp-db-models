import mongoose, { Schema, Document } from "mongoose";

export interface ITransporter extends Document {
  transporter_id: string;
  gender?: "M" | "F" | "O";
  name: string;
  company_name: string;
  company_id: string;
  dob?: Date;
  mobile?: any[];
  email: string;
  password: string;
  role: string;
  routes: any[];
  scopes: any[];
  permissions: any[];
  image?: string;
  accessToken?: string;
  isAgent: boolean;
  isActive: boolean;
  isOwner: boolean;
  created_by?: string;
  isDeleted: boolean;
  created_at?: Date;
  updated_at?: Date;
}

const TransporterSchema: Schema = new Schema({
  transporter_id: {
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
  company_name: {
    type: String,
    required: true,
    unique: true,
  },
  company_id: {
    type: String,
    unique: true,
    required: true,
  },
  dob: {
    type: Date,
  },
  mobile: {
    type: Array,
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
  role: {
    type: String,
    default: 'TRANSPORTER_ADMIN_USER'
  },
  routes: {
    type: Array,
    default: [],
  },
  scopes: {
    type: Array,
    default: [],
  },
  permissions: {
    type: Array,
    default: []
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
  isOwner: {
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
});

export const Transporter = mongoose.model<ITransporter>("transporters", TransporterSchema);
