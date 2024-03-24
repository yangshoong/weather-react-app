import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, activeCity }) => {
    return (
        <div className='weather-button'>
            <Button
                variant={activeCity === "" ? "info" : "success"}
                onClick={() => setCity("")}
                className={activeCity === "" ? "fw-bold" : ""}
            >
                Current Location
            </Button>
            {cities.map((cityName, index) => (
                <Button
                    key={index}
                    variant={activeCity === cityName ? "info" : "warning"}
                    onClick={() => setCity(cityName)}
                    className={activeCity === cityName ? "fw-bold" : ""}
                >
                    {cityName.charAt(0).toUpperCase() + cityName.slice(1)}
                </Button>
            ))}
        </div>
    );
}

export default WeatherButton;
