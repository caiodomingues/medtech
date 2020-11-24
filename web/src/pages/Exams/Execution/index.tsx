import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../../services/api";

import { HiArrowLeft, HiOutlineCheck } from "react-icons/hi";
import { CardContainer, CardBottom } from "./styles";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Content from "../../../components/Content";
import Input from "../../../components/Input";
import SideBar from "../../../components/SideBar";
import Container from "../../../components/Container";

const Execution: React.FC = () => {
  const { id }: { id: string } = useParams();

  const [employee, setEmployee] = useState<string>();
  const [exam, setExam] = useState<string>();
  const [type, setType] = useState<string>();
  const [date, setDate] = useState<string>();

  useEffect(() => {
    const data = async () => {
      return await api
        .get("")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };

    if (id) data();
  }, [id]);

  return (
    <Container>
      <SideBar visible={true} />
      <Content>
        <CardContainer>
          <Link to="/exams">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Voltar
          </Link>
          <h1>{id ? "Editando a execução de " : "Executando"} um exame</h1>
          <Card style={{ padding: 32 }}>
            <label htmlFor="name">Funcionário</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do funcionário"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
            />
            <br />
            <label htmlFor="exam">Exame</label>
            <Input
              type="text"
              id="exam"
              name="exam"
              placeholder="Nome do exame"
              value={exam}
              onChange={(e) => setExam(e.target.value)}
            />
            <br />
            <label htmlFor="exam_type">Tipo de Exame</label>
            <Input
              type="text"
              id="exam_type"
              name="exam_type"
              placeholder="Nome do tipo de exame"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <br />
            <label htmlFor="exam_date">Data do Exame</label>
            <Input
              type="datetime-local"
              id="exam_date"
              name="exam_date"
              placeholder="Nome do tipo de exame"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
