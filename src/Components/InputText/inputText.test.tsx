import { render, fireEvent } from '@testing-library/react';
import InputText from './index';

describe('Input Text Component', () => {

  const mockSetCity = jest.fn(() => Promise.resolve({}));

  it('should render input text correctly', () => {
    const { queryByTestId, getByTestId } = render(<InputText setCity={mockSetCity} />);
    const input = getByTestId('input-text') as HTMLInputElement;

    expect(queryByTestId('input-text')).toBeTruthy();
    expect(input.type).toBe('text');
  });

  it('should change input text values and call mockSetCity', () => {
    const { getByTestId } = render(<InputText setCity={mockSetCity} />);
    const input = getByTestId('input-text') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Sydney' } });
    expect(input.value).toBe('Sydney');
    expect(mockSetCity.mock.calls.length).toBe(1);
  });

});
