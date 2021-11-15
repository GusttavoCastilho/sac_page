import React, { useState } from "react";
import Link from "next/link";

import { MenuAltLeft } from "@styled-icons/boxicons-regular";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";

import Button from "../Button";

import * as S from "./styles";
import MediaMatch from "../../utils/MediaMatch";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Wrapper>
      <div>
        <MediaMatch lessThan="medium">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <MenuAltLeft aria-label="Open menu" color="white" size={32} />
          </S.IconWrapper>
        </MediaMatch>

        <MediaMatch greaterThan="medium">
          <Button icon="/icons/editar.png" iconSize={20}>
            Seja um franqueado
          </Button>
          <Button
            color="purple_dark"
            icon="/icons/seja_consultor.png"
            iconSize={16}
          >
            Seja um consultor(a)
          </Button>
          <Button color="blue" size="small">
            Quero comprar
          </Button>
        </MediaMatch>
      </div>
      <Button
        minimal
        icon="/icons/area_restrita.png"
        iconSize={16}
        size="small"
      >
        Área Restrita
      </Button>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="#" passHref>
            <S.MenuLink href="#">Seja um franqueado</S.MenuLink>
          </Link>
          <Link href="#" passHref>
            <S.MenuLink href="#">Seja um consultor(a)</S.MenuLink>
          </Link>

          <Link href="#" passHref>
            <S.MenuLink href="#">Quero Comprar</S.MenuLink>
          </Link>

          <Link href="#" passHref>
            <S.MenuLink href="#">Área Restrita</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  );
};
export default Header;
