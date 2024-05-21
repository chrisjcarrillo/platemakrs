export const recommendedStates = [
    {
        label: 'Florida',
        value: "FL"
    },
    {
        label: 'Georgia',
        value: "GA"
    },
    {
        label: 'Texas',
        value: "TX"
    }
]

export const states = [
    {
        "label": "Alabama",
        "value": "AL"
    },
    {
        "label": "Alaska",
        "value": "AK"
    },
    {
        "label": "American Samoa",
        "value": "AS"
    },
    {
        "label": "Arizona",
        "value": "AZ"
    },
    {
        "label": "Arkansas",
        "value": "AR"
    },
    {
        "label": "California",
        "value": "CA"
    },
    {
        "label": "Colorado",
        "value": "CO"
    },
    {
        "label": "Connecticut",
        "value": "CT"
    },
    {
        "label": "Delaware",
        "value": "DE"
    },
    {
        "label": "District Of Columbia",
        "value": "DC"
    },
    {
        "label": "Federated States Of Micronesia",
        "value": "FM"
    },
    {
        "label": "Guam",
        "value": "GU"
    },
    {
        "label": "Hawaii",
        "value": "HI"
    },
    {
        "label": "Idaho",
        "value": "ID"
    },
    {
        "label": "Illinois",
        "value": "IL"
    },
    {
        "label": "Indiana",
        "value": "IN"
    },
    {
        "label": "Iowa",
        "value": "IA"
    },
    {
        "label": "Kansas",
        "value": "KS"
    },
    {
        "label": "Kentucky",
        "value": "KY"
    },
    {
        "label": "Louisiana",
        "value": "LA"
    },
    {
        "label": "Maine",
        "value": "ME"
    },
    {
        "label": "Marshall Islands",
        "value": "MH"
    },
    {
        "label": "Maryland",
        "value": "MD"
    },
    {
        "label": "Massachusetts",
        "value": "MA"
    },
    {
        "label": "Michigan",
        "value": "MI"
    },
    {
        "label": "Minnesota",
        "value": "MN"
    },
    {
        "label": "Mississippi",
        "value": "MS"
    },
    {
        "label": "Missouri",
        "value": "MO"
    },
    {
        "label": "Montana",
        "value": "MT"
    },
    {
        "label": "Nebraska",
        "value": "NE"
    },
    {
        "label": "Nevada",
        "value": "NV"
    },
    {
        "label": "New Hampshire",
        "value": "NH"
    },
    {
        "label": "New Jersey",
        "value": "NJ"
    },
    {
        "label": "New Mexico",
        "value": "NM"
    },
    {
        "label": "New York",
        "value": "NY"
    },
    {
        "label": "North Carolina",
        "value": "NC"
    },
    {
        "label": "North Dakota",
        "value": "ND"
    },
    {
        "label": "Northern Mariana Islands",
        "value": "MP"
    },
    {
        "label": "Ohio",
        "value": "OH"
    },
    {
        "label": "Oklahoma",
        "value": "OK"
    },
    {
        "label": "Oregon",
        "value": "OR"
    },
    {
        "label": "Palau",
        "value": "PW"
    },
    {
        "label": "Pennsylvania",
        "value": "PA"
    },
    {
        "label": "Puerto Rico",
        "value": "PR"
    },
    {
        "label": "Rhode Island",
        "value": "RI"
    },
    {
        "label": "South Carolina",
        "value": "SC"
    },
    {
        "label": "South Dakota",
        "value": "SD"
    },
    {
        "label": "Tennessee",
        "value": "TN"
    },
    {
        "label": "Utah",
        "value": "UT"
    },
    {
        "label": "Vermont",
        "value": "VT"
    },
    {
        "label": "Virgin Islands",
        "value": "VI"
    },
    {
        "label": "Virginia",
        "value": "VA"
    },
    {
        "label": "Washington",
        "value": "WA"
    },
    {
        "label": "West Virginia",
        "value": "WV"
    },
    {
        "label": "Wisconsin",
        "value": "WI"
    },
    {
        "label": "Wyoming",
        "value": "WY"
    }
]

export const vehicleType = [
    {     
        "label": "Car",
        "value": "car"
    },
    // {
    //     "label": "Motorcycle",
    //     "value": "motorcycle"
    // }
]

export const platePosition = [
    {     
        "label": "Center",
        "value": "center"
    },
    {
        "label": "Left",
        "value": "left"
    },
    {
        "label": "Right",
        "value": "right"
    }
]

export const returnMoney = (value: any) => {
    return parseInt(value).toFixed(2)
}

export const initialState = "Florida";
export const initialLicensePlate = "SAM PLE";


export const menuLayout = [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'Pre-Made Designs',
        id: '#pre-made',
        subLinks: [{
            text: 'Car Templates',
            link: '/products'
        },{
            text: 'Motorcycle Templates',
            link: '/products/motorcycles'
        }],
    },
    {
        text: 'Build your plate',
        link: '/products-custom',
        id: '#build-your-own',
        subLinks: [{
            text: 'Car Templates',
            link: '/products-custom'
        },{
            text: 'Motorcycle Templates',
            link: '/products/motorcycles/products-custom'
        }],
    },
    {
        text: 'Work with a designer',
        link: '/designer'
    },
    {
        text: 'Gift Card',
        link: '/giftcard'
    },
    {
        text: 'Contact',
        link: '/contact'
    },
]


export const footerLinksOne = [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'Pre-Made Designs',
        link: '/products'
    },
    {
        text: 'Build your plate',
        link: '/products-custom'
    },
    {
        text: 'Work with a designer',
        link: '/designer'
    },
    {
        text: 'Gift Card',
        link: '/giftcard'
    },
]

export const footerLinksTwo = [
    {
        text: 'Contact',
        link: '/contact'
    },
    {
        text: "Refund Policy",
        link: "/refund-policy"
    },
]

export const policyLinks = [
    // {
    //     text: "Privacy Policy",
    //     link: "https://baddworldwide.com/privacy-policy/"
    // },
    // {
    //     text: "Shipping Policy",
    //     link: "https://baddworldwide.com/shipping-policy/"
    // },
    {
        text: "Refund Policy",
        link: "/refund-policy"
    }
]

export const socialMediaLinks = [
    {
        imageLinkWhite: "images/social-media/instagram-white.png",
        link: "https://www.instagram.com/platemakrs"
    },
    {
        imageLinkWhite: "images/social-media/facebook-white.png",
        link: "https://www.facebook.com/platemakrss"
    },
]