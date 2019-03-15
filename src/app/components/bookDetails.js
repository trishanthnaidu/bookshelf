import React from 'react';
import { appState } from 'rootz';
import { subscribe } from 'react-rootz';
import { toggleDetailsPopup } from '../actions';
import { ratingsLayout as Ratings } from './ratings';
import { getAuthorDetails } from '../actions'; 

class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        subscribe({
            name: "BookDetails",
            scope: this,
            state: {
                book: {
                    authors: [],
                    title: { 
                        main: "", 
                        sub: ""
                    },
                    img: "",
                    ratings: "",
                    description: "",
                    authorID: []
                },
                isVisible: false
            }
        })
    }
    render() {
        const rtx = appState.get("$BookDetails");
        const authorDom = rtx.book.authorID.map((a, itr) => (
            <div className="book-author" onClick={() => getAuthorDetails(a)}>{rtx.book.authors[itr]}</div>
        ))
        return(
            <div className={`book-details-template animate ${rtx.isVisible ? "visible" : "hide"}`}>
                <div className="book-details-container">
                    <span className="close" onClick={() => toggleDetailsPopup(false)}></span>
                    <img className="book-img img-large" src={rtx.book.img} />
                    <div className="book-details">
                        <div className="book-title">{rtx.book.title.main}</div>
                        <div className="book-title-sub">{rtx.book.title.sub}</div>
                        {authorDom}
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