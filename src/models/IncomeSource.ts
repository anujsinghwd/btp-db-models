import mongoose, { Schema, Document } from "mongoose";
import { INCOME_CATEGORY, PAYMENT_METHODS } from "../constants/expense";

export interface IIncomeSource extends Document {
  created_by?: mongoose.Types.ObjectId;
  update_by?: mongoose.Types.ObjectId;
  name: string;
  type: string;
  amount: number;
  source?: string;
  currency: string;
  isActive: boolean;
  description?: string;
  paymentMethod: string;
  accountDetails?: {
    bankName?: string;
    accountNumber?: string;
    routingNumber?: string;
    walletId?: string;
  };
  taxApplicable: boolean;
  taxRate: number;
  createdAt: Date;
  updatedAt: Date;
}

const incomeSourceSchema: Schema = new Schema({
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'btp_admin_users',
  },
  update_by: {
    type: Schema.Types.ObjectId,
    ref: 'btp_admin_users',
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: INCOME_CATEGORY.map((method) => method.value),
    default: 'OTHER'
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  source: {
    type: String,
    trim: true
  },
  currency: {
    type: String,
    default: 'INR',
    uppercase: true,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    trim: true
  },
  paymentMethod: {
    type: String,
    enum: PAYMENT_METHODS.map((method) => method.value),
    default: 'CASH'
  },
  accountDetails: {
    bankName: String,
    accountNumber: String,
    routingNumber: String,
    walletId: String
  },
  taxApplicable: {
    type: Boolean,
    default: true
  },
  taxRate: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
}, {
  timestamps: true,
});

export const IncomeSource = mongoose.model<IIncomeSource>('IncomeSource', incomeSourceSchema);
