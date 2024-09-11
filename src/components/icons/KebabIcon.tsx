import * as S from './style/IconContainer';
import { TIconProps } from './type/IconProps';

const KebabIcon = ({ width = 24, height = 19, color = '#fff', style }: TIconProps) => {
  return (
    <S.Container
      $style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 19"
      fill="none">
      <path d="M0 18.5H24V15.5H0V18.5ZM0 11H24V8H0V11ZM0 0.5V3.5H24V0.5H0Z" fill={color} />
    </S.Container>
  );
};

export default KebabIcon;
