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
const search_url_details = "https://www.goodreads.com/book/show/";
const key = "szRVKJ3ctH4e70yzdbqqA";

const getBookSummary = query => {
    return axios
        .get(`${proxy_server}${search_url}?key=${key}&q=${query}`)
        .then(response => response)
}

const getBooks = (query, isDetail) => {
    if(!isDetail) {
        getBookSummary(query.current.value).then((resp) =>
            parseString(
                resp.data,
                (err, result) => {
                    appState.set("$BookShowcase", { books: result.GoodreadsResponse.search[0].results[0].work });
                    publish("$BookShowcase");
                }
            )
        )
    } else {
        let cachedBook = appState.get(`books.${query.best_book[0].id[0]._}`);
        if(cachedBook) {
            appState.set("$BookDetails", {book : cachedBook});
            publish("$BookDetails");
        } else {
            getBookDetails(query.best_book[0].id[0]._).then(resp =>
                parseString(
                    resp.data,
                    (err, result) => {
                        let authors = [];
                        let authorID = [];
                        result.GoodreadsResponse.book[0].authors.forEach(author => {
                            // authors === "" ? authors = author.author[0].name[0] : authors += ", " + author.author[0].name[0];
                            authorID.push(author.author[0].id[0]);
                            authors.push(author.author[0].name[0]);
                        });
                        const book = {
                            authors,
                            title: { 
                                main: typeof result.GoodreadsResponse.book[0].work[0].original_title[0] === "string" ? 
                                             result.GoodreadsResponse.book[0].work[0].original_title[0] : 
                                             result.GoodreadsResponse.book[0].title[0], 
                                sub: result.GoodreadsResponse.book[0].title[0].replace(result.GoodreadsResponse.book[0].work[0].original_title[0], "")
                            },
                            img: result.GoodreadsResponse.book[0].image_url[0],
                            ratings: result.GoodreadsResponse.book[0].average_rating[0],
                            description: result.GoodreadsResponse.book[0].description[0].replace(/\<br \/>/g, "\n").replace(/<b>/g, "").replace(/<\/br>/g, "").replace(/<\/b>/g, ""),
                            authorID
                        }
                        appState.set(`books.${query.best_book[0].id[0]._}`, book);
                        appState.set("$BookDetails", { book });
                        publish("$BookDetails");
                    }
                )
            );
        }
    }
}

const getBookDetails = query => {
    return axios
        .get(`${proxy_server}${search_url_details}${query}.xml?key=${key}`)
        .then(response => response);
    // "2767052-the-hunger-games?from_search=true"
}

const isEnterKey = (e) => (
    e.which === 13 ? true : false
)

export {
    getBooks,
    isEnterKey
}