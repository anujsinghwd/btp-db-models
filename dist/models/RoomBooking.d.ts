import mongoose, { Document } from "mongoose";
export interface IRoomBooking extends Document {
    booking_id: string;
    room_id: mongoose.Types.ObjectId;
    user_id?: mongoose.Types.ObjectId;
    hotel_id?: mongoose.Types.ObjectId;
    created_by?: mongoose.Types.ObjectId;
    created_at?: Date;
    updated_at?: Date;
    isDeleted: boolean;
    status: string;
    start_date_time: Date;
    end_date_time: Date;
    price: number;
    rooms_count: number;
    room_numbers: any[];
    night_count: number;
    person_count: {
        adult: number;
        children: number;
    };
    person_info: any[];
}
export declare const RoomBooking: mongoose.Model<IRoomBooking, {}, {}, {}, mongoose.Document<unknown, {}, IRoomBooking, {}, {}> & IRoomBooking & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
