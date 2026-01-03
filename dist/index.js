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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = exports.Itinerary = exports.User = exports.Vehicle = exports.Transporter = exports.RoomBooking = exports.Room = exports.PackageBooking = exports.Lead = exports.Inquiry = exports.IncomeSource = exports.HotelUser = exports.HotelBooking = exports.Hotel = exports.Expense = exports.Config = exports.BookingUser = void 0;
exports.getModelsForService = getModelsForService;
const BookingService = __importStar(require("./services/hotel.admin"));
const UserService = __importStar(require("./services/btp.user"));
const CRMService = __importStar(require("./services/crm"));
// Export all interfaces
__exportStar(require("./interfaces"), exports);
// Export Models (without re-exporting interfaces)
var BookingUser_1 = require("./models/BookingUser");
Object.defineProperty(exports, "BookingUser", { enumerable: true, get: function () { return BookingUser_1.BookingUser; } });
var Config_1 = require("./models/Config");
Object.defineProperty(exports, "Config", { enumerable: true, get: function () { return Config_1.Config; } });
var Expense_1 = require("./models/Expense");
Object.defineProperty(exports, "Expense", { enumerable: true, get: function () { return Expense_1.Expense; } });
var Hotel_1 = require("./models/Hotel");
Object.defineProperty(exports, "Hotel", { enumerable: true, get: function () { return Hotel_1.Hotel; } });
var HotelBooking_1 = require("./models/HotelBooking");
Object.defineProperty(exports, "HotelBooking", { enumerable: true, get: function () { return HotelBooking_1.HotelBooking; } });
var HotelUser_1 = require("./models/HotelUser");
Object.defineProperty(exports, "HotelUser", { enumerable: true, get: function () { return HotelUser_1.HotelUser; } });
var IncomeSource_1 = require("./models/IncomeSource");
Object.defineProperty(exports, "IncomeSource", { enumerable: true, get: function () { return IncomeSource_1.IncomeSource; } });
var Inquiry_1 = require("./models/Inquiry");
Object.defineProperty(exports, "Inquiry", { enumerable: true, get: function () { return Inquiry_1.Inquiry; } });
var Lead_1 = require("./models/Lead");
Object.defineProperty(exports, "Lead", { enumerable: true, get: function () { return Lead_1.Lead; } });
var PackageBooking_1 = require("./models/PackageBooking");
Object.defineProperty(exports, "PackageBooking", { enumerable: true, get: function () { return PackageBooking_1.PackageBooking; } });
var Room_1 = require("./models/Room");
Object.defineProperty(exports, "Room", { enumerable: true, get: function () { return Room_1.Room; } });
var RoomBooking_1 = require("./models/RoomBooking");
Object.defineProperty(exports, "RoomBooking", { enumerable: true, get: function () { return RoomBooking_1.RoomBooking; } });
var Transporter_1 = require("./models/Transporter");
Object.defineProperty(exports, "Transporter", { enumerable: true, get: function () { return Transporter_1.Transporter; } });
var Vehicle_1 = require("./models/Vehicle");
Object.defineProperty(exports, "Vehicle", { enumerable: true, get: function () { return Vehicle_1.Vehicle; } });
var userModel_1 = require("./models/userModel");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return userModel_1.User; } });
var Itinerary_1 = require("./models/Itinerary");
Object.defineProperty(exports, "Itinerary", { enumerable: true, get: function () { return Itinerary_1.Itinerary; } });
// Export Constants
__exportStar(require("./constants/booking_status"), exports);
__exportStar(require("./constants/expense"), exports);
__exportStar(require("./constants/grants"), exports);
__exportStar(require("./constants/hotel.booking.constant"), exports);
__exportStar(require("./constants/hotel.user.constant"), exports);
__exportStar(require("./constants/inquery-status"), exports);
__exportStar(require("./constants/lead"), exports);
__exportStar(require("./constants/permissions"), exports);
__exportStar(require("./constants/response_text"), exports);
__exportStar(require("./constants/roles"), exports);
__exportStar(require("./constants/room.constant"), exports);
__exportStar(require("./constants/scopes"), exports);
__exportStar(require("./constants/user_scopes"), exports);
__exportStar(require("./constants/vehicle_brands"), exports);
// Service Access Control
exports.Services = {
    HOTEL_ADMIN: BookingService,
    BTP_USER: UserService,
    CRM: CRMService,
};
function getModelsForService(serviceName) {
    return exports.Services[serviceName];
}
