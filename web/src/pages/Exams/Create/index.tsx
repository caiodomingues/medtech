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
  const [shelfLife, setShelfLife] = useState<number>();

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
          <h1>{id ? "Editando" : "Cadastrando"} um exame</h1>
          <Card style={{ padding: 32 }}>
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do exame - funcionário"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br />
            <label htmlFor="shelf_life">Validade (dias)</label>
            <Input
              type="number"
              id="shelf_life"
              name="shelf_life"
              placeholder="00"
              onChange={(e) => setShelfLife(e.target.valueAsNumber)}
              value={shelfLife}
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
