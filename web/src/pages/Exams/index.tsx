import React, { useState, useEffect } from "react";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { Exam } from "../../types";

import { CardContainer } from "./styles";

import Button from "../../components/Button";
import SideBar from "../../components/SideBar";
import Content from "../../components/Content";
import Container from "../../components/Container";
import Card from "../../components/Card";
import MenuBar from "../../components/MenuBar";

const Exams: React.FC = () => {
  const history = useHistory();
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    const data = async () => {
      await api
        .get("exams")
        .then((res) => {
          setExams(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    data();
  }, []);

  const handleDelete = async (id: string) => {
    await api
      .delete(`exams/${id}`)
      .then((res) => {
        history.push("/exams");
      })
      .catch((err) => {
        console.log(err);
      });
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
          {exams &&
            exams.map((e: Exam) => (
              <Card>
                <h1>{e.name}</h1>
                <p>Validade em dias:</p>
                <br />
                <p>{e.shelf_life}</p>
                <br />
                <span>
                  <HiOutlinePencil
                    onClick={() => history.push(`/edit-exam/${e.id}`)}
                    size={24}
                  />
                  <HiOutlineTrash
                    className="down"
                    size={24}
                    onClick={() => handleDelete(e.id)}
                    style={{ marginLeft: 16 }}
                  />
                </span>
              </Card>
            ))}
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Exams;
