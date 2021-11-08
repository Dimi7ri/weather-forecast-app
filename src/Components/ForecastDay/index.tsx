import { format } from 'date-fns';

export interface WeatherApiForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    },
    uv: number;
  };
}

export const ForecastDay = (props: WeatherApiForecastDay) => {
  const { day, date } = props;
  const { mintemp_c, maxtemp_c, condition, avghumidity, maxwind_kph, totalprecip_mm } = day;
  const formattedDate = format(new Date(date), 'EEE d MMM');
  return (
    <div className='Forecast-day' data-testid='forecast-day'>
      <div className='Title'>{formattedDate} - {condition.text}</div>
      <img src={condition.icon} alt={condition.text} />
      <div><span className='Min'>{mintemp_c}°C</span> - <span className='Max'>{maxtemp_c}°C</span></div>
      <div>Humidity: {avghumidity}%</div>
      <div>Max Wind: {maxwind_kph} km/h</div>
      <Precipitation precipitation={totalprecip_mm} />
    </div>
  );
}

interface PrecipitationProps {
  precipitation: number;
}

const Precipitation = (props: PrecipitationProps) => {
  const { precipitation } = props;
  if (precipitation > 0) {
    return (<div className='Precipitation' data-testid='precip'>Precipitation: {precipitation} mm</div>);
  }
  return null;
}
