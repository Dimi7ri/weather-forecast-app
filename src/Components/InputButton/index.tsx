export interface InputButtonProps {
  getForecast: () => void;
}

const InputButton = (props: InputButtonProps) => {
  const {getForecast} = props;
  return (
    <div className='Input-button'>
      <input type='button' data-testid='input-button' value='Search' onClick={() => { getForecast() }}></input>
    </div>
  );
}

export default InputButton;
