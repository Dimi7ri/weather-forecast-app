import { render } from '@testing-library/react';
import ThreeDaysForecast from './ThreeDaysForecast';

describe('Three Days Forecast Page', () => {

  it('should render Three Days Forecast Page with everything', () => {
    const { getByTestId, queryByTestId } = render(<ThreeDaysForecast />);
    const inputText = getByTestId('input-text') as HTMLInputElement;

    expect(inputText).toBeTruthy();
    expect(inputText.type).toBe('text');

    const inputButton = getByTestId('input-button') as HTMLInputElement;
    expect(inputButton).toBeTruthy();
    expect(inputButton.type).toBe('button');

    const weatherId = queryByTestId('weather');
    expect(weatherId).toBeNull;
  });
});
