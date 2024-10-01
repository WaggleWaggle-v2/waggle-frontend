export const isCompleteKoreanWord = (text: string) => {
  const koreanRegex = /^[\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F\s\p{P}\p{S}\d]+$/u;
  const nonKoreanRegex = /[a-zA-Z]/;

  if (nonKoreanRegex.test(text)) {
    return false;
  }

  return koreanRegex.test(text);
};
