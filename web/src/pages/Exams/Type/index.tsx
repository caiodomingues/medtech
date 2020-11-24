import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import api from "../../../services/api";

import {
  HiArrowLeft,
  HiOutlineCheck,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";
import { CardContainer, CardBottom } from "./styles";

import Button from "../../../components/Button";
import SideBar from "../../../components/SideBar";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Input from "../../../components/Input";

const Type: React.FC = () => {
  const { id }: { id: string } = useParams();
  const history = useHistory();
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

  const handleDelete = async () => {
    console.log("delete");
    return;
  };

  return (
    <Container>
      <SideBar visible={true} />
      <Content>
        <CardContainer>
          <Link to="/exams">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Voltar
          </Link>
          <h1>{id ? "Editando" : "Cadastrando"} um tipo exame</h1>
          <Card>
            <label>Tipos cadastrados:</label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>Nome do tipo</p>
              <div>
                <HiOutlinePencil
                  onClick={() => history.push(`/edit-type/${1}`)}
                  size={24}
                />
                <HiOutlineTrash
                  className="down"
                  size={24}
                  onClick={handleDelete}
                  style={{ marginLeft: 16 }}
                />
              </div>
            </div>
          </Card>
          <Card style={{ padding: 32 }}>
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do tipo de exame"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CardBottom>
              <Button type="submit">
                <HiOutlineCheck size={56} />
                <p>{id ? "Editar" : "Criar"}</p>
              </Button>
            </CardBottom>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Type;
