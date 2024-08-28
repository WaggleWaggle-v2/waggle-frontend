export const isCompleteKoreanWord = (text: string) => {
  const completeKoreanWordRegex = /^[\uAC00-\uD7A3]+$/;
  const jamoRegex = /^[\u1100-\u11FF\u3130-\u318F]+$/;

  if (completeKoreanWordRegex.test(text)) {
    return false;
  }

  if (jamoRegex.test(text)) {
    return true;
  }

  return true;
};
