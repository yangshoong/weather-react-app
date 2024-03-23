import { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

const APIkey = "0042c99930b92e7dd6a3e12310f689b7"

function App() {

  const[weather,setWeather]=useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCruuentLocation(lat,lon)
    });
  };


  const getWeatherByCruuentLocation= async(lat, lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);

  }


  useEffect(() => {
    getCurrentLocation()


  }, [getCurrentLocation])

  return (
    <div className="container">
      <div>
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>



    </div>
  );
}

export default App;
