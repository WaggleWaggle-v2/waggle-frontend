import { MouseEvent, useRef } from 'react';
import bottomArrowIcon from '@assets/icons/bottom-arrow.svg';
import topArrowIcon from '@assets/icons/top-arrow.svg';
import useOutsideClick from '@hooks/useOutsideClick';
import useToggle from '@hooks/useToggle';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import { SORTING_OPTION, TSortingOption } from '..';

interface TSortinBox {
  handleSelectOption: (option: TSortingOption) => void;
  selectOption: TSortingOption;
}

const SortingBox = ({ handleSelectOption, selectOption }: TSortinBox) => {
  const { isTrue: isOpen, handleSetFalse: handleCloseOption, handleToggle: handleToggleOption } = useToggle();
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const optionRef = useRef<HTMLButtonElement | null>(null);

  const handleSetOption = (event: MouseEvent<HTMLButtonElement>) => {
    handleSelectOption(event.currentTarget.value as TSortingOption);
    handleCloseOption();
  };

  useOutsideClick(dropDownRef, handleCloseOption, optionRef);

  return (
    <S.Container>
      <S.Button
        type="button"
        onClick={handleToggleOption}
        style={{ borderBottom: '0.1rem solid var(--gray300)' }}
        ref={optionRef}>
        <S.OptionBox style={{ cursor: 'pointer' }}>
          {selectOption}
          <img src={isOpen ? topArrowIcon : bottomArrowIcon} alt="정렬하기" />
        </S.OptionBox>
      </S.Button>
      {isOpen && (
        <S.DropDownBox ref={dropDownRef}>
          {SORTING_OPTION.map(option => (
            <S.OptionButton type="button" value={option} key={option} onClick={handleSetOption}>
              <S.OptionBox>{option}</S.OptionBox>
            </S.OptionButton>
          ))}
        </S.DropDownBox>
      )}
    </S.Container>
  );
};

export default SortingBox;

const Button = styled.button`
  padding: 0.8rem 1rem;
  width: 100%;
  background-color: var(--background);
`;

const S = {
  Container: styled.div`
    position: relative;
    min-height: 3.3rem;
    min-width: 14rem;
    margin-right: 5rem;

    @media ${device.mobile} {
      min-width: 13rem;
    }
  `,
  OptionButton: styled.button`
    width: 100%;
    padding: 0.8rem 1rem;
    background-color: var(--background);
    &:hover,
    &:active {
      background-color: var(--brown100);
    }
  `,
  OptionBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #535353;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 500;

    @media ${device.mobile} {
      font-size: 1.2rem;
    }
  `,
  DropDownBox: styled.div`
    position: absolute;
    bottom: -5.8rem;
    left: 0;
    right: 0;
    z-index: 5;
    box-shadow: 0.4rem 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);

    @media ${device.mobile} {
      bottom: -5rem;
    }
  `,
  Button,
};
