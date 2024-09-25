import equipment1 from '@assets/images/book-stickers/equipment/equipment1.png';
import equipment2 from '@assets/images/book-stickers/equipment/equipment2.png';
import equipment3 from '@assets/images/book-stickers/equipment/equipment3.png';

import letter1 from '@assets/images/book-stickers/letter/letter1.png';
import letter10 from '@assets/images/book-stickers/letter/letter10.png';
import letter11 from '@assets/images/book-stickers/letter/letter11.png';
import letter12 from '@assets/images/book-stickers/letter/letter12.png';
import letter13 from '@assets/images/book-stickers/letter/letter13.png';
import letter14 from '@assets/images/book-stickers/letter/letter14.png';
import letter2 from '@assets/images/book-stickers/letter/letter2.png';
import letter3 from '@assets/images/book-stickers/letter/letter3.png';
import letter4 from '@assets/images/book-stickers/letter/letter4.png';
import letter5 from '@assets/images/book-stickers/letter/letter5.png';
import letter6 from '@assets/images/book-stickers/letter/letter6.png';
import letter7 from '@assets/images/book-stickers/letter/letter7.png';
import letter8 from '@assets/images/book-stickers/letter/letter8.png';
import letter9 from '@assets/images/book-stickers/letter/letter9.png';

import prop1 from '@assets/images/book-stickers/props/props1.png';
import prop10 from '@assets/images/book-stickers/props/props10.png';
import prop11 from '@assets/images/book-stickers/props/props11.png';
import prop12 from '@assets/images/book-stickers/props/props12.png';
import prop2 from '@assets/images/book-stickers/props/props2.png';
import prop3 from '@assets/images/book-stickers/props/props3.png';
import prop4 from '@assets/images/book-stickers/props/props4.png';
import prop5 from '@assets/images/book-stickers/props/props5.png';
import prop6 from '@assets/images/book-stickers/props/props6.png';
import prop7 from '@assets/images/book-stickers/props/props7.png';
import prop8 from '@assets/images/book-stickers/props/props8.png';
import prop9 from '@assets/images/book-stickers/props/props9.png';

export const LETTER_IMAGES = {
  title: '한글',
  imageList: [
    letter1,
    letter2,
    letter3,
    letter4,
    letter5,
    letter6,
    letter7,
    letter8,
    letter9,
    letter10,
    letter11,
    letter12,
    letter13,
    letter14,
  ],
} as const;

export const PROP_IMAGES = {
  title: '아기자기한 소품',
  imageList: [prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9, prop10, prop11, prop12],
} as const;

export const EQUIPMENT_IMAGES = {
  title: '멋스러운 소품',
  imageList: [equipment1, equipment2, equipment3],
} as const;
