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
exports.IncomeSource = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const expense_1 = require("../constants/expense");
const incomeSourceSchema = new mongoose_1.Schema({
    created_by: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'btp_admin_users',
    },
    update_by: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'btp_admin_users',
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: expense_1.INCOME_CATEGORY.map((method) => method.value),
        default: 'OTHER'
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    source: {
        type: String,
        trim: true
    },
    currency: {
        type: String,
        default: 'INR',
        uppercase: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        trim: true
    },
    paymentMethod: {
        type: String,
        enum: expense_1.PAYMENT_METHODS.map((method) => method.value),
        default: 'CASH'
    },
    accountDetails: {
        bankName: String,
        accountNumber: String,
        routingNumber: String,
        walletId: String
    },
    taxApplicable: {
        type: Boolean,
        default: true
    },
    taxRate: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
}, {
    timestamps: true,
});
exports.IncomeSource = mongoose_1.default.model('IncomeSource', incomeSourceSchema);
