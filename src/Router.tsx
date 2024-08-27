import * as Page from '@pages/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page.Root />}>
          <Route index element={<Page.Home />} />
          <Route path="login" element={<Page.Login />} />
          {/* <Route index element={<Page.Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
