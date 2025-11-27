import { IIdProof } from "../IIdProof";

export interface IBookingUserBase {
  user_id: string;
  gender?: "M" | "F" | "O";
  name: string;
  dob?: Date;
  mobile?: number;
  altername_mobile_number?: number;
  whatsapp_no?: number;
  social_links?: Record<string, any>;
  email: string;
  aadhar_card_no?: number;
  id_proofs?: IIdProof[];
  password: string;
  raw_password: string;
  routes: any[];
  scopes: string[];
  permissions: any[];
  capabilities?: Record<string, any>;
  role: string;
  image?: string;
  accessToken?: string;
  isActive: boolean;
  created_by?: string;
  otp_info?: Record<string, any>;
  updated_by?: string;
  isDeleted: boolean;
  created_at?: Date;
  updated_at?: Date;
  email_verified?: boolean;
  forgot_password_otp?: string;
  forgot_password_otp_expiry?: Date;
}
