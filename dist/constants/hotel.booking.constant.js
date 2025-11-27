"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ID_PROOF_TYPE = exports.MEAL_PLAN = exports.BOOKING_SOURCE = exports.SERVICE_STATUS = exports.SERVICE_TYPE = exports.PAYMENT_METHOD = exports.PAYMENT_STATUS = exports.BOOKING_STATUS = void 0;
// Booking Status
exports.BOOKING_STATUS = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    CHECKED_IN: 'CHECKED_IN',
    CHECKED_OUT: 'CHECKED_OUT',
    CANCELLED: 'CANCELLED',
    NO_SHOW: 'NO_SHOW'
};
// Payment Status
exports.PAYMENT_STATUS = {
    UNPAID: 'UNPAID',
    PARTIALLY_PAID: 'PARTIALLY_PAID',
    PAID: 'PAID',
    REFUNDED: 'REFUNDED',
    REFUND_PENDING: 'REFUND_PENDING'
};
// Payment Methods
exports.PAYMENT_METHOD = {
    CASH: 'CASH',
    CARD: 'CARD',
    UPI: 'UPI',
    NET_BANKING: 'NET_BANKING',
    WALLET: 'WALLET',
    CHEQUE: 'CHEQUE',
    BANK_TRANSFER: 'BANK_TRANSFER'
};
// Service Types (for additional charges)
exports.SERVICE_TYPE = {
    ROOM_SERVICE: 'ROOM_SERVICE',
    LAUNDRY: 'LAUNDRY',
    FOOD: 'FOOD',
    BEVERAGE: 'BEVERAGE',
    MINIBAR: 'MINIBAR',
    TELEPHONE: 'TELEPHONE',
    INTERNET: 'INTERNET',
    PARKING: 'PARKING',
    SPA: 'SPA',
    GYM: 'GYM',
    EXTRA_BED: 'EXTRA_BED',
    EARLY_CHECKIN: 'EARLY_CHECKIN',
    LATE_CHECKOUT: 'LATE_CHECKOUT',
    OTHER: 'OTHER'
};
// Service Status
exports.SERVICE_STATUS = {
    PENDING: 'PENDING',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED'
};
// Booking Source
exports.BOOKING_SOURCE = {
    DIRECT: 'DIRECT',
    PHONE: 'PHONE',
    WALK_IN: 'WALK_IN',
    ONLINE: 'ONLINE',
    OTA: 'OTA',
    AGENT: 'AGENT',
    PACKAGE_BOOKING: 'PACKAGE_BOOKING'
};
// Meal Plan Types
exports.MEAL_PLAN = {
    EP: 'EP', // European Plan (Room Only)
    CP: 'CP', // Continental Plan (Room + Breakfast)
    MAP: 'MAP', // Modified American Plan (Room + Breakfast + Dinner)
    AP: 'AP' // American Plan (All Meals)
};
// ID Proof Types
exports.ID_PROOF_TYPE = {
    AADHAR: 'AADHAR',
    PASSPORT: 'PASSPORT',
    DRIVING_LICENSE: 'DRIVING_LICENSE',
    VOTER_ID: 'VOTER_ID',
    PAN_CARD: 'PAN_CARD'
};
