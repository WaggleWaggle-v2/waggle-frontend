import { lazy } from 'react';

const Auth = lazy(() => import('@pages/auth'));
const Home = lazy(() => import('@pages/home'));
const Landing = lazy(() => import('@pages/landing'));
const Login = lazy(() => import('@pages/Login'));
const Main = lazy(() => import('@pages/main'));
const MyPage = lazy(() => import('@pages/myPage'));
const EditBookshelf = lazy(() => import('@pages/myPage/pages/editBookshelf'));
const ReceiveBookList = lazy(() => import('@pages/myPage/pages/layout/receiveBookList'));
const SendBookList = lazy(() => import('@pages/myPage/pages/layout/sendBookList'));
const ReadBook = lazy(() => import('@pages/myPage/pages/ReadBook'));
const NotFound = lazy(() => import('@pages/notFound'));
const Root = lazy(() => import('@pages/Root'));
const SetUp = lazy(() => import('@pages/setup'));



export {
  Home,
  Root,
  Login,
  SetUp,
  Main,
  Auth,
  Landing,
  MyPage,
  NotFound,
  ReadBook,
  EditBookshelf,
  SendBookList,
  ReceiveBookList,
};
