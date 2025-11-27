import mongoose, { Document } from "mongoose";
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
export declare const IncomeSource: mongoose.Model<IIncomeSource, {}, {}, {}, mongoose.Document<unknown, {}, IIncomeSource, {}, {}> & IIncomeSource & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
