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
          mobileWebUrl: 'https://wagglewaggle.netlify.app/bookshelf/sejong',
          webUrl: 'https://wagglewaggle.netlify.app/bookshelf/sejong',
        },
      },
    ],
  });
};

export default shareKakao;
