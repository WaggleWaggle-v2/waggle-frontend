const copyInClipboard = (value: string) => {
  navigator.clipboard.writeText(value);
};

export default copyInClipboard;
