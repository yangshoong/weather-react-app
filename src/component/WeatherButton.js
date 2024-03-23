import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
    return (
        <div className='weather-button'>
            <Button variant="success">Current Location</Button>{' '}
            <Button variant="warning">Seoul</Button>{' '}
            <Button variant="warning">Sydney</Button>{' '}
            <Button variant="warning">Toronto</Button>{' '}
            
        </div>
    )
}

export default WeatherButton
