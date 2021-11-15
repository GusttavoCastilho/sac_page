import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";
import { darken } from "polished";

type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  "size" | "color" | "minimal" | "iconSize"
>;

const WrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    min-width: 16rem;
  `,
  medium: (theme: DefaultTheme) => css`
    min-width: 22rem;
  `,
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
  ${({ theme, size, color, hasIcon, minimal, iconSize }) => css`
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

    ${!!size && WrapperModifiers[size](theme)}
    ${!!hasIcon && WrapperModifiers.withIcon(theme, iconSize!)};
    ${!!minimal && WrapperModifiers.minimal()};
  `}
`;
