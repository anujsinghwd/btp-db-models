export declare const GRANTS: {
    superadmin: {
        users: {
            "create:any": string[];
            "read:any": string[];
            "update:any": string[];
            "delete:any": string[];
        };
    };
    admin: {
        booking_users: {
            "delete:any": string[];
        };
        packages: {
            "create:any": string[];
            "read:any": string[];
            "update:any": string[];
            "delete:any": string[];
        };
        hotels: {
            "create:any": string[];
            "update:any": string[];
            "delete:any": string[];
        };
        inquiry: {
            "create:any": string[];
            "read:any": string[];
            "update:any": string[];
            "delete:any": string[];
        };
        leads: {
            "read:any": string[];
            "update:any": string[];
            "create:any": string[];
            "delete:any": string[];
        };
        expense: {
            "read:any": string[];
            "update:any": string[];
            "create:any": string[];
            "delete:any": string[];
        };
        income_source: {
            "read:any": string[];
            "update:any": string[];
            "create:any": string[];
            "delete:any": string[];
        };
    };
    supervisor: {
        users: {
            "read:any": string[];
        };
        stats: {
            "read:any": string[];
        };
        leads: {
            "read:any": string[];
            "update:own": string[];
            "delete:own": string[];
        };
        hotels: {
            "create:own": string[];
            "read:any": string[];
            "update:own": string[];
        };
        packages: {
            "create:own": string[];
            "read:any": string[];
            "update:own": string[];
            "delete:own": string[];
        };
    };
    basic: {
        booking_users: {
            "create:any": string[];
            "read:any": string[];
            "update:any": string[];
        };
        leads: {
            "create:own": string[];
            "read:own": string[];
        };
    };
};
