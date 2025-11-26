import { Document } from "mongoose";
import { 
  IHotelBookingBase, 
  IGuestInfoBase, 
  IServiceChargeBase, 
  IPaymentTransactionBase, 
  IRoomAssignmentBase 
} from "./base/IHotelBookingBase";

// Re-export base types with original names for backward compatibility
export type IGuestInfo = IGuestInfoBase;
export type IServiceCharge = IServiceChargeBase;
export type IPaymentTransaction = IPaymentTransactionBase;
export type IRoomAssignment = IRoomAssignmentBase;

export interface IHotelBooking extends IHotelBookingBase, Document {}
