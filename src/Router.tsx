import * as Page from '@pages/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page.Root />}>
          <Route index element={<Page.Landing />} />
          <Route path="main/:id" element={<Page.Main />} />
          <Route path="login" element={<Page.Login />} />
          <Route path="setup" element={<Page.SetUp />} />
          <Route path="auth" element={<Page.Auth />} />
          <Route path="temp-auth" element={<Page.TempAuth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
