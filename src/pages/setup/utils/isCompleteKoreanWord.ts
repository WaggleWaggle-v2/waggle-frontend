export const isCompleteKoreanWord = (text: string) => {
  const completeKoreanWordRegex = /^[\uAC00-\uD7A3\s\p{P}\p{S}]+$/u;
  const jamoRegex = /^[\u1100-\u11FF\u3130-\u318F\s\p{P}\p{S}]+$/u;

  if (completeKoreanWordRegex.test(text)) {
    return false;
  }

  if (jamoRegex.test(text)) {
    return true;
  }

  return true;
};
