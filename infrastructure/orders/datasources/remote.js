import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

export async function getOrders() {
    const apiUrl = `${process.env.SHOPIFY_GRAPHQL_URL}`;
    let orders = [];
    let hasNextPage = false;
    let endCursor = null;
    const apolloClient = () => {
        return new ApolloClient({
            uri: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
            },
            cache: new InMemoryCache(),
        });
    };
    const query = `
                query Orders($cursor: String){
                        orders(first: 250, after: $cursor) {
                        pageInfo{
                            hasNextPage
                            endCursor
                        }
                        edges {
                          node {
                            id
                            createdAt
                            displayFinancialStatus
                            name
                            email
                            customer{
                                displayName
                                email
                                phone
                            }
                            billingAddress{
                                phone
                                name
                            }
                            displayFulfillmentStatus
                            currentTotalPriceSet{
                                presentmentMoney{
                                    amount
                                }
                            }
                            lineItems(first: 50){
                                edges{
                                    node{
                                        product{
                                            id
                                            title
                                        }
                                        variant{
                                            id
                                            title
                                        }
                                        customAttributes{
                                            key
                                            value
                                        }
                                    }
                                }
                            }
                          }
                        }
                      }
                  }
              `;


    try {
        const { data } = await apolloClient().query({
            query: gql`${query}`
        });
        if (data) {
            hasNextPage = data.orders.pageInfo.hasNextPage;
            endCursor = data.orders.pageInfo.endCursor;
            const responseJson = data.orders.edges.map((edge) => edge.node);
            orders.push(...responseJson);
            while (hasNextPage) {
                console.log('Fetching Next Page', hasNextPage);
                const { data: nextData } = await apolloClient().query({
                    query: gql`${query}`,
                    variables: {
                        cursor: endCursor
                    }
                });
                const nextResponseJson = nextData.orders.edges.map((edge) => edge.node);
                orders.push(...nextResponseJson);
                hasNextPage = nextData.orders.pageInfo.hasNextPage;
                endCursor = nextData.orders.pageInfo.endCursor;
            }
            return orders;
        } else {
            console.error('Error Getting Orders:', data);
            if (data.status === 401) {
                return 'Unauthenticated';
            }
        }
    } catch (error) {
        console.error('Error de red:', error);
    }

}
