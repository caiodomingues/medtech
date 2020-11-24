import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../../services/api";

import { HiArrowLeft, HiOutlineCheck } from "react-icons/hi";
import { CardContainer, CardBottom } from "./styles";

import Button from "../../../components/Button";
import SideBar from "../../../components/SideBar";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Input from "../../../components/Input";

const Create: React.FC = () => {
  const { id }: { id: string } = useParams();

  const [name, setName] = useState<string>("");

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
          <Link to="/reports">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Voltar
          </Link>
          <h1>{id ? "Editando" : "Criando"} um relatório</h1>
          <Card style={{ padding: 32 }}>
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do relatório"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
