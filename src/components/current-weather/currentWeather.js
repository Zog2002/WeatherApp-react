import React from 'react'
import { getCurrentDate } from "./currentDate"
import { MdLocationOn } from "react-icons/md"
const currentWeather = ({ data }) => {
  const currentDate = getCurrentDate();

  
  return (
    <div className="flex flex-col mb-8 md:md-0 items-start gap-2 w-1/2">
      <div className='flex items-center'>
        <div>
          <h1 className='text-5xl text-white'>Today </h1>
          <p className='text-white'>{currentDate}</p>
        </div>
        <div>
          <img className='w-[200px] object-cover text-5xl'
            alt="weather"
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
      </div>
      <div>
        <p className='text-7xl text-white'>{Math.round(data.main.temp)}<span>°C</span></p>
        <span className='text-white'>{data.weather[0].description}</span>
      </div>
      
      <div>
        <div className='flex items-center text-black bg-white/90 px-2 py-2 rounded-xl'>
            <MdLocationOn />
            <span>
               {data.city}
            </span>
        </div>
      </div>
    </div>
  )
}

export default currentWeather