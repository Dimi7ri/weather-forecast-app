import { useState } from 'react';
import InputText from '../Components/InputText';
import InputButton from '../Components/InputButton';
import { WeatherApiResponse, Weather } from '../Components/Weather';
import { AppError } from '../Components/ErrorMessages';
import './ThreeDaysForecast.css';

const ThreeDaysForecast = () => {
  const [city, setCity] = useState<string>('');
  const [weatherResult, setWeatherResult] = useState<WeatherApiResponse>();
  const [error, setError] = useState<boolean>(false);

  const ApiKey = '';
  const weatherApiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${city}&days=3&aqi=no&alerts=no`

  const getForecast = async () => {
    if (!city) return;
    try {
      const response = await fetch(weatherApiUrl);
      const json = await response.json() as WeatherApiResponse;
      setWeatherResult(json);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className='Three-days-forecast' data-testid='three-days-forecast'>
      <div className='Inputs-forecast'>
        <InputText setCity={setCity} />
        <InputButton getForecast={getForecast} />
      </div>
      {error ? <AppError /> : ''}
      <Weather {...weatherResult} />
    </div>
  );
}

export default ThreeDaysForecast;
