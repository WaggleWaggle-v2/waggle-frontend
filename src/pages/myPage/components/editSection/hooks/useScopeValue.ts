import { MouseEvent, useState } from 'react';

const useScopeValue = () => {
  const [isEnterScope, setIsEnterScope] = useState(true);

  const handleSetScope = (event: MouseEvent<HTMLButtonElement>, apiCallback: (newScopeValue: boolean) => void) => {
    const scope = event.currentTarget.dataset.scope;

    if (!scope) {
      console.error('scope가 없어옹 ㅠㅅㅠ');
      return;
    }

    const newScopeValue = Boolean(+scope);

    setIsEnterScope(prevScopeValue => {
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
