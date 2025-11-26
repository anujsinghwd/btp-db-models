import mongoose, { Schema, Document } from "mongoose";
import { ROOM_BOOKING_STATUS } from "../constants/booking_status";

export interface IRoomBooking extends Document {
  booking_id: string;
  room_id: mongoose.Types.ObjectId;
  user_id?: mongoose.Types.ObjectId;
  hotel_id?: mongoose.Types.ObjectId;
  created_by?: mongoose.Types.ObjectId;
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

const RoomBookingSchema: Schema = new Schema({
  booking_id: {
    type: String,
    required: true,
    unique: true,
  },
  room_id: {
    type: Schema.Types.ObjectId,
    ref: "rooms",
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
  },
  hotel_id: {
    type: Schema.Types.ObjectId,
  },
  created_by: {
    type: Schema.Types.ObjectId,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: [
      ROOM_BOOKING_STATUS.PENDING,
      ROOM_BOOKING_STATUS.CONFIRMED,
      ROOM_BOOKING_STATUS.IN_PROGRESS,
      ROOM_BOOKING_STATUS.COMPLETED
    ],
    default: ROOM_BOOKING_STATUS.PENDING,
  },
  start_date_time: {
    type: Date,
    required: true,
  },
  end_date_time: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  rooms_count: {
    type: Number,
    default: 0,
  },
  room_numbers: {
    type: Array,
    default: [],
  },
  night_count: {
    type: Number,
    default: 0,
  },
  person_count: {
    adult: {
      type: Number,
      default: 0,
    },
    children: {
      type: Number,
      default: 0,
    },
  },
  person_info: {
    type: Array,
    default: [],
  },
});

export const RoomBooking = mongoose.model<IRoomBooking>("rooms_booking", RoomBookingSchema);
