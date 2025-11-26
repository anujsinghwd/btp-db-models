import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { ROOM_STATUS, ROOM_AMENITY, BED_TYPE, ROOM_VIEW, ROOM_TYPE } from "../constants/room.constant";

export interface IRoomEnhanced extends Document {
  room_id: string;
  hotel_id: mongoose.Types.ObjectId;
  room_number: string;
  room_type: string;
  price_per_night: number;
  weekend_price?: number;
  peak_season_price?: number;
  off_season_price?: number;
  discount_percentage: number;
  status: string;
  current_booking_id?: mongoose.Types.ObjectId;
  available_from?: Date;
  unavailable_dates: any[];
  capacity: number;
  max_adults: number;
  max_children: number;
  bed_type: string;
  number_of_beds: number;
  bed_configuration: {
    single_beds: number;
    double_beds: number;
    king_beds: number;
    queen_beds: number;
  };
  floor: number;
  size?: number;
  view: string;
  smoking_allowed: boolean;
  pet_friendly: boolean;
  balcony: boolean;
  amenities: string[];
  features: any[];
  facilities: any[];
  description?: string;
  images: any[];
  min_nights: number;
  max_nights?: number;
  advance_booking_days: number;
  housekeeping_status: {
    last_cleaned?: Date;
    cleaned_by?: mongoose.Types.ObjectId;
    notes?: string;
  };
  maintenance_history: Array<{
    issue?: string;
    reported_date?: Date;
    resolved_date?: Date;
    reported_by?: mongoose.Types.ObjectId;
    cost?: number;
    notes?: string;
  }>;
  extra_person_charge: number;
  extra_bed_charge: number;
  rating: number;
  is_featured: boolean;
  created_by?: mongoose.Types.ObjectId;
  isDeleted: boolean;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

const RoomSchema: Schema = new Schema({
  room_id: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4()
  },
  hotel_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'hotels'
  },
  room_number: {
    type: String,
    required: true
  },
  room_type: {
    type: String,
    enum: Object.values(ROOM_TYPE),
    required: true,
    default: ROOM_TYPE.STANDARD
  },
  
  // Pricing
  price_per_night: {
    type: Number,
    required: true,
    default: 0
  },
  weekend_price: {
    type: Number
  },
  peak_season_price: {
    type: Number
  },
  off_season_price: {
    type: Number
  },
  discount_percentage: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  
  // Status & Availability
  status: {
    type: String,
    enum: Object.values(ROOM_STATUS),
    default: ROOM_STATUS.AVAILABLE
  },
  current_booking_id: {
    type: Schema.Types.ObjectId,
    ref: 'hotel_bookings',
    default: null
  },
  available_from: {
    type: Date
  },
  unavailable_dates: {
    type: Array,
    default: []
  },
  
  // Capacity & Occupancy
  capacity: {
    type: Number,
    required: true,
    default: 2
  },
  max_adults: {
    type: Number,
    default: 2
  },
  max_children: {
    type: Number,
    default: 1
  },
  
  // Bed Configuration
  bed_type: {
    type: String,
    enum: Object.values(BED_TYPE),
    default: BED_TYPE.DOUBLE
  },
  number_of_beds: {
    type: Number,
    min: 1,
    default: 1
  },
  bed_configuration: {
    single_beds: { type: Number, default: 0 },
    double_beds: { type: Number, default: 0 },
    king_beds: { type: Number, default: 0 },
    queen_beds: { type: Number, default: 0 }
  },
  
  // Room Features
  floor: {
    type: Number,
    default: 0
  },
  size: {
    type: Number // in sq ft
  },
  view: {
    type: String,
    enum: Object.values(ROOM_VIEW),
    default: ROOM_VIEW.NONE
  },
  smoking_allowed: {
    type: Boolean,
    default: false
  },
  pet_friendly: {
    type: Boolean,
    default: false
  },
  balcony: {
    type: Boolean,
    default: false
  },
  amenities: [{
    type: String,
    enum: Object.values(ROOM_AMENITY)
  }],
  features: {
    type: Array,
    default: []
  },
  facilities: {
    type: Array,
    default: []
  },
  description: {
    type: String
  },
  
  // Images
  images: {
    type: Array,
    default: []
  },
  
  // Booking Rules
  min_nights: {
    type: Number,
    min: 1,
    default: 1
  },
  max_nights: {
    type: Number
  },
  advance_booking_days: {
    type: Number,
    min: 0,
    default: 0
  },
  
  // Housekeeping
  housekeeping_status: {
    last_cleaned: {
      type: Date
    },
    cleaned_by: {
      type: Schema.Types.ObjectId,
      ref: 'hotel_users'
    },
    notes: {
      type: String
    }
  },
  
  // Maintenance History
  maintenance_history: [{
    issue: String,
    reported_date: Date,
    resolved_date: Date,
    reported_by: {
      type: Schema.Types.ObjectId,
      ref: 'hotel_users'
    },
    cost: Number,
    notes: String
  }],
  
  // Additional Charges
  extra_person_charge: {
    type: Number,
    default: 0
  },
  extra_bed_charge: {
    type: Number,
    default: 0
  },
  
  // Ratings
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  is_featured: {
    type: Boolean,
    default: false
  },
  
  // System Fields
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'hotel_users'
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  is_active: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Indexes
RoomSchema.index({ hotel_id: 1, room_number: 1 }, { unique: true });
RoomSchema.index({ hotel_id: 1, status: 1, available_from: 1 });
RoomSchema.index({ hotel_id: 1, room_type: 1, price_per_night: 1 });
RoomSchema.index({ current_booking_id: 1 }, { sparse: true });

// Update timestamp on save
RoomSchema.pre<IRoomEnhanced>('save', function(next) {
  this.updated_at = new Date();
  next();
});

export const RoomEnhanced = mongoose.model<IRoomEnhanced>("rooms_enhanced", RoomSchema);
