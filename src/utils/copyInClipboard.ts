const copyInClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
  alert('주소가 복사되었습니다.  소중한 사람들에게 공유해주세요!');
};

export default copyInClipboard;
