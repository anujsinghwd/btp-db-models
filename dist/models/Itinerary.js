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
exports.Itinerary = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const itineraryDaySchema = new mongoose_1.Schema({
    day: { type: Number, required: true },
    date: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    activities: { type: [String] }
});
const itineraryHotelSchema = new mongoose_1.Schema({
    nights: { type: [Number], required: true },
    hotel_name: { type: String, required: true },
    location: { type: String, required: true },
    check_in_date: { type: String },
    room_info: { type: String, required: true },
    meal_plan: { type: String },
    image: { type: String },
    sharing_plan: { type: String },
});
const itineraryTransportSchema = new mongoose_1.Schema({
    cab_type: { type: String, required: true }, // sedan, suv, etc
    cab_name: { type: String, required: true }, // alto, dezire, innova, etc
    pickup_datetime: { type: String },
    drop_datetime: { type: String },
    pickup_place: { type: String, required: true },
    drop_place: { type: String, required: true }
});
const itineraryHeaderFooterSchema = new mongoose_1.Schema({
    company_logo: { type: String },
    company_name: { type: String, required: true },
    whatsapp_no: { type: String, required: true },
    website: { type: String, required: true },
    address: { type: String, required: true },
    brand_color: { type: String },
    mobile_1: { type: String },
    mobile_2: { type: String },
    instagram_id: { type: String },
    gst: { type: String, default: "09BEOPG4392C1ZD" },
});
const itinerarySchema = new mongoose_1.Schema({
    client_name: { type: String },
    destination: { type: String, required: true },
    start_date: { type: String },
    end_date: { type: String },
    duration: { type: String, required: true },
    special_request: { type: String },
    pax: { type: String },
    total_price: { type: Number },
    header: { type: itineraryHeaderFooterSchema, required: true },
    footer: { type: itineraryHeaderFooterSchema, required: true },
    days: { type: [itineraryDaySchema], required: true },
    hotels: { type: [itineraryHotelSchema], required: true },
    transportation: { type: [itineraryTransportSchema], required: true },
    inclusions: { type: [String], default: [] },
    exclusions: { type: [String], default: [] },
    sales_executive: { type: String },
    contact_person: { type: String },
    status: {
        type: String,
        enum: ["draft", "final"],
        default: "draft",
        required: true
    },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});
// Add index for faster queries
itinerarySchema.index({ client_name: 1 });
exports.Itinerary = mongoose_1.default.model("Itinerary", itinerarySchema);
