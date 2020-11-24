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
          <Link to="/employees">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Voltar
          </Link>
          <h1>Cadastrando um funcionário</h1>
          <Card style={{ padding: 32 }}>
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Fulano de Tal"
            />
            <br />
            <label htmlFor="cpf">CPF</label>
            <Input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="000.000.000-00"
            />
            <br />
            <label htmlFor="cell_phone">Telefone</label>
            <Input
              type="text"
              id="cell_phone"
              name="cell_phone"
              placeholder="000.000.000-00"
            />
            <br />
            <label htmlFor="function">Função</label>
            <Input
              type="text"
              id="function"
              name="function"
              placeholder="Cargo ou função"
            />
            <br />
            <label htmlFor="file">Foto</label>
            <Input
              type="file"
              id="file"
              name="file"
              placeholder="Foto do funcionário"
            />
            <CardBottom>
              <Button type="submit">
                <HiOutlineCheck size={56} />
                Criar
              </Button>
            </CardBottom>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Create;
