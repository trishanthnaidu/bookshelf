import React from 'react';
import { appState } from 'rootz';
import { publish } from 'react-rootz';
import { getBooks } from './bookSearch';

const toggleDetailsPopup = (flag, book) => {
    if(flag) {
        appState.set("$BookDetails", { 
            isVisible: true, 
            book: {
                authors: "",
                title: { 
                    main: "", 
                    sub: ""
                },
                img: "",
                ratings: "",
                description: ""
            } 
        });
        getBooks(book, true);
    } else {
        appState.set("$BookDetails", { isVisible: false });
    }
    publish("$BookDetails");
}

export {
    toggleDetailsPopup
}