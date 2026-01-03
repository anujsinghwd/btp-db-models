import { Document } from "mongoose";
import { IItineraryBase } from "./base/IItineraryBase";

export interface IItinerary extends IItineraryBase, Document {}
