# BTP DB Models

Private NPM package for Banjarey Travel Partners (BTP) Mongoose models and constants.

## Installation

Since this is a private Git package, install it using the Git URL:

### Using SSH (Recommended)
```bash
npm install git+ssh://git@github.com:your-username/btp-db-model.git
```

### Using HTTPS
```bash
npm install git+https://github.com/your-username/btp-db-model.git
```

### From a specific branch
```bash
npm install git+ssh://git@github.com:your-username/btp-db-model.git#branch-name
```

**Note**: The package will automatically build when installed thanks to the `prepare` script.

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

### Using Interfaces (Type-Only Imports)

For better performance and cleaner code, import only the TypeScript interfaces:

```typescript
import type { IHotel, IHotelBooking, IUser } from 'btp-db-model';

// Use in DTOs, API responses, validation schemas, etc.
const createHotelDTO: Partial<IHotel> = {
  name: 'My Hotel',
  address: '123 Main St'
};

// Mock data for testing
const mockHotel: IHotel = { ... };
```

**Benefits:**
- ✅ Lighter bundle size (types are stripped at compile time)
- ✅ No Mongoose dependency in frontend/shared code
- ✅ Perfect for DTOs, API contracts, and validation schemas

### Available Services

- `HOTEL_ADMIN`: Hotel, HotelBooking, Room, RoomBooking, PackageBooking
- `BTP_USER`: User, HotelUser, BookingUser, Transporter
- `CRM`: Lead, Inquiry, Hotel, HotelUser, BookingUser, Transporter, HotelBooking, RoomBooking, PackageBooking

## Development

1.  **Build**: `npm run build`
2.  **Watch**: `tsc -w`

## Troubleshooting

### Installation fails with "Cannot find module" errors

This happens when the package isn't built during installation. Make sure:
1. The `prepare` script is in `package.json`
2. TypeScript and other devDependencies are listed in `package.json`
3. The consuming project has access to the Git repository

### TypeScript errors when importing

Make sure your consuming project's `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

### Peer dependency warnings

Install mongoose in your consuming project:
```bash
npm install mongoose
```


## License

Private
