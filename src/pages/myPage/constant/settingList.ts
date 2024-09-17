export type TSetting = 'receive' | 'present' | 'edit' | 'default';

export interface TSettingList {
  title: string;
  type: TSetting;
}

const SETTING_LIST: TSettingList[] = [
  {
    title: '남긴 방명록',
    type: 'present',
  },
  { title: '받은 방명록', type: 'receive' },
  { title: '환경 설정', type: 'edit' },
] as const;

export default SETTING_LIST;
