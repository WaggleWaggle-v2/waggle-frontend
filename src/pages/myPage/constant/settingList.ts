export type TSetting = 'receive' | 'send' | 'edit' | 'default';

export interface TSettingList {
  title: string;
  url: string;
}

const SETTING_LIST: TSettingList[] = [
  {
    title: '남긴 방명록',
    url: 'sendBookList',
  },
  { title: '받은 방명록', url: 'receiveBookList' },
  { title: '환경 설정', url: 'editBookshelf' },
] as const;

export default SETTING_LIST;
