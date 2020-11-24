import React from "react";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { useHistory } from "react-router-dom";

import { CardContainer } from "./styles";

import Button from "../../components/Button";
import SideBar from "../../components/SideBar";
import Content from "../../components/Content";
import Container from "../../components/Container";
import Card from "../../components/Card";
import MenuBar from "../../components/MenuBar";

const Exams: React.FC = () => {
  const history = useHistory();

  const handleDelete = async () => {
    console.log("delete");
    return;
  };

  return (
    <Container>
      <SideBar visible={true} />
      <Content>
        <MenuBar>
          <Button type="button" onClick={() => history.push("create-exam")}>
            <p style={{ fontSize: 16, fontWeight: "bold" }}>
              Cadastrar um novo exame
            </p>
          </Button>
          <Button
            style={{ marginLeft: 16, marginRight: 16 }}
            type="button"
            onClick={() => history.push("/execution")}
          >
            <p style={{ fontSize: 16, fontWeight: "bold" }}>
              Realizar um novo exame
            </p>
          </Button>
          <Button type="button" onClick={() => history.push("create-type")}>
            <p style={{ fontSize: 16, fontWeight: "bold" }}>Tipos de exame</p>
          </Button>
        </MenuBar>
        <CardContainer>
          <h1>Exames</h1>
          <Card>
            <h1>Nome</h1>
            <p>Outra informação</p>
            <br />
            <span>
              <HiOutlinePencil
                onClick={() => history.push(`/edit-exam/${1}`)}
                size={24}
              />
              <HiOutlineTrash
                className="down"
                size={24}
                onClick={handleDelete}
                style={{ marginLeft: 16 }}
              />
            </span>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Exams;
