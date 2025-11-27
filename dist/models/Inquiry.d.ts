import mongoose, { Document } from "mongoose";
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
export declare const Inquiry: mongoose.Model<IInquiry, {}, {}, {}, mongoose.Document<unknown, {}, IInquiry, {}, {}> & IInquiry & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
