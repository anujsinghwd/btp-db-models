"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTE_ACTIONS = exports.ACTIONS = exports.RESOURCES = void 0;
exports.RESOURCES = {
    USERS: "users",
    BOOKING_USERS: "booking_users",
    HOTELS: "hotels",
    PACKAGES: "packages",
    LEADS: "leads",
    DASHBOARD: "dashboard",
    STATS: "stats",
    INQUIRY: "inquiry",
    EXPENSE: 'expense',
    INCOME_SOURCE: 'income_source',
};
exports.ACTIONS = {
    CREATE_ANY: "create:any",
    READ_ANY: "read:any",
    UPDATE_OWN: "update:own",
    UPDATE_ANY: "update:any",
    DELETE_ANY: "delete:any",
    CREATE_OWN: "create:own",
    DELETE_OWN: "delete:own",
    READ_OWN: "read:own",
};
exports.ROUTE_ACTIONS = {
    CREATE_ANY: "createAny",
    READ_ANY: "readAny",
    UPDATE_OWN: "updateOwn",
    UPDATE_ANY: "updateAny",
    DELETE_ANY: "deleteAny",
    CREATE_OWN: "createOwn",
    DELETE_OWN: "deleteOwn",
    READ_OWN: "readOwn",
};
