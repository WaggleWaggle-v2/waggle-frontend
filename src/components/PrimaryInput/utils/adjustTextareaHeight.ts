import { RefObject } from 'react';

export const adjustTextareaHeight = (ref: RefObject<HTMLTextAreaElement>) => {
  const textarea = ref.current;
  if (textarea) {
    textarea.style.height = '1px';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
};
