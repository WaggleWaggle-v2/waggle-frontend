import * as S from './style/IconContainer';
import { TIconProps } from './type/IconProps';

const LeftArrowIcon = ({ width = 21, height = 21, color = '#9F9F9F', style }: TIconProps) => {
  return (
    <S.Container
      $style={style}
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 10.333C0 9.78072 0.447715 9.33301 1 9.33301H19.6667C20.219 9.33301 20.6667 9.78072 20.6667 10.333C20.6667 10.8853 20.219 11.333 19.6667 11.333H1C0.447715 11.333 0 10.8853 0 10.333Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.0404 0.292893C11.431 0.683417 11.431 1.31658 11.0404 1.70711L2.41421 10.3333L11.0404 18.9596C11.431 19.3501 11.431 19.9832 11.0404 20.3738C10.6499 20.7643 10.0168 20.7643 9.62623 20.3738L0.292893 11.0404C-0.0976311 10.6499 -0.0976311 10.0168 0.292893 9.62623L9.62623 0.292893C10.0168 -0.0976311 10.6499 -0.0976311 11.0404 0.292893Z"
        fill={color}
      />
    </S.Container>
  );
};

export default LeftArrowIcon;
