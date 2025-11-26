import { Document } from "mongoose";
import { IHotelUserBase } from "./base/IHotelUserBase";

export interface IHotelUser extends IHotelUserBase, Document {}
