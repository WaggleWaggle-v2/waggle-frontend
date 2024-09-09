import styled from 'styled-components';

export const NavItem = styled.li<{ $position?: string }>`
  padding: 2rem 1rem;

  ${({ $position }) => $position}

  &:not(:last-child) {
    border-bottom: 0.1rem solid #304055;
  }
`;

export const TitleText = styled.p<{ $color?: string }>`
  color: ${({ $color }) => ($color ? $color : '#fff')};
  font-family: 'EBSHMJESaeron';
  font-size: 1.8rem;
  display: inline;
  letter-spacing: -0.2rem;
`;
