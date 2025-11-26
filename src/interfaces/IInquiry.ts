import { Document } from "mongoose";
import { IInquiryBase } from "./base/IInquiryBase";

export interface IInquiry extends IInquiryBase, Document {}
