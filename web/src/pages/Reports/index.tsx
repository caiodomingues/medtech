import React from "react";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { useHistory } from "react-router-dom";

import { CardContainer } from "./styles";

import SideBar from "../../components/SideBar";
import Content from "../../components/Content";
import Container from "../../components/Container";
import Card from "../../components/Card";
import MenuBar from "../../components/MenuBar";
import Button from "../../components/Button";

const Reports: React.FC = () => {
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
          <Button type="button" onClick={() => history.push("create-report")}>
            <p style={{ fontSize: 16, fontWeight: "bold" }}>
              Cadastrar um relatório
            </p>
          </Button>
        </MenuBar>
        <CardContainer>
          <h1>Relatórios</h1>
          <Card>
            <h1>Nome</h1>
            <p>Outra informação</p>
            <br />
            <span>
              <HiOutlinePencil
                onClick={() => history.push(`/edit-report/${1}`)}
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

export default Reports;
