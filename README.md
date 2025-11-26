# BTP DB Models

Private NPM package for Banjarey Travel Partners (BTP) Mongoose models and constants.

## Installation

Since this is a private Git package, install it using the Git URL:

```bash
npm install git+ssh://git@github.com:username/btp-db-model.git
# OR
npm install git+https://github.com/username/btp-db-model.git
```

## Usage

### Basic Usage (Import everything)

```typescript
import { Hotel, User, ROLES } from 'btp-db-model';

const myHotel = new Hotel({ ... });
```

### Service-Based Access

To keep your application lightweight and focused, you can import models specific to a service context.

```typescript
import { getModelsForService } from 'btp-db-model';

// For Booking Service
const { Hotel, HotelBooking, Room } = getModelsForService('BOOKING');

// For User Service
const { User, HotelUser } = getModelsForService('USER');

// For CRM Service
const { Lead, Inquiry } = getModelsForService('CRM');

// For Finance Service
const { Expense, IncomeSource } = getModelsForService('FINANCE');
```

### Available Services

- `HOTEL_ADMIN`: Hotel, HotelBooking, Room, RoomBooking, PackageBooking
- `BTP_USER`: User, HotelUser, BookingUser, Transporter
- `CRM`: Lead, Inquiry, Hotel, HotelUser, BookingUser, Transporter, HotelBooking, RoomBooking, PackageBooking

## Development

1.  **Build**: `npm run build`
2.  **Watch**: `tsc -w`

## License

Private
