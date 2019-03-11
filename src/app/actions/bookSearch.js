import React from 'react';
import axios from 'axios';
import {
    appState
} from 'rootz';
import {
    publish
} from 'react-rootz';
import {
    parseString
} from 'xml2js';

const proxy_server = "http://localhost:8080/";
const search_url = "https://www.goodreads.com/search.xml";
const key = "szRVKJ3ctH4e70yzdbqqA";

const getBookSummary = query => {
    return axios
        .get(`${proxy_server}${search_url}?key=${key}&q=${query}`)
        .then(response => response)
}

const getBooks = (query) => {
    getBookSummary(query.current.value).then((resp) =>
        parseString(
            resp.data,
            (err, result) => {
                appState.set("$BookShowcase", { books: result.GoodreadsResponse.search[0].results[0].work });
                publish("$BookShowcase");
            }
        )
    )
}

const isEnterKey = (e) => (
    e.which === 13 ? true : false
)

export {
    getBooks,
    isEnterKey
}