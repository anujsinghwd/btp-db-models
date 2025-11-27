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
exports.BookingUser = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const roles_1 = require("../constants/roles");
const BookingUserSchema = new mongoose_1.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
    },
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
    },
    mobile: {
        type: Number,
    },
    altername_mobile_number: {
        type: Number,
    },
    whatsapp_no: {
        type: Number,
    },
    social_links: {
        type: Object,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    aadhar_card_no: {
        type: Number,
    },
    email_verified: {
        type: Boolean,
        default: false,
    },
    forgot_password_otp: {
        type: String,
    },
    forgot_password_otp_expiry: {
        type: Date,
    },
    id_proofs: [
        {
            id_type: { type: String },
            id_number: { type: String },
            urls: [{ type: String }],
        },
    ],
    password: {
        type: String,
        required: true,
    },
    raw_password: {
        type: String,
        required: true,
    },
    routes: {
        type: Array,
        default: [],
    },
    scopes: {
        type: Array,
        default: ["BTP_BOOKING_USER"],
    },
    permissions: {
        type: Array,
        default: [],
    },
    capabilities: {
        type: Object,
    },
    role: {
        type: String,
        default: roles_1.ROLES.BASIC,
        enum: [roles_1.ROLES.BASIC],
    },
    image: {
        type: String,
    },
    accessToken: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    created_by: {
        type: String,
    },
    otp_info: {
        type: Object,
    },
    updated_by: {
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
exports.BookingUser = mongoose_1.default.model("booking_users", BookingUserSchema);
