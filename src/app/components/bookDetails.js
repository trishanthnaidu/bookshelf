import React from 'react';
import { appState } from 'rootz';
import { subscribe } from 'react-rootz';
import { toggleDetailsPopup } from '../actions';
import { ratingsLayout as Ratings } from './ratings';

class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        subscribe({
            name: "BookDetails",
            scope: this,
            state: {
                book: {
                    authors: "",
                    title: { 
                        main: "", 
                        sub: ""
                    },
                    img: "",
                    ratings: "",
                    description: ""
                },
                isVisible: false
            }
        })
    }
    render() {
        const rtx = appState.get("$BookDetails");
        return(
            <div className={`book-details-template animate ${rtx.isVisible ? "visible" : "hide"}`}>
                <div className="book-details-container">
                    <span className="close" onClick={() => toggleDetailsPopup(false)}></span>
                    <img className="book-img img-large" src={rtx.book.img} />
                    <div className="book-details">
                        <div className="book-title">{rtx.book.title.main}</div>
                        <div className="book-title-sub">{rtx.book.title.sub}</div>
                        <div className="book-author">{rtx.book.authors}</div>
                        {rtx.book.ratings && 
                            <Ratings {...{book: rtx.book, isDetail: true}}/>
                        }
                        {rtx.book.description && 
                            <React.Fragment>
                                <div className="book-description-text">Description</div>
                                <div className="book-description">
                                    <p>{rtx.book.description}</p>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default BookDetails