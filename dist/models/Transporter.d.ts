import mongoose, { Document } from "mongoose";
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
export declare const Transporter: mongoose.Model<ITransporter, {}, {}, {}, mongoose.Document<unknown, {}, ITransporter, {}, {}> & ITransporter & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
