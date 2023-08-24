import { ICustomPlateTemplate } from "./customTemplate.interface";

export interface ILicensePlate {
    id?: string;

    // State
    state?: string;

    // Plate Numbers
    plateNumber?: string;
    plateNumberRaised?: boolean;
    vehicleType?: string;
    platePosition?: string;
    
    // Bottom Text
    bottomTextEnabled?: boolean;
    bottomText?: string;
   
    // Custom Template Attached
    customTemplate?: ICustomPlateTemplate;
}