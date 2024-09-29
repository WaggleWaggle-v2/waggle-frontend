import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import kakaoIcon from '@assets/icons/social-login/symbol-kakao.svg';
import ModalBaseTemplate from '@components/template/ModalBaseTemplate/ModalBaseTemplate';
import { ModalTitle } from '@components/template/ModalBaseTemplate/style/commonModalStyle';
import { device } from '@styles/breakpoints';
import copyInClipboard from '@utils/copyInClipboard';
import shareKakao from '@utils/shareKakao';
import styled from 'styled-components';

interface TSharedModal {
  handleCloseModal: () => void;
  bookshelfData: TBookshelfFetchRes;
}

const ShareModal = (props: TSharedModal) => {
  const { handleCloseModal, bookshelfData } = props;
  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    copyInClipboard(currentUrl);
  };

  return (
    <ModalBaseTemplate handleCloseModal={handleCloseModal}>
      <S.Container>
        <S.ModalTitle>
          <span>나의 책장을 </span>
          <span>널리 알리시오!</span>
        </S.ModalTitle>
        <S.ButtonContainer>
          <S.KakaoShareButton
            type="button"
            onClick={() => {
              const { nickname, backgroundImageUrl, introduction, count } = bookshelfData;
              shareKakao({
                description: introduction,
                owner: nickname,
                bookshelfImageUrl: backgroundImageUrl,
                count: count,
                link: currentUrl,
              });
            }}>
            <S.KakaoIcon src={kakaoIcon} alt="카카오톡 공유하기" />
            <S.ButtonText>카카오톡으로 전달하겠소!</S.ButtonText>
          </S.KakaoShareButton>
          <S.ShareButton type="button" onClick={handleCopyLink}>
            <S.ButtonText $color={'#fff'}>주소를 복사하겠소</S.ButtonText>
          </S.ShareButton>
        </S.ButtonContainer>
      </S.Container>
    </ModalBaseTemplate>
  );
};

export default ShareModal;

const ShareButton = styled.button<{ $color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 1.3rem 2rem;
  border-radius: 0.6rem;
  background-color: ${({ $color }) => ($color ? $color : 'var(--button-active)')};
  cursor: pointer;
  min-width: 34rem;
  min-height: 4rem;

  @media ${device.tablet} {
    min-width: auto;
  }

  &:hover {
  }
`;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media ${device.mobile} {
      padding: 2rem 3rem;
    }
  `,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  ModalTitle: styled(ModalTitle)`
    display: flex;
    justify-content: center;
    gap: 1rem;
    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  `,
  KakaoShareButton: styled(ShareButton)`
    background-color: #fae100;
  `,
  ButtonText: styled.p<{ $color?: string }>`
    color: ${({ $color }) => ($color ? $color : '#371d1e')};
    text-align: center;
    font-family: 'EBSHMJESaeron';
    font-weight: 500;
  `,
  ShareButton,
  KakaoIcon: styled.img`
    @media ${device.mobile} {
      display: none;
    }
  `,
};
