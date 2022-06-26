import React from 'react';
import './Banner.css';

const Banner = (props) => {
    return (
        <div className="banner py-8 mb-8">


            <div className="text-center text-white">
                <span className="heading__banner">{props.heading}</span>
                <p className="description__banner mt-6 mx-12 text-center">Health insurance or medical insurance (also known as medical aid in South Africa) is a type of insurance that covers the whole or a part of the risk of a person incurring medical expenses. As with other types of insurance is risk among many individuals. By estimating the overall risk of health risk and health system expenses over the risk pool, an insurer can develop a routine finance structure, such as a monthly premium or payroll tax, to provide the money to pay for the health care benefits specified in the insurance agreement.[1] The benefit is administered by a central organization, such as a government agency, private business, or not-for-profit entity.</p>
            </div>
        </div>
    );
};

export default Banner;