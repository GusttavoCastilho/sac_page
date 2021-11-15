import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;
    background-color: ${theme.colors.purple};
  `}
`;
