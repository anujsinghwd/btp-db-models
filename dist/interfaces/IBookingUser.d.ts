import { Document } from "mongoose";
import { IBookingUserBase } from "./base/IBookingUserBase";
export interface IBookingUser extends IBookingUserBase, Document {
}
