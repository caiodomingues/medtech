import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Container from "../../../components/Container";
import Content from "../../../components/Content";

import { CardContainer, CardBottom } from "./styles";

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <CardContainer>
          <Card>
            <h1>Ops...</h1>
            <p>Erro 404</p>
            <p>Certifique-se de que está tentando acessar a página certa 🤔</p>
            <CardBottom>
              <Button type="button" onClick={() => history.goBack()}>
                <HiOutlineArrowLeft size={24} color="#000" />
                Voltar
              </Button>
            </CardBottom>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default NotFound;
