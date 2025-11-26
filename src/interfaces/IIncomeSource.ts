import { Document } from "mongoose";

export interface IIncomeSource extends Document {
  created_by?: string;
  update_by?: string;
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
