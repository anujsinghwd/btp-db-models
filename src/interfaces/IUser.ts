import { Document } from "mongoose";

export interface IUser extends Document {
  user_id: string;
  gender?: "M" | "F" | "O";
  name: string;
  dob?: Date;
  mobile?: string;
  email: string;
  password: string;
  raw_password: string;
  role: string;
  routes: any[];
  scopes: string[];
  permissions: any[];
  capabilities: Record<string, any>;
  image?: string;
  accessToken?: string;
  isAgent: boolean;
  isActive: boolean;
  isAdmin: boolean;
  created_by?: string;
  isDeleted: boolean;
  created_at?: Date;
  updated_at?: Date;
  lastActiveAt: Date;
  connectionStatus: 'online' | 'offline';
}
