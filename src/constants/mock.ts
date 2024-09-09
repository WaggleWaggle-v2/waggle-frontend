import long from '@assets/images/bookshelf/bookshelf-long.png';
import short from '@assets/images/bookshelf/bookshelf-short.png';
import { PROFILE_IMAGES } from '@pages/main/constants/profile-images';

export const USER_DATA = {
  id: 1,
  nickname: '유니어스',
  user_state: 'VERIFIED',
};

export const BOOKSHELF_DATA = {
  user_id: 1,
  is_open: true,
  background_image_url: PROFILE_IMAGES[0].url,
  shelf_introduction:
    '아버지를 아버지라 부르지 못하고 형을 형이라 부르지 못하는데 호부호형을 허한들 무슨 소용이 있습니까! 아버지를 아버지라 부르지 못하고 형을 형이라 부르지 못하는데 호부호형을',
  uuid: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  books: [
    { nickname: '경수', is_open: true, image: long, type: 'long' },
    { nickname: '준영', is_open: true, image: short, type: 'short' },
    { nickname: '홍길동동동동', is_open: true, image: short, type: 'short' },
    { nickname: '수누피', is_open: true, image: short, type: 'short' },
    { nickname: '홍길동동동동', is_open: true, image: short, type: 'short' },
    { nickname: '다다잇', is_open: true, image: short, type: 'long' },
    { nickname: '효은', is_open: true, image: long, type: 'long' },
    { nickname: '경수', is_open: true, image: long, type: 'long' },
    { nickname: '경수', is_open: true, image: short, type: 'short' },
    { nickname: '경수', is_open: true, image: long, type: 'long' },
    { nickname: '경수', is_open: true, image: long, type: 'long' },
    { nickname: '경수', is_open: true, image: short, type: 'short' },
    { nickname: '경수', is_open: true, image: short, type: 'short' },
    { nickname: '경수', is_open: true, image: long, type: 'long' },
    { nickname: '경수', is_open: true, image: short, type: 'short' },
    { nickname: '경수', is_open: true, image: long, type: 'long' },
    { nickname: '경수', is_open: true, image: short, type: 'short' },
    { nickname: '경수', is_open: true, image: short, type: 'short' },
    { nickname: '경수', is_open: true, image: short, type: 'short' },
    { nickname: '경수', is_open: true, image: short, type: 'short' },
    { nickname: '경수', is_open: true, image: long, type: 'long' },
    { nickname: '경수', is_open: true, image: long, type: 'long' },
  ],
};

export interface TBookshelf {
  user_id: number;
  is_open: boolean;
  background_image_url: string;
  shelf_introduction: string;
  uuid: number;
  books: TBookItem[];
}

export interface TBookItem {
  nickname: string;
  is_open: boolean;
  image: string;
  type: string;
}
