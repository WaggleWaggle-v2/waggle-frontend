export interface TShareKakao {
  owner: string;
  description: string | null;
  count: number;
  link: string;
  bookshelfImageUrl: string;
}

const shareKakao = (props: TShareKakao) => {
  const { owner, description, count, link, bookshelfImageUrl } = props;

  // Kakao 객체 가져오기
  const Kakao = window.Kakao;

  // 초기화
  if (!Kakao.isInitialized()) {
    Kakao.init(import.meta.env.VITE_KAKAO_SDK_KEY);
  }

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: `${owner}의 책장이오`,
      description: description,
      imageUrl: bookshelfImageUrl,
      link: {
        mobileWebUrl: link,
        webUrl: link,
      },
    },
    social: {
      commentCount: count,
    },
    buttons: [
      {
        title: '방명록 남기기',
        link: {
          mobileWebUrl: link,
          webUrl: link,
        },
      },
      {
        title: '세종대왕 책장',
        link: {
          mobileWebUrl: 'https://wagglewaggle.netlify.app/bookshelf/4eb1ab36rc9d2x4e15kbb3fv03cc4214e69f',
          webUrl: 'https://wagglewaggle.netlify.app/bookshelf/4eb1ab36rc9d2x4e15kbb3fv03cc4214e69f',
        },
      },
    ],
    itemContent: {
      titleImageUrl: 'https://i.ibb.co/0JPcLFr/image.png',
      titleImageText: '세종대왕님의 책장',
      titleImageCategory: '감사한 마음 전하기👋',
    },
  });
};

export default shareKakao;
