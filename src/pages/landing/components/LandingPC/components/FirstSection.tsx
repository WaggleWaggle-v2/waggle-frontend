import treeImg from '@assets/images/tree.png';
import styled from 'styled-components';
import ButtonSection from '../../ButtonSection';
import DescriptionSection from '../../DescriptionSection';
import TitleSection from '../../TitleSection';
import { Main as BaseMain, Layout } from '../style/commonPC';

const FirstSection = () => {
  return (
    <S.Main>
      <S.Layout>
        <TitleSection />
        <DescriptionSection />
        <ButtonSection page={1} />
      </S.Layout>
    </S.Main>
  );
};

export default FirstSection;

const S = {
  Main: styled(BaseMain)`
    &::before {
      content: '';
      min-width: 14.5rem;
      min-height: 12.5rem;
      background-image: url(${treeImg});
      background-size: cover;
      position: absolute;
      bottom: 6.4rem;
      left: 0;
    }
  `,
  Layout,
};
