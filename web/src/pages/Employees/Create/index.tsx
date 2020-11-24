import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
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
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [efunction, setEfunction] = useState<string>("");
  const [file, setFile] = useState<string>();

  useEffect(() => {
    const data = async () => {
      if (id) {
        await api
          .get(`/employees/${id}`)
          .then((res) => {
            console.log(res.data);
            setName(res.data.name);
            setCpf(res.data.cpf);
            setEmail(res.data.email);
            setCellphone(res.data.cellphone);
            setEfunction(res.data.efunction);
          })
          .catch((err) => console.log(err));
      }
    };

    data();
  }, [id]);

  const handleSubmit = async () => {
    if (id) {
      await api
        .put(`/employees/${id}`, { name, cpf, cellphone, efunction, email })
        .then((res) => {
          history.push("/employees");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await api
        .post("/employees", { name, cpf, cellphone, efunction, email })
        .then((res) => {
          history.push("/employees");
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
          <Link to="/employees">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Voltar
          </Link>
          <h1>{id ? "Editando" : "Cadastrando"} um funcionário</h1>
          <Card style={{ padding: 32 }}>
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Fulano de Tal"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br />
            <label htmlFor="email">Endereço de E-mail</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <label htmlFor="cpf">CPF</label>
            <Input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="000.000.000-00"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
            />
            <br />
            <label htmlFor="cell_phone">Telefone</label>
            <Input
              type="text"
              id="cell_phone"
              name="cell_phone"
              placeholder="(00) 00000-0000"
              onChange={(e) => setCellphone(e.target.value)}
              value={cellphone}
            />
            <br />
            <label htmlFor="efunction">Função</label>
            <Input
              type="text"
              id="efunction"
              name="efunction"
              placeholder="Cargo ou função"
              onChange={(e) => setEfunction(e.target.value)}
              value={efunction}
            />
            <br />
            <label htmlFor="file">Foto</label>
            <Input
              type="file"
              id="file"
              name="file"
              placeholder="Foto do funcionário"
              onChange={(e) => setFile("")}
              value={file}
            />
            <CardBottom>
              <Button type="submit" onClick={handleSubmit}>
                <HiOutlineCheck size={56} />
                {id ? "Editar" : "Criar"}
              </Button>
            </CardBottom>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Create;
