import mongoose, { Schema } from "mongoose";
import { IHotel } from "../interfaces/IHotel";

const HotelSchema: Schema = new Schema({
  hotel_id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    unique: true,
    auto: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
  },
  owner_info: {
    name: {
      type: String
    },
    mobile: {
      type: String
    },
    email: {
      type: String
    }
  },
  manager_info: {
    name: {
      type: String
    },
    mobile: {
      type: String
    },
    email: {
      type: String
    }
  },
  hotel_admin_user: {
    type: Schema.Types.ObjectId,
    ref: 'hotel_users'
  },
  subscription: {
    plan: {
      type: String,
      enum: ['FREE', 'BASIC', 'PREMIUM', 'ENTERPRISE'],
      default: 'FREE'
    },
    start_date: Date,
    end_date: Date,
    is_active: {
      type: Boolean,
      default: true
    },
    features: Array
  },
  settings: {
    check_in_time: {
      type: String,
      default: '14:00'
    },
    check_out_time: {
      type: String,
      default: '11:00'
    },
    currency: {
      type: String,
      default: 'INR'
    },
    tax_rate: {
      type: Number,
      default: 0
    },
    cancellation_policy: String,
    advance_payment_percentage: {
      type: Number,
      default: 30
    },
    booking_buffer_hours: {
      type: Number,
      default: 2
    }
  },
  business_info: {
    gst_number: String,
    pan_number: String,
    business_name: String,
    business_type: {
      type: String,
      enum: ['HOTEL', 'RESORT', 'GUEST_HOUSE', 'HOMESTAY', 'HOSTEL', 'LODGE']
    },
    license_number: String,
    bank_details: {
      type: Object,
      default: {}
    }
  },
  contact_persons: [{
    name: String,
    designation: String,
    mobile: String,
    email: String,
    is_primary: Boolean
  }],
  social_media: {
    website: String,
    facebook: String,
    instagram: String,
    twitter: String,
    google_maps_link: String
  },
  statistics: {
    total_bookings: {
      type: Number,
      default: 0
    },
    total_revenue: {
      type: Number,
      default: 0
    },
    average_rating: {
      type: Number,
      default: 0
    },
    total_reviews: {
      type: Number,
      default: 0
    }
  },
  distance: {
    type: Number,
  },
  images: {
    type: Array,
  },
  rating: {
    type: Number,
  },
  rooms: {
    type: Array,
  },
  features: {
    type: Object,
  },
  hotel_code: {
    type: String,
    unique: true,
  },
  since: {
    type: Date,
  },
  mobile: {
    type: Number,
  },
  email: {
    type: String,
  },
  amenities: [
    {
      type: String,
    },
  ],
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "booking_admin_users",
  },
  featured: {
    type: Boolean,
    default: false,
  },
  reviews: [
    {
      user: {
        type: String,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
    },
  ],
  is_camp: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  updated_at: {
    type: Date,
  },
  is_active: {
    type: Boolean,
    default: false,
  },
});

export const Hotel = mongoose.model<IHotel>("hotels", HotelSchema);
