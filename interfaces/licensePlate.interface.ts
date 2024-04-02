import { ICustomPlateTemplate } from "./customTemplate.interface";

export interface ILicensePlate {
    id?: string;
    customTemplateId?: string;

    // State
    state?: string;

    // Plate Numbers
    plateNumber?: string;
    plateNumberRaised?: boolean;
    vehicleType?: 'Car';
    platePosition?: string;
    
    // Bottom Text
    bottomTextEnabled?: boolean;
    bottomText?: string;
   
    // Custom Template Attached
    customTemplate?: ICustomPlateTemplate;
}