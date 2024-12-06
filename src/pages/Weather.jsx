import React, { useState } from 'react';
import axios from 'axios';
import { FaSun, FaCloudRain } from 'react-icons/fa';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');

  const API_KEY = "95a2fd1034d64a39a94132103241206";

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      setWeather(response.data);
    } catch (err) {
      setError(err.response?.data?.error?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  const getWeatherIcon = (condition) => {
    if (condition.toLowerCase().includes('sunny')) {
      return <FaSun size={50} color="orange" />;
    } else if (condition.toLowerCase().includes('rain')) {
      return <FaCloudRain size={50} color="blue" />;
    } else {
      return null;
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>Weather App</h1>
        <p className="text-muted">Get current weather information for any city</p>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter city"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">Error: {error}</p>}

      {weather && !loading && !error && (
        <div className="card text-center">
          <div className="card-header">
            <h2>
              {weather.location.name}, {weather.location.region}, {weather.location.country}
            </h2>
            {getWeatherIcon(weather.current.condition.text)}
          </div>
          <div className="card-body">
            <h5 className="card-title">Temperature: {weather.current.temp_c}°C</h5>
            <p className="card-text">Condition: {weather.current.condition.text}</p>
            <p className="card-text">Humidity: {weather.current.humidity}%</p>
            <p className="card-text">Wind Speed: {weather.current.wind_kph} k/h</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
