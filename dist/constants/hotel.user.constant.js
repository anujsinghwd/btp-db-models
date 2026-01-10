"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOTEL_BUSINESS_TYPE = exports.SUBSCRIPTION_PLAN = exports.DEFAULT_PERMISSIONS = exports.PERMISSION_KEYS = exports.HOTEL_USER_ROLE = void 0;
// Hotel User Roles
exports.HOTEL_USER_ROLE = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    RECEPTIONIST: 'RECEPTIONIST',
    STAFF: 'STAFF',
    HOUSEKEEPING: 'HOUSEKEEPING',
    ACCOUNTANT: 'ACCOUNTANT',
    MAINTENANCE: 'MAINTENANCE'
};
// Permission Keys
var PERMISSION_KEYS;
(function (PERMISSION_KEYS) {
    PERMISSION_KEYS["CAN_CREATE_BOOKING"] = "can_create_booking";
    PERMISSION_KEYS["CAN_EDIT_BOOKING"] = "can_edit_booking";
    PERMISSION_KEYS["CAN_CANCEL_BOOKING"] = "can_cancel_booking";
    PERMISSION_KEYS["CAN_MANAGE_ROOMS"] = "can_manage_rooms";
    PERMISSION_KEYS["CAN_VIEW_REPORTS"] = "can_view_reports";
    PERMISSION_KEYS["CAN_MANAGE_USERS"] = "can_manage_users";
    PERMISSION_KEYS["CAN_MANAGE_PRICING"] = "can_manage_pricing";
    PERMISSION_KEYS["CAN_PROCESS_PAYMENTS"] = "can_process_payments";
})(PERMISSION_KEYS || (exports.PERMISSION_KEYS = PERMISSION_KEYS = {}));
// Default permissions for each role
exports.DEFAULT_PERMISSIONS = {
    [exports.HOTEL_USER_ROLE.ADMIN]: {
        can_create_booking: true,
        can_edit_booking: true,
        can_cancel_booking: true,
        can_manage_rooms: true,
        can_view_reports: true,
        can_manage_users: true,
        can_manage_pricing: true,
        can_process_payments: true
    },
    [exports.HOTEL_USER_ROLE.MANAGER]: {
        can_create_booking: true,
        can_edit_booking: true,
        can_cancel_booking: true,
        can_manage_rooms: true,
        can_view_reports: true,
        can_manage_users: false,
        can_manage_pricing: true,
        can_process_payments: true
    },
    [exports.HOTEL_USER_ROLE.RECEPTIONIST]: {
        can_create_booking: true,
        can_edit_booking: true,
        can_cancel_booking: false,
        can_manage_rooms: false,
        can_view_reports: false,
        can_manage_users: false,
        can_manage_pricing: false,
        can_process_payments: true
    },
    [exports.HOTEL_USER_ROLE.STAFF]: {
        can_create_booking: false,
        can_edit_booking: false,
        can_cancel_booking: false,
        can_manage_rooms: false,
        can_view_reports: false,
        can_manage_users: false,
        can_manage_pricing: false,
        can_process_payments: false
    }
};
// Hotel Subscription Plans
exports.SUBSCRIPTION_PLAN = {
    FREE: 'FREE',
    BASIC: 'BASIC',
    PREMIUM: 'PREMIUM',
    ENTERPRISE: 'ENTERPRISE'
};
// Hotel Business Types
exports.HOTEL_BUSINESS_TYPE = {
    HOTEL: 'HOTEL',
    RESORT: 'RESORT',
    GUEST_HOUSE: 'GUEST_HOUSE',
    HOMESTAY: 'HOMESTAY',
    HOSTEL: 'HOSTEL',
    LODGE: 'LODGE'
};
