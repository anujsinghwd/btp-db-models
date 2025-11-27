import { Document } from "mongoose";
import { IHotelBookingBase, IGuestInfoBase, IServiceChargeBase, IPaymentTransactionBase, IRoomAssignmentBase } from "./base/IHotelBookingBase";
export type IGuestInfo = IGuestInfoBase;
export type IServiceCharge = IServiceChargeBase;
export type IPaymentTransaction = IPaymentTransactionBase;
export type IRoomAssignment = IRoomAssignmentBase;
export interface IHotelBooking extends IHotelBookingBase, Document {
}
