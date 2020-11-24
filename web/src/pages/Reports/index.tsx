import React, { useState, useEffect } from "react";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { Report } from "../../types";
import api from "../../services/api";

import { CardContainer } from "./styles";

import SideBar from "../../components/SideBar";
import Content from "../../components/Content";
import Container from "../../components/Container";
import Card from "../../components/Card";
import MenuBar from "../../components/MenuBar";
import Button from "../../components/Button";

const Reports: React.FC = () => {
  const history = useHistory();
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const data = async () => {
      await api
        .get("?")
        .then((res) => {
          setReports(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    data();
  }, []);

  const handleDelete = async (id: string) => {
    await api
      .delete(`?/${id}`)
      .then((res) => {
        history.push("/reports");
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
          <Button type="button" onClick={() => history.push("create-report")}>
            <p style={{ fontSize: 16, fontWeight: "bold" }}>
              Cadastrar um relatório
            </p>
          </Button>
        </MenuBar>
        <CardContainer>
          <h1>Relatórios</h1>
          {reports &&
            reports.map((r) => (
              <Card>
                <h1>{r.name}</h1>
                <p>Outra informação</p>
                <br />
                <span>
                  <HiOutlinePencil
                    onClick={() => history.push(`/edit-report/${r.id}`)}
                    size={24}
                  />
                  <HiOutlineTrash
                    className="down"
                    size={24}
                    onClick={() => handleDelete(r.id)}
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

export default Reports;
