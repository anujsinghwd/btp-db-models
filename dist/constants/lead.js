"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEAD_STAGE = exports.LEAD_SOURCE = exports.LEAD_STATUS = void 0;
exports.LEAD_STATUS = {
    PENDING: "PENDING",
    ACTIVE: "ACTIVE",
    CONVERTED: "CONVERTED",
    CLOSED: "CLOSED",
    FRESH: "FRESH",
    LOST: "LOST",
    ARCHIVED: "ARCHIVED",
    DELETED: "DELETED",
    INACTIVE: "INACTIVE",
    FOLLOWUP: "FOLLOWUP",
    INQUIRY: "INQUIRY",
    BOOKING: "BOOKING",
    CANCELLED: "CANCELLED",
    COMPLETED: "COMPLETED",
    EXPIRED: "EXPIRED",
    REJECTED: "REJECTED",
    MOVED: "MOVED",
};
exports.LEAD_SOURCE = {
    YOUTUBE: "youtube",
    CALL: "call",
    INSTAGRAM: "instagram",
    OTHER: "other",
    FACEBOOK: "facebook",
    WHATSAPP: "whatsapp",
    EMAIL: "email",
    WEBSITE: "website",
    SMS: "sms",
    REFERRAL: "referral",
    OFFLINE: "offline",
    ADMIN: "admin",
};
exports.LEAD_STAGE = {
    NEW: "New",
    QUALIFIED: "Qualified",
    CONVERTED: "Converted",
    NOT_CONTACTED: "Not contacted"
};
