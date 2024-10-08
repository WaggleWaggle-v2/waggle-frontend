import { MouseEvent, useState } from 'react';
import { TSetting } from '../constant/settingList';

export const useSettingType = () => {
  const [settingType, setSettingType] = useState<TSetting>('default');

  const handleSetType = (event: MouseEvent<HTMLButtonElement>) => {
    setSettingType(event.currentTarget.value as TSetting);
  };

  const handleSetDefault = () => {
    setSettingType('default');
    localStorage.removeItem('settingType');
  };

  const handleRememberType = (value: TSetting) => {
    setSettingType(value);
  };

  return { settingType, handleSetType, handleSetDefault, handleRememberType };
};
