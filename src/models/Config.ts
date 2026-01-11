import mongoose, { Schema, Document } from "mongoose";
import { SCOPES } from "../constants/scopes";

interface HotelAppConfig {
  permissionKeys: any;
  appModules: any;
}

export interface IConfig extends Document {
  roleOptions: Array<{ value: string; label: string }>;
  capabilityOptions: {
    packages: Array<{ value: string; label: string }>;
    status: Array<{ value: string; label: string }>;
    dashboard: Array<{ value: string; label: string }>;
    booking_users: Array<{ value: string; label: string }>;
    leads: Array<{ value: string; label: string }>;
    admin_users: Array<{ value: string; label: string }>;
    hotels: Array<{ value: string; label: string }>;
  };
  routeOptions: Array<{ value: string; label: string; path: string; scope: string }>;
  expenseCategories: Array<{ value: string; label: string }>;
  paymentMethods: Array<{ value: string; label: string }>;
  incomeCategories: Array<{ value: string; label: string }>;
  hotelAppConfig: HotelAppConfig;
}

const hotelAppConfigSchema = new Schema({
  permissionKeys: { type: Schema.Types.Mixed, default: {} },
  appModules: { type: Schema.Types.Mixed, default: {} },
});

const ConfigSchema: Schema = new Schema(
  {
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
        scope: { type: String, default: SCOPES.BTP_BOOKING_ADMIN },
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
    ],
    hotelAppConfig: { type: hotelAppConfigSchema, default: {} },
  },
  { timestamps: true }
);

export const Config = mongoose.model<IConfig>("Config", ConfigSchema);
