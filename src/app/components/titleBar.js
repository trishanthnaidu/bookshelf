import React from 'react';
import logo from '../images/bookshelf-logo.png';

const titleBar = () => (
    <div className="title-bar-container">
        <span className="title-logo">
            <img src={logo} />
        </span>
        <span className="title-label-book">Book</span>
        <span className="title-label-shelf">Shelf</span>
    </div>
);

export default titleBar