import Card from '@mui/material/Card';
import './InfoBox.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ weatherInfo }) {
const INIT_URL = "https://images.unsplash.com/photo-1599059021750-82716ae2b661?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF6ZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60";
  
const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  
const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  
const RAINY_URL="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="InfoBox">
      
      <div className="cardContainer"> 
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={weatherInfo.humidity > 70 ? RAINY_URL : weatherInfo.temp > 15 ? HOT_URL : weatherInfo.temp < 15 ? COLD_URL : INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weatherInfo.city}{
         weatherInfo.humidity > 70 ? <ThunderstormIcon /> : weatherInfo.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />

          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>temp= {weatherInfo.temp}°C <br /> </p>
          <p>feels like={weatherInfo.feelsLike}°C <br /> </p>
          <p>temp min= {weatherInfo.tempMin}°C <br /> </p>
          <p>temp max= {weatherInfo.tempMax}°C <br /> </p>
          <p>humidity= {weatherInfo.humidity}% <br /> </p>
          <p>
            The weather is described as <i>{weatherInfo.weather}</i> <br />  and feels like {weatherInfo.feelsLike}°C.
          </p>
        </Typography>
      </CardContent>
     
    </Card>
          </div>
          
          </div>
  );
}