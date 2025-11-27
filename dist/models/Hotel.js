"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const HotelSchema = new mongoose_1.Schema({
    hotel_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        default: () => new mongoose_1.default.Types.ObjectId(),
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
        type: mongoose_1.Schema.Types.ObjectId,
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
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.Hotel = mongoose_1.default.model("hotels", HotelSchema);
