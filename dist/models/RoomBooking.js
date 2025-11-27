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
exports.RoomBooking = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const booking_status_1 = require("../constants/booking_status");
const RoomBookingSchema = new mongoose_1.Schema({
    booking_id: {
        type: String,
        required: true,
        unique: true,
    },
    room_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "rooms",
        required: true,
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    hotel_id: {
        type: mongoose_1.Schema.Types.ObjectId,
    },
    created_by: {
        type: mongoose_1.Schema.Types.ObjectId,
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
            booking_status_1.ROOM_BOOKING_STATUS.PENDING,
            booking_status_1.ROOM_BOOKING_STATUS.CONFIRMED,
            booking_status_1.ROOM_BOOKING_STATUS.IN_PROGRESS,
            booking_status_1.ROOM_BOOKING_STATUS.COMPLETED
        ],
        default: booking_status_1.ROOM_BOOKING_STATUS.PENDING,
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
exports.RoomBooking = mongoose_1.default.model("rooms_booking", RoomBookingSchema);
