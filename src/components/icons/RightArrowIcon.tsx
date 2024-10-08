import * as S from './style/IconContainer';
import { TIconProps } from './type/IconProps';

const RightArrowIcon = ({ width = 7, height = 12, color = '#fff', style }: TIconProps) => {
  return (
    <S.Container
      $style={style}
      width={width}
      height={height}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
        fill={color}
      />
    </S.Container>
  );
};

export default RightArrowIcon;
