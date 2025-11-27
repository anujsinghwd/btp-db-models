export interface ILeadRecordBase {
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
        user?: string;
        previousStage?: string;
        newStage?: string;
        createdAt?: Date;
    }>;
    status: string;
    statusMovementHistory: Array<{
        user?: string;
        previousStatus?: string;
        newStatus?: string;
        createdAt?: Date;
    }>;
    source: string;
    assignedPerson?: string;
    assignmentHistory: Array<{
        assignedTo?: string;
        assignedBy?: string;
        createdAt?: Date;
    }>;
    createdBy: string;
    updatedBy?: string;
    followUps: Array<{
        user: string;
        message?: string;
        createdAt?: Date;
    }>;
    reminderAt?: Date;
    reminderHistory: Array<{
        user?: string;
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
export interface ILeadBase {
    phoneNumber: string;
    records: ILeadRecordBase[];
    createdAt: Date;
    updatedAt: Date;
}
