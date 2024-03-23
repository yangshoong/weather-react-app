import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("Weather?", weather)

//     if (!data) {
//         return <div>Loading...</div>
//     };


    return (
        <div className='weather-box'>
            <h2>{weather?.name}의 날씨 정보</h2>
            <p></p>
            <h3>기온: {weather?.main.temp}℃</h3>
            <div>체감 온도: {weather?.main.feels_like}℃</div>
            <div>최저 기온: {weather?.main.temp_min}℃</div>
            <div>최고 기온: {weather?.main.temp_max}℃</div>
            <div>압력: {weather?.main.pressure}hPa</div>
            <div>습도: {weather?.main.humidity}%</div>
            <div>풍속: {weather?.wind.speed}m/s</div>
            <div>풍향: {weather?.wind.deg}°</div>
            <div>구름: {weather?.clouds.all}%</div>
            <div>일출: {new Date(weather?.sys.sunrise * 1000).toLocaleTimeString()}</div>
            <div>일몰: {new Date(weather?.sys.sunset * 1000).toLocaleTimeString()}</div>
            <p></p>
            <h3>날씨: {weather?.weather[0].description}</h3>
        </div>
    )
};

export default WeatherBox;
