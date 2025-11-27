export declare const ROOM_STATUS: {
    readonly AVAILABLE: "AVAILABLE";
    readonly OCCUPIED: "OCCUPIED";
    readonly MAINTENANCE: "MAINTENANCE";
    readonly CLEANING: "CLEANING";
    readonly BLOCKED: "BLOCKED";
};
export type RoomStatus = typeof ROOM_STATUS[keyof typeof ROOM_STATUS];
export declare const ROOM_AMENITY: {
    readonly WIFI: "WIFI";
    readonly TV: "TV";
    readonly AC: "AC";
    readonly HEATER: "HEATER";
    readonly MINI_BAR: "MINI_BAR";
    readonly SAFE: "SAFE";
    readonly TELEPHONE: "TELEPHONE";
    readonly HAIR_DRYER: "HAIR_DRYER";
    readonly IRON: "IRON";
    readonly COFFEE_MAKER: "COFFEE_MAKER";
    readonly BALCONY: "BALCONY";
    readonly BATHTUB: "BATHTUB";
    readonly SHOWER: "SHOWER";
    readonly TOILETRIES: "TOILETRIES";
    readonly TOWELS: "TOWELS";
    readonly SLIPPERS: "SLIPPERS";
    readonly DESK: "DESK";
    readonly WARDROBE: "WARDROBE";
    readonly SOFA: "SOFA";
};
export type RoomAmenity = typeof ROOM_AMENITY[keyof typeof ROOM_AMENITY];
export declare const BED_TYPE: {
    readonly SINGLE: "SINGLE";
    readonly DOUBLE: "DOUBLE";
    readonly QUEEN: "QUEEN";
    readonly KING: "KING";
    readonly TWIN: "TWIN";
    readonly BUNK: "BUNK";
};
export type BedType = typeof BED_TYPE[keyof typeof BED_TYPE];
export declare const ROOM_VIEW: {
    readonly CITY: "CITY";
    readonly GARDEN: "GARDEN";
    readonly POOL: "POOL";
    readonly MOUNTAIN: "MOUNTAIN";
    readonly SEA: "SEA";
    readonly LAKE: "LAKE";
    readonly NONE: "NONE";
};
export type RoomView = typeof ROOM_VIEW[keyof typeof ROOM_VIEW];
export declare const ROOM_TYPE: {
    readonly STANDARD: "STANDARD";
    readonly DELUXE: "DELUXE";
    readonly SUITE: "SUITE";
    readonly FAMILY: "FAMILY";
    readonly SINGLE: "SINGLE";
    readonly DOUBLE: "DOUBLE";
    readonly DORMITORY: "DORMITORY";
};
export type RoomType = typeof ROOM_TYPE[keyof typeof ROOM_TYPE];
