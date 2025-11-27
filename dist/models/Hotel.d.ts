import mongoose from "mongoose";
import { IHotel } from "../interfaces/IHotel";
export declare const Hotel: mongoose.Model<IHotel, {}, {}, {}, mongoose.Document<unknown, {}, IHotel, {}, {}> & IHotel & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
