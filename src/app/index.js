import React from 'react';

class BookshelfApp extends React.Component {
    onBookSearch () {

    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="app-container">
                <div className="title-bar-container">
                    <div className="title-logo"></div>
                    <div className="title-label">BookShelf</div>
                </div>
                <div className="search-container">
                    <div className="banner-content">
                        <div className="content-text">
                            Plan to Read today ?
                        </div>
                    </div>
                    <div className="banner-content">
                        <div className="content-subtext">
                            Browse through your favorite books and start your read today
                        </div>
                    </div>
                    <div className="search-module">
                        <input className="input-search-book" onKeyUp={this.onBookSearch} />
                        <div className="searchResults"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookshelfApp;