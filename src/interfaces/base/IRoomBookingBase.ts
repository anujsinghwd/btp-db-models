export interface IRoomBookingBase {
  booking_id: string;
  room_id: string;
  user_id?: string;
  hotel_id?: string;
  created_by?: string;
  created_at?: Date;
  updated_at?: Date;
  isDeleted: boolean;
  status: string;
  start_date_time: Date;
  end_date_time: Date;
  price: number;
  rooms_count: number;
  room_numbers: any[];
  night_count: number;
  person_count: {
    adult: number;
    children: number;
  };
  person_info: any[];
}
