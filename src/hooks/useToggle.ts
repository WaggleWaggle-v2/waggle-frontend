import { useState } from 'react';

const useToggle = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleToggle = () => {
    setIsTrue(prev => !prev);
  };

  const handleSetTrue = () => {
    setIsTrue(true);
  };

  const handleSetFalse = () => {
    setIsTrue(false);
  };

  return { isTrue, handleSetFalse, handleSetTrue, handleToggle };
};

export default useToggle;
