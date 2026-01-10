import mongoose, { Document } from "mongoose";
export interface IPackageBooking extends Document {
    user_id: mongoose.Types.ObjectId;
    booking_id?: string;
    btp_booking_id: string;
    description?: string;
    location?: string;
    duration?: number;
    client_name: string;
    package_info?: Record<string, any>;
    total_persons?: number;
    phone_no?: number;
    whatsapp_no?: number;
    aadhar_card_no?: number;
    name_of_persons?: any[];
    email_id?: string;
    package_booking_date?: Date;
    journey_date?: Date;
    return_date?: Date;
    total_package_amount: number;
    advance: number;
    package_payment_history?: Array<{
        amount: number;
        date: Date;
        mode: string;
        status: 'received' | 'pending';
        transaction_id?: string;
        remark?: string;
    }>;
    payment_history?: Array<{
        category: 'transport' | 'accommodation' | 'other';
        sub_category: string;
        amount: number;
        status: 'paid' | 'pending' | 'partial';
        date?: Date;
        remark?: string;
    }>;
    hotel_info?: any[];
    cab_info?: any[];
    meal_type?: string;
    camp_info?: any[];
    bus_info?: any[];
    sales_excutive_name?: string;
    assigned_person?: mongoose.Types.ObjectId;
    is_active: boolean;
    status?: string;
    feedbacks?: any[];
    on_hold: boolean;
    final_package_profit: number;
    created_by?: string;
    updated_by?: string;
    isDeleted: boolean;
    email_history: Array<{
        user?: mongoose.Types.ObjectId;
        emailType?: string;
        payload?: Record<string, any>;
        createdAt?: Date;
    }>;
    assignment_history: Array<{
        assignedTo?: mongoose.Types.ObjectId;
        assignedBy?: mongoose.Types.ObjectId;
        createdAt?: Date;
    }>;
    created_at?: Date;
    updated_at?: Date;
}
export declare const PackageBooking: mongoose.Model<IPackageBooking, {}, {}, {}, mongoose.Document<unknown, {}, IPackageBooking, {}, {}> & IPackageBooking & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
