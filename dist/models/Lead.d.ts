import mongoose, { Document } from "mongoose";
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
export declare const Lead: mongoose.Model<ILead, {}, {}, {}, mongoose.Document<unknown, {}, ILead, {}, {}> & ILead & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
