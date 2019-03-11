import React from 'react';

const ratingsLayout = (props) => {
    const ratings = props.average_rating[0].hasOwnProperty("$") ?
        props.average_rating[0]._ :
        props.average_rating[0];
    return (
        <React.Fragment>
            <div className="star-ratings-css">
                <div className="star-ratings-css-top" style={{
                    width: ratings * (22) + "%"
                }}>
                    <StartDOM />
                </div>
                <div className="star-ratings-css-bottom">
                    <StartDOM />
                </div>
            </div>
            <div className="book-ratings">{ratings}</div>
        </React.Fragment>
    );
}

const StartDOM = () => ([1, 2, 3, 4, 5].map(e => (<span>★</span>)));

export { ratingsLayout }