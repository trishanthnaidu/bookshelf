import React from 'react';
import {
    getBooks,
    isEnterKey
} from '../actions';

class BookSearch extends React.Component {
    input = React.createRef();
    render() {
        return (
            <div className="search-module">
                <div className="search-wrapper">
                    <input
                        className="input-search-book"
                        ref={this.input}
                        onKeyUp={
                            e => isEnterKey(e) && getBooks(this.input)
                        }
                        placeholder="Search your favorite book..." />
                    <button
                        className="search-btn"
                        onClick={
                            () => getBooks(this.input, false)
                        }>Search</button>
                </div>
                <div
                    className="searchResults"></div>
            </div>
        );
    }
}

export default BookSearch