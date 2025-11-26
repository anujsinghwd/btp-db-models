import * as BookingService from './services/hotel.admin';
import * as UserService from './services/btp.user';
import * as CRMService from './services/crm';

// Export everything as a flat structure (optional, for backward compatibility or ease of use)
export * from './models/BookingUser';
export * from './models/Config';
export * from './models/Expense';
export * from './models/Hotel';
export * from './models/HotelBooking';
export * from './models/HotelUser';
export * from './models/IncomeSource';
export * from './models/Inquiry';
export * from './models/Lead';
export * from './models/PackageBooking';
export * from './models/Room';
export * from './models/RoomBooking';
export * from './models/Transporter';
export * from './models/Vehicle';
export * from './models/userModel';

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
};

export type ServiceName = keyof typeof Services;

export const getModelsForService = (serviceName: ServiceName) => {
  return Services[serviceName];
};
