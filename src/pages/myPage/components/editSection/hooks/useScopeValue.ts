import { MouseEvent, useState } from 'react';

const useScopeValue = () => {
  const [isEnterScope, setIsEnterScope] = useState(true);

  const handleSetScope = (event: MouseEvent<HTMLButtonElement>, apiCallback: (newScopeValue: boolean) => void) => {
    setIsEnterScope(prevScopeValue => {
      const newScopeValue = Boolean(+event.currentTarget.value);
      apiCallback(newScopeValue);
      return newScopeValue;
    });
  };

  const handleInitialSetScope = (scopeValue: boolean) => {
    setIsEnterScope(scopeValue);
  };

  return { isEnterScope, handleSetScope, handleInitialSetScope, setIsEnterScope };
};

export default useScopeValue;
