import React, { useContext, useState } from 'react'
import { ResultContext } from '../context/ResultContext'

const ShowWeather = () => {
    const {result} = useContext(ResultContext)
    //  option to choose f or c

    const hours = new Date().getHours()
    const min = new Date().getMinutes()

    const tempC = parseFloat(result.main.temp) - 273.15;
    const humidity = result.main.humidity;

    const calculateDewPoint = (tempC, humidity) => {
        const a = 17.27;
        const b = 237.7;
        const alpha = ((a * tempC) / (b + tempC)) + Math.log(humidity / 100);
        return (b * alpha) / (a - alpha);
    };

    const formatTime = (unixTime, offsetInSeconds) => {
        const localTime = new Date((unixTime + offsetInSeconds) * 1000);
        const hours = localTime.getUTCHours();
        const minutes = localTime.getUTCMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };


  const dewPoint = calculateDewPoint(tempC, humidity).toFixed(2);
    const temp_max = Math.floor(parseFloat(result.main.temp_max) - 273.15)
    const temp_min = Math.floor(parseFloat(result.main.temp_min) - 273.15)
    const average = parseInt((temp_max + temp_min) / 2)

  return (
    <>
        <div>
            <div className='bg-black p-3 px-5 flex justify-between text-white rounded-xl'>
                <h1 className='font-bold text-xl font-sans'>{result.name}, {result.sys.country}</h1>
                <h1 className='font-bold text-xl font-sans'>{`${hours < 10 ? hours.toString().padStart(2, 0) : hours}:${min < 10 ? min.toString().padStart(2, 0) : min} ${hours > 12 ? "PM" : "AM"}`}</h1>
            </div>
            <div  className='bg-gray-300 mb-3 p-3 px-5'>
                <div className='flex '>
                    <h1 className='text-8xl font-medium'>{Math.floor(parseFloat(result.main.temp) - 273.15)}°C</h1>
                    <img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`} alt="icon weather" />
                </div>
                <h2 className='text-4xl'>{result.weather[0].main}</h2>
                
            </div>
        </div>
        <div className='p-5 bg-gray-300'>
            <h3 className='font-medium text-2xl mb-4'>Weather Today in {result.name}, {result.sys.country}</h3>
            <div className='px-6 flex justify-between'>
                <div>
                    <h4>Feels Like</h4>
                    <h1 className='font-bold text-6xl'>{Math.floor(parseFloat(result.main.feels_like) - 273.15)} °</h1>
                </div>
                <div className='flex gap-5'>
                    <div>
                        Sunrise {formatTime(result.sys.sunrise, result.timezone)}
                    </div>
                    <div>
                        Sunset {formatTime(result.sys.sunset, result.timezone)}
                    </div>
                </div>
            </div>
                <div className='flex flex-row justify-between p-5 gap-15'>
                    <div className='w-full'>
                    <div className='flex text-xl justify-between w-full'>
                        <h4 className='mb-3'>High/Low</h4>
                        <h4>--/{average}</h4>
                    </div>
                    <div className='flex text-xl  justify-between w-full'>
                        <h4 className='mb-3'>Humidity</h4>
                        <h1>{result.main.humidity}%</h1>
                    </div>
                    <div className='flex text-xl justify-between w-full'>
                        <h4 className='mb-3'>Pressure</h4>
                        <h4>{result.main.pressure} mb</h4>
                    </div>
                    <div className='flex text-xl justify-between w-full'>
                        <h4 className='mb-3'>Visibility</h4>
                        <h4>{result.visibility/1000}km</h4>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex text-xl justify-between w-full'>
                         <h4 className='mb-3'>Wind</h4>
                        <h4>{result.wind.speed} km/h</h4>
                    </div>
                    <div className='flex text-xl justify-between w-full'>
                        <h4 className='mb-3'>Dew Point</h4>
                        <h4>{dewPoint}°</h4>
                    </div>
                    <div className='flex text-xl justify-between w-full'>
                        <h4 className='mb-3'>Sea Level</h4>
                        <h4>{result.main.sea_level}</h4>
                    </div>
                    <div className='flex text-xl justify-between w-full'>
                        <h4 className='mb-3'>Wind Degree</h4>
                        <h4>{result.wind.deg}°</h4>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default ShowWeather
