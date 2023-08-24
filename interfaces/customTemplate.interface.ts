import { ITemplate } from "./template.interface";
import { IShopifyVariant } from "./shopify/variants.interface";
import {
    ICustomFont, 
    IFadeSettings,
    IPatternSettings,   
    IBackgroundSettings,
    IStateSettings,
    IPlateNumberSettings,
    IBottomTextSettings
} from "./utils.interface";
import {  IFileLogo } from './helpers/file.interface';

export interface ICustomPlateTemplate{
    id?: string // ID Created by system
    templateId?: string; // PresetId

    startPlatePosition?: string;
    startPlateText?: string;

    shopifyHandle?: string;
    shopifyVariants?: Array<IShopifyVariant>;
    selectedVariant?: IShopifyVariant;

    preset?: boolean;

    thumbnail?: string;

    finish?: 'MATTE' | 'GLOSS'; // Finish Type
    template?: ITemplate; // Inital Template
    font?: ICustomFont; // Font

    // Design Settings
    mainLogo?: IFileLogo; // Logo Settings 
    bottomLogo?: IFileLogo; // Bottom Logo Settings
    backgroundLogo?: IFileLogo; // Background

    details?: Array<IFileLogo> // WORK ON MULTIPLE DETAIL LOGOS FOR SIDES ETC

    fadeSettings?: IFadeSettings // Fade Settings
    patternSettings?: IPatternSettings // Pattern Settings
    backgroundSettings?: IBackgroundSettings // Background Settings

    ///////// START: Plate Settings /////////
    state?: IStateSettings
    plateNumber?: IPlateNumberSettings
    bottomText?: IBottomTextSettings
    ///////// END: Plate Settings /////////
}