import messageIcon from '@assets/icons/message.svg';

const BookshelfCard = () => {
  return (
    <figure>
      <div className="profile_img">
        <img src="image/korean-traditional-house-with-cumulus-clouds.png" alt="" />
      </div>
      <div className="profile_desc">
        <h4>세종대왕</h4>
        <p>백성들의 어려움을 살피는 것은 &nbsp;국왕이 할 일! 내 앞 길을 막지 마세요!</p>
        <span>
          <img src={messageIcon} alt={'메시지'} />
          1,920,000 개
        </span>
      </div>
    </figure>
  );
};

export default BookshelfCard;
