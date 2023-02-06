// Model
export interface ILicensePlate {
    id?: number,
    templateId?: number,
    licensePlateId?: string,
    vehicleType?: "car" | "motorcycle",
    isEmbossed: boolean,
    isTopTextEmbossed: boolean,
    isBottomTextEmbossed: boolean,
    topText?: string,
    bottomText?: string
}

// Action Types
export interface ILicensePlateAction {
    type: 'create' | 'update',
    licensePlate: ILicensePlate
}

// Initial Model State
export const ILicensePlateInitialState: ILicensePlate = {
    id: undefined,
    templateId: undefined,
    licensePlateId: undefined,
    vehicleType: undefined,
    isEmbossed: false,
    isTopTextEmbossed: false,
    isBottomTextEmbossed: false,
    topText: undefined,
    bottomText: undefined
}