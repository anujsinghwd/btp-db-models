import { Document } from "mongoose";
import { IRoomBookingBase } from "./base/IRoomBookingBase";
export interface IRoomBooking extends IRoomBookingBase, Document {
}
