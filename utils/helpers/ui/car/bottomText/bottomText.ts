const plateWidth = 3597;
const plateHeight = 1800;

export const adjustBottomTextWidth = (state: string) => {
    if (state === "Delaware") return plateWidth * 0.4;
    if (state === "North Carolina") return plateWidth * 0.5;
    if (state === "New Hampshire") return plateWidth * 0.5;
    return plateWidth * 0.53;
}

export const adjustBottomTextHeight = (state: string) => {
    if (state === "Delaware") return plateHeight * 1.25;
    if (state === "North Carolina") return plateHeight * 1.55;
    if (state === "New Hampshire") return plateHeight * 1.55;
    return plateHeight * 0.205;
}

export const adjustBottomTextX = (state: string) => {
    if (state === "Delaware") return plateWidth * 0.295;
    if (state === "North Carolina") return plateWidth * 0.255;
    if (state === "New Hampshire") return plateWidth * 0.255;
    return plateWidth * 0.235;
}

export const adjustBottomTextY = (state: string) => {
    if (state === "Delaware") return plateHeight * - 0.485
    if (state === "North Carolina") return plateHeight * - 0.625
    if (state === "New Hampshire") return plateHeight * - 0.775
    return plateHeight * 0.035;
}

export const adjustBottomFontSize = (state: string) => {
    const originalFontSize = plateHeight * 0.12;
    if(state === "Federated States Of Micronesia") return originalFontSize - state.length - 85;
    if(state === "District Of Columbia") return originalFontSize - state.length - 40;
    if(state === "Marshall Islands") return originalFontSize - state.length - 20;
    if(state === "Northern Mariana Islands") return originalFontSize - state.length - 65;
    if(state.length > 7) return originalFontSize - state.length;
    return originalFontSize
}