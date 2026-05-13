import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateWeatherInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ec3a162a0aaf1295df45de419c744232";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      
      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  }

  let handlechange = (event) => {
    setCity(event.target.value);
  }

  let handlesubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("Searching for city:", city);
      let newInfo = await getWeatherInfo();
      updateWeatherInfo(newInfo);
      setCity("");
      setError(false);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className="SearchBox">
      <form onSubmit={handlesubmit}>
        <TextField 
          id="city" 
          label="City Name" 
          variant="outlined" 
          required 
          value={city} 
          onChange={handlechange} 
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No such place exists!</p>}
      </form>
    </div>
  );
}