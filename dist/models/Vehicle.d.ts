import mongoose from "mongoose";
import { IVehicle } from "../interfaces/IVehicle";
export declare const Vehicle: mongoose.Model<IVehicle, {}, {}, {}, mongoose.Document<unknown, {}, IVehicle, {}, {}> & IVehicle & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
