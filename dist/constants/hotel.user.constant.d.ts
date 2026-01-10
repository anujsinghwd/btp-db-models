export declare const HOTEL_USER_ROLE: {
    readonly ADMIN: "ADMIN";
    readonly MANAGER: "MANAGER";
    readonly RECEPTIONIST: "RECEPTIONIST";
    readonly STAFF: "STAFF";
    readonly HOUSEKEEPING: "HOUSEKEEPING";
    readonly ACCOUNTANT: "ACCOUNTANT";
    readonly MAINTENANCE: "MAINTENANCE";
};
export type HotelUserRole = typeof HOTEL_USER_ROLE[keyof typeof HOTEL_USER_ROLE];
export declare enum PERMISSION_KEYS {
    CAN_CREATE_BOOKING = "can_create_booking",
    CAN_EDIT_BOOKING = "can_edit_booking",
    CAN_CANCEL_BOOKING = "can_cancel_booking",
    CAN_MANAGE_ROOMS = "can_manage_rooms",
    CAN_VIEW_REPORTS = "can_view_reports",
    CAN_MANAGE_USERS = "can_manage_users",
    CAN_MANAGE_PRICING = "can_manage_pricing",
    CAN_PROCESS_PAYMENTS = "can_process_payments"
}
export interface IPermissions {
    can_create_booking: boolean;
    can_edit_booking: boolean;
    can_cancel_booking: boolean;
    can_manage_rooms: boolean;
    can_view_reports: boolean;
    can_manage_users: boolean;
    can_manage_pricing: boolean;
    can_process_payments: boolean;
}
export declare const DEFAULT_PERMISSIONS: Record<string, IPermissions>;
export declare const SUBSCRIPTION_PLAN: {
    readonly FREE: "FREE";
    readonly BASIC: "BASIC";
    readonly PREMIUM: "PREMIUM";
    readonly ENTERPRISE: "ENTERPRISE";
};
export type SubscriptionPlan = typeof SUBSCRIPTION_PLAN[keyof typeof SUBSCRIPTION_PLAN];
export declare const HOTEL_BUSINESS_TYPE: {
    readonly HOTEL: "HOTEL";
    readonly RESORT: "RESORT";
    readonly GUEST_HOUSE: "GUEST_HOUSE";
    readonly HOMESTAY: "HOMESTAY";
    readonly HOSTEL: "HOSTEL";
    readonly LODGE: "LODGE";
};
export type HotelBusinessType = typeof HOTEL_BUSINESS_TYPE[keyof typeof HOTEL_BUSINESS_TYPE];
