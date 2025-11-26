import { Document } from "mongoose";
import { IVehicleBase } from "./base/IVehicleBase";

export interface IVehicle extends IVehicleBase, Document {}
