export const ROOM_BOOKING_STATUS = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    COMPLETED: 'COMPLETED',
    IN_PROGRESS: 'IN_PROGRESS'
} as const;

export type RoomBookingStatus = typeof ROOM_BOOKING_STATUS[keyof typeof ROOM_BOOKING_STATUS];
