// export interface ILicensePlate {
//     firebaseId?: string;
//     // State
//     state?: string;
    
//     // Plate Numbers
//     plateNumber?: string;
//     plateNumberRaised?: boolean;
//     vehicleType?: string;
//     platePosition?: string;
    
//     // Bottom Text
//     bottomTextEnabled?: boolean;
//     bottomText?: string;

//     // Initial Template
//     initialTemplate?: IPlateTemplate;
//     // Custom Template Attached
//     customTemplate?: ICustomPlateTemplate;

// }

// export interface IFile {
//     name?: string,
//     url?: string,
//     element?: React.ReactElement,
//     color?: string,
// }

// export interface IFileLogo {
//     name?: string,
//     url?: string,
//     x?: number,
//     y?: number,
//     width?: number | string,
//     height?: number | string,
// }

// export interface ICustomFont {
//     hasFont?: boolean;
//     fontColor?: string;
//     fontBorderColor?: string;
//     font?: string;
//     fontText?: string;
//     x?: number;
//     y?: number;
//     width?: number | string;
//     height?: number | string;
//     fontWeight?: number | string;
// }


// export interface IPlateTemplate {
//     templateId?: string; // DONE
//     templateName?: string; // DONE
//     templateDescription?: string; // DONE

//     // Font
//     font?: ICustomFont;

//     // Controls
//     hasFade?: boolean; 
//     hasLogo?: boolean;
//     hasPattern?: boolean;
//     hasBackground?: boolean;

//     fadeColor?: string;
//     patternLogo?: IFile;
//     patternOpacity?: number;
//     patternPosition?: string;
//     backgroundUrl?: IFile;    
//     logo?: IFileLogo;
//     fadeUp?: boolean;
    
//     // State Controls
//     stateGlowEnabled?: boolean; // DONE
//     stateStrokeEnabled?: boolean;
//     stateShadowEnabled?: boolean;

//     // Plate Number Controls
//     plateNumberStrokeEnabled?: boolean;
//     plateNumberGlowEnabled?: boolean;
//     plateNumberShadowEnabled?: boolean;

//     // Bottom Controls
//     bottomTextStrokeEnabled?: boolean;
//     bottomTextGlowEnabled?: boolean;
//     bottomTextShadowEnabled?: boolean;
    
//     backgroundStrokeEnabled?: boolean;
//     backgroundStroke?: string;
//     backgroundColor?: string;

//     // State
//     stateColor?: string; // DONE
//     stateGlowColor?: string; // DONE

//     stateStrokeSize?: string;  
//     stateStrokeColor?: string; 

//     // Plate Numbers
//     plateNumberColor?: string; // DONE

//     plateNumberStrokeSize?: string; 
//     plateNumberStrokeColor?: string;

//     plateNumberShadow?: string;
    
//     // Bottom Text
//     bottomTextColor?: string; 

//     bottomTextStrokeSize?: string; 
//     bottomTextStrokeColor?: string;

//     bottomTextGlow?: string;
//     bottomTextShadow?: string;
// }

// export interface ICustomPlateTemplate{
//     firebaseId?: string;
//     customTemplateId?: string;
//     template?: IPlateTemplate;
    
//     finish?: 'MATTE' | 'GLOSS';

//     // Font
//     font?: ICustomFont;

//    // Controls
//    hasFade?: boolean; 
//    hasLogo?: boolean;
//    hasPattern?: boolean;
//    hasBackground?: boolean;

//    fadeColor?: string;
//    patternPosition?: string;
//    patternLogo?: IFile;
//    patternOpacity?: number;
//    backgroundUrl?: IFile;    
//    logo?: IFileLogo;
//    fadeUp?: boolean;
   
//    // State Controls
//    stateGlowEnabled?: boolean;
//    stateStrokeEnabled?: boolean;
//    stateShadowEnabled?: boolean;

//    // Plate Number Controls
//    plateNumberStrokeEnabled?: boolean;
//    plateNumberGlowEnabled?: boolean;
//    plateNumberShadowEnabled?: boolean;

//    // Bottom Controls
//    bottomTextStrokeEnabled?: boolean;
//    bottomTextGlowEnabled?: boolean;
//    bottomTextShadowEnabled?: boolean;

//    backgroundStrokeEnabled?: boolean;
//    backgroundStroke?: string;
//    backgroundColor?: string;

//    // State
//    stateColor?: string;
//    stateGlowColor?: string;

//     stateStrokeSize?: string; 
//     stateStrokeColor?: string;
   
//    // Plate Numbers
//     plateNumberColor?: string;

//     plateNumberStrokeSize?: string; 
//     plateNumberStrokeColor?: string;

//     plateNumberShadow?: string;
   
//    // Bottom Text
//    bottomTextColor?: string;
//     bottomTextStrokeSize?: string; 
//     bottomTextStrokeColor?: string;
    
//    bottomTextGlow?: string;
//    bottomTextShadow?: string;
// }
