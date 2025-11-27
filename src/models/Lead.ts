import mongoose, { Schema, Document } from "mongoose";
import { LEAD_STATUS, LEAD_SOURCE, LEAD_STAGE } from "../constants/lead";

export interface ILeadRecord {
  fullName?: string;
  email?: string;
  dateOfTravel?: Date;
  userDateOfTravel?: string;
  noOfPerson?: number;
  userNoOfPerson?: string;
  tripDate?: Date;
  campaignName?: string;
  recordId?: string;
  stageName: string;
  stageHistory: Array<{
    user?: mongoose.Types.ObjectId;
    previousStage?: string;
    newStage?: string;
    createdAt?: Date;
  }>;
  status: string;
  statusMovementHistory: Array<{
    user?: mongoose.Types.ObjectId;
    previousStatus?: string;
    newStatus?: string;
    createdAt?: Date;
  }>;
  source: string;
  assignedPerson?: mongoose.Types.ObjectId;
  assignmentHistory: Array<{
    assignedTo?: mongoose.Types.ObjectId;
    assignedBy?: mongoose.Types.ObjectId;
    createdAt?: Date;
  }>;
  createdBy: mongoose.Types.ObjectId;
  updatedBy?: mongoose.Types.ObjectId;
  followUps: Array<{
    user: mongoose.Types.ObjectId;
    message?: string;
    createdAt?: Date;
  }>;
  reminderAt?: Date;
  reminderHistory: Array<{
    user?: mongoose.Types.ObjectId;
    reminderAt: Date;
    message?: string;
    createdAt?: Date;
  }>;
  customColumns?: Record<string, any>;
  tags?: string[];
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ILead extends Document {
  phoneNumber: string;
  records: ILeadRecord[];
  createdAt: Date;
  updatedAt: Date;
}

const followUpSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "booking_admin_users",
      required: true,
    },
    message: String,
  },
  { timestamps: true }
);

const assignmentHistorySchema = new Schema(
  {
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "booking_admin_users",
    },
    assignedBy: {
      type: Schema.Types.ObjectId,
      ref: "booking_admin_users",
    },
  },
  { timestamps: true }
);

const reminderHistorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "booking_admin_users",
    },
    reminderAt: { type: Date, required: true },
    message: String,
  },
  { timestamps: true }
);

const stageHistorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "booking_admin_users",
    },
    previousStage: String,
    newStage: String,
  },
  { timestamps: true }
);

const statusMovementHistorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "booking_admin_users",
    },
    previousStatus: String,
    newStatus: String,
  },
  { timestamps: true }
);

const recordSchema = new Schema(
  {
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
      enum: Object.keys(LEAD_STAGE).map((key) => (LEAD_STAGE as any)[key]),
      default: LEAD_STAGE.NEW,
    },
    stageHistory: [stageHistorySchema],
    status: {
      type: String,
      enum: Object.keys(LEAD_STATUS).map((key) => (LEAD_STATUS as any)[key]),
      default: LEAD_STATUS.PENDING,
    },
    statusMovementHistory: [statusMovementHistorySchema],
    source: {
      type: String,
      enum: Object.keys(LEAD_SOURCE).map((key) => (LEAD_SOURCE as any)[key]),
      default: LEAD_SOURCE.OTHER,
    },
    assignedPerson: {
      type: Schema.Types.ObjectId,
      ref: "booking_admin_users",
    },
    assignmentHistory: [assignmentHistorySchema],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "booking_admin_users",
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
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
  },
  { timestamps: true }
);

const leadSchema = new Schema(
  {
    phoneNumber: { type: String, required: true },
    records: [recordSchema],
  },
  { timestamps: true }
);

leadSchema.index({ "records.createdAt": 1, "records.status": 1 });
leadSchema.index({ "records.assignedPerson": 1, "records.status": 1 });
leadSchema.index({ phoneNumber: "text" });
leadSchema.index({ "records.fullName": "text" });
leadSchema.index({ "records.email": "text" });
leadSchema.index({ "records.recordId": "text" });

export const Lead = mongoose.model<ILead>("Lead", leadSchema);
