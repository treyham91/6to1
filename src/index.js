import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider, Query } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient, { gql } from 'apollo-boost';
import tokens from './Dashboard/Auth/keys/keys';

const client = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql/',
    fetchOptions: {
        credentials: "include"
    },
    request: operation => {
        const token = localStorage.getItem(tokens.AUTH_TOKEN) || localStorage.getItem(tokens.REFRESH_TOKEN)
        operation.setContext({
            headers: {
                Authorization: `JWT ${token}`,
            }
        })
    },
    clientState: {
        defaults: {
            isLoggedIn: !!localStorage.getItem(tokens.AUTH_TOKEN) || !!localStorage.getItem(tokens.REFRESH_TOKEN)
        }
    },
    cache: new InMemoryCache({
        Projects: {

        },
        BlogPosts: {

        },
        Messages: {

        },

    })
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
