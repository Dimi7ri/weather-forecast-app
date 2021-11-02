export interface InputTextProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const InputText = (props: InputTextProps) => {
  const { setCity } = props;
  return (
    <div className='Input-text'>
      <input type='text' data-testid='input-text' placeholder='City' onChange={(e) => { setCity(e.target.value) }}></input>
    </div>
  );
}

export default InputText;
