import doorOpenIcon from '@assets/images/publicity/open.png';
import doorCloseIcon from '@assets/images/publicity/private.png';

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
