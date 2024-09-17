import { MouseEvent, useEffect, useRef } from 'react';

const useSwapPage = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handlePageTransfer = (event: MouseEvent<HTMLButtonElement>) => {
    const newPage = Number(event.currentTarget.value);
    sectionRefs.current[newPage - 1]?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const targetIndex = sectionRefs.current.indexOf(entry.target as HTMLDivElement);

          if (entry.isIntersecting && targetIndex !== -1) {
            // 현재 페이지에 해당하는 버튼 색상을 업데이트
            buttonRefs.current.forEach((button, index) => {
              if (button) {
                button.style.backgroundColor = index === targetIndex ? '#c0aa87' : 'transparent';
              }
            });
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return { handlePageTransfer, buttonRefs, sectionRefs };
};

export default useSwapPage;
