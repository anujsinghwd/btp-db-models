import { Document } from "mongoose";
import { IIncomeSourceBase } from "./base/IIncomeSourceBase";
export interface IIncomeSource extends IIncomeSourceBase, Document {
}
