// Room Status Constants
export const ROOM_STATUS = {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED',
  MAINTENANCE: 'MAINTENANCE',
  CLEANING: 'CLEANING',
  BLOCKED: 'BLOCKED'
} as const;
export type RoomStatus = typeof ROOM_STATUS[keyof typeof ROOM_STATUS];

// Room Amenities
export const ROOM_AMENITY = {
  WIFI: 'WIFI',
  TV: 'TV',
  AC: 'AC',
  HEATER: 'HEATER',
  MINI_BAR: 'MINI_BAR',
  SAFE: 'SAFE',
  TELEPHONE: 'TELEPHONE',
  HAIR_DRYER: 'HAIR_DRYER',
  IRON: 'IRON',
  COFFEE_MAKER: 'COFFEE_MAKER',
  BALCONY: 'BALCONY',
  BATHTUB: 'BATHTUB',
  SHOWER: 'SHOWER',
  TOILETRIES: 'TOILETRIES',
  TOWELS: 'TOWELS',
  SLIPPERS: 'SLIPPERS',
  DESK: 'DESK',
  WARDROBE: 'WARDROBE',
  SOFA: 'SOFA'
} as const;
export type RoomAmenity = typeof ROOM_AMENITY[keyof typeof ROOM_AMENITY];

// Bed Types
export const BED_TYPE = {
  SINGLE: 'SINGLE',
  DOUBLE: 'DOUBLE',
  QUEEN: 'QUEEN',
  KING: 'KING',
  TWIN: 'TWIN',
  BUNK: 'BUNK'
} as const;
export type BedType = typeof BED_TYPE[keyof typeof BED_TYPE];

// Room View Types
export const ROOM_VIEW = {
  CITY: 'CITY',
  GARDEN: 'GARDEN',
  POOL: 'POOL',
  MOUNTAIN: 'MOUNTAIN',
  SEA: 'SEA',
  LAKE: 'LAKE',
  NONE: 'NONE'
} as const;
export type RoomView = typeof ROOM_VIEW[keyof typeof ROOM_VIEW];

// Room Types
export const ROOM_TYPE = {
  STANDARD: 'STANDARD',
  DELUXE: 'DELUXE',
  SUITE: 'SUITE',
  FAMILY: 'FAMILY',
  SINGLE: 'SINGLE',
  DOUBLE: 'DOUBLE',
  DORMITORY: 'DORMITORY'
} as const;
export type RoomType = typeof ROOM_TYPE[keyof typeof ROOM_TYPE];
