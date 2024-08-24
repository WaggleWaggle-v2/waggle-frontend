import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <>{/* 네비게이션 바 */}</>
      <Outlet />
    </div>
  );
};

export default Root;
