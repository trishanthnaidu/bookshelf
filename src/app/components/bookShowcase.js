import React from 'react';
import { subscribe } from 'react-rootz';
import { appState } from 'rootz';
import { ratingsLayout as Ratings } from './ratings';

class BookShowcase extends React.Component {
    constructor(props) {
        super(props);
        subscribe({
            name: "BookShowcase",
            scope: this,
            state: {
                books: []
            }
        })
    }
    render() {
        let rtx = appState.get("$BookShowcase")
        let cards = rtx.books ? rtx.books.map(book => {
            return (
                <div key={book.best_book[0].title[0]} className="book-template animate">
                    <img className="book-img" src={book.best_book[0].image_url[0]} />
                    <div className="book-details">
                        <div className="book-title">{book.best_book[0].title[0]}</div>
                        <div className="book-author">{book.best_book[0].author[0].name[0]}</div>
                        <Ratings {...book} />
                    </div>
                </div>
            )
        }) : [];
        return (
            <div className="book-sections">
                {rtx.books.length > 0 && cards}
            </div>
        );
    }
}

export default BookShowcase;