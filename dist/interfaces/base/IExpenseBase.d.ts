export interface IExpenseBase {
    name: string;
    category: string;
    description?: string;
    amount: number;
    paymentMethod: string;
    paymentReference?: string;
    code?: string;
    isActive: boolean;
    created_by?: string;
    updated_by?: string;
    createdAt: Date;
    updatedAt?: Date;
}
