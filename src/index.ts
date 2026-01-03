import * as BookingService from './services/hotel.admin';
import * as UserService from './services/btp.user';
import * as CRMService from './services/crm';

// Export all interfaces
export * from './interfaces';

// Export Models (without re-exporting interfaces)
export { BookingUser } from './models/BookingUser';
export { Config } from './models/Config';
export { Expense } from './models/Expense';
export { Hotel } from './models/Hotel';
export { HotelBooking } from './models/HotelBooking';
export { HotelUser } from './models/HotelUser';
export { IncomeSource } from './models/IncomeSource';
export { Inquiry } from './models/Inquiry';
export { Lead } from './models/Lead';
export { PackageBooking } from './models/PackageBooking';
export { Room } from './models/Room';
export { RoomBooking } from './models/RoomBooking';
export { Transporter } from './models/Transporter';
export { Vehicle } from './models/Vehicle';
export { User } from './models/userModel';
export { Itinerary } from './models/Itinerary';

// Export Constants
export * from './constants/booking_status';
export * from './constants/expense';
export * from './constants/grants';
export * from './constants/hotel.booking.constant';
export * from './constants/hotel.user.constant';
export * from './constants/inquery-status';
export * from './constants/lead';
export * from './constants/permissions';
export * from './constants/response_text';
export * from './constants/roles';
export * from './constants/room.constant';
export * from './constants/scopes';
export * from './constants/user_scopes';
export * from './constants/vehicle_brands';

// Service Access Control
export const Services = {
  HOTEL_ADMIN: BookingService,
  BTP_USER: UserService,
  CRM: CRMService,
} as const;

export type ServiceName = keyof typeof Services;

// Type-safe service getter with overloads
export function getModelsForService(serviceName: 'HOTEL_ADMIN'): typeof BookingService;
export function getModelsForService(serviceName: 'BTP_USER'): typeof UserService;
export function getModelsForService(serviceName: 'CRM'): typeof CRMService;
export function getModelsForService(serviceName: ServiceName) {
  return Services[serviceName];
}
