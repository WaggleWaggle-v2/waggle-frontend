import * as Page from '@pages/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page.Root />}>
          <Route index element={<Page.Landing />} />
          <Route path="bookshelf/:id" element={<Page.Main />} />
          <Route path="login" element={<Page.Login />} />
          <Route path="setup" element={<Page.SetUp />} />
          <Route path="auth" element={<Page.Auth />} />
          <Route path="myPage" element={<Page.MyPage />} />
          <Route path="*" element={<Page.NotFound />} />
          <Route path="/book/:id" element={<Page.ReadBook />} />
          <Route path="myPage/editBookshelf" element={<Page.EditBookshelf />} />
          <Route path="myPage/sendBookList" element={<Page.SendBookList />} />
          <Route path="myPage/receiveBookList" element={<Page.ReceiveBookList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
