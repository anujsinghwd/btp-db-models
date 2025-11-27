import mongoose, { Document } from "mongoose";
export interface IBookingUser extends Document {
    user_id: string;
    gender?: "M" | "F" | "O";
    name: string;
    dob?: Date;
    mobile?: number;
    altername_mobile_number?: number;
    whatsapp_no?: number;
    social_links?: Record<string, any>;
    email: string;
    aadhar_card_no?: number;
    email_verified?: boolean;
    forgot_password_otp?: string;
    forgot_password_otp_expiry?: Date;
    id_proofs?: {
        id_type: string;
        id_number: string;
        urls: string[];
    }[];
    password: string;
    raw_password: string;
    routes: any[];
    scopes: string[];
    permissions: any[];
    capabilities?: Record<string, any>;
    role: string;
    image?: string;
    accessToken?: string;
    isActive: boolean;
    created_by?: string;
    otp_info?: Record<string, any>;
    updated_by?: string;
    isDeleted: boolean;
    created_at?: Date;
    updated_at?: Date;
}
export declare const BookingUser: mongoose.Model<IBookingUser, {}, {}, {}, mongoose.Document<unknown, {}, IBookingUser, {}, {}> & IBookingUser & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
