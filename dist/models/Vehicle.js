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
exports.Vehicle = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const vehicle_brands_1 = require("../constants/vehicle_brands");
const VehicleSchema = new mongoose_1.Schema({
    vehicle_id: {
        type: String,
        required: true,
        unique: true,
    },
    vehicle_number: {
        type: String,
        unique: true,
        required: true,
    },
    transporter_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "transporters",
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    unavailable_dates: {
        type: Array,
        default: [],
    },
    type: {
        type: String,
    },
    vehicle_model: {
        type: String,
    },
    seats: {
        type: Number,
        default: 0,
    },
    images: {
        type: [String],
        default: [],
    },
    brand: {
        type: String,
        enum: Object.keys(vehicle_brands_1.VEHICLE_BRANDS),
    },
    power: {
        type: String,
    },
    fuel_type: {
        type: String,
        default: "Petrol",
        enum: ["Petrol", "Diesel", "CNG", "EV"],
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    discount: {
        type: Number,
        default: 0,
    },
    created_by: {
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
exports.Vehicle = mongoose_1.default.model("vehicles", VehicleSchema);
