import { render } from '@testing-library/react';
import { WeatherApiForecastDay, ForecastDay } from './index';

let mockProps: WeatherApiForecastDay = {
  date: '2021-11-02',
  day: {
    maxtemp_c: 22.7,
    maxtemp_f: 72.9,
    mintemp_c: 15.6,
    mintemp_f: 60.1,
    avgtemp_c: 19.5,
    avgtemp_f: 67.1,
    maxwind_mph: 16.3,
    maxwind_kph: 26.3,
    totalprecip_mm: 0,
    totalprecip_in: 0,
    avgvis_km: 10,
    avgvis_miles: 6,
    avghumidity: 68,
    daily_will_it_rain: 0,
    daily_chance_of_rain: 0,
    daily_will_it_snow: 0,
    daily_chance_of_snow: 0,
    condition: {
      text: 'Sunny',
      icon: 'somepicture.png',
      code: 1000
    },
    uv: 11
  },
}

describe('Forecast Day Component', () => {

  it('should render Forecast Day correctly', () => {
    const { getByTestId } = render(<ForecastDay {...mockProps} />);
    const id = getByTestId('forecast-day');
    expect(id).toBeTruthy();
    expect(id.className).toBe('Forecast-day');
    expect(id.textContent).toContain('Tue 2 Nov - Sunny15.6°C - 22.7°CHumidity: 68%Max Wind: 26.3 km/h');
  });

  it('should render Precipitation correctly', () => {
    mockProps.day.totalprecip_mm = 300;
    const { queryByTestId } = render(<ForecastDay {...mockProps} />);
    const id = queryByTestId('precip');
    expect(id).toBeTruthy();
    expect(id?.className).toBe('Precipitation');
    expect(id?.textContent).toContain('Precipitation: 300 mm');
  });
});
