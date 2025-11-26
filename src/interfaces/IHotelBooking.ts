import { Document } from "mongoose";

export interface IGuestInfo {
  name: string;
  age?: number;
  gender?: 'M' | 'F' | 'O';
  id_type?: string;
  id_number?: string;
  is_primary: boolean;
}

export interface IServiceCharge {
  charge_id: string;
  service_type: string;
  description: string;
  quantity: number;
  unit_price: number;
  total_amount: number;
  status: string;
  ordered_at: Date;
  completed_at?: Date;
  notes?: string;
}

export interface IPaymentTransaction {
  transaction_id: string;
  amount: number;
  payment_method: string;
  payment_status: string;
  paid_at?: Date;
  transaction_reference?: string;
  received_by?: string;
  notes?: string;
}

export interface IRoomAssignment {
  room_id: string;
  room_number?: string;
  room_type?: string;
  check_in_date: Date;
  check_out_date: Date;
  guests: IGuestInfo[];
  base_price: number;
  extra_charges: number;
}

export interface IHotelBooking extends Document {
  booking_id: string;
  hotel_id: string;
  guest_info: {
    name: string;
    email: string;
    mobile: number;
    alternate_mobile?: number;
    aadhar_number?: string;
    address?: {
      street?: string;
      city?: string;
      state?: string;
      country?: string;
      pincode?: string;
    };
    nationality: string;
    id_proof_type?: string;
    id_proof_number?: string;
    id_proof_images?: string[];
  };
  guests: IGuestInfo[];
  guest_count: {
    adults: number;
    children: number;
    infants: number;
  };
  check_in_date: Date;
  check_out_date: Date;
  actual_check_in?: Date;
  actual_check_out?: Date;
  nights: number;
  assigned_rooms: IRoomAssignment[];
  total_rooms: number;
  pricing: {
    room_charges: number;
    extra_bed_charges: number;
    service_charges_total: number;
    food_charges: number;
    tax_percentage: number;
    tax_amount: number;
    discount: number;
    discount_reason?: string;
    total_amount: number;
  };
  service_charges: IServiceCharge[];
  payment_info: {
    payment_status: string;
    advance_paid: number;
    paid_amount: number;
    balance_amount: number;
  };
  payment_transactions: IPaymentTransaction[];
  status: string;
  meal_plan: string;
  special_requests?: string;
  internal_notes?: string;
  guest_notes?: string;
  booking_source: string;
  package_booking_ref?: string;
  cancellation_info?: {
    cancelled_at?: Date;
    cancelled_by?: string;
    cancellation_reason?: string;
    refund_amount?: number;
    cancellation_charges?: number;
  };
  created_by: string;
  updated_by?: string;
  checked_in_by?: string;
  checked_out_by?: string;
  isDeleted: boolean;
  created_at: Date;
  updated_at: Date;
}
