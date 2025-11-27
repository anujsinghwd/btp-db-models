import mongoose, { Document } from "mongoose";
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
export declare const Expense: mongoose.Model<IExpense, {}, {}, {}, mongoose.Document<unknown, {}, IExpense, {}, {}> & IExpense & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
