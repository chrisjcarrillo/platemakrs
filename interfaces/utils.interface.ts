import { ICoordinates } from "./helpers/coordinates.interface";
import { IFile, IFileLogo } from "./helpers/file.interface";

///////// START: State /////////
export interface IStateSettings{
    color?: string;
    shadow?: IShadow;
    glow?: IGlow;
    stroke?: IStroke;
}
export interface IPlateNumberSettings{
    color?: string;
    shadow?: IShadow;
    glow?: IGlow;
    stroke?: IStroke;
}
export interface IBottomTextSettings{
    color?: string;
    shadow?: IShadow;
    glow?: IGlow;
    stroke?: IStroke;
}
///////// END: State /////////

///////// START: Design Interfaces /////////

export interface IBackgroundSettings{
    isImage?: boolean;
    color?: string;
    stroke?: IStroke
    background?: IBackground;
    pinstripe?: IPinstripe;
}


export interface IFadeSettings {
    enabled?: boolean
    fadeStyle?: 'left-regular' | 'left-circle' | 'right-regular' | 'right-circle' | 'center-circle' | 'center-circle-wide' | 'center-circle-inverted' | 'top-bottom' | 'bottom-top'
    fadeColor1?: string
    fadeColor2?: string
}

export interface IPatternSettings {
    enabled?: boolean
    position?: string
    repeatType?: 'repeat' | 'repeat-y' | 'repeat-x'
    logo?: IFile
    opacity?: number
    leftCoordinates?: ICoordinates
    centerCoordinates?: ICoordinates,
    rightCoordinates?: ICoordinates
}
///////// END: Design Interfaces /////////

///////// START: Design Utils /////////
export interface IPinstripe {
    enabled?: boolean
    color?: string
}
export interface IBackground{
    enabled?: boolean
    isImage?: boolean;
    file?: IFile
}
export interface IShadow{
    enabled?: boolean;
}
export interface IGlow{
    enabled?: boolean;
    color?: string;
}
export interface IStroke{
    enabled?: boolean;
    size?: string;
    color?: string;
}
///////// END: Design Utils /////////

///////// START: Utils /////////

export interface ICustomFont {
    enabled?: boolean;
    fontColor?: string;
    fontBorderColor?: string;
    font?: string;
    fontText?: string;
    x?: number;
    y?: number;
    width?: number | string;
    height?: number | string;
    fontWeight?: number | string;
}
///////// END: Utils /////////