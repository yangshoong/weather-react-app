import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {


    return (
        <div className='weather-button'>
            <Button variant="success">Current Location</Button>

            {cities.map((item, index) => (
                <button
                    variant="warning"
                    key={index}
                    onClick={() => setCity(item)}></button>
            ))}
            
        </div>
    )
}

export default WeatherButton
