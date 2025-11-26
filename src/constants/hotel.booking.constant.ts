// Booking Status
export const BOOKING_STATUS = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CHECKED_IN: 'CHECKED_IN',
  CHECKED_OUT: 'CHECKED_OUT',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
} as const;
export type BookingStatus = typeof BOOKING_STATUS[keyof typeof BOOKING_STATUS];

// Payment Status
export const PAYMENT_STATUS = {
  UNPAID: 'UNPAID',
  PARTIALLY_PAID: 'PARTIALLY_PAID',
  PAID: 'PAID',
  REFUNDED: 'REFUNDED',
  REFUND_PENDING: 'REFUND_PENDING'
} as const;
export type PaymentStatus = typeof PAYMENT_STATUS[keyof typeof PAYMENT_STATUS];

// Payment Methods
export const PAYMENT_METHOD = {
  CASH: 'CASH',
  CARD: 'CARD',
  UPI: 'UPI',
  NET_BANKING: 'NET_BANKING',
  WALLET: 'WALLET',
  CHEQUE: 'CHEQUE',
  BANK_TRANSFER: 'BANK_TRANSFER'
} as const;
export type PaymentMethod = typeof PAYMENT_METHOD[keyof typeof PAYMENT_METHOD];

// Service Types (for additional charges)
export const SERVICE_TYPE = {
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
} as const;
export type ServiceType = typeof SERVICE_TYPE[keyof typeof SERVICE_TYPE];

// Service Status
export const SERVICE_STATUS = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
} as const;
export type ServiceStatus = typeof SERVICE_STATUS[keyof typeof SERVICE_STATUS];

// Booking Source
export const BOOKING_SOURCE = {
  DIRECT: 'DIRECT',
  PHONE: 'PHONE',
  WALK_IN: 'WALK_IN',
  ONLINE: 'ONLINE',
  OTA: 'OTA',
  AGENT: 'AGENT',
  PACKAGE_BOOKING: 'PACKAGE_BOOKING'
} as const;
export type BookingSource = typeof BOOKING_SOURCE[keyof typeof BOOKING_SOURCE];

// Meal Plan Types
export const MEAL_PLAN = {
  EP: 'EP',   // European Plan (Room Only)
  CP: 'CP',   // Continental Plan (Room + Breakfast)
  MAP: 'MAP', // Modified American Plan (Room + Breakfast + Dinner)
  AP: 'AP'    // American Plan (All Meals)
} as const;
export type MealPlan = typeof MEAL_PLAN[keyof typeof MEAL_PLAN];

// ID Proof Types
export const ID_PROOF_TYPE = {
  AADHAR: 'AADHAR',
  PASSPORT: 'PASSPORT',
  DRIVING_LICENSE: 'DRIVING_LICENSE',
  VOTER_ID: 'VOTER_ID',
  PAN_CARD: 'PAN_CARD'
} as const;
export type IdProofType = typeof ID_PROOF_TYPE[keyof typeof ID_PROOF_TYPE];
