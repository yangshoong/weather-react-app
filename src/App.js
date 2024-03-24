import { useEffect, useState, useCallback } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

const APIkey = "0042c99930b92e7dd6a3e12310f689b7"

function App() {
  const [weather, setWeather] = useState(null);
  const cities = ['seoul', 'new york', 'toronto', 'paris'];
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeCity, setActiveCity] = useState("");

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
    setLoading(true);
    try {
      let response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      let data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Failed to fetch weather data", error);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByCity = useCallback(async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`;
    setLoading(true);
    try {
      let response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      let data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Failed to fetch weather data by city", error);
    } finally {
      setLoading(false);
    }
  },[city]);

  useEffect(() => {
    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        getWeatherByCurrentLocation(position.coords.latitude, position.coords.longitude);
      }, (error) => {
        console.error("Geolocation is not available", error);
        setLoading(false); 
      });
    };

    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city, getWeatherByCity]);

  const handleSetCity = (selectedCity) => {
    setCity(selectedCity);
    setActiveCity(selectedCity);
  };

  return (
    <div className="container">
      {loading ? (
        <ClipLoader color="#f88c6b" loading={loading} size={150} />
      ) : (
        <>
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={handleSetCity} activeCity={activeCity} />
        </>
      )}
    </div>
  );
}

export default App;
