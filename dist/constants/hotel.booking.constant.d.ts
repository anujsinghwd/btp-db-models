export declare const BOOKING_STATUS: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly CHECKED_IN: "CHECKED_IN";
    readonly CHECKED_OUT: "CHECKED_OUT";
    readonly CANCELLED: "CANCELLED";
    readonly NO_SHOW: "NO_SHOW";
};
export type BookingStatus = typeof BOOKING_STATUS[keyof typeof BOOKING_STATUS];
export declare const PAYMENT_STATUS: {
    readonly UNPAID: "UNPAID";
    readonly PARTIALLY_PAID: "PARTIALLY_PAID";
    readonly PAID: "PAID";
    readonly REFUNDED: "REFUNDED";
    readonly REFUND_PENDING: "REFUND_PENDING";
};
export type PaymentStatus = typeof PAYMENT_STATUS[keyof typeof PAYMENT_STATUS];
export declare const PAYMENT_METHOD: {
    readonly CASH: "CASH";
    readonly CARD: "CARD";
    readonly UPI: "UPI";
    readonly NET_BANKING: "NET_BANKING";
    readonly WALLET: "WALLET";
    readonly CHEQUE: "CHEQUE";
    readonly BANK_TRANSFER: "BANK_TRANSFER";
};
export type PaymentMethod = typeof PAYMENT_METHOD[keyof typeof PAYMENT_METHOD];
export declare const SERVICE_TYPE: {
    readonly ROOM_SERVICE: "ROOM_SERVICE";
    readonly LAUNDRY: "LAUNDRY";
    readonly FOOD: "FOOD";
    readonly BEVERAGE: "BEVERAGE";
    readonly MINIBAR: "MINIBAR";
    readonly TELEPHONE: "TELEPHONE";
    readonly INTERNET: "INTERNET";
    readonly PARKING: "PARKING";
    readonly SPA: "SPA";
    readonly GYM: "GYM";
    readonly EXTRA_BED: "EXTRA_BED";
    readonly EARLY_CHECKIN: "EARLY_CHECKIN";
    readonly LATE_CHECKOUT: "LATE_CHECKOUT";
    readonly OTHER: "OTHER";
};
export type ServiceType = typeof SERVICE_TYPE[keyof typeof SERVICE_TYPE];
export declare const SERVICE_STATUS: {
    readonly PENDING: "PENDING";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type ServiceStatus = typeof SERVICE_STATUS[keyof typeof SERVICE_STATUS];
export declare const BOOKING_SOURCE: {
    readonly DIRECT: "DIRECT";
    readonly PHONE: "PHONE";
    readonly WALK_IN: "WALK_IN";
    readonly ONLINE: "ONLINE";
    readonly OTA: "OTA";
    readonly AGENT: "AGENT";
    readonly PACKAGE_BOOKING: "PACKAGE_BOOKING";
};
export type BookingSource = typeof BOOKING_SOURCE[keyof typeof BOOKING_SOURCE];
export declare const MEAL_PLAN: {
    readonly EP: "EP";
    readonly CP: "CP";
    readonly MAP: "MAP";
    readonly AP: "AP";
};
export type MealPlan = typeof MEAL_PLAN[keyof typeof MEAL_PLAN];
export declare const ID_PROOF_TYPE: {
    readonly AADHAR: "AADHAR";
    readonly PASSPORT: "PASSPORT";
    readonly DRIVING_LICENSE: "DRIVING_LICENSE";
    readonly VOTER_ID: "VOTER_ID";
    readonly PAN_CARD: "PAN_CARD";
};
export type IdProofType = typeof ID_PROOF_TYPE[keyof typeof ID_PROOF_TYPE];
