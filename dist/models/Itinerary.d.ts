import mongoose from "mongoose";
import { IItinerary } from "../interfaces/IItinerary";
export declare const Itinerary: mongoose.Model<IItinerary, {}, {}, {}, mongoose.Document<unknown, {}, IItinerary, {}, {}> & IItinerary & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
