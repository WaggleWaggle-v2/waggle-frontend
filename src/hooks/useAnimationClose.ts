import { useState } from 'react';

interface TuseAnimationClose {
  handleDeletePortal: () => void;
  handleSetOpen: () => void;
}

const useAnimationClose = (props: TuseAnimationClose) => {
  const { handleDeletePortal, handleSetOpen } = props;
  const [isClose, setIsClose] = useState(false);

  // Portal요소가 켜지면 close를 false로
  const handleOpenPortal = () => {
    handleSetOpen();
    setIsClose(false);
  };

  // styled-Components의 prop으로 전달해줄 상태 핸들러 함수
  const handleSetClose = () => {
    setIsClose(true);
  };

  // 종료 애니메이션을 위한 핸들러 함수
  const handleClosing = () => {
    if (!isClose) {
      handleSetClose();
    }
  };

  const handleAnimationEnd = () => {
    // 애니메이션이 종료되었을 때 모달 및 Nav 삭제
    if (isClose) {
      handleDeletePortal();
    }
  };

  return { handleAnimationEnd, handleClosing, isClose, handleOpenPortal };
};

export default useAnimationClose;

// 사용하는 컴포넌트에서 필요한 prop
export interface TCloseHandler {
  handleAnimationEnd: () => void;
  handleClosing: () => void;
  isClose: boolean;
}
