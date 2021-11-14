import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";
import { darken } from "polished";

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  "color" | "minimal" | "iconSize"
>;

const WrapperModifiers = {
  withIcon: (theme: DefaultTheme, iconSize: number) => css`
    img {
      width: ${iconSize}px;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: () => css`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, hasIcon, minimal, iconSize }) => css`
    height: 4rem;

    background-color: ${theme.colors[color!]};
    color: ${theme.colors.white};

    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};

    border-radius: ${minimal ? "0px" : "28px"};
    border: none;

    cursor: pointer;

    display: flex;
    align-items: center;

    text-transform: uppercase;

    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};

    :hover {
      background-color: ${darken(0.05, theme.colors[color!])};
    }

    ${!!hasIcon && WrapperModifiers.withIcon(theme, iconSize!)};
    ${!!minimal && WrapperModifiers.minimal()};
  `}
`;
