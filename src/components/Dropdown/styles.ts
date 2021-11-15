import styled, { css } from "styled-components";
import { lighten } from "polished";
import media from "styled-media-query";

type WrapperProps = {
  isOpen?: boolean;
};

const WrapperModifers = {
  open: () => css`
    opacity: 1;
    height: 100px;
    pointer-events: auto;
    transform: translateY(0);

    ${media.lessThan("small")`
      height: 60px;
    `}
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen, theme }) => css`
    position: relative;
    width: 80%;

    ${Content} {
      transition: transform 0.2s ease-in, opacity 0.3s ease-in-out;
      ${isOpen && WrapperModifers.open()}
      ${!isOpen && WrapperModifers.close()}
    }

    ${media.lessThan("large")`
     width: 100%;
     padding: 0 ${theme.spacings.xxsmall};
     height: ${isOpen ? "100px" : "50px"};
    `}
  `}
`;

export const Title = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.purple};

    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    padding-right: 2.4rem;

    ${media.lessThan("large")`
      font-size: ${theme.font.sizes.medium};
      padding-right: 10px;
    `}

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.small};
      padding-right: 10px;
    `}
  `}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    width: 100%;

    margin-top: ${theme.spacings.small};

    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.dark};

    line-height: ${theme.spacings.small};

    ${media.lessThan("large")`
      font-size: ${theme.font.sizes.small};
      margin-top: ${theme.spacings.xxsmall};
      line-height: ${theme.spacings.xsmall};
    `}

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.xsmall};
      margin-top: ${theme.spacings.xxsmall};
      line-height: ${theme.spacings.xsmall};
    `}
  `}
`;

export const BoxTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    div {
      flex: 1;
      background-color: ${lighten(0.4, theme.colors.dark)};
      height: 1px;
    }
  `}
`;
