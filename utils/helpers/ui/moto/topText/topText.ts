const plateWidth = 2142;
const plateHeight = 1200;

export const adjustTopTextWidth = (state: string) => {
    if (state === "Alaska") return plateWidth * 3.5;
    if (state === "California") return plateWidth * 0.5;
    if (state === "Delaware") return plateWidth * 0.5;
    if (state === "Georgia") return plateWidth * 0.55;
    if (state === "Massachusetts") return plateWidth * 0.55;
    if (state === "Mississippi") return plateWidth * 0.45;
    if (state === "North Carolina") return plateWidth * 0.95;
    if (state === "New Hampshire") return plateWidth * 0.45;
    if (state === "South Dakota") return plateWidth * 0.4;
    if (state === "Texas") return plateWidth * 0.4;
    if (state === "Vermont") return plateWidth * 0.45;
    if (state === "West Virginia") return plateWidth * 0.45;
    return plateWidth * 0.745;
}

export const adjustTopTextHeight = (state: string) => {
    if (state === "Alaska") return plateHeight * 1.5;
    if (state === "Arizona") return plateHeight * 0.1;
    if (state === "California") return plateHeight * 0.225;
    if (state === "Delaware") return plateHeight * 1.4;
    if (state === "Georgia") return plateHeight * 1.5;
    if (state === "Illinois") return plateHeight * 1.5;
    if (state === "Massachusetts") return plateHeight * 1.5;
    if (state === "Mississippi") return plateHeight * 1.15;
    if (state === "New York") return plateHeight * 0.165;
    if (state === "New Jersey") return plateHeight * 0.165;
    if (state === "North Carolina") return plateHeight * 2.25;
    if (state === "New Hampshire") return plateHeight * 0.95;
    if (state === "South Dakota") return plateHeight * 1.25;
    if (state === "Texas") return plateHeight * 0.15;
    if (state === "Vermont") return plateHeight * 1.15;
    if (state === "West Virginia") return plateHeight * 1.35;
    return plateHeight * 0.205;
}

export const adjustTopTextX = (state: string) => {
    if (state === "Alaska") return plateWidth * - 1.25;
    if (state === "California") return plateHeight * 0.425;
    if (state === "Delaware") return plateWidth * 0.255;
    if (state === "Georgia") return plateWidth * 0.232;
    if (state === "Illinois") return plateWidth * 0.255;
    if (state === "Massachusetts") return plateWidth * 0.225;
    if (state === "Mississippi") return plateWidth * 0.265
    if (state === "New York") return plateWidth * 0.255;
    if (state === "New Jersey") return plateWidth * 0.255;
    if (state === "North Carolina") return plateWidth * 0.04;
    if (state === "New Hampshire") return plateWidth * 0.275;
    if (state === "South Dakota") return plateWidth * 0.295;
    if (state === "Texas") return plateWidth * 0.3;
    if (state === "Vermont") return plateWidth * 0.265
    if (state === "West Virginia") return plateWidth * 0.265;
    return plateWidth * 0.1;
}

export const adjustTopTextY = (state: string) => {
    if (state === "Alaska") return plateHeight * - 0.595
    if (state === "Arizona") return plateHeight * 0.065;
    if (state === "Delaware") return plateHeight * 0.25;
    if (state === "Georgia") return plateHeight * - 0.615
    if (state === "Illinois") return plateHeight * - 0.605
    if (state === "Massachusetts") return plateHeight * - 0.625;
    if (state === "Mississippi") return plateHeight * - 0.405;
    if (state === "New York") return plateHeight * 0.055;
    if (state === "New Jersey") return plateHeight * 0.055;
    if (state === "North Carolina") return plateHeight * - 0.175;
    if (state === "New Hampshire") return plateHeight * 0.385;
    if (state === "South Dakota") return plateHeight * - 0.445
    if (state === "Texas") return plateHeight * 0.055;
    if (state === "Vermont") return plateHeight * - 0.385;
    if (state === "West Virginia") return plateHeight * - 0.525
    return plateHeight * 0.075;
}

export const adjustFontSize = (state: string) => {
    const originalFontSize = plateHeight * 0.14;
    if(state === "Federated States Of Micronesia") return originalFontSize - state.length - 85;
    if(state === "District Of Columbia") return originalFontSize - state.length - 40;
    if(state === "Marshall Islands") return originalFontSize - state.length - 20;
    if(state === "Northern Mariana Islands") return originalFontSize - state.length - 65;
    if(state.length > 7) return originalFontSize - state.length;
    return originalFontSize
}