import mongoose, { Schema, Document } from "mongoose";
import { EXPENSE_CATEGORY, PAYMENT_METHODS } from "../constants/expense";

export interface IExpense extends Document {
  name: string;
  category: string;
  description?: string;
  amount: number;
  paymentMethod: string;
  paymentReference?: string;
  code?: string;
  isActive: boolean;
  created_by?: mongoose.Types.ObjectId;
  updated_by?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt?: Date;
}

const expenseTypeSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Expense type name is required"],
    trim: true,
    maxlength: [50, "Expense type name cannot exceed 50 characters"],
  },
  category: {
    type: String,
    enum: EXPENSE_CATEGORY.map((category) => category.value),
    default: 'MISCELLANEOUS',
  },
  description: {
    type: String,
    trim: true,
    maxlength: [250, "Description cannot exceed 250 characters"],
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
    min: [0, "Amount cannot be negative"],
  },
  paymentMethod: {
    type: String,
    enum: PAYMENT_METHODS.map((method) => method.value),
    default: "CASH",
  },
  paymentReference: {
    type: String,
    trim: true,
    maxlength: [100, "Payment reference cannot exceed 100 characters"],
  },
  code: {
    type: String,
    uppercase: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "booking_admin_users",
  },
  updated_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "booking_admin_users",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

export const Expense = mongoose.model<IExpense>("expense", expenseTypeSchema);
