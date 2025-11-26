export const ROLES = {
    BASIC: 'basic',
    SUPERVISOR: 'supervisor',
    ADMIN: 'admin',
    SUPERADMIN: 'superadmin',
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];
