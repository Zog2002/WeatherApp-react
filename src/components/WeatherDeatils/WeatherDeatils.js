import React from 'react'
import {MdWindPower} from 'react-icons/md'
import {WiHumidity} from 'react-icons/wi'
import {GiPressureCooker} from 'react-icons/gi'

const WeatherDeatils = ({ data }) => {
    return (
        <>
            <div className='p-12'>
                <h1 className='mb-4 text-2xl text-white'>Weather Details</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ld:grid-cols-4 gap-4'>
                    <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                        <div className='text-xl'>
                            <h3>Wind Speed</h3>
                            <h3>{data.wind.speed} m/s</h3>
                        </div>
                        <div className=''>
                        <MdWindPower fontSize={40} />
                        </div>
                    </div>
                    <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                        <div className='text-xl'>
                            <h3>Humidity</h3>
                            <h3>{data.main.humidity} m/s</h3>
                        </div>
                        <div className=''>
                        <WiHumidity fontSize={40} />
                        </div>
                    </div>
                    <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                        <div className='text-xl'>
                            <h3>Pressure</h3>
                            <h3>{data.main.pressure} hPa</h3>
                        </div>
                        <div className=''>
                        <GiPressureCooker fontSize={40} />
                        </div>
                    </div>
                    <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                        <div className='text-xl'>
                            <h3>Sunrise</h3>
                            <h3>{data.sys.sunrise} m/s</h3>
                        </div>
                        <div className=''>
                        <MdWindPower fontSize={40} />
                        </div>
                    </div>
                    <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                        <div className='text-xl'>
                            <h3>Sunset</h3>
                            <h3>{data.sys.sunset} m/s</h3>
                        </div>
                        <div className=''>
                        <MdWindPower fontSize={40} />
                        </div>
                    </div>
                    <div className='bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl'>
                        <div className='text-xl'>
                            <h3>Wind Deg</h3>
                            <h3>{data.wind.deg} m/s</h3>
                        </div>
                        <div className=''>
                        <MdWindPower fontSize={40} />
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default WeatherDeatils