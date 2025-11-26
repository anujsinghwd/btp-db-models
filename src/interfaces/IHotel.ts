import { Document } from "mongoose";
import { IHotelBase } from "./base/IHotelBase";

// Mongoose Document Interface
export interface IHotel extends IHotelBase, Document {
  // You can override specific fields here if they need to be Mongoose Types
  // e.g. hotel_admin_user: mongoose.Types.ObjectId;
}
