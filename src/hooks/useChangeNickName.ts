import { useState } from 'react';
import { isCompleteKoreanWord } from '@pages/setup/utils/isCompleteKoreanWord';

const useChangeNickName = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [value, setValue] = useState('');

  const handleSetNickName = (value: string) => {
    setValue(value);
  };

  const handleInputChange = (value: string) => {
    setValue(value);
    if (value === '') {
      setErrorMessage('');
      setIsDisabled(true);
    } else if (value.length > 6) {
      setErrorMessage('최대 6글자만 사용할 수 있습니다.');
      setIsDisabled(true);
    } else if (!isCompleteKoreanWord(value)) {
      setErrorMessage('호명은 한글만 사용할 수 있습니다.');
      setIsDisabled(true);
    } else {
      setErrorMessage('');
      setIsDisabled(false);
    }
  };

  return { isDisabled, errorMessage, value, handleInputChange, handleSetNickName };
};

export default useChangeNickName;
