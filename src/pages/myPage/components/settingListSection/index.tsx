import { MouseEvent } from 'react';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import SETTING_LIST from '@pages/myPage/constant/settingList';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';

interface TSettingList {
  handleSetType: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SettingListSection = ({ handleSetType }: TSettingList) => {
  return (
    <S.SettingListSection>
      {SETTING_LIST.map((menu, index) => (
        <button type="button" style={{ cursor: 'pointer' }} value={menu.type} onClick={handleSetType} key={menu.title}>
          <S.SettingButton>
            <S.SettingText $num={index + 1}>{menu.title}</S.SettingText>
            <RightArrowIcon color={'#222'} width={11} height={26} />
          </S.SettingButton>
        </button>
      ))}
    </S.SettingListSection>
  );
};

export default SettingListSection;

const S = {
  SettingListSection: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `,
  SettingButton: styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.7rem 1rem;
    width: 100%;

    &::after {
      content: '';
      min-width: 100%;
      min-height: 0.1rem;
      background-color: var(--gray300);
      position: absolute;
      bottom: 0;
    }
  `,
  // text
  SettingText: styled.p<{ $num: number }>`
    color: var(--gray900);
    font-family: 'EBSHunminjeongeum';
    font-size: 4.2rem;

    @media ${device.mobile} {
      font-size: 2.4rem;
    }

    &::before {
      content: '0${({ $num }) => $num}. ';
      color: var(--gray900);
      font-size: 2.8rem;

      @media ${device.mobile} {
        font-size: 1.8rem;
      }
    }
  `,
};
