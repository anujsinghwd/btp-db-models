"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expense = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const expense_1 = require("../constants/expense");
const expenseTypeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Expense type name is required"],
        trim: true,
        maxlength: [50, "Expense type name cannot exceed 50 characters"],
    },
    category: {
        type: String,
        enum: expense_1.EXPENSE_CATEGORY.map((category) => category.value),
        default: 'MISCELLANEOUS',
    },
    description: {
        type: String,
        trim: true,
        maxlength: [250, "Description cannot exceed 250 characters"],
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        min: [0, "Amount cannot be negative"],
    },
    paymentMethod: {
        type: String,
        enum: expense_1.PAYMENT_METHODS.map((method) => method.value),
        default: "CASH",
    },
    paymentReference: {
        type: String,
        trim: true,
        maxlength: [100, "Payment reference cannot exceed 100 characters"],
    },
    code: {
        type: String,
        uppercase: true,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    created_by: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    updated_by: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
});
exports.Expense = mongoose_1.default.model("expense", expenseTypeSchema);
