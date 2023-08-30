import { ReactElement } from "react";
import { ICoordinates } from "../helpers/coordinates.interface";
import { 
    IGlow, 
    IShadow 
} from "../utils.interface";

// Used for backgrounds
export interface IFile {
    hasColor?: boolean; // Define if the background will have a color
    // hasPresetColors?: boolean, // Define if the background has preset colors
    color?: string, // if hasPresetColors is false, this will be the assigned color
    filePath?: string, // if hasPresetColors is true, this will be the assigned color
    imageType?: string;

    name?: string,
    url?: string,
    element?: React.ReactElement,
    glow: IGlow
}

// Used for logos
export interface IFileLogo {
    hasColor?: boolean; // Define if the logo will have a color
    imageType?: string;
    filePath?: string,
    
    // Colors
    // hasPresetColors?: boolean, // Define if the logo has preset colors

    // hasMultipleColors?: boolean,
    // color?: string
    // multipleColors?: IMultipleColor


    enabled?: boolean
    name?: string,
    url: string,

    //Coordinates 
    leftCoordinates?: ICoordinates
    centerCoordinates?: ICoordinates,
    rightCoordinates?: ICoordinates
    width?: number | string,
    height?: number | string,

    // Addons
    glow: IGlow,
    shadow: IShadow
}

export interface IMultipleColor {
    color1?: string,
    color2?: string,
    color3?: string,
    color4?: string,
    color5?: string
}
