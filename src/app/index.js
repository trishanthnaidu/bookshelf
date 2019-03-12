import React from 'react';
import SearchContainer from './components/searchContainer';
import BookShowcase from './components/bookShowcase';
import TitleBar from './components/titleBar';
import BookDetails from './components/bookDetails';

class BookshelfApp extends React.Component {
    render() {
        return (
            <div className="app-container">
                <TitleBar />
                <SearchContainer />
                <BookShowcase />
                <BookDetails />
            </div>
        );
    }
}

export default BookshelfApp;