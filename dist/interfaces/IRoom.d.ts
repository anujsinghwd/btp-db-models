import { Document } from "mongoose";
import { IRoomBase } from "./base/IRoomBase";
export interface IRoom extends IRoomBase, Document {
}
