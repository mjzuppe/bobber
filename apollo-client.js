import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://debys6irnnahjn6i7fy6iupxo4.appsync-api.us-east-1.amazonaws.com/graphql",
    cache: new InMemoryCache(),
    headers: {"x-api-key": "da2-thfcqrvp2ffpxfgm3r3k7wizii"}
});

export default client;