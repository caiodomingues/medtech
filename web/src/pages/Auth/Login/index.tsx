import React, { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { HiArrowLeft, HiOutlineDownload } from "react-icons/hi";
import { CardContainer, CardBottom } from "./styles";

import Button from "../../../components/Button";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Input from "../../../components/Input";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    history.push("/reports");
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
              <label htmlFor="email">Endereço de e-mail</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="0123456789"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                <div className="column">
                  <Link to="/">Esqueceu sua endereço de e-mail?</Link>
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
