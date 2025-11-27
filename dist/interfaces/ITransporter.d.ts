import { Document } from "mongoose";
import { ITransporterBase } from "./base/ITransporterBase";
export interface ITransporter extends ITransporterBase, Document {
}
