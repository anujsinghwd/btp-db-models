import mongoose, { Schema, Document } from "mongoose";

export interface IHotel extends Document {
  hotel_id: mongoose.Types.ObjectId;
  name: string;
  title?: string;
  description?: string;
  type?: string;
  city?: string;
  state?: string;
  address: string;
  zip?: string;
  owner_info?: {
    name?: string;
    mobile?: string;
    email?: string;
  };
  manager_info?: {
    name?: string;
    mobile?: string;
    email?: string;
  };
  hotel_admin_user?: mongoose.Types.ObjectId;
  subscription?: {
    plan: 'FREE' | 'BASIC' | 'PREMIUM' | 'ENTERPRISE';
    start_date?: Date;
    end_date?: Date;
    is_active: boolean;
    features?: any[];
  };
  settings?: {
    check_in_time: string;
    check_out_time: string;
    currency: string;
    tax_rate: number;
    cancellation_policy?: string;
    advance_payment_percentage: number;
    booking_buffer_hours: number;
  };
  business_info?: {
    gst_number?: string;
    pan_number?: string;
    business_name?: string;
    business_type?: 'HOTEL' | 'RESORT' | 'GUEST_HOUSE' | 'HOMESTAY' | 'HOSTEL' | 'LODGE';
    license_number?: string;
    bank_details?: Record<string, any>;
  };
  contact_persons?: Array<{
    name?: string;
    designation?: string;
    mobile?: string;
    email?: string;
    is_primary?: boolean;
  }>;
  social_media?: {
    website?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    google_maps_link?: string;
  };
  statistics?: {
    total_bookings: number;
    total_revenue: number;
    average_rating: number;
    total_reviews: number;
  };
  distance?: number;
  images?: any[];
  rating?: number;
  rooms?: any[];
  features?: Record<string, any>;
  hotel_code?: string;
  since?: Date;
  mobile?: number;
  email?: string;
  amenities?: string[];
  created_by?: mongoose.Types.ObjectId;
  featured: boolean;
  reviews?: Array<{
    user?: string;
    rating?: number;
    comment?: string;
  }>;
  is_camp: boolean;
  created_at?: Date;
  isDeleted: boolean;
  updated_at?: Date;
  is_active: boolean;
}

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
