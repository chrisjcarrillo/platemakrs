export async function upsGenerateToken() {
    const formData = {
        grant_type: 'client_credentials'
    };

    const resp = await fetch(
        `https://wwwcie.ups.com/security/v1/oauth/token`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-merchant-id': 'string',
                Authorization: 'Basic ' + Buffer.from(`${process.env.UPS_CLIENT_ID}:${process.env.UPS_CLIENT_SECRET}`).toString('base64')
            },
            body: new URLSearchParams(formData).toString()
        }
    );

    return await resp.json();
}

export async function createShippingLabel(token, shippingData, shippingType) {

    const shipperData = {
        Name: 'Platemakrs LLC',
        Phone: {
            Number: '9546397331',
        },
        ShipperNumber: 'H86Y95',
        Address: {
            AddressLine: ['4023 NE 6TH AVE'],
            City: 'Oakland park',
            StateProvinceCode: 'FL',
            PostalCode: '33334',
            CountryCode: 'US'
        }
    }

    const companyData = {
        Name: 'Platemakrs LLC',
        Phone: {
            Number: '9546397331',
        },
        Address: {
            AddressLine: ['4023 NE 6TH AVE'],
            City: 'Oakland park',
            StateProvinceCode: 'FL',
            PostalCode: '33334',
            CountryCode: 'US'
        }
    }

    const customerData = {
        Name: shippingData.shipping_address?.name || shippingData.billing_address?.name,
        Phone: {
            Number: shippingData.shipping_address?.phone || shippingData.billing_address?.phone,
        },
        Address: {
            AddressLine: [shippingData.shipping_address?.address1 || shippingData.billing_address?.address1],
            City: shippingData.shipping_address?.city || shippingData.billing_address?.city,
            StateProvinceCode: shippingData.shipping_address?.province_code || shippingData.billing_address?.province_code,
            PostalCode: shippingData.shipping_address?.zip || shippingData.billing_address?.zip,
            CountryCode: shippingData.shipping_address?.country_code || shippingData.billing_address?.country_code
        }
    }

    const body = shippingType === 'RETURN'
        ? { ShipmentRequest: {
                Request: {
                    RequestOption: 'nonvalidate',
                },
                Shipment: {
                    ReturnService: {
                        Code: '9'
                    },
                    Shipper: shipperData,
                    ShipTo: companyData,
                    ShipFrom: customerData,
                    PaymentInformation: {
                        ShipmentCharge: {
                            Type: "01",
                            BillShipper: {
                                AccountNumber: "H86Y95"
                            }
                        }
                    },
                    Service: {
                        Code: shippingData.shipping_lines[0].code
                    },
                    Package: {
                        Description: "License Plate",
                        Packaging: {
                            Code: "02"
                        },
                        PackageWeight: {
                            UnitOfMeasurement: {
                                Code: "LBS",
                                Description: "Pounds"
                            },
                            Weight: "1.6"
                        }
                    }
                },
                LabelSpecification: {
                    LabelImageFormat: {
                        Code: 'GIF',
                        Description: 'GIF'
                    },
                }
            }
        }
        : { ShipmentRequest: {
                Request: {
                    RequestOption: 'nonvalidate',
                },
                Shipment: {
                    Shipper: shipperData,
                    ShipTo: customerData,
                    ShipFrom: companyData,
                    PaymentInformation: {
                        ShipmentCharge: {
                            Type: "01",
                            BillShipper: {
                                AccountNumber: "H86Y95"
                            }
                        }
                    },
                    Service: {
                        Code: shippingData.shipping_lines[0].code
                    },
                    Package: {
                        Description: "License Plate",
                        Packaging: {
                            Code: "02"
                        },
                        PackageWeight: {
                            UnitOfMeasurement: {
                                Code: "LBS",
                                Description: "Pounds"
                            },
                            Weight: "1.6"
                        }
                    }
                },
                LabelSpecification: {
                    LabelImageFormat: {
                        Code: 'GIF',
                        Description: 'GIF'
                    },
                }
            }
        }

    console.log(JSON.stringify(body));

    const version = 'v2';
    const resp = await fetch(
        `https://wwwcie.ups.com/api/shipments/${version}/ship`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                transId: shippingData.shipping_lines[0].id,
                transactionSrc: 'testing',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(
                body
            )
        }
    );
    const data = await resp.json();
    console.log(data);
    return data;
}

export async function trackShipping(trackingNumber, token) {
    const formData = {
        grant_type: 'client_credentials'
    };
    // This is a random number that we are using as a transaction ID
    const r = Math.random().toString(36).substring(7);
    const resp = await fetch(
        `https://wwwcie.ups.com/api/track/v1/details/${trackingNumber}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-merchant-id': 'string',
                'transId': r,
                'transactionSrc': 'testing',
                Authorization: `Bearer ${token}`
            },
            body: new URLSearchParams(formData).toString()
        }
    );

    return await resp.json();
}

export async function getRatings(shippingData, shippingType, token) {
    const shipperData = {
        Name: 'Platemakrs LLC',
        Phone: {
            Number: '9546397331',
        },
        ShipperNumber: 'H86Y95',
        Address: {
            AddressLine: ['4023 NE 6TH AVE'],
            City: 'Oakland park',
            StateProvinceCode: 'FL',
            PostalCode: '33334',
            CountryCode: 'US'
        }
    }

    const companyData = {
        Name: 'Platemakrs LLC',
        Phone: {
            Number: '9546397331',
        },
        Address: {
            AddressLine: ['4023 NE 6TH AVE'],
            City: 'Oakland park',
            StateProvinceCode: 'FL',
            PostalCode: '33334',
            CountryCode: 'US'
        }
    }

    const customerData = {
        Name: shippingData.shipping_address?.name || shippingData.billing_address?.name,
        Phone: {
            Number: shippingData.shipping_address?.phone || shippingData.billing_address?.phone,
        },
        Address: {
            AddressLine: [shippingData.shipping_address?.address1 || shippingData.billing_address?.address1],
            City: shippingData.shipping_address?.city || shippingData.billing_address?.city,
            StateProvinceCode: shippingData.shipping_address?.province_code || shippingData.billing_address?.province_code,
            PostalCode: shippingData.shipping_address?.zip || shippingData.billing_address?.zip,
            CountryCode: shippingData.shipping_address?.country_code || shippingData.billing_address?.country_code
        }
    }

    const body = shippingType === 'RETURN'
        ? { RateRequest: {
                Request: {
                    TransactionReference: {
                        CustomerContext: "CustomerContext"
                    }
                },
                Shipment: {
                    ReturnService: {
                        Code: '9'
                    },
                    Shipper: shipperData,
                    ShipTo: companyData,
                    ShipFrom: customerData,
                    PaymentDetails: {
                        ShipmentCharge: {
                            Type: "01",
                            BillShipper: {
                                AccountNumber: "H86Y95"
                            }
                        }
                    },
                    Package: {
                        PackagingType: {
                            Code: "02"
                        },
                        PackageWeight: {
                            UnitOfMeasurement: {
                                Code: "LBS",
                                Description: "Pounds"
                            },
                            Weight: "1.6"
                        }
                    },
                    DeliveryTimeInformation: {
                        PackageBillType: "03"
                    }
                },
            }
        }
        : { RateRequest: {
                Request: {
                    TransactionReference: {
                        CustomerContext: "CustomerContext"
                    }
                },
                Shipment: {
                    ReturnService: {
                        Code: '9'
                    },
                    Shipper: shipperData,
                    ShipTo: customerData,
                    ShipFrom: companyData,
                    PaymentDetails: {
                        ShipmentCharge: {
                            Type: "01",
                            BillShipper: {
                                AccountNumber: "H86Y95"
                            }
                        }
                    },
                    Package: {
                        PackagingType: {
                            Code: "02"
                        },
                        PackageWeight: {
                            UnitOfMeasurement: {
                                Code: "LBS",
                                Description: "Pounds"
                            },
                            Weight: "1.6"
                        }
                    },
                    DeliveryTimeInformation: {
                        PackageBillType: "03"
                    }
                },
            }
        }

    console.log(JSON.stringify(body));

    const version = 'v2403';
    const resp = await fetch(
        `https://wwwcie.ups.com/api/rating/${version}/Shoptimeintransit`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(
                body
            )
        }
    );
    const data = await resp.json();
    console.log(data);
    return data;
}
