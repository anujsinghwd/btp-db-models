export const LEAD_STATUS = {
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
} as const;
export type LeadStatus = typeof LEAD_STATUS[keyof typeof LEAD_STATUS];

export const LEAD_SOURCE = {
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
} as const;
export type LeadSource = typeof LEAD_SOURCE[keyof typeof LEAD_SOURCE];

export const LEAD_STAGE = {
  NEW: "New",
  QUALIFIED: "Qualified",
  CONVERTED: "Converted",
  NOT_CONTACTED: "Not contacted"
} as const;
export type LeadStage = typeof LEAD_STAGE[keyof typeof LEAD_STAGE];
