import React from "react";
import { HiArrowLeft, HiOutlineCheck } from "react-icons/hi";
import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Content from "../../../components/Content";
import Input from "../../../components/Input";
import SideBar from "../../../components/SideBar";
import Container from "../../../components/Container";

import { CardContainer, CardBottom } from "./styles";

const Execution: React.FC = () => {
  return (
    <Container>
      <SideBar visible={true} />
      <Content>
        <CardContainer>
          <Link to="/exams">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Voltar
          </Link>
          <h1>Executando um exame</h1>
          <Card style={{ padding: 32 }}>
            <label htmlFor="name">Funcionário</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do funcionário"
            />
            <br />
            <label htmlFor="exam">Exame</label>
            <Input
              type="text"
              id="exam"
              name="exam"
              placeholder="Nome do exame"
            />
            <br />
            <label htmlFor="exam_type">Tipo de Exame</label>
            <Input
              type="text"
              id="exam_type"
              name="exam_type"
              placeholder="Nome do tipo de exame"
            />
            <br />
            <label htmlFor="exam_date">Data do Exame</label>
            <Input
              type="datetime-local"
              id="exam_date"
              name="exam_date"
              placeholder="Nome do tipo de exame"
            />
            <br />
            <CardBottom>
              <Button type="submit">
                <HiOutlineCheck size={56} />
                <p>Executar</p>
              </Button>
            </CardBottom>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Execution;
