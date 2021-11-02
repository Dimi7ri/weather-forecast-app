export interface WeatherApiError {
  code: number;
  message: string;
}

export const ErrorMessage = (props: WeatherApiError) => {
  const { message } = props;
  return (
    <div className='Error-message' data-testid='error-message'>{message}</div>
  );
}

export const AppError = () => {
  return (
    <div className='App-error' data-testid='app-error'>Opps... Something went wrong.</div>
  );
}
