import React, {useState, useEffect} from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Weather = ({ capital }) => {
    const [ weather, setWeather ] = useState([])
  
    useEffect(() => {
        console.log('effect')
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}&units=f`)
            .then(response => {
                console.log('promise fulfilled')
                setWeather(response.data.current)
            })
    }, [])

    
    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p><strong>temperature:</strong> {weather.temperature} Farenheit</p>
            <img
                src={weather.weather_icons}
                alt={`${capital} weather icon ${weather.weather_descriptions}`}
            />
            <p><strong>wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir}</p>
        </div>
    )
}

export default Weather