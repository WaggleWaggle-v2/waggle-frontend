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

  Kakao.Share.sendCustom({
    templateId: 112689,
    templateArgs: {
      bookshelfImage: bookshelfImageUrl,
      description: description,
      count: count,
      owner: owner,
      link: link,
    },
  });
};

export default shareKakao;
