import { useEffect, useState } from 'react';
import { useBookshelfQuery } from '@hooks/reactQuery/useQueryBookshelf';
import useSmoothScroll from '@hooks/useSmoothScrooll';
import BookshelfInfo from '@pages/main/components/bookshelf/BookshelfInfo';
import GuestBooks from '@pages/main/components/bookshelf/GuestBooks';
import { device } from '@styles/breakpoints';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AdditionalSetup from './components/additionalSetup/AdditionalSetup';

const Main = () => {
  const scrollContainerRef = useSmoothScroll();
  const [buttonColor, setButtonColor] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: bookshelfData, isLoading } = useBookshelfQuery(id as string);

  console.log(bookshelfData?.bookshelfType);

  useEffect(() => {
    if (location.state === 'setup') {
      setIsNewUser(true);
      navigate(location.pathname, { replace: true });
    }
  }, []);

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
        {isLoading ? (
          <S.SkeletonWrapper />
        ) : (
          bookshelfData && <BookshelfInfo buttonColor={buttonColor} data={bookshelfData} />
        )}
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
    background-color: var(--background);

    &::-webkit-scrollbar {
      display: none;
    }
    @media ${device.tablet} {
      flex-direction: column;
    }
  `,

  SkeletonWrapper: styled.div`
    background-color: var(--gray300);
    min-width: 46.4rem;

    @media ${device.tablet} {
      width: 100%;
      min-width: 0;
    }
  `,
};
