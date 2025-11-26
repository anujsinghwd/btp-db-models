export const EXPENSE_TYPES = {
  FOOD_BEVERAGE: "Food & Beverage",
  COMMUNICATION: "Communication",
  OFFICE_EXPENSES: "Office Expenses",
  TRAVEL_ACCOMMODATION: "Travel & Accommodation",
  UTILITIES: "Utilities",
  MAINTENANCE: "Maintenance",
  ENTERTAINMENT: "Entertainment",
  MISCELLANEOUS: "Miscellaneous",
} as const;

export const EXPENSE_CATEGORY = [
  { value: "FOOD", label: "Food" },
  { value: "TRANSPORT", label: "Transport" },
  { value: "ACCOMMODATION", label: "Accommodation" },
  { value: "ENTERTAINMENT", label: "Entertainment" },
  { value: "MARKETING", label: "Marketing" },
  { value: "SUPPLIES", label: "Supplies" },
  { value: "UTILITIES", label: "Utilities" },
  { value: "SALARY", label: "Salary" },
  { value: "MAINTENANCE", label: "Maintenance" },
  { value: "TRAVEL", label: "Travel" },
  { value: "INSURANCE", label: "Insurance" },
  { value: "RENT", label: "Rent" },
  { value: "TAXES", label: "Taxes" },
  { value: "FEES", label: "Fees" },
  { value: "OTHER_EXPENSES", label: "Other Expenses" },
  { value: "EQUIPMENT", label: "Equipment" },
  { value: "SERVICES", label: "Services" },
  { value: "SUPPORT", label: "Support" },
  { value: "TRAINING", label: "Training" },
  { value: "REPAIRS", label: "Repairs" },
  { value: "MISCELLANEOUS", label: "Miscellaneous" },
] as const;

export const INCOME_CATEGORY = [
  { value: "COMMISSION", label: "Commission" },
  { value: "OTHER", label: "Other" },
  { value: "HOTEL_BOOKING", label: "Hotel Booking" },
  { value: "CAB_BOOKING", label: "Cab Booking" },
] as const;

export const PAYMENT_METHODS = [
  { value: "CASH", label: "Cash" },
  { value: "BANK_TRANSFER", label: "Bank Transfer" },
  { value: "UPI", label: "Unified Payments Interface" },
  { value: "NEFT", label: "National Electronic Funds Transfer" },
  { value: "RTGS", label: "Real-Time Gross Settlement" },
  { value: "IMPS", label: "Immediate Payment Service" },
  { value: "CREDIT_CARD", label: "Credit Card" },
  { value: "DEBIT_CARD", label: "Debit Card" },
  { value: "OTHER", label: "Other" },
] as const;
