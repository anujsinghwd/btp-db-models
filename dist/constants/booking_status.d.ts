export declare const ROOM_BOOKING_STATUS: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly COMPLETED: "COMPLETED";
    readonly IN_PROGRESS: "IN_PROGRESS";
};
export type RoomBookingStatus = typeof ROOM_BOOKING_STATUS[keyof typeof ROOM_BOOKING_STATUS];
