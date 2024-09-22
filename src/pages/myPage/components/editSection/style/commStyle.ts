import styled from 'styled-components';

export const SaveButton = styled.button`
  padding: 0.8rem 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green600);
  border-radius: 0.6rem;
  cursor: pointer;

  color: var(--white);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.2rem;

  position: absolute;
  right: 1rem;
  bottom: 1rem;
  &:disabled {
    background-color: var(--gray400);
    cursor: not-allowed;
    &:hover {
      background-color: var(--gray400);
    }
  }
  &:hover {
    background-color: var(--green700);
  }
  &:active {
    background-color: var(--green800);
  }
`;

export const SettingTitle = styled.h3`
  color: var(--gray900);
  font-family: Pretendard;
  font-size: 2.4rem;
  font-weight: 500;
`;

export const SettingOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 2rem 0;
  border-bottom: 0.1rem solid var(--gray300);
`;

export const Description = styled.p`
  color: var(--gray700);
  font-family: Pretendard;
  font-size: 1.4rem;
  line-height: 180%;
  letter-spacing: -0.07px;
`;
