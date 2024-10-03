import { useRef, useState, useEffect } from 'react';
import { debounce } from 'lodash';

export const usePageNavigation = (pageCount: number) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]); // observer 등록

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = pageRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setCurrentPage(index);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      },
    );

    pageRefs.current.forEach(page => {
      if (page) {
        observer.observe(page);
      }
    });

    return () => {
      pageRefs.current.forEach(page => {
        if (page) {
          observer.unobserve(page);
        }
      });
    };
  }, [pageCount]);

  const handleWheel = debounce((event: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const scrollAmount = window.innerWidth; // 100dvw
      const direction = event.deltaY > 0 ? 1 : -1;

      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollAmount * direction,
        behavior: 'smooth',
      });
    }
  }, 150);

  const handleSetPage = (page: number) => {
    if (containerRef.current) {
      const scrollAmount = window.innerWidth; // 100dvw
      containerRef.current.scrollTo({
        left: scrollAmount * page,
        behavior: 'smooth',
      });
    }
    setCurrentPage(page);
  };

  return {
    containerRef,
    currentPage,
    pageRefs,
    handleWheel,
    handleSetPage,
  };
};
