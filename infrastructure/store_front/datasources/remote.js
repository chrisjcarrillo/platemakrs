import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

export async function createCustomer(email, firstName, lastName, phone, password) {

    const apiUrl = "https://platemakrs.myshopify.com/api/2024-01/graphql.json";
    const createCustomerMutation = `
    mutation customerCreate {
  customerCreate(input: {email: "${email}", password: "${password}", firstName: "${firstName}", lastName: "${lastName}", phone: "${phone}" }){
    customer {
      email
      firstName
      id
      lastName
      orders(first: 10) {
        nodes {
          id
          lineItems {
            nodes {
              title
              quantity
            }
          }
        }
      }
    }
  }
}
    `;
    const apolloClient = () => {
        return new ApolloClient({
            uri: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN
            },
            cache: new InMemoryCache(),
        });
    };
    const { data } = await apolloClient().mutate({
        mutation: gql`${createCustomerMutation}`
    });

    return data;
}

export async function customerUpdate(accessToken, firstName, lastName, email, phone) {
    const apiUrl = "https://platemakrs.myshopify.com/api/2024-01/graphql.json";
    const query = `
  mutation customerUpdate {
  customerUpdate(customerAccessToken: "${accessToken}", customer: {firstName: "${firstName}", lastName: "${lastName}", email: "${email}", phone: "${phone}"}) {
    customer {
      id
      email
      firstName
      lastName
    }
    customerUserErrors {
      code
      field
      message
    }
    userErrors {
      field
      message
    }
  }
}
    `;
    const apolloClient = () => {
        return new ApolloClient({
            uri: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'Shopify-Storefront-Private-Token': "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"
            },
            cache: new InMemoryCache(),
        });
    };
    const { data } = await apolloClient().mutate({
        mutation: gql`${query}`
    });
    return data;
}
export async function addressCreate(accessToken, address, city, province, zip, country) {
    const apiUrl = "https://platemakrs.myshopify.com/api/2024-01/graphql.json";
    const query = `
  mutation addressCreate {
  customerAddressCreate(
    address: {address1: "${address}", city: "${city}", province: "${province}", zip: "${zip}", country: "${country}"}
    customerAccessToken: "${accessToken}"
  ) {
    customerAddress {
      address1
      city
      id
      province
      zip
      country
    }
  }
}
    `;
    const apolloClient = () => {
        return new ApolloClient({
            uri: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'Shopify-Storefront-Private-Token': "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"
            },
            cache: new InMemoryCache(),
        });
    };
    const { data } = await apolloClient().mutate({
        mutation: gql`${query}`
    });
    return data;
}
export async function addressUpdate(accessToken, addressId, address, city, province, zip, country) {
    const apiUrl = "https://platemakrs.myshopify.com/api/2024-01/graphql.json";
    const query = `
  mutation addressUpdate {
  customerAddressUpdate(
    address: {address1: "${address}", city: "${city}", country: "${country}", province: "${province}", zip: "${zip}"}
    customerAccessToken: "${accessToken}"
    id: "${addressId}"
  ) {
    customerAddress {
      address1
      city
      country
      id
      province
      provinceCode
      zip
    }
  }
}
    `;
    const apolloClient = () => {
        return new ApolloClient({
            uri: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'Shopify-Storefront-Private-Token': "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"
            },
            cache: new InMemoryCache(),
        });
    };
    const { data } = await apolloClient().mutate({
        mutation: gql`${query}`
    });
    return data;
}
export async function forgotPassword(email) {

    const apiUrl = "https://platemakrs.myshopify.com/api/2024-01/graphql.json";
    const query = `
  mutation customerRecover {
  customerRecover(email: "${email}") {
    customerUserErrors {
      code
      message
    }
    userErrors {
      message
    }
  }
}
    `;
    const apolloClient = () => {
        return new ApolloClient({
            uri: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'Shopify-Storefront-Private-Token': "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"
            },
            cache: new InMemoryCache(),
        });
    };
    const { data } = await apolloClient().mutate({
        mutation: gql`${query}`
    });
    return data;
}

export async function getAccessToken(email, password) {
    const apiUrl = "https://platemakrs.myshopify.com/api/2024-01/graphql.json";
    const apolloClient = () => {
        return new ApolloClient({
            uri: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'Shopify-Storefront-Private-Token': "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"
            },
            cache: new InMemoryCache(),
        });
    };


    const query = `
  mutation customerAccessTokenCreate{
  customerAccessTokenCreate(input: {
    email: "${email}",
    password: "${password}"
  }) {
    customerAccessToken {
      accessToken
      expiresAt
    }
    customerUserErrors {
      code
      message
    }
    userErrors {
      field
      message
    }
  }
}
`;

    const { data } = await apolloClient().mutate({
        mutation: gql`${query}`
    });

    if (data.customerAccessTokenCreate.customerAccessToken) {
                console.log(data.customerAccessTokenCreate.customerAccessToken.accessToken);
                const customerData = await getCustomerData(data.customerAccessTokenCreate.customerAccessToken.accessToken);
                return {
                    customerData,
                    accessToken: data.customerAccessTokenCreate.customerAccessToken.accessToken
                };
    }

    console.log(data);
    return data;
}


export async function getCustomerData(customerAccessToken, startCursor) {
    const apiUrl = "https://platemakrs.myshopify.com/api/2024-01/graphql.json";
    const query = `
  query getCustomerData {
  customer(customerAccessToken: "${customerAccessToken}") {
    email
    id
    displayName
    firstName
    lastName
    metafield(key: "dob") {
      value
    }
    defaultAddress {
      address1
      address2
    }
    orders(first: 10 ${startCursor ? `, after: "${startCursor}"` : ''}) {
      edges {
        cursor
        node {
          id
          fulfillmentStatus
          statusUrl
          totalPrice {
            amount
            currencyCode
          }
          orderNumber
          lineItems(first: 10){
            edges {
              node {
                title
                quantity
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
      totalCount
    }
  }
}
    `;

    console.log('Query:', query);
    const apolloClient = () => {
        return new ApolloClient({
            uri: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'Shopify-Storefront-Private-Token': "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"
            },
            cache: new InMemoryCache(),
        });
    };

    const { data } = await apolloClient().query({
        query: gql`${query}`
    });

    console.log(data);
    return data;
}