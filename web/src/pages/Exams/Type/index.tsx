import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import api from "../../../services/api";
import { ExamType } from "../../../types";

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
  const [examTypes, setExamTypes] = useState<ExamType[]>([]);

  useEffect(() => {
    const data = async () => {
      if (id) {
        await api
          .get(`exams-types/${id}`)
          .then((res) => {
            setName(res.data.name);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      await api
        .get("exams-types")
        .then((res) => {
          setExamTypes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    data();
  }, [id]);

  const handleDelete = async (id: string) => {
    await api
      .delete(`exams-types/${id}`)
      .then((res) => {
        history.push("/exams");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async () => {
    if (id) {
      await api
        .put(`exams-types/${id}`, { name })
        .then((res) => {
          setName("");
          history.push("/create-type");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await api
        .post("exams-types", { name })
        .then((res) => {
          setName("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
            {examTypes &&
              examTypes.map((t: ExamType) => (
                <div
                  key={t.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p>
                    {t.name}
                  </p>
                  <div>
                    <HiOutlinePencil
                      onClick={() => history.push(`/edit-type/${t.id}`)}
                      size={24}
                    />
                    <HiOutlineTrash
                      className="down"
                      size={24}
                      onClick={() => handleDelete(t.id)}
                      style={{ marginLeft: 16 }}
                    />
                  </div>
                </div>
              ))}
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
              <Button type="submit" onClick={handleSubmit}>
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
