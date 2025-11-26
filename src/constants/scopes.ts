export const SCOPES = {
    BTP_BOOKING_ADMIN: 'BTP_BOOKING_ADMIN',
    BTP_HOTEL_ADMIN: 'BTP_HOTEL_ADMIN',
} as const;
export type Scope = typeof SCOPES[keyof typeof SCOPES];
