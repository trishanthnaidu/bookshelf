import React from 'react';
import SearchContainer from './components/searchContainer';
import BookShowcase from './components/bookShowcase';
import TitleBar from './components/titleBar';

class BookshelfApp extends React.Component {
    render() {
        return (
            <div className="app-container">
                <TitleBar />
                <SearchContainer />
                <BookShowcase />
            </div>
        );
    }
}

export default BookshelfApp;