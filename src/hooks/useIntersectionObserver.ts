import { useEffect, useRef, useState } from 'react';

interface TIntersectionObserver {
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number;
}

const useIntersectionObserver = <T extends HTMLElement>({ root, rootMargin, threshold }: TIntersectionObserver) => {
  const targetRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const option = { root: root, rootMargin: rootMargin, threshold: threshold };
    const targetObserver = new IntersectionObserver(entries => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, option);

    const currentTargetRef = targetRef.current;
    if (currentTargetRef) {
      targetObserver.observe(currentTargetRef);
    }

    return () => {
      if (currentTargetRef) {
        targetObserver.unobserve(currentTargetRef);
      }
    };
  }, [root, rootMargin, threshold]);

  return { isVisible, targetRef };
};

export default useIntersectionObserver;
