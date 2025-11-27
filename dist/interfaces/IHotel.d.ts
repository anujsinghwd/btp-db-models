import { Document } from "mongoose";
import { IHotelBase } from "./base/IHotelBase";
export interface IHotel extends IHotelBase, Document {
}
