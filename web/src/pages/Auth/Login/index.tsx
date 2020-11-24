import React, { FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiArrowLeft, HiOutlineDownload } from "react-icons/hi";

import { CardContainer, CardBottom } from "./styles";

import Button from "../../../components/Button";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Input from "../../../components/Input";

const Login: React.FC = () => {
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

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
          <h1>Login</h1>
          <Card style={{ padding: 32 }}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="enrollment">Matrícula</label>
              <Input
                type="text"
                id="enrollment"
                name="enrollment"
                placeholder="0123456789"
              />
              <br />
              <label htmlFor="password">Senha</label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="********"
              />
              <CardBottom>
                <div className="column">
                  <Link to="/">Esqueceu sua matrícula?</Link>
                  <br />
                  <Link to="/">Esqueceu sua senha?</Link>
                </div>
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

export default Login;
