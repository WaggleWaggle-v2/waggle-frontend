/* eslint-disable no-misleading-character-class */
export const isCompleteKoreanWord = (text: string) => {
  const koreanRegex = /^[\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F\s\p{P}\p{S}\d]+$/u;
  const emojiRegex =
    /([\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}|\u{1F9D1}\u{1F3FB}-\u{1F3FF}\u{200D}|\u{1F3FB}-\u{1F3FF}|\u{1F9D1}|\u{1F9B0}-\u{1F9BF}])/gu;

  const nonKoreanRegex = /[a-zA-Z]/;

  if (nonKoreanRegex.test(text)) {
    return false;
  }

  return koreanRegex.test(text) || emojiRegex.test(text);
};
