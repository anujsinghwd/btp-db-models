export interface IVehicleBase {
  vehicle_id: string;
  vehicle_number: string;
  transporter_id: string;
  isActive: boolean;
  unavailable_dates: any[];
  type?: string;
  vehicle_model?: string;
  seats: number;
  images: string[];
  brand?: string;
  power?: string;
  fuel_type: "Petrol" | "Diesel" | "CNG" | "EV";
  color?: string;
  price: number;
  discount: number;
  created_by?: string;
  isDeleted: boolean;
  created_at?: Date;
  updated_at?: Date;
}
