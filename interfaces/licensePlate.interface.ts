import { ICustomPlateTemplate } from "./customTemplate.interface";

export interface ILicensePlate {
    reverseText?: boolean; // This will revert the top text and bottom text

    id?: string;
    customTemplateId?: string;

    // State
    state?: string;

    // Plate Numbers
    plateNumber?: string;
    plateNumberRaised?: boolean;
    vehicleType: 'Car' | 'Motorcycle';
    platePosition?: string;
    
    // Bottom Text
    bottomTextEnabled?: boolean;
    bottomText?: string;
   
    // Custom Template Attached
    customTemplate?: ICustomPlateTemplate;
}