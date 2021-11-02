import { render } from '@testing-library/react';
import { WeatherApiResponse, Weather } from './index';

describe('Weather Component', () => {

  let mockProps: WeatherApiResponse = {
    forecast: undefined,
    location: undefined,
    error: undefined
  }

  test('Should render Weather correctly', () => {
    mockProps.forecast = { forecastday: [] }
    const { queryByTestId } = render(<Weather {...mockProps} />);
    expect(queryByTestId('weather')).toBeTruthy();
  });

  it('should render Weather with location when forecast and location as present', () => {
    mockProps.location = {
      name: 'Newcastle',
      region: 'New South Wales',
      country: 'Australia'
    }
    const { queryByTestId } = render(<Weather {...mockProps} />);
    const weatherId = queryByTestId('weather');
    const locationId = queryByTestId('location');
    expect(weatherId).toBeTruthy();
    expect(locationId).toBeTruthy();

  });

  test('Should not render Weather when forecast is missing', () => {
    delete mockProps.forecast;
    const { queryByTestId } = render(<Weather {...mockProps} />);
    expect(queryByTestId('weather')).toBeNull();
  });

  test('Should not render ErrorMessage when forecast is missing and error is present', () => {
    mockProps.error = {
      code: 123,
      message: 'Mock Weather Api Error.'
    }
    const { queryByTestId } = render(<Weather {...mockProps} />);
    const id = queryByTestId('error-message');
    expect(id).toBeTruthy();
    expect(id?.className).toBe('Error-message');
  });

  test('Should not render Weather when forecast and error are missing', () => {
    delete mockProps.error;
    const { queryByTestId } = render(<Weather {...mockProps} />);
    expect(queryByTestId('weather')).toBeNull();
  });
});

