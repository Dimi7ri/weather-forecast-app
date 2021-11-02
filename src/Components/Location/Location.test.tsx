import { render } from '@testing-library/react';
import { WeatherApiLocation, Location } from './index';

describe('Location Component', () => {
  const mockProps: WeatherApiLocation = {
    name: 'Hobbiton',
    region: 'Arnor',
    country: 'The Shire'
  }

  it('should render Location correctly', () => {
    const { getByTestId } = render(<Location {...mockProps} />);
    const id = getByTestId('location');
    expect(id).toBeTruthy();
    expect(id.className).toBe('Location');
    expect(id.textContent).toContain(mockProps.name + ', ' + mockProps.region + ', ' + mockProps.country);
  });
});
