import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";

import {
  ContentContainer,
  Description,
  CardContainer,
  CardIcon,
  CardContent,
} from "./styles";

import Content from "../../components/Content";
import Container from "../../components/Container";
import Card from "../../components/Card";

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContentContainer>
          <h1>MedTech.</h1>
          <Description>A gestão na palma de suas mãos.</Description>
          <CardContainer>
            <Card>
              <Link className="clickable row" to="/login">
                <CardIcon>
                  <HiOutlineDownload
                    size={42}
                    style={{ transform: "rotate(-90deg)" }}
                  />
                </CardIcon>
                <CardContent>
                  <h1>Entrar</h1>
                </CardContent>
              </Link>
            </Card>
          </CardContainer>
        </ContentContainer>
      </Content>
    </Container>
  );
};

export default Home;
