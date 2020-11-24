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
            <p style={{ fontSize: 16, fontWeight: "bold" }}>
              Cadastrar um novo tipo de exame
            </p>
          </Button>
        </MenuBar>
        <CardContainer>
          <Card>
            <h1>Teste</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              repellat magnam nulla itaque architecto temporibus similique
              impedit odio ad fugit, perspiciatis, eius id quos officia
              molestiae repudiandae accusamus ab voluptate.
            </p>
            <br />
            <span>
              <HiOutlinePencil size={24} />
              <HiOutlineTrash
                className="down"
                size={24}
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
