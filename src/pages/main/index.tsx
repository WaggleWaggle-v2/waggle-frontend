import { useEffect, useState } from 'react';
import { useBookshelfQuery } from '@hooks/reactQuery/useQueryBookshelf';
import useSmoothScroll from '@hooks/useSmoothScrooll';
import useToggle from '@hooks/useToggle';
import BookshelfInfo from '@pages/main/components/bookshelf/BookshelfInfo';
import GuestBooks from '@pages/main/components/bookshelf/GuestBooks';
import { device } from '@styles/breakpoints';
import { dark } from '@styles/theme/dark';
import { light } from '@styles/theme/light';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import AdditionalSetup from './components/additionalSetup/AdditionalSetup';
import BookSetup from './components/bookSetup/BookSetup';
import ShareModal from './components/bookshelf/ShareModal';

const Main = () => {
  const scrollContainerRef = useSmoothScroll();
  const [buttonColor, setButtonColor] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: bookshelfData, isLoading } = useBookshelfQuery(id as string);
  const { isTrue: isShareOpen, handleSetTrue: handleOpenShare, handleSetFalse: handleCloseShare } = useToggle();

  useEffect(() => {
    if (location.state === 'setup') {
      setIsNewUser(true);
      navigate(location.pathname, { replace: true });
    }
  }, []);

  useEffect(() => {
    if (isLoading === false && !bookshelfData?.id) {
      navigate('/notfound');
    }
  }, [bookshelfData?.id, isLoading]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleScroll = () => {
      const currentScrollX = scrollContainer?.scrollLeft || 0;
      if (currentScrollX >= 0 && currentScrollX <= 200) {
        const colorIntensity = Math.min(currentScrollX / 200, 1);
        const newColor =
          bookshelfData?.bookshelfType === 'BLACK'
            ? `rgba(110, 110, 110, ${colorIntensity})`
            : `rgba(234, 224, 205, ${colorIntensity})`;
        setButtonColor(newColor);
      }
    };
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [bookshelfData?.bookshelfType, scrollContainerRef]);

  return (
    <>
      {isShareOpen && bookshelfData && <ShareModal handleCloseModal={handleCloseShare} bookshelfData={bookshelfData} />}
      <ThemeProvider theme={bookshelfData?.bookshelfType === 'BLACK' ? dark : light}>
        {isNewUser && <AdditionalSetup />}
        {isOpen && <BookSetup setIsOpen={setIsOpen} />}

        <S.Container ref={scrollContainerRef}>
          {isLoading ? (
            <S.SkeletonWrapper />
          ) : (
            bookshelfData && (
              <BookshelfInfo buttonColor={buttonColor} data={bookshelfData} handleOpenShare={handleOpenShare} />
            )
          )}
          <GuestBooks
            setIsOpen={setIsOpen}
            id={id as string}
            totalCount={bookshelfData?.count as number}
            handleOpenShare={handleOpenShare}
          />
        </S.Container>
      </ThemeProvider>
    </>
  );
};

export default Main;

const S = {
  Container: styled.div`
    display: flex;
    position: relative;
    height: 100dvh;
    width: 100%;
    overflow-y: auto;
    background-color: ${props => props.theme.pageBg};

    &::-webkit-scrollbar {
      display: none;
    }
    @media ${device.tablet} {
      flex-direction: column;
      overflow-x: hidden;
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
