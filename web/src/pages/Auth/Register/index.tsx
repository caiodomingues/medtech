import React, { FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiArrowLeft, HiOutlineDownload } from "react-icons/hi";

import { CardContainer, CardBottom } from "./styles";

import Button from "../../../components/Button";
import SideBar from "../../../components/SideBar";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Lead from "../../../components/Lead";
import Input from "../../../components/Input";

const Register: React.FC = () => {
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    history.push("/events");
  };

  return (
    <Container>
      <SideBar>
        <Lead>
          <h1>MedTech</h1>
          <p>Você está prestes a criar a sua conta ;)</p>
        </Lead>
      </SideBar>
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
              <Input type="text" id="name" name="name" placeholder="John Doe" />
              <br />
              <label htmlFor="email">Endereço de e-mail</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="exemplo@email.com"
              />
              <br />
              <label htmlFor="password">Senha</label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="********"
              />
              <br />
              <label htmlFor="c_password">Confirme a Senha</label>
              <Input
                type="password"
                id="c_password"
                name="password"
                placeholder="********"
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
