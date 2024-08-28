import doorCloseIcon from '@assets/icons/door-close.svg';
import doorOpenIcon from '@assets/icons/door-open.svg';

export const PUBLICITY_SELECT = [
  {
    image: doorOpenIcon,
    text: '모두에게',
    value: 'public',
  },
  {
    image: doorCloseIcon,
    text: '친구에게만',
    value: 'friendsOnly',
  },
] as const;
