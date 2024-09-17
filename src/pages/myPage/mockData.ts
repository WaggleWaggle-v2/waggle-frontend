export const mockData: TMockData = {
  list: [
    {
      id: 0,
      size: 'large',
      bookImageUrl: 'https://unius.s3.ap-northeast-2.amazonaws.com/bookshelf_image/WGWG-profile-Image-03.jpg',
      letterContent:
        '엄청나게 긴 이야기를 쓰고 싶기는 한데, 할 말은 없어. 그래도 너무 짧게 쓰면 보는 사람도 기분이 좀 거시기 하니까 억지로나마 길게 늘려보도록 할게',
      writter: '귀여운메타몽',
      open: true,
    },
    {
      id: 1,
      size: 'large',
      bookImageUrl: 'https://unius.s3.ap-northeast-2.amazonaws.com/bookshelf_image/WGWG-profile-Image-03.jpg',
      letterContent: '정말 반가워어엉~!',
      writter: '이순신장군',
      open: true,
    },
    {
      id: 2,
      size: 'large',
      bookImageUrl: 'https://unius.s3.ap-northeast-2.amazonaws.com/bookshelf_image/WGWG-profile-Image-03.jpg',
      letterContent: '부아아앙아아아아ㅏ아아아아앙아아앙 아주 빠른 속도로 고속도로를 질주하는 김속도~!~!~!',
      writter: '속도광김속도',
      open: true,
    },
    {
      id: 3,
      size: 'large',
      bookImageUrl: 'https://unius.s3.ap-northeast-2.amazonaws.com/bookshelf_image/WGWG-profile-Image-03.jpg',
      letterContent:
        '엄청나게 긴 이야기를 쓰고 싶기는 한데, 할 말은 없어. 그래도 너무 짧게 쓰면 보는 사람도 기분이 좀 거시기 하니까 억지로나마 길게 늘려보도록 할게',
      writter: '귀여운메타몽',
      open: true,
    },
    {
      id: 4,
      size: 'large',
      bookImageUrl: 'https://unius.s3.ap-northeast-2.amazonaws.com/bookshelf_image/WGWG-profile-Image-03.jpg',
      letterContent: '정말 반가워어엉~!',
      writter: '이순신장군',
      open: true,
    },
    {
      id: 5,
      size: 'large',
      bookImageUrl: 'https://unius.s3.ap-northeast-2.amazonaws.com/bookshelf_image/WGWG-profile-Image-03.jpg',
      letterContent: '부아아앙아아아아ㅏ아아아아앙아아앙 아주 빠른 속도로 고속도로를 질주하는 김속도~!~!~!',
      writter: '속도광김속도',
      open: true,
    },
    {
      id: 6,
      size: 'large',
      bookImageUrl: 'https://unius.s3.ap-northeast-2.amazonaws.com/bookshelf_image/WGWG-profile-Image-03.jpg',
      letterContent:
        '엄청나게 긴 이야기를 쓰고 싶기는 한데, 할 말은 없어. 그래도 너무 짧게 쓰면 보는 사람도 기분이 좀 거시기 하니까 억지로나마 길게 늘려보도록 할게',
      writter: '귀여운메타몽',
      open: true,
    },
    {
      id: 7,
      size: 'large',
      bookImageUrl: 'https://unius.s3.ap-northeast-2.amazonaws.com/bookshelf_image/WGWG-profile-Image-03.jpg',
      letterContent: '정말 반가워어엉~!',
      writter: '이순신장군',
      open: true,
    },
    {
      id: 8,
      size: 'large',
      bookImageUrl: 'https://unius.s3.ap-northeast-2.amazonaws.com/bookshelf_image/WGWG-profile-Image-03.jpg',
      letterContent: '부아아앙아아아아ㅏ아아아아앙아아앙 아주 빠른 속도로 고속도로를 질주하는 김속도~!~!~!',
      writter: '속도광김속도',
      open: true,
    },
  ],
  count: 9,
};

export interface TMockData {
  list: TBook[];
  count: number;
}

export interface TBook {
  id: number;
  size: 'large' | 'small';
  bookImageUrl: string;
  letterContent: string;
  writter: string;
  open: boolean;
}
