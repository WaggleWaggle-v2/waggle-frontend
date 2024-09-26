import notFoundlogoImage from '@assets/images/404-logo.png';
import { useUserQuery } from '@hooks/reactQuery/useQueryUser';
import { device } from '@styles/breakpoints';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  const navigate = useNavigate();
  const { data } = useUserQuery();

  const handleMainButtonClick = () => {
    if (data?.userState === 'VERIFIED') {
      navigate(`/bookshelf/${data.id}`);
    } else {
      navigate('/');
    }
  };

  return (
    <S.Container>
      <img src={notFoundlogoImage} alt="404로고" />
      <S.Title>페이지를 찾을 수 없습니다.</S.Title>
      <S.Description>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</S.Description>
      <S.Description>입력하신 주소가 정확한지 다시 한 번 확인해주세요.</S.Description>
      <S.MainButton onClick={handleMainButtonClick}>메인으로 돌아가기</S.MainButton>
    </S.Container>
  );
};

export default NotFound;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img {
      @media ${device.mobile} {
        height: 4rem;
        position: relative;
      }
    }
  `,

  Title: styled.h2`
    font-family: 'EBSHunminjeongeum';
    font-size: 3.4rem;
    font-weight: 800;
    margin: 6rem 0 2rem;
    @media ${device.mobile} {
      font-size: 1.8rem;
      margin: 3rem 0 1.4rem;
    }
  `,

  Description: styled.p`
    font-family: 'Pretendard';
    font-size: 2rem;
    color: var(--gray600);
    line-height: 200%;
    @media ${device.mobile} {
      font-size: 1.2rem;
    }
  `,

  MainButton: styled.button`
    cursor: pointer;
    color: var(--green600);
    border: 1px solid var(--green600);
    height: 5rem;
    padding: 0 9.45rem;
    border-radius: 0.6rem;
    margin-top: 6rem;
    @media ${device.mobile} {
      position: absolute;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(100% - 4rem);
      bottom: 3rem;
    }
  `,
};
