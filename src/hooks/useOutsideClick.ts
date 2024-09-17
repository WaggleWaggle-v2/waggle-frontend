import { RefObject, useEffect, useCallback } from 'react';

const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  handleClose: () => void,
  exceptionRef?: RefObject<HTMLElement>,
) => {
  const handleClickOutside = useCallback(
    (event: Event) => {
      // 예외 요소 내에서 클릭이 발생했는지 확인 (제공된 경우)
      if (exceptionRef?.current?.contains(event.target as Node)) {
        return;
      }

      // 참조된 요소 외부에서 클릭이 발생한 경우 닫기 처리
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClose();
      }
    },
    [ref, handleClose, exceptionRef],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);
};

export default useOutsideClick;
