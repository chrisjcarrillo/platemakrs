export const premadeTemplates = [
    {
        templateId: '1',
        shopifyHandle: 'mercedes-amg',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        bottomLogo: {
            enabled: false
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/mercedes/logos/mercedes.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 32
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow:{
                enabled: false 
            }
        },
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundSettings: {
            color: '#bebdc2',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/mercedes/patterns/option-1',
            url: '/images/resources/cars/mercedes/patterns/option-1/gray.png',
            leftCoordinates: {
                x: 26,
                y: 41
            },
            centerCoordinates: {
                x: 140,
                y: 41
            },
            rightCoordinates: {
                x: 230,
                y: 41
            },
            width: 65,
            height: 110,
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, // AMG 1 - [DONE]
    
    {
        shopifyHandle: 'mercedes-amg-2',
        templateId: '2',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: {
            enabled: true,
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/mercedes/logos/mercedes.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow:{ enabled: false }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/mercedes/logos/amg.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 20,
        },
        patternSettings: {
            enabled: false,
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
                stroke: {
                    enabled: true,
                    color: '#ff0000'
                }
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'black.png',
            filePath: '/images/resources/cars/mercedes/patterns/option-2',
            url: '/images/resources/cars/mercedes/patterns/option-2/gray.png',
            leftCoordinates: {
                x: 10,
                y: 8
            },
            centerCoordinates: {
                x: 135,
                y: 8
            },
            rightCoordinates: {
                x: 265,
                y: 8
            },
            width: 65,
            height: 150,
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, // AMG 2 - [DONE]

    {
        shopifyHandle: 'ferrari-miami-heat',
        templateId: '3',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: {
            enabled: false,
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/basketball/miami-heat/miami-heat-black-yellow.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow:{ enabled: false, color: '#000000' }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/flags/italian-rectangle.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 95,
                y: 5
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 150,
            height: 10,
        },
        patternSettings: {
            enabled: false
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: true,
                color: '#000000',
            }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/ferrari/patterns/miami-heat',
            url: '/images/resources/cars/ferrari/patterns/miami-heat/gray.png',
            leftCoordinates: {
                x: -20,
                y: 8
            },
            centerCoordinates: {
                x: 65,
                y: 8
            },
            rightCoordinates: {
                x: 175,
                y: 8
            },
            width: 200,
            height: 150,
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: "#fbf558",
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: "#fbf558",
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, // White Miami Heat - [DONE]

    {
        shopifyHandle: 'mustang-1-template',
        templateId: '4',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: {
            enabled: false
        },
        bottomLogo: {
            enabled: false
        },
        mainLogo: {
            enabled: true,
            url: '/images/resources/cars/ford/logos/mustang/logo-3d.png',
            leftCoordinates: {
                x: 26,
                y: 65
            },
            centerCoordinates: {
                x: 115,
                y: 65
            },
            rightCoordinates: {
                x: 230,
                y: 65
            },
            width: 100,
            height: 35,
            glow: {
                enabled: true,
                color: '#c0ff00'
            }
        },
        backgroundLogo: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    filePath: '/images/resources/backgrounds/hexagon/option-1',
                    url: '/images/resources/backgrounds/hexagon/option-1/green.png',
                },
                stroke: {
                    enabled: true,
                    color: '#ff0000'
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#666666",
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#666666",
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, // MUSTANG - [Done]

    {
        shopifyHandle: 'dolphins-1-template',
        templateId: '5',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: {
            enabled: false
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/football/dolphins/logos/dolphins-1.png',
            leftCoordinates: {
                x: 10,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 210,
                y: 32
            },
            width: 125,
            height: 100,
            glow:{ enabled: true, color: '#008f99' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    filePath: '/images/resources/backgrounds/hexagon/option-2',
                    url: '/images/resources/backgrounds/hexagon/option-2/dark-blue.png',
                },
                stroke: {
                    enabled: false,
                    color: '#ff0000'
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#666666",
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: "#666666",
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //DOLPHINS - [DONE]
    
    {
        shopifyHandle: 'mclaren-1-template',
        templateId: '6',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: {
            enabled: false,
        },
        patternSettings: {
            enabled: false
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/sports/miami-heat/miami-heat-gold-red.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow:{ enabled: true, color: '#000000' }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/mclaren/mclaren-text.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 20,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber/carbon-fiber-full-with-shadow.png',
                },
            },
            stroke: {
                enabled: false
            }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/mclaren/patterns',
            url: '/images/resources/cars/mclaren/patterns/mclaren-small-logo.svg',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 0,
                y: 0
            },
            rightCoordinates: {
                x: 0,
                y: 0
            },
            width: 350,
            height: 200,
        },
        state:{
            color: '#deb251',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#deb251',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //MCLAREN - [Done]
    
    {
        shopifyHandle: 'miami-heat-yellow-template',
        templateId: '7',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: {
            enabled: false,
        },
        patternSettings: {
            enabled: false
        },
        bottomLogo: {
            enabled: false
        },
        backgroundLogo: {
            enabled: false
        },

        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/sports/miami-heat/miami-heat-yellow.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#ffd40c',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ffd40c',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ffd40c',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //RUZY - [Done]
    
    {
        templateId: '8',
        shopifyHandle: 'panthers-template',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        patternSettings:{ 
            enabled: false
        },
        fadeSettings: {
            enabled: false,
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/hockey/panthers/logos/panther.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow:{ enabled: false }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/sports/hockey/panthers/logos',
            url: '/images/resources/sports/hockey/panthers/logos/stick-and-palm.png',
            leftCoordinates: {
                x: 26,
                y: 41
            },
            centerCoordinates: {
                x: 100,
                y: 10
            },
            rightCoordinates: {
                x: 230,
                y: 41
            },
            width: 140,
            height: 140,
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/hockey/panthers/text/1.png',
            centerCoordinates: {
                x: 115,
                y: 0
            },
            width: 100,
            height: 25,
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            }
        },
        state:{
            color: '#00107c',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        plateNumber: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#00107c'
            },
        },
        bottomText: {
            color: '#00107c',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Panthers - [Done]
   
    {
        templateId: '9',
        shopifyHandle: 'maybach-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/mercedes/logos/maybach.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 133,
                y: 55
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 75,
            height: 55,
            glow:{ enabled: true, color: "#000000" }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/mercedes/text/maybach.svg',
            centerCoordinates: {
                x: 106,
                y: 5
            },
            width: 135,
            height: 15,
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/mercedes/patterns/gucci-maybach',
            url: '/images/resources/cars/mercedes/patterns/gucci-maybach/gray.png',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 0,
                y: 0
            },
            rightCoordinates: {
                x: 0,
                y: 0
            },
            width: 350,
            height: 150,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            }
        },
        state:{
            color: '#b8b8b8',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#b8b8b8',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        bottomText: {
            color: '#b8b8b8',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Maybach - [Done]
    
    {
        templateId: '10',
        shopifyHandle: 'miami-heat-porsche-template',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        backgroundLogo:{ enabled: false },
        fadeSettings: {
            enabled: false,
        },
        patternSettings: {
            enabled: false
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/basketball/miami-heat/miami-heat-porsche-red-orange.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/text/text.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 15,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            }
        },
        state:{
            color: '#8a8a8a',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#8a8a8a',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#b8b8b8',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Miami heat gray - [Done]
   
    {
        templateId: '11',
        shopifyHandle: 'the-joker-template',
        thumbnail: '/images/thumbnails/characters/joker-1.png',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        backgroundLogo: {
            enabled: false
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            }
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/characters/the-joker.png',
            leftCoordinates: {
                x: 26,
                y: 65
            },
            centerCoordinates: {
                x: 115,
                y: 20
            },
            rightCoordinates: {
                x: 220,
                y: 65
            },
            width: 110,
            height: 145,
            glow:{ enabled: false }
        },
        patternSettings: {
            enabled: false
        },
        bottomLogo: {
            enabled: false
        },
        fadeSettings: {
            enabled: false
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Da Joker - [Done]
    
    {
        templateId: '12',
        shopifyHandle: 'university-of-miami-ibis-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: {enabled: false},
        patternSettings: {enabled: false},
        backgroundLogo: {enabled: false},
        mainLogo: {
            enabled: true,
            url: '/images/resources/sports/football/um/logos/um-hands.png',
            leftCoordinates: {
                x: 2,
                y: 20
            },
            centerCoordinates: {
                x: 115,
                y: 20
            },
            rightCoordinates: {
                x: 250,
                y: 20
            },
            width: 150,
            height: 120,
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/football/um/text/option-1.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 100,
                y: 5
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 150,
            height: 10,
            glow:{
                enabled: true,
                color: "#000000"
            }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    name: 'fade',
                    url: '/images/bg/carbon-fiber-fade-up.png'
                }
            },
            stroke: {
                enabled: false,
            }
        },
        state:{
            color: '#ff6700',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ff6700',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#08512e'
            },
        },
        bottomText: {
            color: '#ff6700',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //UM - [Done]
    
    {
        templateId: '13',
        shopifyHandle: 'university-of-miami-classic-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: {enabled: false},
        patternSettings: {enabled: false},
        backgroundLogo: {enabled: false},
        mainLogo: {
            enabled: true,
            url: '/images/resources/sports/football/um/logos/um-old-bird.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 85,
            height: 85,
            glow: { enabled: false }
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
                file: {
                    name: 'fade',
                }
            },
            stroke: {
                enabled: false,
            }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/football/um/text/option-2.png',
            centerCoordinates: {
                x: 18,
                y: 0
            },
            width: 315,
            height: 25,
            glow:{
                enabled: false
            }
        },
        state:{
            color: '#01a14e',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#fb6600',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#08512e'
            },
        },
        bottomText: {
            color: '#fb6600',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //UM - [Done]
    
    {
        templateId: '14',
        shopifyHandle: 'lamborghini-1-template',
        startPlatePosition: 'left',
        startPlateText: 'SAMPL',
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    name: 'fade',
                    url: '/images/bg/hexagons/hexagon-fade-1.png'
                }
            },
            stroke: {
                enabled: false,
            }
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/lamborghini/crest.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 165,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 90,
            height: 100,
            glow:{ enabled: true, color: '#ffffff' }
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Diablo Lambo - [NOT DONE]
    
    {
        templateId: '15',
        shopifyHandle: 'porsche-1-template',
        startPlatePosition: 'left',
        startPlateText: 'SAMPL',
        bottomLogo: {enabled: false},
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            }
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png',
            leftCoordinates: {
                x: 15,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 275,
                y: 50
            },
            width: 55,
            height: 65,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/porsche/patterns/option-1',
            url: '/images/resources/cars/porsche/patterns/option-1/white.png',
            leftCoordinates: {
                x: 2,
                y: 0
            },
            centerCoordinates: {
                x: 130,
                y: 0
            },
            rightCoordinates: {
                x: 252,
                y: 0
            },
            width: 95,
            height: 165,
        },
        state:{
            color: '#760e1b',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#760e1b',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#760e1b',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //STCLYO - [Done]

    {
        templateId: '16',
        shopifyHandle: 'porsche-2-template',
        fadeSettings: {enabled: false},
        patternSettings: {enabled: false},
        backgroundLogo: { enabled: false },
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        backgroundSettings: {
            color: '#2fae53',
            stroke: {
                enabled: false,
            }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#ffffff"
            },
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo-solid.svg',
            leftCoordinates: {
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 140,
                y: 50
            },
            rightCoordinates: {
                x: 235,
                y: 50
            },
            width: 65,
            height: 75,
            glow:{ enabled: false }
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#ffffff"
            },
        }
    }, //Porsche #2 - [Done]
    
    {
        templateId: '17',
        shopifyHandle: 'messi-x-inter-miami-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false
            },
            stroke: {
                enabled: false,
            }
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/characters/messi-1.png',
            leftCoordinates: {
                x: 0,
                y: 1
            },
            centerCoordinates: {
                x: 80,
                y: 1
            },
            rightCoordinates: {
                x: 165,
                y: 1
            },
            width: 165,
            height: 165,
            glow:{ enabled: false }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: "#ffaecd"
            },
        },
        plateNumber: {
            color: '#ffaecd',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#ffaecd"
            },
        }
    }, //Inter Miami Messi #1 - [Done]
    
    {
        templateId: '18',
        shopifyHandle: 'astom-martin-1-template',

        fadeSettings: {enabled: false},
        patternSettings: {enabled: false},
        backgroundLogo: {enabled: false}, 

        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        backgroundSettings: {
            color: '#000000',
            stroke: {
                enabled: false,
            }
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/aston-martin/logo.svg',
            leftCoordinates: {
                x: 26,
                y: 65
            },
            centerCoordinates: {
                x: 105,
                y: 65
            },
            rightCoordinates: {
                x: 210,
                y: 65
            },
            width: 125,
            height: 35,
            glow: {
                enabled: true,
                color: '#bbda01'
            }
        },
        state:{
            color: '#bbda01',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: "#ffaecd"
            },
        },
        plateNumber: {
            color: '#bbda01',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#bbda01',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: "#ffaecd"
            },
        }
    }, //Aston Martin - [Done]
    
    {
        templateId: '19',
        startPlatePosition: 'left',
        startPlateText: 'SAMPL',
        shopifyHandle: 'autism-awareness-template',
        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/autism/logo/logo.png',
            leftCoordinates: {
                x: 30,
                y: 35
            },
            centerCoordinates: {
                x: 130,
                y: 35
            },
            rightCoordinates: {
                x: 250,
                y: 35
            },
            width: 90,
            height: 100,
            glow: {
                enabled: true,
                color: '#000000'
            }
        },
        backgroundLogo:{
            hasPresetColors: false,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/autism/pattern',
            url: '/images/resources/autism/pattern/pattern.png',
            leftCoordinates: {
                x: 2,
                y: 0
            },
            centerCoordinates: {
                x: 100,
                y: 0
            },
            rightCoordinates: {
                x: 200,
                y: 0
            },
            width: 165,
            height: 165,
        },
        backgroundSettings: {
            color: '#000000',
            background: { enabled: false },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#ffd400',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
                color: "#ffaecd"
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffd400'
            },
        },
        bottomText: {
            color: '#ffd400',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
                color: "#ffaecd"
            },
        }
    }, //Autism, - [Done]
    
    {
        templateId: '20',
        shopifyHandle: 'porsche-3-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png',
            leftCoordinates: {
                x: 50,
                y: 45
            },
            centerCoordinates: {
                x: 140,
                y: 50
            },
            rightCoordinates: {
                x: 240,
                y: 45
            },
            width: 65,
            height: 75,
            glow:{ enabled: true, color: '#ff0000' }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/backgrounds/hexagon/option-3',
            url: '/images/resources/backgrounds/hexagon/option-3/gray.png',
            leftCoordinates: {
                x: 12,
                y: 0
            },
            centerCoordinates: {
                x: 100,
                y: 0
            },
            rightCoordinates: {
                x: 200,
                y: 0
            },
            width: 150,
            height: 185,
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/text/text.svg',
            centerCoordinates: {
                x: 115,
                y: 0
            },
            width: 125,
            height: 15,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: { enabled: false },
            stroke: { enabled: false }
        },
        state:{
            color: '#b8b8b8',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#b8b8b8',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#b8b8b8',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Porsche #3  - [Done]

    {
        templateId: '21',
        shopifyHandle: 'bmw-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/bmw/logos/logo.svg',
            leftCoordinates: {
                x: 50,
                y: 32
            },
            centerCoordinates: {
                x: 145,
                y: 60
            },
            rightCoordinates: {
                x: 240,
                y: 32
            },
            width: 55,
            height: 55,
            glow:{ enabled: true, color: '#0080ff'}
        },
        backgroundLogo:{
            hasPresetColors: false,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/bmw/patterns/m/option-1',
            url: '/images/resources/cars/bmw/patterns/m/option-1/1.png',
            leftCoordinates: {
                x: 2,
                y: 0
            },
            centerCoordinates: {
                x: 2,
                y: 0
            },
            rightCoordinates: {
                x: 245,
                y: 0
            },
            width: 95,
            height: 165,
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/bmw/logos/logo-m.svg',
            centerCoordinates: {
                x: 285,
                y: 3
            },
            width: 45,
            height: 15,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    filePath: '/images/resources/backgrounds/hexagon/option-4',
                    url: '/images/resources/backgrounds/hexagon/option-4/1.png',
                },
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#003b73',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        plateNumber: {
            color: '#003b73',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: "#ffffff"
            },
        },
        bottomText: {
            color: '#003b73',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        }
    }, //BMW #1 - [Done]

    {
        shopifyHandle: 'miami-heat-yellow-2-template',
        templateId: '22',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: {enabled: false},
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/basketball/miami-heat/miami-heat-black-yellow-gray.svg',
            leftCoordinates: {
                x: 40,
                y: 60
            },
            centerCoordinates: {
                x: 140,
                y: 55
            },
            rightCoordinates: {
                x: 230,
                y: 60
            },
            width: 65,
            height: 65,
            glow:{ enabled: true, color: '#fee404' }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#fee404',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#fee404',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#fee404',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Miami Heat Yellow - [DONE]

    {
        shopifyHandle: 'porsche-4-template',
        templateId: '23',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png',
            leftCoordinates: {
                x: 15,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 275,
                y: 50
            },
            width: 55,
            height: 65,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/porsche/patterns/option-2',
            url: '/images/resources/cars/porsche/patterns/option-2/gray.png',
            leftCoordinates: {
                x: 2,
                y: 0
            },
            centerCoordinates: {
                x: 10,
                y: 15
            },
            rightCoordinates: {
                x: 252,
                y: 0
            },
            width: 85,
            height: 135,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: true,
                color: '#ff0000'
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: true,
                color: '#deb251'
            },
        },
        bottomText: {
            color: '#red',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Porsche #4 - [Done]

    {
        shopifyHandle: 'audi-1-template',
        templateId: '24',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/audi/logos/logo-with-text.svg',
            leftCoordinates: {
                x: 15,
                y: 60
            },
            centerCoordinates: {
                x: 140,
                y: 60
            },
            rightCoordinates: {
                x: 275,
                y: 60
            },
            width: 65,
            height: 45,
            glow:{ enabled: false }
        },
        backgroundLogo:{
            hasPresetColors: false,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/audi/backgrounds/option-1',
            url: '/images/resources/cars/audi/backgrounds/option-1/1.png',
            leftCoordinates: {
                x: 10,
                y: 35
            },
            centerCoordinates: {
                x: 10,
                y: 35
            },
            rightCoordinates: {
                x: 10,
                y: 35
            },
            width: 325,
            height: 100,
        },

        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#ff0000',
            glow: { enabled: false },
            shadow: { enabled: false },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        bottomText: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Audi - [Done]

    {
        shopifyHandle: 'mustang-shelby-1-template',
        templateId: '25',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/ford/logos/cobra/cobra-logo.svg',
            leftCoordinates: {
                x: 30,
                y: 60
            },
            centerCoordinates: {
                x: 155,
                y: 60
            },
            rightCoordinates: {
                x: 250,
                y: 60
            },
            width: 35,
            height: 50,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/ford/patterns/gt500/option-1',
            url: '/images/resources/cars/ford/patterns/gt500/option-1/gray.png',
            leftCoordinates: {
                x: 2,
                y: 35
            },
            centerCoordinates: {
                x: 130,
                y: 35
            },
            rightCoordinates: {
                x: 252,
                y: 35
            },
            width: 85,
            height: 100,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#2a6be4',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#b8b8b8'
            },
        },
        plateNumber: {
            color: '#2a6be4',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: true,
                color: '#b8b8b8'
            },
        },
        bottomText: {
            color: '#2a6be4',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#b8b8b8'
            },
        }
    }, //Shelby #1  - [Done]

    {
        shopifyHandle: 'porsche-5-template',
        templateId: '26',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo-solid.svg',
            leftCoordinates: {
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 141,
                y: 50
            },
            rightCoordinates: {
                x: 235,
                y: 50
            },
            width: 65,
            height: 75,
            glow:{ enabled: false }
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Porsche White - [DONE]

    {
        templateId: '27',
        shopifyHandle: 'aston-martin-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/aston-martin/logo.svg',
            leftCoordinates: {
                x: 26,
                y: 65
            },
            centerCoordinates: {
                x: 105,
                y: 65
            },
            rightCoordinates: {
                x: 210,
                y: 65
            },
            width: 125,
            height: 35,
            glow: {
                enabled: true,
                color: '#ffffff'
            }
        },
        bottomLogo: {
            enabled: false,
        },
        patternSettings: { enabled: false },
        fadeSettings: {
            enabled: true,
            fadeStyle: 'center-circle-inverted',
            fadeColor1: '#00685d',
            fadeColor2: '#00655a'
        },
        backgroundSettings: {
            color: '#00685d',
            background: {
                enabled: true,
                file: {
                    url: '/images/bg/hexagon.svg',
                    color: '#000000'
                },
                stroke: { enabled: true, color: "#000000"}
            },
            stroke: { enabled: true, color: "#000000"}
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#a8aeb0'
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#a8aeb0'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#a8aeb0'
            },
        }
    }, //Aston Martin #1  - [Done]

    {
        templateId: '28',
        shopifyHandle: 'aston-martin-3-template',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/aston-martin/logo.svg',
            leftCoordinates: {
                x: 26,
                y: 65
            },
            centerCoordinates: {
                x: 105,
                y: 65
            },
            rightCoordinates: {
                x: 210,
                y: 65
            },
            width: 125,
            height: 35,
            glow: {
                enabled: true,
                color: '#ffffff'
            }
        },
        bottomLogo: {
            enabled: false,
        },
        patternSettings: { enabled: false },
        fadeSettings: {
            enabled: true,
            fadeStyle: 'center-circle-inverted',
            fadeColor1: '#000000b5',
            fadeColor2: '#00000075'
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/bg/hexagon.svg',
                    color: '#ffffff'
                },
                stroke: { enabled: false, color: "#000000"}
            },
            stroke: { enabled: true, color: "#000000"}
        },
        state:{
            color: '#b4b4b4',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
                color: '#a8aeb0'
            },
        },
        plateNumber: {
            color: '#b4b4b4',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
                color: '#a8aeb0'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#a8aeb0'
            },
        }
    }, //Aston Martin #2  - [Done]

    {
        templateId: '29',
        shopifyHandle: 'ferrari-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,
        bottomLogo: { enabled: false },
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/ferrari/logos/horse/horse-black.svg',
            leftCoordinates: {
                x: 30,
                y: 45
            },
            centerCoordinates: {
                x: 140,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 45
            },
            width: 65,
            height: 95,
            glow: {
                enabled: true,
                color: '#ff0000'
            }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/ferrari/patterns/option-1',
            url: '/images/resources/cars/ferrari/patterns/option-1/gray.png',
            leftCoordinates: {
                x: -20,
                y: 8
            },
            centerCoordinates: {
                x: 65,
                y: 8
            },
            rightCoordinates: {
                x: 175,
                y: 8
            },
            width: 200,
            height: 150,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#a8aeb0'
            },
        }
    }, //Ferrari #1  - [Done]

    {
        templateId: '30',
        shopifyHandle: 'ferrari-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,
        bottomLogo: { enabled: false },
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/ferrari/logos/horse/horse-black.svg',
            leftCoordinates: {
                x: 30,
                y: 45
            },
            centerCoordinates: {
                x: 135,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 45
            },
            width: 65,
            height: 95,
            glow: {
                enabled: true,
                color: '#ff0000'
            }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/ferrari/patterns/option-1',
            url: '/images/resources/cars/ferrari/patterns/option-1/black.png',
            leftCoordinates: {
                x: -20,
                y: 8
            },
            centerCoordinates: {
                x: 65,
                y: 8
            },
            rightCoordinates: {
                x: 175,
                y: 8
            },
            width: 200,
            height: 150,
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#a8aeb0'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#a8aeb0'
            },
        }
    }, //Ferrari #2  - [Done]

    {
        templateId: '31',
        shopifyHandle: 'lamborghini-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/lamborghini/logos/bull/red-bull.png',
            leftCoordinates: {
                x: 30,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 230,
                y: 50
            },
            width: 55,
            height: 75,
            glow: {
                enabled: false,
                color: '#000000'
            }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/lamborghini/logos/svj/logo.png',
            centerCoordinates: {
                x: 135,
                y: -5
            },
            width: 85,
            height: 30,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    filePath: '/images/resources/cars/lamborghini/patterns/option-1',
                    url: '/images/resources/cars/lamborghini/patterns/option-1/red.png',
                },
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#000000'
            },
        },
        plateNumber: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#000000'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#cbcbcb'
            },
        }
    }, //Lamborghini #2 SVJ  - [Done]

    {
        templateId: '32',
        shopifyHandle: 'lamborghini-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/lamborghini/red-bull.png',
            leftCoordinates: {
                x: 30,
                y: 35
            },
            centerCoordinates: {
                x: 122,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 35
            },
            width: 85,
            height: 100,
            glow: {
                enabled: false,
                color: '#000000'
            }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/lamborghini/svj.png',
            centerCoordinates: {
                x: 135,
                y: -5
            },
            width: 85,
            height: 30,
            glow:{ enabled: true, color: '#000000' }
        },
        fadeSettings: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/bg/hexagons/hexagon-lambo.png',
                },
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#000000'
            },
        },
        plateNumber: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#000000'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#cbcbcb'
            },
        }
    }, //Ibis - [NOT DONE]

    {
        templateId: '33',
        shopifyHandle: 'lamborghini-5-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        preset: true,
        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/lamborghini/logos/crest/crest-red.png',
            leftCoordinates: {
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 140,
                y: 50
            },
            rightCoordinates: {
                x: 250,
                y: 50
            },
            width: 70,
            height: 70,
            glow: { enabled: false }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/backgrounds/hexagon/fade/bottom-up',
            url: '/images/resources/backgrounds/hexagon/fade/bottom-up/black.png',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 0,
                y: 0
            },
            rightCoordinates: {
                x: 0,
                y: 0
            },
            width: 350,
            height: 200,
        },
        backgroundSettings: {
            color: '#a5a5a5',
            background: { enabled: false },
            stroke: { enabled: false, color: ""}
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: { enabled: false },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: { enabled: false },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: { enabled: false },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        }
    }, // Lamborghini #3  - [Done]

    {
        shopifyHandle: 'miami-heat-red-template',
        templateId: '34',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',

        fadeSettings: {
            enabled: false,
        },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/basketball/miami-heat/miami-heat-red-black.svg',
            leftCoordinates: {
                x: 40,
                y: 60
            },
            centerCoordinates: {
                x: 140,
                y: 55
            },
            rightCoordinates: {
                x: 230,
                y: 60
            },
            width: 65,
            height: 65,
            glow:{ enabled: false }
        },
        backgroundSettings: {
            color: '#e90001',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Miami Heat Red - [DONE]

    {
            shopifyHandle: 'lamborghini-3-template',
            templateId: '35',
            preset: true,
            startPlatePosition: 'center',
            startPlateText: 'SAM  PLE',
            fadeSettings: {
                enabled: false,
            },
            patternSettings: { enabled: false },
            mainLogo: {
                enabled: true,
                name: "mercedes.svg",
                url: '/images/resources/cars/lamborghini/logos/crest/crest-2d.png',
                leftCoordinates: {
                    x: 40,
                    y: 50
                },
                centerCoordinates: {
                    x: 142,
                    y: 60
                },
                rightCoordinates: {
                    x: 250,
                    y: 50
                },
                width: 60,
                height: 65,
                glow:{ enabled: false, color: '#000000' }
            },
            bottomLogo: {
                enabled: true,
                name: "mercedes.svg",
                url: '/images/logos/flags/italian-rectangle-slanted.png',
                centerCoordinates: {
                    x: 100,
                    y: 0
                },
                width: 150,
                height: 3,
            },
            backgroundSettings: {
                color: '#ffffff',
                background: {
                    enabled: false,
                },
            },
            state:{
                color: '#000000',
                glow: {
                    enabled: false
                },
                shadow: {
                    enabled: false
                },
                stroke: {
                    enabled: false,
                },
            },
            plateNumber: {
                color: '#000000',
                glow: {
                    enabled: false
                },
                shadow: {
                    enabled: false
                },
                stroke: {
                    enabled: false,
                },
            },
            bottomText: {
                color: '#ffffff',
                glow: {
                    enabled: false
                },
                shadow: {
                    enabled: false
                },
                stroke: {
                    enabled: false
                },
            }
    }, // Lamborghini #4 [DONE]

    {
        shopifyHandle: 'lamborghini-4-template',
        templateId: '36',
        preset: true,
        startPlatePosition: 'left',
        startPlateText: 'SAMPL',
        fadeSettings: {
            enabled: false,
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/lamborghini/crest.svg',
            leftCoordinates: {
                x: 40,
                y: 65
            },
            centerCoordinates: {
                x: 145,
                y: 65
            },
            rightCoordinates: {
                x: 250,
                y: 65
            },
            width: 45,
            height: 45,
            glow:{ enabled: true, color: '#a100b0' }
        },
        bottomLogo: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/bg/hexagons/hexagon-fade-2.png',
                    color: '#000000'
                },
            },
        },
        state:{
            color: '#a100b0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        plateNumber: {
            color: '#a100b0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        bottomText: {
            color: '#a100b0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        }
    }, // Lamborghini #5 [NOT DONE]

    {
        shopifyHandle: 'dodge-hellcat-1-template',
        templateId: '37',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false},
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/dodge/hellcat-logo.svg',
            leftCoordinates: {
                x: -30,
                y: 5
            },
            centerCoordinates: {
                x: 110,
                y: 5
            },
            rightCoordinates: {
                x: 200,
                y: 5
            },
            width: 145,
            height: 145,
            glow:{ enabled: true, color: "#929292" }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: true,
                color: "#e90001"
            }
        },
        state:{
            color: '#e90001',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#e90001',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#e90001',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Dodge Hellcat #1 - [DONE]

    {
        shopifyHandle: 'dolphins-2-template',
        templateId: '38',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },

        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/football/dolphins/logos/dolphins-2-gray.png',
            leftCoordinates: {
                x: 10,
                y: 32
            },
            centerCoordinates: {
                x: 100,
                y: 35
            },
            rightCoordinates: {
                x: 210,
                y: 32
            },
            width: 125,
            height: 100,
            glow:{ enabled: true, color: '#000000' }
        },

        backgroundLogo:{
            hasPresetColors: false,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/sports/football/dolphins/flags/option-1',
            url: '/images/resources/sports/football/dolphins/flags/option-1/1.png',
            leftCoordinates: {
                x: 50,
                y: 0
            },
            centerCoordinates: {
                x: 143,
                y: 0
            },
            rightCoordinates: {
                x: 245,
                y: 0
            },
            width: 60,
            height: 165,
        },

        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/football/dolphins/text/text-color.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 15,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#008e97'
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: true,
                color: '#008e97'
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#008e97'
            },
        }
    }, //Dolphins #2 - [DONE]

    {
        shopifyHandle: 'dolphins-3-template-1',
        templateId: '39',
        preset: true,

        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },

        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/football/dolphins/logos/dolphins-2-gray.png',
            leftCoordinates: {
                x: 10,
                y: 32
            },
            centerCoordinates: {
                x: 100,
                y: 35
            },
            rightCoordinates: {
                x: 210,
                y: 32
            },
            width: 125,
            height: 100,
            glow:{ enabled: true, color: '#000000' }
        },

        backgroundLogo:{ enabled: false },

        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/football/dolphins/text/text.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 15,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#757575'
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: true,
                color: '#757575'
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#757575'
            },
        }
    }, //Dolphins #3 - [DONE]

    {
        templateId: '40',
        shopifyHandle: 'corvette-1-template-1',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',

        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },

        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/corvette/logos/1.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 120,
            height: 100,
            glow: {
                enabled: true,
                color: '#000000'
            }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/corvette/text-white.svg',
            centerCoordinates: {
                x: 106,
                y: 10
            },
            width: 145,
            height: 5,
            glow: {
                enabled: true,
                color: "#000000"
            }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/bg/hexagon.svg',
                    color: '#000000'
                },
            },
        },
        state:{
            color: '#cbcbcb',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: 'red'
            },
        },
        plateNumber: {
            color: '#cbcbcb',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: 'red'
            },
        },
        bottomText: {
            color: '#cbcbcb',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: 'red'
            },
        }
    }, //Corvette #1  - [Done]

    {
        shopifyHandle: 'lamborghini-6-template',
        templateId: '41',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false }, 
        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/lamborghini/logos/crest/crest.svg',
            leftCoordinates: {
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 142,
                y: 55
            },
            rightCoordinates: {
                x: 250,
                y: 50
            },
            width: 60,
            height: 60,
            glow: { enabled: true, color: '#ffcc40' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/bg/forged-carbon/option-1.png',
                    color: '#000000'
                }
            },
        },
        state:{
            color: '#282828',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffcc40'
            },
        },
        plateNumber: {
            color: '#282828',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffcc40'
            },
        },
        bottomText: {
            color: '#282828',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffcc40'
            },
        }
    }, // Lamborghini #6 [DONE]

    {
        shopifyHandle: 'copy-of-lamborghini-6-template',
        templateId: '42',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/lamborghini/crest-bull.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 128,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 85,
            height: 100,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/lamborghini/patterns/option-2',
            url: '/images/resources/cars/lamborghini/patterns/option-2/gray.png',
            leftCoordinates: {
                x: -20,
                y: 8
            },
            centerCoordinates: {
                x: 65,
                y: 8
            },
            rightCoordinates: {
                x: 175,
                y: 8
            },
            width: 200,
            height: 150,
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/lamborghini/text/old/text-old-white.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 20,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            pinstripe: {
                enabled: true,
                color: '#d8a016'
            }
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#d8a016'
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, // Lamborghini #7 [DONE] 

    {
        shopifyHandle: 'copy-of-ferrari-2-template',
        templateId: '43',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false, },
        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/ferrari/logos/crest/crest-black-square.png',
            leftCoordinates: {
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 250,
                y: 50
            },
            width: 55,
            height: 75,
            glow:{ enabled: false, color: "#000000" }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/logos/flags/italian-flag-background.png',
                    color: '#000000'
                }
            },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, // Ferrari italy #3 [DONE] 

    {
        shopifyHandle: 'copy-of-ferrari-2-template',
        templateId: '44',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false, },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/ferrari/crest-black-square.png',
            leftCoordinates: {
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 250,
                y: 50
            },
            width: 45,
            height: 75,
            glow:{ enabled: true, color: "#000000" }
        },
        bottomLogo: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/logos/flags/italian-flag-background.png',
                    color: '#000000'
                }
            },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, // Ferrari #4 [NOT DONE] 

    {
        shopifyHandle: 'rolls-royce-1-template',
        templateId: '45',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false, },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/rolls-royce/logo/rr/rr-teal.svg',
            leftCoordinates: {
                x: 30,
                y: 60
            },
            centerCoordinates: {
                x: 146,
                y: 60
            },
            rightCoordinates: {
                x: 250,
                y: 60
            },
            width: 50,
            height: 50,
            glow:{ enabled: true, color: "#000000" }
        },
        bottomLogo: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            pinstripe: {
                enabled: true,
                color: '#89f5b7'
            }
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, // Rolls Royce #1 [DONE] 

    {
        shopifyHandle: 'rolls-royce-2-template',
        templateId: '46',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false, },
        patternSettings: { enabled: false },
        backgroundLogo: { enanbled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/rolls-royce/logo/crest/rolls-royce.svg',
            leftCoordinates: {
                x: 40,
                y: 45
            },
            centerCoordinates: {
                x: 150,
                y: 45
            },
            rightCoordinates: {
                x: 250,
                y: 45
            },
            width: 45,
            height: 75,
            glow:{ enabled: true, color: "#000000" }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/rolls-royce/text/black-badge/black-badge-gray.png',
            centerCoordinates: {
                x: 106,
                y: 0
            },
            width: 145,
            height: 20,
            glow:{ enabled: true, color: "#000000" }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/bg/carbon-fiber-fade-up.png',
                    color: '#000000'
                }
            },
        },
        state:{
            color: '#a3a3a3',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#a3a3a3',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        bottomText: {
            color: '#a3a3a3',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, // Rolls Royce #2 [DONE] 

    {
        shopifyHandle: 'mercedes-1-template',
        templateId: '47',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false, },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/mercedes/logos/original/mercedes-gray.png',
            leftCoordinates: {
                x: 40,
                y: 45
            },
            centerCoordinates: {
                x: 145,
                y: 60
            },
            rightCoordinates: {
                x: 250,
                y: 45
            },
            width: 55,
            height: 55,
            glow:{ enabled: true, color: "#00a5b2" }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/mercedes/text/mercedes/mercedes-bottom-text.png',
            centerCoordinates: {
                x: 110,
                y: 0
            },
            width: 125,
            height: 15,
            glow:{ enabled: true, color: "#000000" }
        },
        patternSettings: {
            enabled: false,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/resources/cars/mercedes/backgrounds/option-1/mercedes-bg.png',
                    color: '#000000'
                }
            },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, // Mercedes #1 [DONE] 

    {
        shopifyHandle: 'palm-trees-1-template',
        templateId: '48',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false, },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/misc/palm-tree.png',
            leftCoordinates: {
                x: 40,
                y: 45
            },
            centerCoordinates: {
                x: 140,
                y: 50
            },
            rightCoordinates: {
                x: 250,
                y: 45
            },
            width: 65,
            height: 65,
            glow:{ enabled: true, color: "#959595" }
        },
        bottomLogo: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
        },
        state:{
            color: '#cacaca',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#cacaca',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#cacaca',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, // Palms #1 [DONE] 

    {
        shopifyHandle: 'porsche-6-template',
        templateId: '49',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png',
            leftCoordinates: {
                x: 15,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 275,
                y: 50
            },
            width: 55,
            height: 65,
            glow:{ enabled: true, color: '#b07800' }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/text/text-turbo.png',
            centerCoordinates: {
                x: 125,
                y: 5
            },
            width: 100,
            height: 10,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber/carbon-fiber-full-with-shadow.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Porsche #6 - [Done]


    
    {
        shopifyHandle: 'porsche-7-template',
        templateId: '50',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: {
            enabled: true,
            fadeStyle: 'center-circle-wide',
            fadeColor1: '#000000',
        },
        patternSettings: {
            enabled: true,
            position: "center",
            logo: {
                name: "logo-white.png",
                url: '/images/logos/brands/cars/porsche/porsche-text.svg'
            },
            opacity: 0.8,
            startingOffsetCoordinates: {
                x: 0,
                y: 0
            },
            startingScaleCoordinates: {
                x: 0.35,
                y: 0.5
            },
            repeatType: 'repeat'
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/porsche/porsche-logo.png',
            leftCoordinates: {
                x: 30,
                y: 50
            },
            centerCoordinates: {
                x: 140,
                y: 50
            },
            rightCoordinates: {
                x: 250,
                y: 50
            },
            width: 55,
            height: 65,
            glow:{ enabled: true, color: '#b07800' }
        },

        bottomLogo: {
            enabled: false,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#fdcc02'
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: true,
                color: '#fdcc02'
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#fdcc02'
            },
        }
    }, //Porsche #7 - [Done], Resizing Pattern, pinstripe

    {
        shopifyHandle: 'tesla-x-stormtrooper-template',
        templateId: '51',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: {
            enabled: false,
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/tesla/tesla-black.png',
            leftCoordinates: {
                x: 30,
                y: 60
            },
            centerCoordinates: {
                x: 145,
                y: 60
            },
            rightCoordinates: {
                x: 250,
                y: 60
            },
            width: 50,
            height: 50,
            glow:{ enabled: true, color: '#ffffff' }
        },

        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/tesla/stormtrooper-white.png',
            centerCoordinates: {
                x: 110,
                y: 5
            },
            width: 125,
            height: 10,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Tesla #1 - [Done]

    {
        shopifyHandle: 'lamborghini-8-template',
        templateId: '52',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: {
            enabled: true,
            fadeStyle: 'center-circle-inverted',
            fadeColor1: '#000000',
            // fadeColor2: '#00655a'
        },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/lamborghini/logos/crest/crest-black-2d.png',
            leftCoordinates: {
                x: 30,
                y: 55
            },
            centerCoordinates: {
                x: 142,
                y: 55
            },
            rightCoordinates: {
                x: 245,
                y: 55
            },
            width: 60,
            height: 60,
            glow:{ enabled: true, color: '#fffc00' }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/lamborghini/text/old/text-old-yellow.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 20,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/bg/hexagon.svg',
                    color: '#ffffff'
                },
            },
            stroke: { enabled: false }
        },

        state:{
            color: '#fffc00',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#fffc00',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: true,
                color: '#7b7b7b'
            },
        },
        bottomText: {
            color: '#fffc00',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Lambo #8 - [Done]

    {
        shopifyHandle: 'forged-carbon-1-template',
        templateId: '53',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/bg/forged-carbon/option-2.png',
                },
            },
            stroke: { enabled: false }
        },

        state:{
            color: '#fdcc00',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        plateNumber: {
            color: '#fdcc00',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        bottomText: {
            color: '#fdcc00',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Lambo #8 - [Done]

    {
        shopifyHandle: 'ferrari-5-template',
        templateId: '54',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/ferrari/logos/crest/crest.png',
            leftCoordinates: {
                x: 30,
                y: 55
            },
            centerCoordinates: {
                x: 150,
                y: 55
            },
            rightCoordinates: {
                x: 250,
                y: 55
            },
            width: 45,
            height: 55,
            glow:{ enabled: true, color: '#000000' }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/ferrari/flag/text-and-flag.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 0,
                y: -5
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 350,
            height: 30,
            glow:{ enabled: true, color: '#000000' }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber/carbon-fiber-full-with-shadow.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#f7ed31',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#f7ed31',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#f7ed31',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Ferrari #5 - [Done]

    {
        shopifyHandle: 'bmw-2-template',
        templateId: '55',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/bmw/logos/logo-new.png',
            leftCoordinates: {
                x: 26,
                y: 40
            },
            centerCoordinates: {
                x: 115,
                y: 40
            },
            rightCoordinates: {
                x: 230,
                y: 40
            },
            width: 85,
            height: 85,
            glow:{ enabled: true, color: '#000000' }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/bmw/flag/bottom/option-1.png',
            centerCoordinates: {
                x: 0,
                y: -5
            },
            width: 350,
            height: 30,
            glow:{ enabled: true, color: '#000000' }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber-fade-up.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/bmw/patterns/m/option-2',
            url: '/images/resources/cars/bmw/patterns/m/option-2/gray.png',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 0,
                y: 0
            },
            rightCoordinates: {
                x: 0,
                y: 0
            },
            width: 350,
            height: 200,
        },

        state:{
            color: '#2497d0',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        plateNumber: {
            color: '#2497d0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        bottomText: {
            color: '#2497d0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        }
    }, //BMW #2 - [Done]

    {
        templateId: '56',
        shopifyHandle: 'ferrari-6-template',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/ferrari/logos/horse/horse-black.svg',
            leftCoordinates: {
                x: 50,
                y: 35
            },
            centerCoordinates: {
                x: 135,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 35
            },
            width: 65,
            height: 95,
            glow: {
                enabled: true,
                color: '#000000'
            }
        },
        backgroundLogo:{
            hasPresetColors: false,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/ferrari/flag/flag-vertical/faded.png',
            url: '/images/resources/cars/ferrari/flag/flag-vertical/faded.png',
            leftCoordinates: {
                x: 70,
                y: 0
            },
            centerCoordinates: {
                x: 160,
                y: 0
            },
            rightCoordinates: {
                x: 250,
                y: 0
            },
            width: 25,
            height: 165,
        },
        bottomLogo: {
            enabled: false,
        },
        fadeSettings: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
        },
        state:{
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        }
    }, //Ferrari #6  - [Done], Resizing

    {
        shopifyHandle: 'carbon-fiber-1-template',
        templateId: '57',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber-fade-up.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        }
    }, //carbon fiber #2 - [Done]

    {
        shopifyHandle: 'mustang-shelby-2-template',
        templateId: '58',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/ford/logos/cobra/cobra-silver.png',
            leftCoordinates: {
                x: 30,
                y: 60
            },
            centerCoordinates: {
                x: 145,
                y: 45
            },
            rightCoordinates: {
                x: 250,
                y: 60
            },
            width: 55,
            height: 85,
            glow:{ enabled: true, color: '#ffffff' }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/ford/patterns/gt500/option-2',
            url: '/images/resources/cars/ford/patterns/gt500/option-2/gray.png',
            leftCoordinates: {
                x: 10,
                y: 5
            },
            centerCoordinates: {
                x: 265,
                y: 5
            },
            rightCoordinates: {
                x: 265,
                y: 5
            },
            width: 75,
            height: 150,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber-fade-up.png',
                },
            },
            stroke: { enabled: false }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false }
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: { enabled: false }
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false }
        }
    }, //Shelby #1  - [Done]


    {
        shopifyHandle: 'lamborghini-9-template',
        templateId: '59',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/lamborghini/logos/crest/crest.png',
            leftCoordinates: {
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 142,
                y: 55
            },
            rightCoordinates: {
                x: 250,
                y: 50
            },
            width: 60,
            height: 60,
            glow: { enabled: true, color: '#000000' }
        },

        bottomLogo: {
            enabled: false,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //lambo #9 - [Done]

    {
        shopifyHandle: 'lamborghini-10-template',
        templateId: '60',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/lamborghini/logos/crest/crest-black-2d.png',
            leftCoordinates: {
                x: 30,
                y: 55
            },
            centerCoordinates: {
                x: 142,
                y: 55
            },
            rightCoordinates: {
                x: 245,
                y: 55
            },
            width: 60,
            height: 60,
            glow:{ enabled: true, color: '#ff0000' }
        },
        bottomLogo: {
            enabled: false,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/logos/brands/cars/lamborghini/lamborghini-hexagon.png',
                    color: '#ffffff'
                },
            },
            stroke: { enabled: false }
        },

        state:{
            color: '#ff0000',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: true,
                color: '#000000'
            },
        },
        bottomText: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Lambo #8 - [Done]

    {
        shopifyHandle: 'rolls-royce-3-template',
        templateId: '61',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',

        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },

        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/rolls-royce/logo/rr/rr-orange-shadow.svg',
            leftCoordinates: {
                x: 30,
                y: 32
            },
            centerCoordinates: {
                x: 130,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 85,
            height: 100,
            glow:{ enabled: true, color: '#000000' }
        },

        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/rolls-royce/text/black-badge/black-badge-orange.png',
            centerCoordinates: {
                x: 105,
                y: 3
            },
            width: 145,
            height: 20,
            glow:{ enabled: true, color: "#000000" }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ff9800',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ff9800',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ff9800',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        }
    }, //rolls-royce #3 - [Done]

    {
        shopifyHandle: 'red-line-template',
        templateId: '62',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false }, 
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/logos/misc/red-line.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        }
    }, //BMW #2 - [Done]

    {
        shopifyHandle: 'dodge-hellcat-2-template',
        templateId: '63',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',

        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/dodge/redeye-logo.png',
            leftCoordinates: {
                x: 10,
                y: 15
            },
            centerCoordinates: {
                x: 95,
                y: 15
            },
            rightCoordinates: {
                x: 200,
                y: 15
            },
            width: 135,
            height: 135,
            glow:{ enabled: true, color: "#e90001" }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
        },
        state:{
            color: '#e90001',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#e90001',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#e90001',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //BMW #2 - [Done]

    {
        templateId: '65',
        shopifyHandle: 'corvette-2-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        preset: true,
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },

        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/corvette/logo/logo.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 120,
            height: 100,
            glow: {
                enabled: true,
                color: '#ffffff'
            }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/corvette/text-red.svg',
            centerCoordinates: {
                x: 106,
                y: 10
            },
            width: 145,
            height: 5,
            glow: {
                enabled: true,
                color: "#000000"
            }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/resources/backgrounds/hexagon/option-5/red.png',
                },
            },
        },
        state:{
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: 'red'
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        bottomText: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: true,
                color: 'red'
            },
        }
    }, //Corvette #1  - [Done]

    {
        templateId: '66',
        shopifyHandle: 'dodge-ram-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/dodge/logos/ram/1.png',
            leftCoordinates: {
                x: 30,
                y: 55
            },
            centerCoordinates: {
                x: 142,
                y: 55
            },
            rightCoordinates: {
                x: 245,
                y: 55
            },
            width: 60,
            height: 60,
            glow: {
                enabled: true,
                color: '#000000'
            }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/resources/cars/dodge/patterns/option-1/gray.png',
                },
            },
        },
        state:{
            color: '#a0a0a0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#a0a0a0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#a0a0a0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        }
    }, //Ram #1  - [Done]

    {
        templateId: '67',
        shopifyHandle: 'corvette-3-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/corvette/logo/logo.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 120,
            height: 100,
            glow: {
                enabled: true,
                color: '#ffffff'
            }
        },
        bottomLogo: {
            enabled: false
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    url: '/images/bg/carbon-fiber-fade-up.png',
                    color: '#000000'
                },
            },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false},
        }
    }, //Corvette #1  - [Done]

]
