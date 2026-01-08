// Hotel User Roles
export const HOTEL_USER_ROLE = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  RECEPTIONIST: 'RECEPTIONIST',
  STAFF: 'STAFF',
  HOUSEKEEPING: 'HOUSEKEEPING',
  ACCOUNTANT: 'ACCOUNTANT',
  MAINTENANCE: 'MAINTENANCE'
} as const;
export type HotelUserRole = typeof HOTEL_USER_ROLE[keyof typeof HOTEL_USER_ROLE];

// Permission Keys
export enum PERMISSION_KEYS {
  CAN_CREATE_BOOKING = "can_create_booking",
  CAN_EDIT_BOOKING = "can_edit_booking",
  CAN_CANCEL_BOOKING = "can_cancel_booking",
  CAN_MANAGE_ROOMS = "can_manage_rooms",
  CAN_VIEW_REPORTS = "can_view_reports",
  CAN_MANAGE_USERS = "can_manage_users",
  CAN_MANAGE_PRICING = "can_manage_pricing",
  CAN_PROCESS_PAYMENTS = "can_process_payments"
}

// Permissions Interface
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

// Default permissions for each role
export const DEFAULT_PERMISSIONS: Record<string, IPermissions> = {
  [HOTEL_USER_ROLE.ADMIN]: {
    can_create_booking: true,
    can_edit_booking: true,
    can_cancel_booking: true,
    can_manage_rooms: true,
    can_view_reports: true,
    can_manage_users: true,
    can_manage_pricing: true,
    can_process_payments: true
  },
  [HOTEL_USER_ROLE.MANAGER]: {
    can_create_booking: true,
    can_edit_booking: true,
    can_cancel_booking: true,
    can_manage_rooms: true,
    can_view_reports: true,
    can_manage_users: false,
    can_manage_pricing: true,
    can_process_payments: true
  },
  [HOTEL_USER_ROLE.RECEPTIONIST]: {
    can_create_booking: true,
    can_edit_booking: true,
    can_cancel_booking: false,
    can_manage_rooms: false,
    can_view_reports: false,
    can_manage_users: false,
    can_manage_pricing: false,
    can_process_payments: true
  },
  [HOTEL_USER_ROLE.STAFF]: {
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
export const SUBSCRIPTION_PLAN = {
  FREE: 'FREE',
  BASIC: 'BASIC',
  PREMIUM: 'PREMIUM',
  ENTERPRISE: 'ENTERPRISE'
} as const;
export type SubscriptionPlan = typeof SUBSCRIPTION_PLAN[keyof typeof SUBSCRIPTION_PLAN];

// Hotel Business Types
export const HOTEL_BUSINESS_TYPE = {
  HOTEL: 'HOTEL',
  RESORT: 'RESORT',
  GUEST_HOUSE: 'GUEST_HOUSE',
  HOMESTAY: 'HOMESTAY',
  HOSTEL: 'HOSTEL',
  LODGE: 'LODGE'
} as const;
export type HotelBusinessType = typeof HOTEL_BUSINESS_TYPE[keyof typeof HOTEL_BUSINESS_TYPE];
