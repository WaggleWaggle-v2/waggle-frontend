import cloudGreen from '@assets/icons/cloud/cloud-green.svg';
import cloudLightGreen from '@assets/icons/cloud/cloud-lightgreen.svg';
import leftArrow from '@assets/icons/left-arrow.svg';
import noBookImage from '@assets/icons/no-book-light.svg';
import plusImg from '@assets/icons/plus-dark.svg';
import lightGraphic from '@assets/images/bookshelf/light-graphic.png';
import { skeletonAnimation } from '@styles/animation/skeletonAnimation';

export const light = {
  text: 'var(--gray900)',
  subText: 'var(--gray800)',
  pageBg: 'var(--background)',

  graphic: lightGraphic,
  addBtnBg: '#ece9e2',
  addBtnBorder: 'var(--gray300)',
  addBtnImg: plusImg,

  pcCloud: cloudGreen,
  mobileCloud: cloudLightGreen,
  shareBtnBg: 'linear-gradient(to right, #588B48 0%, #225D10 100%)',
  introBg: 'var(--white)',
  introBorder: '#316920',

  shareBtnText: '#316920',

  modalBg: 'var(--background)',
  previewBg: '#e5ddcf',
  textAreaBg: 'var(--white)',
  textAreaText: 'var(--gray800)',
  stickerBg: 'var(--gray300)',

  scollBar: 'var(--gray200)',
  bookscrollBg: '#fffcf9',
  bookscrollText: 'var(--gray900)',
  bookscrollReceiver: 'var(--red500)',
  bookscrollBarTop: '#bb9165',
  bookscrollBarBtm: '#ceb499',
  bookscrollBarTip: '#513a2a',

  backBtn: leftArrow,

  invalidBtn: 'var(--gray400)',
  invalidBtnHover: 'var(--gray500)',

  noBookImage: noBookImage,

  skeletonAnimation: skeletonAnimation,
};
