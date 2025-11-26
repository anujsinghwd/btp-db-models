export const USER_SCOPES = {
    BTP_BOOKING_USER: {
        site_access: [1]
    },
    BTP_BOOKING_ADMIN_USER: {
        site_access: [2]
    },
    BTP_ADMIN_USER: {
        site_access: [3]
    },
    SCOPES: {
        BTP_BOOKING_USER: "BTP_BOOKING_USER",
        BTP_BOOKING_ADMIN_USER: "BTP_BOOKING_ADMIN_USER",
        BTP_HOTEL_ADMIN_USER: "BTP_HOTEL_ADMIN_USER",
    },
} as const;
