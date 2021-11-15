import { useState } from "react";
import { useTheme } from "styled-components";

import {
  ArrowIosDownwardOutline,
  ArrowIosUpwardOutline,
} from "@styled-icons/evaicons-outline";
import * as S from "./styles";

export type DropdownProps = {
  title: string;
  children: string;
};

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.BoxTitle>
        <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>
        <div />
        {isOpen ? (
          <ArrowIosUpwardOutline
            color={theme.colors.purple}
            size={28}
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
            aria-label="arrow-up"
            aria-hidden={!isOpen}
          />
        ) : (
          <ArrowIosDownwardOutline
            color={theme.colors.purple}
            size={28}
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
            aria-label="arrow-down"
            aria-hidden={!isOpen}
          />
        )}
      </S.BoxTitle>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  );
};
export default Dropdown;
