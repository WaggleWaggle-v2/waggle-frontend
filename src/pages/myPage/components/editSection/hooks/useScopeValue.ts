import { useState } from 'react';

const useScopeValue = () => {
  const [isEnterScope, setIsEnterScope] = useState(true);

  const handleSetEnterScope = () => {
    setIsEnterScope(true);
  };

  const handleSetPrivateScope = () => {
    setIsEnterScope(false);
  };

  return { isEnterScope, handleSetEnterScope, handleSetPrivateScope };
};

export default useScopeValue;
