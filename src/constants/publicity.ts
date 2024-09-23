import doorOpenIcon from '@assets/images/publicity/open.png';
import doorCloseIcon from '@assets/images/publicity/private.png';

export const BOOKSHELF_PUBLICITY = [
  {
    image: doorOpenIcon,
    text: '모두에게',
    value: true,
  },
  {
    image: doorCloseIcon,
    text: '친구에게만',
    value: false,
  },
] as const;

export const BOOK_PUBLICITY = [
  {
    text: '모두 보길 원하오',
    description_main: '방명록 방문자에게 내용이 공개 됩니다.',
    description_sub: '방명록 주인을 포함한 모두가 볼 수 있어요!',
    value: true,
  },
  {
    text: '주인장만 보길 원하오',
    description_main: '방명록 주인장에게만 내용이 공개 됩니다.',
    description_sub: '나와 주인장만의 비밀이야기를 나눌 수 있아요!',
    value: false,
  },
] as const;
