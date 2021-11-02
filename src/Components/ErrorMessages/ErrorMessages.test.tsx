import { render } from '@testing-library/react';
import { AppError, ErrorMessage, WeatherApiError } from './index';

describe('App Error Component', () => {
  it('should render App Error correctly', () => {
    const { getByTestId } = render(<AppError />);
    const id = getByTestId('app-error');
    expect(id).toBeTruthy();
    expect(id.className).toBe('App-error');
    expect(id.textContent).toContain('Opps... Something went wrong.');
  });
});

describe('Error Message Component', () => {
  const mockProps: WeatherApiError = {
    code: 123,
    message: 'Weather API is broken!',
  }

  it('should render Error Message correctly', () => {
    const { getByTestId } = render(<ErrorMessage {...mockProps} />);
    const id = getByTestId('error-message');
    expect(id).toBeTruthy();
    expect(id.className).toBe('Error-message');
    expect(id.textContent).toContain(mockProps.message);
  });
});
