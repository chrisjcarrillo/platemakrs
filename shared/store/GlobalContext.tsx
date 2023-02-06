import { Dispatch } from 'react';
import { ILicensePlate } from '../model/LicensePlate';

export interface GlobalStateInterface{
    isUserAuthenticated: boolean,
    stepNumber: number,
    stepStatus: string,
}

export type ActionType = {
    type: string,
    payload?: any
}

export type ContextType = {
    globalState: GlobalStateInterface,
    dispatch: Dispatch<ActionType>
}