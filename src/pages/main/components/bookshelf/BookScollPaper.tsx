import { device } from '@styles/breakpoints';
import { light } from '@styles/theme/light';
import styled, { keyframes } from 'styled-components';

interface TBookScollPaperProps {
  ownerName: string | undefined;
  content: string | undefined;
  createdAt?: string;
  sender?: string;
  isPreview?: boolean;
}

const BookScollPaper = ({ ownerName, content, createdAt, sender, isPreview }: TBookScollPaperProps) => {
  return (
    <S.Container>
      <S.BookScrollBar>
        <div />
        <div />
      </S.BookScrollBar>

      <S.BookContent $isPreview={isPreview as boolean}>
        <S.Receiver>
          <p>{ownerName}</p>
          <p>님 에게</p>
        </S.Receiver>
        <S.Content>{content}</S.Content>
        {sender && (
          <S.Sender>
            <p>{createdAt}</p>
            <p>{sender}</p>
          </S.Sender>
        )}
      </S.BookContent>

      <S.BookScrollBar>
        <div />
        <div />
      </S.BookScrollBar>
    </S.Container>
  );
};

export default BookScollPaper;

const rollDown = keyframes`
    0%{
    padding: 0 4rem;
    max-height: 0rem;
    }

    16%{
    padding: 0 4rem;
    max-height: 0rem;
    }

  100%{
    max-height: 48rem;
  }
`;

const rollDownMobile = keyframes`
    0%{
    padding: 0 2.6rem;
    max-height: 0rem;
    }

    16%{
    padding: 0 2.6rem;
    max-height: 0rem;
    }

  100%{
    max-height: 48rem;
  }
`;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media ${device.mobile} {
      width: 94vw;
    }
  `,

  BookScrollBar: styled.div`
    height: 1rem;
    height: 2rem;
    position: relative;
    width: 100%;

    div:first-child {
      position: absolute;
      display: flex;
      width: 96%;
      background: linear-gradient(to top, #ceb499 0%, #bb9165 100%);
      background: linear-gradient(
        to top,
        ${({ theme }) => theme.bookscrollBarTop || light.bookscrollBarTop} 0%,
        ${({ theme }) => theme.bookscrollBarBtm || light.bookscrollBarBtm} 100%
      );
      left: calc(2%);
      height: 100%;
      z-index: 1;
      border-radius: 0.4rem;
    }
    div:last-child {
      position: absolute;
      display: flex;
      top: calc(50% - 0.8rem / 2);
      width: 100%;
      background-color: ${({ theme }) => theme.bookscrollBarTip || light.bookscrollBarTip};
      height: 0.8rem;
      z-index: 0;
      border-radius: 0.4rem;
    }
  `,

  BookContent: styled.div<{ $isPreview: boolean }>`
    overflow: hidden;
    background-color: ${({ theme }) => theme.bookscrollBg || light.bookscrollBg};
    color: ${({ theme }) => theme.bookscrollText || light.bookscrollText};
    width: calc(100% - 4rem);
    padding: ${({ $isPreview }) => ($isPreview ? '3rem 2.6rem' : '5.6rem 4rem')};
    animation: ${({ $isPreview }) => ($isPreview ? rollDownMobile : rollDown)} 0.5s
      cubic-bezier(0.51, -0.09, 0.51, 1.03);
    font-size: ${({ $isPreview }) => ($isPreview ? '1.6rem' : '2rem')};
    @media ${device.mobile} {
      animation: ${rollDownMobile} 0.5s cubic-bezier(0.51, -0.09, 0.51, 1.03);
      padding: 3rem 2.6rem;
      font-size: 1.6rem;
    }
  `,

  Receiver: styled.div`
    display: flex;
    font-size: 2.4rem;
    font-weight: 900;
    p:first-child {
      color: ${({ theme }) => theme.bookscrollReceiver || light.bookscrollReceiver};
    }
    @media ${device.mobile} {
      font-size: 1.8rem;
    }
  `,

  Content: styled.div`
    font-family: 'Pretendard';
    margin: 2.1rem 0;
    padding-right: 1rem;
    line-height: 150%;
    max-height: 25rem;
    overflow-y: auto;
    white-space: pre-wrap;

    &::-webkit-scrollbar {
      width: 0.4rem;
    }
    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.scollBar || light.scollBar};
      border-radius: 0.2rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.2rem;
      background-color: var(--brown200);
    }
  `,

  Sender: styled.div`
    font-family: 'EBSHunminjeongeum';
    text-align: end;
    p:first-child {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 0.6rem;
    }
    p:last-child {
      font-size: 1.8rem;
      font-weight: 900;
    }
  `,
};
