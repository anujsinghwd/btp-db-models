import mongoose from "mongoose";
import { IHotelBooking } from "../interfaces/IHotelBooking";
export declare const HotelBooking: mongoose.Model<IHotelBooking, {}, {}, {}, mongoose.Document<unknown, {}, IHotelBooking, {}, {}> & IHotelBooking & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
