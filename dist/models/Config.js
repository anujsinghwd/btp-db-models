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
exports.Config = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const scopes_1 = require("../constants/scopes");
const ConfigSchema = new mongoose_1.Schema({
    roleOptions: [
        {
            value: { type: String, required: true },
            label: { type: String, required: true },
        },
    ],
    capabilityOptions: {
        packages: [
            {
                value: { type: String, required: true },
                label: { type: String, required: true },
            },
        ],
        status: [
            {
                value: { type: String, required: true },
                label: { type: String, required: true },
            },
        ],
        dashboard: [
            {
                value: { type: String, required: true },
                label: { type: String, required: true },
            },
        ],
        booking_users: [
            {
                value: { type: String, required: true },
                label: { type: String, required: true },
            },
        ],
        leads: [
            {
                value: { type: String, required: true },
                label: { type: String, required: true },
            },
        ],
        admin_users: [
            {
                value: { type: String, required: true },
                label: { type: String, required: true },
            },
        ],
        hotels: [
            {
                value: { type: String, required: true },
                label: { type: String, required: true },
            },
        ],
    },
    routeOptions: [
        {
            value: { type: String, required: true },
            label: { type: String, required: true },
            path: { type: String, required: true },
            scope: { type: String, default: scopes_1.SCOPES.BTP_BOOKING_ADMIN },
        },
    ],
    expenseCategories: [
        {
            value: { type: String, required: true },
            label: { type: String, required: true },
        },
    ],
    paymentMethods: [
        {
            value: { type: String, required: true },
            label: { type: String, required: true },
        },
    ],
    incomeCategories: [
        {
            value: { type: String, required: true },
            label: { type: String, required: true },
        },
    ]
}, { timestamps: true });
exports.Config = mongoose_1.default.model("Config", ConfigSchema);
