import { MouseEvent, useEffect } from 'react';
import { useBookshelfPublicityUpdateMutation } from '@hooks/reactQuery/useQueryBookshelf';
import { device } from '@styles/breakpoints';
import styled from 'styled-components';
import useScopeValue from '../hooks/useScopeValue';
import { Description, SaveButton, SettingOne, SettingTitle } from '../style/commStyle';

const OpenScopeSection = ({ open }: { open: boolean | undefined }) => {
  const { isEnterScope, handleSetScope, handleInitialSetScope } = useScopeValue();
  const patchOpenScope = useBookshelfPublicityUpdateMutation();

  useEffect(() => {
    if (open !== undefined) {
      handleInitialSetScope(open);
    }
  }, [open, handleInitialSetScope]);

  const handleSetScopeValue = (event: MouseEvent<HTMLButtonElement>) => {
    handleSetScope(event, patchOpenScope.mutate);
  };

  return (
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
      {isEnterScope ? (
        <S.Description>
          <span style={{ color: 'var(--green700)' }}>방명록 방문자에게 내용이 공개 됩니다.</span> <br />
          방명록 주인을 포함한 모두가 볼수있어요!
        </S.Description>
      ) : (
        <S.Description>
          <span style={{ color: 'var(--green700)' }}>링크로 초대된 사람만 볼 수 있습니다.</span> <br />
          초대된 사람만 방명록 갯수와 공개된 방명록을 볼 수 있어요.
        </S.Description>
      )}
    </S.SettingOne>
  );
};

export default OpenScopeSection;

const S = {
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
  OpenOptionContainer: styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    @media ${device.mobile} {
      width: 100%;
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
      font-size: 1.2rem;
      font-weight: 500;
    }
  `,
  SettingTitle,
  SettingOne,
  Description,
};
