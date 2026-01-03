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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Export all interfaces
__exportStar(require("./IHotel"), exports);
__exportStar(require("./IHotelBooking"), exports);
__exportStar(require("./IUser"), exports);
__exportStar(require("./IHotelUser"), exports);
__exportStar(require("./IBookingUser"), exports);
__exportStar(require("./IRoom"), exports);
__exportStar(require("./IRoomBooking"), exports);
__exportStar(require("./IPackageBooking"), exports);
__exportStar(require("./ILead"), exports);
__exportStar(require("./IInquiry"), exports);
__exportStar(require("./IExpense"), exports);
__exportStar(require("./IIncomeSource"), exports);
__exportStar(require("./IConfig"), exports);
__exportStar(require("./ITransporter"), exports);
__exportStar(require("./IVehicle"), exports);
__exportStar(require("./IItinerary"), exports);
// Export Base Interfaces (Pure Types)
__exportStar(require("./base/IHotelBase"), exports);
__exportStar(require("./base/IHotelBookingBase"), exports);
__exportStar(require("./base/IUserBase"), exports);
__exportStar(require("./base/IHotelUserBase"), exports);
__exportStar(require("./base/IBookingUserBase"), exports);
__exportStar(require("./base/IRoomBase"), exports);
__exportStar(require("./base/IRoomBookingBase"), exports);
__exportStar(require("./base/IPackageBookingBase"), exports);
__exportStar(require("./base/ILeadBase"), exports);
__exportStar(require("./base/IInquiryBase"), exports);
__exportStar(require("./base/IExpenseBase"), exports);
__exportStar(require("./base/IIncomeSourceBase"), exports);
__exportStar(require("./base/IConfigBase"), exports);
__exportStar(require("./base/ITransporterBase"), exports);
__exportStar(require("./base/IVehicleBase"), exports);
__exportStar(require("./base/IItineraryBase"), exports);
