import { ChangeEvent, useState } from 'react';

const useInputValue = () => {
  const [value, setValue] = useState('');

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleResetValue = () => {
    setValue('');
  };

  const handleSetValue = (newValue: string) => {
    setValue(newValue);
  };

  return { value, handleChangeValue, handleResetValue, handleSetValue };
};

export default useInputValue;
