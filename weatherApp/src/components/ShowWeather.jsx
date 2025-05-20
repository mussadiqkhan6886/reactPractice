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
            <div>
                <h1>{result.name}, {result.sys.country}</h1>
                <h1>{`${hours}:${min} ${hours > 12 ? "PM" : "AM"}`}</h1>
            </div>
            <div>
                <h1>{Math.floor(parseFloat(result.main.temp) - 273.15)} °C</h1>
                <h2>{result.weather[0].main}</h2>
                <img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`} alt="icon weather" />
            </div>
        </div>
        <div>
            <h3>Weather Today in {result.name}, {result.sys.country}</h3>
            <div>
                <div>
                    <h4>Feels Like</h4>
                    <h1>{Math.floor(parseFloat(result.main.feels_like) - 273.15)} °C</h1>
                </div>
                <div>
                    <div>
                        Sunrise {formatTime(result.sys.sunrise, result.timezone)}
                        Sunset {formatTime(result.sys.sunset, result.timezone)}
                    </div>
                </div>
            </div>
            
            <div>
                <div>
                    <h4>High/Low</h4>
                    <h4>--/{average}</h4>
                </div>
                <div>
                    <h4>Humidity</h4>
                    <h1>{result.main.humidity}%</h1>
                </div>
                <div>
                    <h4>Pressure</h4>
                    <h4>{result.main.pressure} mb</h4>
                </div>
                <div>
                    <h4>Visibility</h4>
                    <h4>{result.visibility/1000}km</h4>
                </div>
            </div>
            <div>
                <div>
                    <h4>Wind</h4>
                    <h4>{result.wind.speed} km/h</h4>
                </div>
                <div>
                    <h4>Dew Point</h4>
                    <h4>{dewPoint}°</h4>
                </div>
                <div>
                    <h4>Sea Level</h4>
                    <h4>{result.main.sea_level}</h4>
                </div>
                <div>
                    <h4>Wind Degree</h4>
                    <h4>{result.wind.deg}°</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowWeather
