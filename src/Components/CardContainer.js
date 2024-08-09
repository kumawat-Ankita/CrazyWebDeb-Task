import React from 'react';
import './Card.css';

const Card = ({ title, description }) => {
    return (
        <div className="card">
            <div className="card-image"></div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );
};

const CardContainer = () => {
    return (
        <div className="card-container">
            <Card title="ALMOND CHOCOLATE" description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth." />
            <Card title="FRUIT AND NUT COOKIES" description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth." />
            <Card title="ALMOND COOKIES" description="Li Europan lingues es membres del sam familie. Lor separat existentie es un myth." />
        </div>
    );
};

export default CardContainer;
