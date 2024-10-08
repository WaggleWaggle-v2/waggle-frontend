import styled from 'styled-components';

export const Container = styled.svg<{ $style?: string }>`
  ${({ $style }) => $style}
`;
