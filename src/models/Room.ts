import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IRoom extends Document {
  hotel_id: mongoose.Types.ObjectId;
  room_id: string;
  title: string;
  price: number;
  max_people: number;
  capacity: {
    adults: number;
    childs: number;
  };
  description?: string;
  room_number: number;
  unavailable_dates: any[];
  images?: any[];
  rating: number;
  floor: number;
  features?: any[];
  facilities?: any[];
  amenities?: any[];
  balcony: boolean;
  isFeatured: boolean;
  created_by?: mongoose.Types.ObjectId;
  created_at?: Date;
  updated_at?: Date;
  smoke: boolean;
  min_price?: number;
  max_price?: number;
  discount: number;
  isDeleted: boolean;
  is_active: boolean;
}

const RoomSchema: Schema = new Schema({
  hotel_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'hotels'
  },
  room_id: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4()
  },
  title: {
    type: String,
    default: 'Standard',
  },
  price: {
    type: Number,
    default: 0
  },
  max_people: {
    type: Number,
    default: 0,
  },
  capacity: {
    adults: {
      type: Number,
      default: 0
    },
    childs: {
      type: Number,
      default: 0
    }
  },
  description: {
    type: String,
  },
  room_number: {
    type: Number,
    required: true,
  },
  unavailable_dates: {
    type: Array,
    default: []
  },
  images: {
    type: Array,
  },
  rating: {
    type: Number,
    default: 0,
  },
  floor: {
    type: Number,
    default: 0,
  },
  features: {
    type: Array
  },
  facilities: {
    type: Array
  },
  amenities: {
    type: Array
  },
  balcony: {
    type: Boolean,
    default: false,
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'booking_admin_users'
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  },
  smoke: {
    type: Boolean,
    default: false,
  },
  min_price: {
    type: Number
  },
  max_price: {
    type: Number
  },
  discount: {
    type: Number,
    default: 0
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  is_active: {
    type: Boolean,
    default: false,
  }
});

export const Room = mongoose.model<IRoom>("rooms", RoomSchema);
