import { ButtonHTMLAttributes } from 'react';
import rewriteIcon from '@assets/icons/rewrite.svg';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TRenameButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const RenameButton = (props: TRenameButton) => {
  return (
    <S.RenameButton type="button" {...props}>
      <img src={rewriteIcon} alt={'닉네임 변경하기'} />
    </S.RenameButton>
  );
};

export default RenameButton;

const S = {
  RenameButton: styled.button`
    cursor: pointer;
    width: 3.1rem;
    height: 3.1rem;
    margin-top: 2rem;

    @media ${device.tablet} {
      position: absolute;
      right: 0;
      bottom: 0;
      margin-bottom: 1rem;
    }

    @media ${device.mobile} {
      width: 2.3rem;
      height: 2.3rem;
    }
  `,
};
