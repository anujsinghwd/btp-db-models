import { Document } from "mongoose";
import { IConfigBase } from "./base/IConfigBase";
export interface IConfig extends IConfigBase, Document {
}
