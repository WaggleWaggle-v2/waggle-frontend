import cloudWhite from '@assets/icons/cloud/cloud-white.svg';
import leftArrowLight from '@assets/icons/left-arrow-light.svg';
import noBookImage from '@assets/icons/no-book-dark.svg';
import plusImg from '@assets/icons/plus-light.svg';
import darkGraphic from '@assets/images/bookshelf/dark-graphic.png';
import { skeletonAnimationDark } from '@styles/animation/skeletonAnimation';

export const dark = {
  text: '#fffcf1',
  subText: 'var(--gray500)',
  pageBg: 'var(--gray900)',

  graphic: darkGraphic,
  addBtnBg: 'var(--gray800)',
  addBtnBorder: 'var(--gray800)',
  addBtnImg: plusImg,

  pcCloud: cloudWhite,
  mobileCloud: cloudWhite,
  shareBtnBg: 'linear-gradient(to right, #121212 0%, #373737 100%)',
  introBg: 'var(--gray900)',
  introBorder: 'var(--white)',

  shareBtnText: '#fffcf1',

  modalBg: 'var(--black)',
  subModalBg: 'var(--gray900)',
  buttonBorder: 'var(--gray800)',
  previewBg: 'var(--gray900)',
  textAreaBg: 'var(--gray900)',
  textAreaText: 'var(--gray500)',
  stickerBg: 'var(--gray800)',

  scollBar: 'var(--gray800)',
  bookscrollBg: 'var(--black)',
  bookscrollText: 'var(--gray400)',
  bookscrollReceiver: 'var(--green600)',
  bookscrollBarTop: '#717171',
  bookscrollBarBtm: '#545454',
  bookscrollBarTip: 'var(--black)',

  backBtn: leftArrowLight,

  invalidBtn: 'var(--gray700)',
  invalidBtnHover: 'var(--gray800)',

  noBookImage: noBookImage,

  skeletonAnimation: skeletonAnimationDark,

  floatButtonBg: 'var(--black)',
};
