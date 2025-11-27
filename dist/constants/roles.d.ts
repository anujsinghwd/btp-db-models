export declare const ROLES: {
    readonly BASIC: "basic";
    readonly SUPERVISOR: "supervisor";
    readonly ADMIN: "admin";
    readonly SUPERADMIN: "superadmin";
};
export type Role = typeof ROLES[keyof typeof ROLES];
