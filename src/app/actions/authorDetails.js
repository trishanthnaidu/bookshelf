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
const search_url_author = "https://www.goodreads.com/author/show/";
const key = "szRVKJ3ctH4e70yzdbqqA";

const getAuthorDetails = query => {
    debugger;
    return axios
        .get(`${proxy_server}${search_url_author}${query}.xml?key=${key}`)
        .then(response => parseString(response.data, (err, result)=>{
            const name = result.GoodreadsResponse.author[0].name[0];
            const about = result.GoodreadsResponse.author[0].about[0];
            const gender = result.GoodreadsResponse.author[0].gender[0];
            alert(`name: ${name} gender: ${gender} about: ${about}`);
        }));
}

export { getAuthorDetails }