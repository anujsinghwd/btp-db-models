// Hotel User Roles
export const HOTEL_USER_ROLE = {
  HOTEL_ADMIN: 'HOTEL_ADMIN',
  HOTEL_MANAGER: 'HOTEL_MANAGER',
  RECEPTIONIST: 'RECEPTIONIST',
  HOUSEKEEPING: 'HOUSEKEEPING',
  ACCOUNTANT: 'ACCOUNTANT',
  MAINTENANCE: 'MAINTENANCE'
} as const;
export type HotelUserRole = typeof HOTEL_USER_ROLE[keyof typeof HOTEL_USER_ROLE];

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
