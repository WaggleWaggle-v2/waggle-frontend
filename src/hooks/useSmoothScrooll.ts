import { useEffect, useRef } from 'react';
import { size } from '@styles/breakpoints';
import usePageWidth from './usePageWidth';

const useSmoothScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const pageWidth = usePageWidth();

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const isTabletOrLarger = window.innerWidth > size.tablet;

    if (scrollContainer && isTabletOrLarger) {
      let isScrolling = false;
      let scrollAmount = 0;

      const smoothScroll = () => {
        if (scrollAmount !== 0) {
          scrollContainer.scrollLeft += scrollAmount * 0.06; // 스크롤 속도
          scrollAmount *= 0.92; // 점점 감속
          if (Math.abs(scrollAmount) > 0.5) {
            requestAnimationFrame(smoothScroll);
          } else {
            isScrolling = false;
          }
        }
      };

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        scrollAmount += e.deltaY * 1.5; // 스크롤 변화량 누적
        if (!isScrolling) {
          isScrolling = true;
          requestAnimationFrame(smoothScroll); // 애니메이션 시작
        }
      };

      scrollContainer.addEventListener('wheel', handleWheel);

      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, [pageWidth]);

  return scrollContainerRef;
};

export default useSmoothScroll;
