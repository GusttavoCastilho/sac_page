import React from "react";

import lista_tarefas from "../../../public/json/duvidas.json";

import Header from "components/Header";
import Dropdown from "components/Dropdown";

import * as S from "./styles";
import Footer from "components/Footer";

const HomeTemplate = () => {
  return (
    <S.Wrapper>
      <Header />

      <S.Background>
        <S.Content>
          <S.Title>Dúvidas</S.Title>
          <S.Description>
            <b>Listamos aqui algumas dúvidas frequentes,</b> caso a sua dúvida
            não esteja aqui você pode entrar em contato conosco{" "}
            <a href="#">clicando aqui</a>
          </S.Description>
        </S.Content>
      </S.Background>

      <S.WrapperContent>
        {lista_tarefas.lista_tarefas.map((task) => (
          <Dropdown key={task.id} title={task.titulo}>
            {task.descricao}
          </Dropdown>
        ))}
      </S.WrapperContent>

      <Footer />
    </S.Wrapper>
  );
};

export default HomeTemplate;
