export interface IConfigBase {
    roleOptions: Array<{
        value: string;
        label: string;
    }>;
    capabilityOptions: {
        packages: Array<{
            value: string;
            label: string;
        }>;
        status: Array<{
            value: string;
            label: string;
        }>;
        dashboard: Array<{
            value: string;
            label: string;
        }>;
        booking_users: Array<{
            value: string;
            label: string;
        }>;
        leads: Array<{
            value: string;
            label: string;
        }>;
        admin_users: Array<{
            value: string;
            label: string;
        }>;
        hotels: Array<{
            value: string;
            label: string;
        }>;
    };
    routeOptions: Array<{
        value: string;
        label: string;
        path: string;
        scope: string;
    }>;
    expenseCategories: Array<{
        value: string;
        label: string;
    }>;
    paymentMethods: Array<{
        value: string;
        label: string;
    }>;
    incomeCategories: Array<{
        value: string;
        label: string;
    }>;
}
