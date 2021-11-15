import React, { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: React.ReactNode;
  size?: "medium" | "small";
  color?: "yellow" | "purple_dark" | "blue";
  icon?: string;
  iconSize?: number;
  minimal?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  size = "medium",
  color = "yellow",
  icon,
  iconSize,
  minimal = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    color={color}
    hasIcon={!!icon}
    minimal={minimal}
    iconSize={iconSize}
    {...props}
  >
    {icon && <img src={icon} alt="icon" />}
    <span>{children}</span>
  </S.Wrapper>
);

export default Button;
