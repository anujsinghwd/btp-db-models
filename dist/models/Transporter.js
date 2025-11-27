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
exports.Transporter = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const TransporterSchema = new mongoose_1.Schema({
    transporter_id: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
    },
    name: {
        type: String,
        required: true,
    },
    company_name: {
        type: String,
        required: true,
        unique: true,
    },
    company_id: {
        type: String,
        unique: true,
        required: true,
    },
    dob: {
        type: Date,
    },
    mobile: {
        type: Array,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'TRANSPORTER_ADMIN_USER'
    },
    routes: {
        type: Array,
        default: [],
    },
    scopes: {
        type: Array,
        default: [],
    },
    permissions: {
        type: Array,
        default: []
    },
    image: {
        type: String,
    },
    accessToken: {
        type: String,
    },
    isAgent: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isOwner: {
        type: Boolean,
        default: false,
    },
    created_by: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    },
});
exports.Transporter = mongoose_1.default.model("transporters", TransporterSchema);
