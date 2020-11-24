import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiArrowLeft, HiOutlineDownload } from "react-icons/hi";
import { useAuth } from "../../../utils/AuthContext";

import { CardContainer, CardBottom } from "./styles";

import Button from "../../../components/Button";
import SideBar from "../../../components/SideBar";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Lead from "../../../components/Lead";
import Input from "../../../components/Input";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [enrollment, setEnrollment] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { register, signed } = useAuth();
  const history = useHistory();

  if(signed) history.push('/employees');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!enrollment || !password) return;

    register!({ name, enrollment, password });
    history.push("/employees");
  };

  return (
    <Container>
      <Content>
        <CardContainer>
          <Link to="/">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Voltar
          </Link>
          <h1>Registrar</h1>
          <Card style={{ padding: 32 }}>
            <form onSubmit={handleSubmit}>
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
              <label htmlFor="enrollment">Matrícula</label>
              <Input
                type="text"
                id="enrollment"
                name="enrollment"
                placeholder="0123456789"
                onChange={(e) => setEnrollment(e.target.value)}
                value={enrollment}
              />
              <br />
              <label htmlFor="password">Senha</label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <CardBottom>
                <p>
                  Ao registrar no MedTech, você concorda com os{" "}
                  <a href="#">Termos de Uso</a> e a{" "}
                  <a href="#">Política de Privacidade</a>.
                </p>
                <Button type="submit">
                  <HiOutlineDownload
                    size={56}
                    style={{ transform: "rotate(-90deg)" }}
                  />
                </Button>
              </CardBottom>
            </form>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Register;
