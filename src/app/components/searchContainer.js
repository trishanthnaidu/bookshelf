import React from 'react';
import BookSearch from '../components/bookSearch';

const searchContainer = () => (
    <div className="search-container">
        <div className="banner-content">
            <div className="content-text">
                Plan to Read ?
                        </div>
        </div>
        <div className="banner-content">
            <div className="content-subtext">
                Browse your favorite books and start your read today
                        </div>
        </div>
        <BookSearch />
    </div>
);

export default searchContainer