import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

  const [scheduleDate, setScheduleDate] = useState<string>("");
  const [scheduleHour, setScheduleHour] = useState<string>("");
  const [patient, setPatient] = useState<string>("");
  const [medic, setMedic] = useState<string>("");
  const [speciality, setSpeciality] = useState<string>("");

  // useEffect(() => {
  //   const data = async () => {
  //     return await api
  //       .get("?")
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  //   if (id) data();
  // }, [id]);

  return (
    <Container>
      <SideBar visible={true} />
      <Content>
        <CardContainer>
          <Link to="/reports">
            <HiArrowLeft size={12} style={{ marginRight: 8 }} />
            Voltar
          </Link>
          <h1>{id ? "Editando um agendamento" : "Agendando uma consulta"}</h1>
          <Card style={{ padding: 32 }}>
            <label htmlFor="scheduleDate">Data da Consulta</label>
            <Input
              type="date"
              id="scheduleDate"
              name="scheduleDate"
              placeholder="__/__/____"
              value={scheduleDate}
              onChange={(e) => setScheduleDate(e.target.value)}
            />
            <br />
            <label htmlFor="scheduleHour">Hora da Consulta</label>
            <Input
              type="time"
              id="scheduleHour"
              name="scheduleHour"
              placeholder="00:00"
              value={scheduleHour}
              onChange={(e) => setScheduleHour(e.target.value)}
            />
            <br />
            <label htmlFor="patient">Paciente</label>
            <Input
              type="text"
              id="patient"
              name="patient"
              placeholder="Nome do Paciente"
              value={patient}
              onChange={(e) => setPatient(e.target.value)}
            />
            <br />
            <label htmlFor="medic">Médico</label>
            <Input
              type="text"
              id="medic"
              name="medic"
              placeholder="Nome do Médico"
              value={medic}
              onChange={(e) => setMedic(e.target.value)}
            />
            <br />
            <label htmlFor="speciality">Especialidade</label>
            <Input
              type="text"
              id="speciality"
              name="speciality"
              placeholder="Especialidade"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
            />
            <CardBottom>
              <Button type="submit">
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
