import React, { useState } from 'react';
import './App.css';
//import Input from './components/WeatherApp/Input';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/currentWeather';
import Forecast from './components/forecast/forecast';
import WeatherDeatils from './components/WeatherDeatils/WeatherDeatils';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api"

function App() {


  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [weatherdeatils, setWeatherDetails] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });

        setWeatherDetails({ city: searchData.label, ...weatherResponse })

      })
      .catch(console.log);

  }


  //console.log(currentWeather);
  //console.log(forecast);

  return (
    <div className='bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen'>
      <div className="bg-white/25 w-full flex flex-col h-fit">
        {/*INPUT AND LOGO*/}
        <div className='flex flex-col md:flex-row justify-between items-center p-12'>
          <Search onSearchChange={handleOnSearchChange} />

          <h1 className='mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold'> Weather app</h1>

        </div>
        <div className='flex md:flex-row flex-col p-12 items-center justify-between'>
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {forecast && <Forecast data={forecast} />}

        </div>
        <div >
          {weatherdeatils && <WeatherDeatils data={weatherdeatils} />}
        </div>
      </div>
    </div>
  );
}

export default App;
