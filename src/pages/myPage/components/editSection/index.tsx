import { MouseEvent, useEffect } from 'react';
import { TBookshelfFetchRes } from '@api/bookshelf/bookshelfRequest.type';
import editIcon from '@assets/icons/rewrite.svg';
import RightArrowIcon from '@components/icons/RightArrowIcon';
import { MAX_LENGTH } from '@constants/maxLength';
import {
  useBookshelfIntroductionUpdateMutation,
  useBookshelfPublicityUpdateMutation,
} from '@hooks/reactQuery/useQueryBookshelf';
import useInputValue from '@hooks/useInputText';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import useScopeValue from './hooks/useScopeValue';

interface TEditSection {
  bookshelfData: TBookshelfFetchRes;
}

const EditSection = ({ bookshelfData }: TEditSection) => {
  const { introduction, backgroundImageUrl, nickname, open } = bookshelfData;
  const { value: introductionValue, handleChangeValue, handleSetValue } = useInputValue();
  const { isEnterScope, handleSetScope, handleInitialSetScope } = useScopeValue();
  const patchOpenScope = useBookshelfPublicityUpdateMutation();
  const patchIntroduction = useBookshelfIntroductionUpdateMutation();

  useEffect(() => {
    handleSetValue(introduction ? introduction : '');
    handleInitialSetScope(open);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetScopeValue = (event: MouseEvent<HTMLButtonElement>) => {
    handleSetScope(event, patchOpenScope.mutate);
  };

  const handlePatchIntroduction = () => {
    patchIntroduction.mutate(introductionValue);
  };

  return (
    <S.Container>
      <S.ImageIntroduction>
        <div style={{ position: 'relative', flexShrink: '0' }}>
          <S.EditImgButton type="button">
            <S.EditIcon src={editIcon} alt="책장 배경사진 변경" />
          </S.EditImgButton>
          <S.ImageBox>
            <S.BackgroundImg src={backgroundImageUrl} alt={`${nickname}의 책장 이미지`} />
          </S.ImageBox>
        </div>
        <S.IntroductionForm>
          <S.IntroductionInput
            maxLength={100}
            placeholder="소개글을 작성해주세요."
            value={introductionValue}
            onChange={handleChangeValue}
          />
          <S.TextLength>
            ({introductionValue.length} / {MAX_LENGTH.BOOKSHELF_INTRODUCTION})
          </S.TextLength>
          <S.SaveButton type="button" disabled={introduction === introductionValue} onClick={handlePatchIntroduction}>
            변경사항 저장하기
          </S.SaveButton>
        </S.IntroductionForm>
      </S.ImageIntroduction>
      <S.SettingOne>
        <S.OpenOption>
          <S.SettingTitle>공개여부</S.SettingTitle>
          <S.OpenOptionContainer>
            <S.OpenButton $isSelect={isEnterScope === true} type="button" data-scope="1" onClick={handleSetScopeValue}>
              모두 보길 원하오
            </S.OpenButton>
            <S.OpenButton $isSelect={isEnterScope === false} type="button" data-scope="0" onClick={handleSetScopeValue}>
              주인장만 보길 원하오
            </S.OpenButton>
          </S.OpenOptionContainer>
        </S.OpenOption>
        <S.Description>
          <span style={{ color: 'var(--green700)' }}>방명록 방문자에게 내용이 공개 됩니다.</span> <br />
          방명록 주인을 포함한 모두가 볼수있어요!
        </S.Description>
      </S.SettingOne>
      <S.SettingOne style={{ marginTop: '-3rem' }}>
        <S.SettingLayout>
          <S.SettingTitle>낮과 밤</S.SettingTitle>
          <button type="button">토글 버튼</button>
        </S.SettingLayout>
        <S.Description>밝은 화면과 어두운 화면을 선택할 수 있습니다.</S.Description>
      </S.SettingOne>
      <S.DeleteAccountContainer>
        <S.DeleteAccount>탈퇴</S.DeleteAccount>
        <RightArrowIcon width={12} height={12} color={'#9F9F9F'} />
      </S.DeleteAccountContainer>
    </S.Container>
  );
};

export default EditSection;

const SaveButton = styled.button`
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

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    height: 100%;
    width: 100%;
  `,
  ImageIntroduction: styled.div`
    display: flex;
    align-items: center;
    height: 18rem;
    gap: 4rem;

    @media ${device.mobile} {
      flex-direction: column;
      height: auto;
    }
  `,
  ImageBox: styled.div`
    height: 100%;
    aspect-ratio: 1 /1;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  `,
  OpenOptionContainer: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    @media ${device.mobile} {
      width: 100%;
    }
  `,

  // Button
  EditImgButton: styled.button`
    background-color: var(--white);
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 5;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0.2rem 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: var(--gray100);
    }
  `,
  OpenButton: styled(SaveButton)<{ $isSelect: boolean }>`
    border-radius: 10rem;
    position: static;
    min-width: 12rem;
    flex-grow: 1;
    background-color: ${({ $isSelect }) => (!$isSelect ? 'var(--gray400)' : 'var(--green600)')};

    &:hover {
      background-color: ${({ $isSelect }) => ($isSelect ? ' var(--green700)' : 'var(--gray500)')};
    }

    @media ${device.mobile} {
      min-width: 12rem;
    }
  `,

  //Introduction
  IntroductionForm: styled.form`
    border: 0.1rem solid var(--gray300);
    border-radius: 0.6rem;
    padding: 1rem 1.5rem 5.5rem;
    height: 100%;
    position: relative;
    flex-grow: 1;

    @media ${device.mobile} {
      width: 100%;
      height: 17.4rem;
    }
  `,
  IntroductionLabel: styled.label`
    border: 0.1rem solid var(--gray300);
    border-radius: 0.6rem;
    padding: 1rem 1.5rem 5.5rem;
    height: 100%;
    position: relative;
  `,
  IntroductionInput: styled.textarea`
    resize: none;
    width: 100%;
    height: 100%;
    color: #000;
    font-family: 'Pretendard';
    line-height: 2rem;
    min-width: 31.5rem;
  `,
  TextLength: styled.p`
    color: var(--gray500);
    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-weight: 500;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  `,

  // SettingOne
  SettingOne: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding: 2rem 0;
    border-bottom: 0.1rem solid var(--gray300);
  `,
  SettingLayout: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  OpenOption: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${device.mobile} {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  `,
  SettingTitle: styled.h3`
    color: var(--gray900);
    font-family: Pretendard;
    font-size: 2.4rem;
    font-weight: 500;
  `,
  Description: styled.p`
    color: var(--gray700);
    font-family: Pretendard;
    font-size: 1.4rem;
    line-height: 180%;
    letter-spacing: -0.07px;
  `,
  // element
  BackgroundImg: styled.img`
    width: 18rem;
    height: 18rem;
    object-fit: cover;
  `,
  EditIcon: styled.img`
    width: 1.8rem;
    height: 1.8rem;
  `,
  // DeleteAcCount
  DeleteAccountContainer: styled.button`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    margin-left: auto;
  `,
  DeleteAccount: styled.p`
    color: var(--gray500);
    text-align: center;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-weight: 600;
    text-decoration-line: underline;
  `,
  SaveButton,
};
