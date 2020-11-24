import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiOutlineCheck } from "react-icons/hi";

import { CardContainer, CardBottom } from "./styles";

import Button from "../../../components/Button";
import SideBar from "../../../components/SideBar";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Input from "../../../components/Input";

const Create: React.FC = () => {
  return (
    <Container>
      <SideBar visible={true} />
      <Content>
        <CardContainer>
          <Link to="/exams">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Voltar
          </Link>
          <h1>Cadastrando um exame</h1>
          <Card style={{ padding: 32 }}>
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do exame - funcionário"
            />
            <br />
            <label htmlFor="shelf_life">Validade (dias)</label>
            <Input
              type="number"
              id="shelf_life"
              name="shelf_life"
              placeholder="00"
            />
            <CardBottom>
              <Button type="submit">
                <HiOutlineCheck size={56} />
                <p>Criar</p>
              </Button>
            </CardBottom>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Create;
