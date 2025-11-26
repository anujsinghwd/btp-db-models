import mongoose, { Schema, Document } from "mongoose";
import { INQUIRY_STATUS } from "../constants/inquery-status";

export interface IInquiry extends Document {
  user_id: string;
  name: string;
  mobile: number;
  email: string;
  message?: string;
  status: string;
  follow_up?: any[];
  assigned_person?: mongoose.Types.ObjectId;
  platfrom?: string;
  created_by?: string;
  updated_by?: string;
  isDeleted: boolean;
  created_at?: Date;
  updated_at?: Date;
}

const InquirySchema: Schema = new Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
  },
  status: {
    type: String,
    default: INQUIRY_STATUS.FRESH,
    enum: [
      INQUIRY_STATUS.PROCESSING,
      INQUIRY_STATUS.COMPLETED,
      INQUIRY_STATUS.CANCELED,
      INQUIRY_STATUS.ON_HOLD,
      INQUIRY_STATUS.AWAITING_INFORMATION,
      INQUIRY_STATUS.ERROR,
    ],
  },
  follow_up: {
    type: Array,
  },
  assigned_person: {
    type: Schema.Types.ObjectId,
    ref: "booking_admin_users",
  },
  platfrom: {
    type: String
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
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});

export const Inquiry = mongoose.model<IInquiry>("inquiries", InquirySchema);
