import seJong from '@assets/images/profiles/kingSejong.png';

export const CardShelfMock = {
  bookList: [
    {
      id: 1,
      imageUrl: '/src/assets/images/profiles/WGWG-profile-Image-01.jpg',
      owner: '호랑이',
      description:
        '해야해야해야~ 한 입에 널 잡아먹을 테야 ! 크아아아아아앙 마구 부르짖어서 너의 귓구멍을 터뜨려주마~~~~!!! 크와아아아아아아아ㅏ앙ㅇ 마구 울부짖겠어!!!!!! 밤을 조심해라!! 넌 잠을 잘 수 없을 거야!!',
      totalBookCount: 1000000,
    },
    {
      id: 16,
      imageUrl: '/src/assets/images/profiles/WGWG-profile-Image-02.jpg',
      owner: '홍길동',
      description: '아부지를 아버지라 부르지 못하는 것은 천추의 한이다~!~!~!',
      totalBookCount: 278,
    },
    {
      id: 109,
      imageUrl: '/src/assets/images/profiles/WGWG-profile-Image-03.jpg',
      owner: '심청이',
      description:
        '어서와~ 깊은 바닷물 속은 처음이지? 여기도 다 사람 사는 곳이야~ 아 뭐 즉은 사람도 사람이라면 사람이지~',
      totalBookCount: 100,
    },
  ],
};

export const KingOfKoreanMock = {
  id: 0,
  imageUrl: '/src/assets/images/profiles/kingSejong.png',
  owner: '세종대왕',
  description: '백성들의 어려움을 살피는 것은 국왕의 자격 !',
  totalBookCount: 1000000,
};

export interface TRandomCardSelf {
  bookList: TCardShelfData[];
}

export interface TCardShelfData {
  id: number;
  imageUrl: string;
  owner: string;
  description: string;
  totalBookCount: number;
}

export const KingData: TCardShelfData = {
  id: 0,
  imageUrl: seJong,
  owner: '세종대왕',
  description: '백성들의 어려움을 살피는 것은 국왕이 할 일! 내 앞 길을 막지 마세요!',
  totalBookCount: 1000000,
};
