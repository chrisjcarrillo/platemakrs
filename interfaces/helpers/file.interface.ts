import { ICoordinates } from "../helpers/coordinates.interface";
import { 
    IGlow, 
    IShadow 
} from "../utils.interface";

export interface IFile {
    name?: string,
    filePath?: string,
    url?: string,
    element?: React.ReactElement,
    color?: string,
    glow: IGlow
}

export interface IFileLogo {
    hasPresetColors?: boolean
    enabled?: boolean
    name?: string,
    filePath?: string,
    url: string,
    leftCoordinates?: ICoordinates
    centerCoordinates?: ICoordinates,
    rightCoordinates?: ICoordinates
    width?: number | string,
    height?: number | string,
    glow: IGlow,
    shadow: IShadow
}