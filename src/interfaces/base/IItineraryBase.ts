
export interface IItineraryDay {
  day: number;
  date?: string;
  title: string;
  description: string;
  image?: string;
  activities?: string[];
}

export interface IItineraryHotel {
  nights: number[];
  hotel_name: string;
  location: string;
  check_in_date: string;
  room_info: string;
  meal_plan: string;
  image?: string;
  sharing_plan?: string;
}

export interface IItineraryTransport {
  cab_type: string;
  cab_name: string;
  pickup_datetime: string;
  drop_datetime: string;
  pickup_place: string;
  drop_place: string;
}

export interface IItineraryHeaderFooter {
  company_logo?: string;
  company_name: string;
  whatsapp_no: string;
  website: string;
  address: string;
  brand_color?: string;
  mobile_1?: string;
  mobile_2?: string;
  instagram_id?: string;
  gst?: string;
}

export interface IItineraryBase {
  client_name: string;
  destination: string;
  start_date: string;
  end_date: string;
  duration: string;
  special_request?: string;
  pax?: string;
  total_price: number;
  header: IItineraryHeaderFooter;
  footer: IItineraryHeaderFooter;
  days: IItineraryDay[];
  hotels: IItineraryHotel[];
  transportation: IItineraryTransport[];
  inclusions: string[];
  exclusions: string[];
  sales_executive?: string;
  contact_person?: string;
  status: 'draft' | 'final';
  isDeleted: boolean;
  created_at?: Date;
  updated_at?: Date;
}
