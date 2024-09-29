import kakaoIcon from '@assets/icons/social-login/symbol-kakao.svg';
import shareIcon from '@assets/icons/temp-share.svg';
import ModalBaseTemplate from '@components/template/ModalBaseTemplate/ModalBaseTemplate';
import { ModalTitle } from '@components/template/ModalBaseTemplate/style/commonModalStyle';
import copyInClipboard from '@utils/copyInClipboard';
import styled from 'styled-components';

interface TSharedModal {
  handleCloseModal: () => void;
}

const ShareModal = (props: TSharedModal) => {
  const { handleCloseModal } = props;

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    copyInClipboard(currentUrl);
  };

  return (
    <ModalBaseTemplate handleCloseModal={handleCloseModal}>
      <S.Container>
        <ModalTitle>공유하시겠소?</ModalTitle>
        <S.ButtonContainer>
          <S.ShareButton type="button">
            <img src={kakaoIcon} alt="카카오톡 공유하기" />
          </S.ShareButton>
          <S.ShareButton type="button" onClick={handleCopyLink}>
            <img src={shareIcon} alt="클립보드에 링크 복사하기" />
          </S.ShareButton>
        </S.ButtonContainer>
      </S.Container>
    </ModalBaseTemplate>
  );
};

export default ShareModal;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `,
  ShareButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    border-radius: 50%;
    border: 0.1rem solid var(--brown500);
    cursor: pointer;
    min-width: 5rem;
    width: 5rem;
    min-height: 5rem;
    height: 5rem;
  `,
};
