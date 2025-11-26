import mongoose, { Schema, Document } from "mongoose";
import { VEHICLE_BRANDS } from "../constants/vehicle_brands";

import { IVehicle } from "../interfaces/IVehicle";

const VehicleSchema: Schema = new Schema({
  vehicle_id: {
    type: String,
    required: true,
    unique: true,
  },
  vehicle_number: {
    type: String,
    unique: true,
    required: true,
  },
  transporter_id: {
    type: Schema.Types.ObjectId,
    ref: "transporters",
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  unavailable_dates: {
    type: Array,
    default: [],
  },
  type: {
    type: String,
  },
  vehicle_model: {
    type: String,
  },
  seats: {
    type: Number,
    default: 0,
  },
  images: {
    type: [String],
    default: [],
  },
  brand: {
    type: String,
    enum: Object.keys(VEHICLE_BRANDS),
  },
  power: {
    type: String,
  },
  fuel_type: {
    type: String,
    default: "Petrol",
    enum: ["Petrol", "Diesel", "CNG", "EV"],
  },
  color: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  created_by: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});

export const Vehicle = mongoose.model<IVehicle>("vehicles", VehicleSchema);
