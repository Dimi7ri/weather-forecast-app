export interface WeatherApiLocation {
  name: string;
  region: string;
  country: string;
}

export const Location = (props: WeatherApiLocation) => {
  const { name, region, country} = props;
  return (
    <div className='Location' data-testid='location'>{name}, {region}, {country}</div>
  );
}
