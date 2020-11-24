import React, { useEffect, useState } from "react";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { Employee } from "../../types";

import { CardContainer } from "./styles";

import SideBar from "../../components/SideBar";
import Content from "../../components/Content";
import Container from "../../components/Container";
import Card from "../../components/Card";
import MenuBar from "../../components/MenuBar";
import Button from "../../components/Button";

const Employees: React.FC = () => {
  const history = useHistory();
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const data = async () => {
      await api
        .get("employees")
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    data();
  }, []);

  const handleDelete = async (id: string) => {
    await api
      .delete(`employees/${id}`)
      .then((res) => {
        history.push("/employees");
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
          <Button type="button" onClick={() => history.push("create-employee")}>
            <p style={{ fontSize: 16, fontWeight: "bold" }}>
              Cadastrar um funcionário
            </p>
          </Button>
        </MenuBar>
        <CardContainer>
          <h1>Funcionários</h1>
          {employees &&
            employees.map((e: Employee) => (
              <Card>
                <h1>{e.name}</h1>
                <p>
                  E-mail: {e.email} | CPF: {e.cpf}
                </p>
                <p>Função: {e.efunction}</p>
                <br />
                <span>
                  <HiOutlinePencil
                    onClick={() => history.push(`/edit-employee/${e.id}`)}
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

export default Employees;
