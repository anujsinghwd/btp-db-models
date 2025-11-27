import mongoose from "mongoose";
import { IHotelUser } from "../interfaces/IHotelUser";
export declare const HotelUser: mongoose.Model<IHotelUser, {}, {}, {}, mongoose.Document<unknown, {}, IHotelUser, {}, {}> & IHotelUser & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
