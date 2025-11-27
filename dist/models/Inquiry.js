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
exports.Inquiry = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const inquery_status_1 = require("../constants/inquery-status");
const InquirySchema = new mongoose_1.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
    },
    status: {
        type: String,
        default: inquery_status_1.INQUIRY_STATUS.FRESH,
        enum: [
            inquery_status_1.INQUIRY_STATUS.PROCESSING,
            inquery_status_1.INQUIRY_STATUS.COMPLETED,
            inquery_status_1.INQUIRY_STATUS.CANCELED,
            inquery_status_1.INQUIRY_STATUS.ON_HOLD,
            inquery_status_1.INQUIRY_STATUS.AWAITING_INFORMATION,
            inquery_status_1.INQUIRY_STATUS.ERROR,
        ],
    },
    follow_up: {
        type: Array,
    },
    assigned_person: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    platfrom: {
        type: String
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
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    },
});
exports.Inquiry = mongoose_1.default.model("inquiries", InquirySchema);
