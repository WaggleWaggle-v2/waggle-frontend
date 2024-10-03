import { Suspense } from 'react';
import * as Page from '@pages/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const LoadingFallback = () => <div />;

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
