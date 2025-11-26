import { Document } from "mongoose";

export interface IHotelUser extends Document {
  user_id: string;
  hotel_id: string;
  name: string;
  email: string;
  mobile: number;
  password: string;
  raw_password?: string;
  role: string;
  permissions: {
    can_create_booking: boolean;
    can_edit_booking: boolean;
    can_cancel_booking: boolean;
    can_manage_rooms: boolean;
    can_view_reports: boolean;
    can_manage_users: boolean;
    can_manage_pricing: boolean;
    can_process_payments: boolean;
  };
  profile_image?: string;
  is_active: boolean;
  last_login?: Date;
  accessToken?: string;
  created_by?: string;
  isDeleted: boolean;
  other_config: Record<string, any>;
  created_at: Date;
  updated_at: Date;
}
