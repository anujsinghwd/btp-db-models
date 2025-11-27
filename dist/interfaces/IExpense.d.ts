import { Document } from "mongoose";
import { IExpenseBase } from "./base/IExpenseBase";
export interface IExpense extends IExpenseBase, Document {
}
