import React from 'react'
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const Forecast = ({ data }) => {

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    // <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 w-full'>
    //   {data.list.splice(0, 7).map((day, index) => (
    //     <div key={index} className='bg-white/40 p-2 text-center rounded-lg flex flex-col items-center'>
    //       <p>{forecastDays[index]} </p>
    //         <img src={`icons/${day.weather[0].icon}.png`} className="icon-small" alt="weather" />
    //         <div>
    //           <p>{Math.round(day.main.temp)}°C </p>
    //         </div>
    //     </div>
    //   ))}
    // </div>

<>
      
      <Accordion allowZeroExpanded>
      <label className="title">The next 7 days </label>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx} >
          
            <AccordionItemHeading>
              <AccordionItemButton>
              
                <div className="daily-item">
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>






  )
}

export default Forecast