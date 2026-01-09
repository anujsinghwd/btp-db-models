import mongoose, { Schema } from "mongoose";
import { IItinerary } from "../interfaces/IItinerary";

const itineraryDaySchema = new Schema({
  day: { type: Number, required: true },
  date: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  activities: { type: [String] }
});

const itineraryHotelSchema = new Schema({
  nights: { type: [Number], required: true },
  hotel_name: { type: String, required: true },
  location: { type: String, required: true },
  check_in_date: { type: String},
  room_info: { type: String, required: true },
  meal_plan: { type: String },
  image: { type: String },
  sharing_plan: { type: String },
});

const itineraryTransportSchema = new Schema({
  cab_type: { type: String, required: true }, // sedan, suv, etc
  cab_name: { type: String, required: true }, // alto, dezire, innova, etc
  pickup_datetime: { type: String },
  drop_datetime: { type: String },
  pickup_place: { type: String, required: true },
  drop_place: { type: String, required: true }
});

const itineraryHeaderFooterSchema = new Schema({
  company_logo: { type: String },
  company_name: { type: String, required: true },
  whatsapp_no: { type: String, required: true },
  website: { type: String, required: true },
  address: { type: String, required: true },
  brand_color: { type: String },
  mobile_1: { type: String },
  mobile_2: { type: String },
  instagram_id: { type: String },
  gst: { type: String, default: "09BEOPG4392C1ZD" },
});

const itinerarySchema = new Schema(
  {
    client_name: { type: String},
    destination: { type: String, required: true },
    start_date: { type: String},
    end_date: { type: String},
    duration: { type: String, required: true },
    special_request: { type: String },
    pax: { type: String },
    total_price: { type: Number },
    header: { type: itineraryHeaderFooterSchema, required: true },
    footer: { type: itineraryHeaderFooterSchema, required: true },
    days: { type: [itineraryDaySchema], required: true },
    hotels: { type: [itineraryHotelSchema], required: true },
    transportation: { type: [itineraryTransportSchema], required: true },
    inclusions: { type: [String], default: [] },
    exclusions: { type: [String], default: [] },
    sales_executive: { type: String },
    contact_person: { type: String },
    status: {
      type: String,
      enum: ["draft", "final"],
      default: "draft",
      required: true
    },
    isDeleted: { type: Boolean, default: false }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

// Add index for faster queries
itinerarySchema.index({ client_name: 1 });

export const Itinerary = mongoose.model<IItinerary>("Itinerary", itinerarySchema);
