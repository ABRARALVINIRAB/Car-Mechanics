import React from 'react';
import "./Service.css"

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div className="service">

            <h1>{name}</h1>
            <img src={img} alt="" />
            <h3>Price: {price}</h3>
            <p>Description: {description}</p>
        </div>
    );
};

export default Service;