import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 80px;

    position: absolute;

    display: flex;
    justify-content: space-between;

    padding: 0 80px 0 0;

    div {
      width: 50%;
      height: 100%;

      gap: 20px;

      background-color: ${theme.colors.purple};
      border-bottom-right-radius: 40px;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      position: relative;

      button:nth-child(2) {
        margin-right: 100px;
      }

      button:nth-child(3) {
        position: absolute;
        right: -80px;
      }
    }

    ${media.lessThan("medium")`
      button {
        display: none;
      }

      div {
      height: 45px;
      width: 80px;

      align-items: center;
      justify-content: center;
      }    
      `}
  `}
`;

export const IconWrapper = styled.div`
  cursor: pointer;

  ${media.greaterThan("medium")`
      display: none;

      svg {
        display: none;
      }
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen, theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    position: fixed;
    z-index: 20;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? "all" : "none"};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuLink} {
      color: ${theme.colors.dark};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? "translateY(0)" : "translateY(3rem)"};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const MenuNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
    ${media.greaterThan("medium")`
            margin-left: ${theme.spacings.small};
        `}
  `}
`;

export const MenuLink = styled.a`
  text-decoration: none;
`;
