export const getFormattedDate = (timestamp: string | undefined) => {
  let today;
  if (timestamp) {
    today = new Date(timestamp);
  } else {
    today = new Date();
  }

  const kstOffset = 9 * 60;
  today.setMinutes(today.getMinutes() + kstOffset);

  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const year = String(today.getFullYear()).slice(-2);

  return `${year}년 ${month}월 ${day}일`;
};
