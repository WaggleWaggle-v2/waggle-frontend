import { TIconProps } from './type/IconProps';
import * as S from './style/IconContainer';

const CloseIcon = ({ width, height, color, style }: TIconProps) => {
  return (
    <S.Container
      $style={style}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none">
      <path d="M2.47656 0L0.00168888 2.39984L22.2756 23.9984L24.7504 21.5985L2.47656 0Z" fill={color} />
      <path d="M0.00168888 2.39984L2.47656 0L24.7504 21.5985L22.2756 23.9984L0.00168888 2.39984Z" fill={color} />
      <path d="M0 21.5986L2.47487 23.9985L24.7487 2.39994L22.2739 0.000106308L0 21.5986Z" fill={color} />
      <path d="M2.47487 23.9985L0 21.5986L22.2739 0.000106308L24.7487 2.39994L2.47487 23.9985Z" fill={color} />
    </S.Container>
  );
};

export default CloseIcon;
