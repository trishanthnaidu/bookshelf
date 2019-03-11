import React from 'react';

const transform = (payload) => {
    const books = payload.map(book => {
        return {
            "ratings": book.average_rating[0],
            "img": book.best_book[0].image_url[0],
            "title": book.best_book[0].title,
            "author": book.best_book[0].author[0].name[0]
        }
    });
}

export default transform;
