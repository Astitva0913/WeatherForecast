import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({city: "Bhopal",
    feelsLike: 24.84,
    temp: 25.0,
    tempMin: 25.05,
    tempMax: 25.1,
    humidity: 65,
    weather: "haze",});

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
    <div style={{ textAlign: 'center',  }}>

        <h3> Weather App By Delta</h3>
        <SearchBox updateWeatherInfo={updateWeatherInfo} />
        <InfoBox weatherInfo={weatherInfo} />
        </div>);
}