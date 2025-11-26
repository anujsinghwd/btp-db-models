import { Document } from "mongoose";
import { IUserBase } from "./base/IUserBase";

export interface IUser extends IUserBase, Document {}
