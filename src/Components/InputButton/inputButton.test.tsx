import { render, fireEvent } from '@testing-library/react';
import InputButton from './index';

describe('Input Button Component', () => {

  const mockGetForecast = jest.fn(() => Promise.resolve({}));

  it('should render input button correctly', () => {
    const { queryByTestId, getByTestId } = render(<InputButton getForecast={mockGetForecast} />);
    expect(queryByTestId('input-button')).toBeTruthy();
    const input = getByTestId('input-button') as HTMLInputElement;;
    expect(input.type).toBe('button');
    expect(input.value).toBe('Search');
  });

  it('should call getForecast on click', () => {
    const { getByTestId } = render(<InputButton getForecast={mockGetForecast} />);
    fireEvent.click(getByTestId('input-button'));
    expect(mockGetForecast.mock.calls.length).toBe(1);
    fireEvent.click(getByTestId('input-button'));
    fireEvent.click(getByTestId('input-button'));
    expect(mockGetForecast.mock.calls.length).toBe(3);
  });

});
