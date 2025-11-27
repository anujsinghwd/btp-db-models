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
exports.PackageBooking = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const emailHistorySchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    emailType: String,
    payload: {},
}, { timestamps: true });
const assignmentHistorySchema = new mongoose_1.Schema({
    assignedTo: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    assignedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
}, { timestamps: true });
const PackageBookingSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "booking_users",
    },
    booking_id: {
        type: String,
    },
    btp_booking_id: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    duration: {
        type: Number,
    },
    client_name: {
        type: String,
        required: true,
    },
    package_info: {
        type: {},
    },
    total_persons: {
        type: Number,
    },
    phone_no: {
        type: Number,
    },
    whatsapp_no: {
        type: Number,
    },
    aadhar_card_no: {
        type: Number,
    },
    name_of_persons: {
        type: Array,
    },
    email_id: {
        type: String,
    },
    package_booking_date: {
        type: Date,
    },
    journey_date: {
        type: Date,
        default: null,
    },
    return_date: {
        type: Date,
        default: null,
    },
    total_package_amount: {
        type: Number,
        default: 0,
    },
    advance: {
        type: Number,
        default: 0,
    },
    package_payment_history: {
        type: Array,
    },
    hotel_info: {
        type: Array,
    },
    cab_info: {
        type: Array,
    },
    meal_type: {
        type: String,
    },
    camp_info: {
        type: Array,
    },
    bus_info: {
        type: Array,
    },
    sales_excutive_name: {
        type: String,
    },
    assigned_person: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    is_active: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
    },
    feedbacks: {
        type: Array,
    },
    on_hold: {
        type: Boolean,
        default: false,
    },
    final_package_profit: {
        type: Number,
        default: 0,
    },
    created_by: {
        type: String,
    },
    updated_by: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    email_history: [emailHistorySchema],
    assignment_history: [assignmentHistorySchema],
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    },
});
exports.PackageBooking = mongoose_1.default.model("package_bookings", PackageBookingSchema);
