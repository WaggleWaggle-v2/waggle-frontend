import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }: PropsWithChildren) => {
  const portalElement = document.getElementById('portal');

  if (!portalElement) {
    throw new Error("ID가 'portal'인 포털 엘리먼트를 찾을 수 없습니다.");
  }

  return ReactDOM.createPortal(<>{children}</>, portalElement);
};

export default Portal;
