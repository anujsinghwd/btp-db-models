import { Document } from "mongoose";
import { ILeadBase, ILeadRecordBase } from "./base/ILeadBase";

export type ILeadRecord = ILeadRecordBase;
export interface ILead extends ILeadBase, Document {}
