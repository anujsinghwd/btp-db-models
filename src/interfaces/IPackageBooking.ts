import { Document } from "mongoose";
import { IPackageBookingBase } from "./base/IPackageBookingBase";

export interface IPackageBooking extends IPackageBookingBase, Document {}
