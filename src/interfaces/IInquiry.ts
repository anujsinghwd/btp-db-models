import { Document } from "mongoose";

export interface IInquiry extends Document {
  user_id: string;
  name: string;
  mobile: number;
  email: string;
  message?: string;
  status: string;
  follow_up?: any[];
  assigned_person?: string;
  platfrom?: string;
  created_by?: string;
  updated_by?: string;
  isDeleted: boolean;
  created_at?: Date;
  updated_at?: Date;
}
