export const states = [
    {
        "value": "Alabama",
        "label": "AL"
    },
    {
        "value": "Alaska",
        "label": "AK"
    },
    {
        "value": "American Samoa",
        "label": "AS"
    },
    {
        "value": "Arizona",
        "label": "AZ"
    },
    {
        "value": "Arkansas",
        "label": "AR"
    },
    {
        "value": "California",
        "label": "CA"
    },
    {
        "value": "Colorado",
        "label": "CO"
    },
    {
        "value": "Connecticut",
        "label": "CT"
    },
    {
        "value": "Delaware",
        "label": "DE"
    },
    {
        "value": "District Of Columbia",
        "label": "DC"
    },
    {
        "value": "Federated States Of Micronesia",
        "label": "FM"
    },
    {
        "value": 'Florida',
        "label": "FL"
    },
    {
        "value": 'Georgia',
        "label": "GA"
    },
    {
        "value": "Guam",
        "label": "GU"
    },
    {
        "value": "Hawaii",
        "label": "HI"
    },
    {
        "value": "Idaho",
        "label": "ID"
    },
    {
        "value": "Illinois",
        "label": "IL"
    },
    {
        "value": "Indiana",
        "label": "IN"
    },
    {
        "value": "Iowa",
        "label": "IA"
    },
    {
        "value": "Kansas",
        "label": "KS"
    },
    {
        "value": "Kentucky",
        "label": "KY"
    },
    {
        "value": "Louisiana",
        "label": "LA"
    },
    {
        "value": "Maine",
        "label": "ME"
    },
    {
        "value": "Marshall Islands",
        "label": "MH"
    },
    {
        "value": "Maryland",
        "label": "MD"
    },
    {
        "value": "Massachusetts",
        "label": "MA"
    },
    {
        "value": "Michigan",
        "label": "MI"
    },
    {
        "value": "Minnesota",
        "label": "MN"
    },
    {
        "value": "Mississippi",
        "label": "MS"
    },
    {
        "value": "Missouri",
        "label": "MO"
    },
    {
        "value": "Montana",
        "label": "MT"
    },
    {
        "value": "Nebraska",
        "label": "NE"
    },
    {
        "value": "Nevada",
        "label": "NV"
    },
    {
        "value": "New Hampshire",
        "label": "NH"
    },
    {
        "value": "New Jersey",
        "label": "NJ"
    },
    {
        "value": "New Mexico",
        "label": "NM"
    },
    {
        "value": "New York",
        "label": "NY"
    },
    {
        "value": "North Carolina",
        "label": "NC"
    },
    {
        "value": "North Dakota",
        "label": "ND"
    },
    {
        "value": "Northern Mariana Islands",
        "label": "MP"
    },
    {
        "value": "Ohio",
        "label": "OH"
    },
    {
        "value": "Oklahoma",
        "label": "OK"
    },
    {
        "value": "Oregon",
        "label": "OR"
    },
    {
        "value": "Palau",
        "label": "PW"
    },
    {
        "value": "Pennsylvania",
        "label": "PA"
    },
    {
        "value": "Puerto Rico",
        "label": "PR"
    },
    {
        "value": "Rhode Island",
        "label": "RI"
    },
    {
        "value": "South Carolina",
        "label": "SC"
    },
    {
        "value": "South Dakota",
        "label": "SD"
    },
    {
        "value": "Tennessee",
        "label": "TN"
    },
    {
        "value": 'Texas',
        "label": "TX"
    },
    {
        "value": "Utah",
        "label": "UT"
    },
    {
        "value": "Vermont",
        "label": "VT"
    },
    {
        "value": "Virgin Islands",
        "label": "VI"
    },
    {
        "value": "Virginia",
        "label": "VA"
    },
    {
        "value": "Washington",
        "label": "WA"
    },
    {
        "value": "West Virginia",
        "label": "WV"
    },
    {
        "value": "Wisconsin",
        "label": "WI"
    },
    {
        "value": "Wyoming",
        "label": "WY"
    }
]

export const vehicleType = [
    {     
        "value": "Car",
        "label": "car"
    },
    // {
    //     "value": "Motorcycle",
    //     "label": "motorcycle"
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
        link: 'https://v2.platemakrs.com/'
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
        text: 'Build Your Design',
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
        text: 'Hassle Free Experience',
        link: 'https://v2.platemakrs.com/we-design-it'
    },
    {
        text: 'Gift Card',
        link: '/giftcard'
    },
    {
        text: 'Contact',
        link: 'https://v2.platemakrs.com/contact'
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
        text: 'Build Your Design',
        link: '/products-custom'
    },
    {
        text: 'Hassle Free Experience',
        link: '/hassle-free'
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
        text: "Terms Conditions & Disclaimer ",
        link: "/terms"
    },
    {
        text: "Refund Policy",
        link: "/refund-policy"
    },
    {
        text: "Privacy Policy",
        link: "/privacy-policy"
    }
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