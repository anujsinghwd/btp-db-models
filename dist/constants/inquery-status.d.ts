export declare const INQUIRY_STATUS: {
    readonly FRESH: "FRESH";
    readonly PROCESSING: "PROCESSING";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELED: "CANCELED";
    readonly ON_HOLD: "ON_HOLD";
    readonly AWAITING_INFORMATION: "AWAITING_INFORMATION";
    readonly ERROR: "ERROR";
};
export type InquiryStatus = typeof INQUIRY_STATUS[keyof typeof INQUIRY_STATUS];
