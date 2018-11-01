import {useState} from 'react';

const useInput = (placeholder: string) => {
  const [value, setValue] = useState(placeholder);
  const handleChange = (event) => setValue(event.target.value);
  return [value, handleChange];
};

export default useInput;
