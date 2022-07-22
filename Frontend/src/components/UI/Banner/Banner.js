import React from 'react';
import './Banner.css';

const Banner = (props) => {
    return (
        <div className="banner py-8 mb-8">


            <div className="text-center text-white">
                <span className="heading__banner">{props.heading}</span>
                <p className="description__banner mt-6 mx-12 text-center"></p>
            </div>
        </div>
    );
};

export default Banner;