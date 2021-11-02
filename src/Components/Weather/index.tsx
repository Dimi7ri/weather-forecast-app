import { WeatherApiError, ErrorMessage } from '../ErrorMessages';
import { WeatherApiForecastDay, ForecastDay } from '../ForecastDay';
import { WeatherApiLocation, Location } from '../Location';

export interface WeatherApiResponse {
  forecast?: WeatherApiForecast;
  location?: WeatherApiLocation;
  error?: WeatherApiError;
}

export interface WeatherApiForecast {
  forecastday: Array<WeatherApiForecastDay>;
}

export const Weather = (props: WeatherApiResponse) => {
  const { forecast, location, error } = props;
  if (!forecast && !error) return null;
  if (forecast) {
    return (
      <div className='Weather' data-testid='weather'>
        {location ? <Location {...location} /> : ''}
        {forecast.forecastday.map((item: any, id: any) => (
          <ForecastDay {...item} key={id} />
        ))}
      </div>
    )
  } else if (error) {
    return <ErrorMessage {...error} />;
  }
  return null;
}
