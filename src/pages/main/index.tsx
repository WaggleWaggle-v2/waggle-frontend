import { useEffect, useState } from 'react';
import useSmoothScroll from '@hooks/useSmoothScrooll';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import BookshelfInfo from './bookshelf/BookshelfInfo';
import GuestBooks from './bookshelf/GuestBooks';
import AdditionalSetup from './components/additionalSetup/AdditionalSetup';

const Main = () => {
  const scrollContainerRef = useSmoothScroll();
  const [buttonColor, setButtonColor] = useState('');
  const isNewUser = true;

  console.log(scrollContainerRef);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleScroll = () => {
      const currentScrollX = scrollContainer?.scrollLeft || 0;
      if (currentScrollX >= 0 && currentScrollX <= 200) {
        const colorIntensity = Math.min(currentScrollX / 200, 1);
        const newColor = `rgba(234, 224, 205, ${colorIntensity})`;
        setButtonColor(newColor);
      }
    };
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scrollContainerRef]);

  return (
    <>
      {isNewUser && <AdditionalSetup />}
      <S.Container ref={scrollContainerRef}>
        <BookshelfInfo buttonColor={buttonColor} />
        <GuestBooks />
      </S.Container>
    </>
  );
};

export default Main;

const S = {
  Container: styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    background-color: var(--brown200);

    &::-webkit-scrollbar {
      display: none;
    }
    @media ${device.tablet} {
      flex-direction: column;
    }
  `,
};
