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
exports.HotelUser = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const uuid_1 = require("uuid");
const hotel_user_constant_1 = require("../constants/hotel.user.constant");
const HotelUserSchema = new mongoose_1.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
        default: () => (0, uuid_1.v4)()
    },
    hotel_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'hotels',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    mobile: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    raw_password: {
        type: String
    },
    role: {
        type: String,
        enum: Object.values(hotel_user_constant_1.HOTEL_USER_ROLE),
        default: hotel_user_constant_1.HOTEL_USER_ROLE.RECEPTIONIST
    },
    permissions: {
        can_create_booking: { type: Boolean, default: true },
        can_edit_booking: { type: Boolean, default: true },
        can_cancel_booking: { type: Boolean, default: false },
        can_manage_rooms: { type: Boolean, default: false },
        can_view_reports: { type: Boolean, default: false },
        can_manage_users: { type: Boolean, default: false },
        can_manage_pricing: { type: Boolean, default: false },
        can_process_payments: { type: Boolean, default: true }
    },
    profile_image: { type: String },
    is_active: { type: Boolean, default: true },
    last_login: { type: Date },
    accessToken: { type: String },
    created_by: { type: mongoose_1.Schema.Types.ObjectId, ref: 'hotel_users' },
    isDeleted: { type: Boolean, default: false },
    other_config: { type: Object, default: {} },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});
HotelUserSchema.index({ hotel_id: 1, email: 1 }, { unique: true });
HotelUserSchema.index({ hotel_id: 1, role: 1 });
HotelUserSchema.index({ hotel_id: 1, is_active: 1 });
HotelUserSchema.pre('save', function (next) {
    this.updated_at = new Date();
    next();
});
exports.HotelUser = mongoose_1.default.model("hotel_users", HotelUserSchema);
