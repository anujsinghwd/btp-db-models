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
exports.Lead = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const lead_1 = require("../constants/lead");
const followUpSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
        required: true,
    },
    message: String,
}, { timestamps: true });
const assignmentHistorySchema = new mongoose_1.Schema({
    assignedTo: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    assignedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
}, { timestamps: true });
const reminderHistorySchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    reminderAt: { type: Date, required: true },
    message: String,
}, { timestamps: true });
const stageHistorySchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    previousStage: String,
    newStage: String,
}, { timestamps: true });
const statusMovementHistorySchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    previousStatus: String,
    newStatus: String,
}, { timestamps: true });
const recordSchema = new mongoose_1.Schema({
    fullName: String,
    email: String,
    dateOfTravel: Date,
    userDateOfTravel: String,
    noOfPerson: Number,
    userNoOfPerson: String,
    tripDate: Date,
    campaignName: String,
    recordId: String,
    stageName: {
        type: String,
        enum: Object.keys(lead_1.LEAD_STAGE).map((key) => lead_1.LEAD_STAGE[key]),
        default: lead_1.LEAD_STAGE.NEW,
    },
    stageHistory: [stageHistorySchema],
    status: {
        type: String,
        enum: Object.keys(lead_1.LEAD_STATUS).map((key) => lead_1.LEAD_STATUS[key]),
        default: lead_1.LEAD_STATUS.PENDING,
    },
    statusMovementHistory: [statusMovementHistorySchema],
    source: {
        type: String,
        enum: Object.keys(lead_1.LEAD_SOURCE).map((key) => lead_1.LEAD_SOURCE[key]),
        default: lead_1.LEAD_SOURCE.OTHER,
    },
    assignedPerson: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    assignmentHistory: [assignmentHistorySchema],
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
        required: true,
    },
    updatedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "booking_admin_users",
    },
    followUps: [followUpSchema],
    reminderAt: Date,
    reminderHistory: [reminderHistorySchema],
    customColumns: { type: Object },
    tags: [{ type: String }],
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
const leadSchema = new mongoose_1.Schema({
    phoneNumber: { type: String, required: true },
    records: [recordSchema],
}, { timestamps: true });
leadSchema.index({ "records.createdAt": 1, "records.status": 1 });
leadSchema.index({ "records.assignedPerson": 1, "records.status": 1 });
leadSchema.index({ phoneNumber: "text" });
leadSchema.index({ "records.fullName": "text" });
leadSchema.index({ "records.email": "text" });
leadSchema.index({ "records.recordId": "text" });
exports.Lead = mongoose_1.default.model("Lead", leadSchema);
