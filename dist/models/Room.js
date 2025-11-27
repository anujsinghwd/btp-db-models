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
exports.Room = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const uuid_1 = require("uuid");
const room_constant_1 = require("../constants/room.constant");
const RoomSchema = new mongoose_1.Schema({
    room_id: {
        type: String,
        required: true,
        unique: true,
        default: () => (0, uuid_1.v4)()
    },
    hotel_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'hotels'
    },
    room_number: {
        type: String,
        required: true
    },
    room_type: {
        type: String,
        enum: Object.values(room_constant_1.ROOM_TYPE),
        required: true,
        default: room_constant_1.ROOM_TYPE.STANDARD
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
        enum: Object.values(room_constant_1.ROOM_STATUS),
        default: room_constant_1.ROOM_STATUS.AVAILABLE
    },
    current_booking_id: {
        type: mongoose_1.Schema.Types.ObjectId,
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
        enum: Object.values(room_constant_1.BED_TYPE),
        default: room_constant_1.BED_TYPE.DOUBLE
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
        enum: Object.values(room_constant_1.ROOM_VIEW),
        default: room_constant_1.ROOM_VIEW.NONE
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
            enum: Object.values(room_constant_1.ROOM_AMENITY)
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
            type: mongoose_1.Schema.Types.ObjectId,
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
                type: mongoose_1.Schema.Types.ObjectId,
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
        type: mongoose_1.Schema.Types.ObjectId,
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
RoomSchema.pre('save', function (next) {
    this.updated_at = new Date();
    next();
});
exports.Room = mongoose_1.default.model("rooms", RoomSchema);
