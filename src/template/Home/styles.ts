import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: relative;
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    min-height: 512px;

    background-image: url("/images/header.png");
    background-size: cover;
    background-position: center center;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${media.lessThan("small")`
      background-repeat: no-repeat;
      min-height: 200px;
      align-items: flex-end;
    `}
  `}
`;

export const Content = styled.div`
  width: 600px;

  align-items: center;
  justify-content: center;

  padding: 0 80px;

  ${media.lessThan("small")`
    width: 300px;
    padding: 0 40px 20px 20px;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.extraBold};
    color: ${theme.colors.yellow};

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.dark};

    line-height: calc(${theme.spacings.small} + 0.4rem);

    padding-top: ${theme.spacings.small};

    a {
      color: ${theme.colors.purple};
      font-weight: ${theme.font.bold};
    }

    ${media.lessThan("small")`
      font-size: ${theme.font.sizes.small};
      line-height: calc(${theme.spacings.xsmall} + 0.4rem);
      padding-top: ${theme.spacings.xxsmall};
    `}
  `}
`;

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    background-color: ${theme.colors.background};

    padding: 40px 0 0 80px;

    ${media.lessThan("medium")`
      padding: 20px 40px;
    `}

    ${media.lessThan("small")`
      padding: 20px 10px;
    `}
  `}
`;
