import { MouseEvent, useState } from 'react';
import { TSetting } from '../constant/settingList';

export const useSettingType = () => {
  const [settingType, setSettingType] = useState<TSetting>('default');

  const handleSetType = (event: MouseEvent<HTMLButtonElement>) => {
    setSettingType(event.currentTarget.value as TSetting);
  };

  return { settingType, handleSetType };
};
