import React, { FormEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import api from "../../../services/api";

import { HiArrowLeft, HiOutlineCheck } from "react-icons/hi";
import { CardContainer, CardBottom, Select } from "./styles";

import Button from "../../../components/Button";
import SideBar from "../../../components/SideBar";
import Content from "../../../components/Content";
import Container from "../../../components/Container";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import { UserProps } from "../../../types";

const Create: React.FC = () => {
  const { id }: { id: string } = useParams();
  const history = useHistory();

  const [scheduleDate, setScheduleDate] = useState<string>("");
  const [scheduleHour, setScheduleHour] = useState<string>("");
  const [patient, setPatient] = useState<string>("");
  const [medic, setMedic] = useState<string>("");
  const [speciality, setSpeciality] = useState<string | undefined>("");

  const [patientOptions, setPatientOptions] = useState<any[]>([]);
  const [medicOptions, setMedicOptions] = useState<any[]>([]);

  useEffect(() => {
    const data = async () => {
      await api
        .get("patients")
        .then((res) => {
          setPatientOptions(res.data);
        })
        .catch((err) => console.log(err));

      await api
        .get("doctors")
        .then((res) => {
          console.log("docstor", res.data);
          setMedicOptions(res.data);
          setSpeciality(res.data.specialty);
        })
        .catch((err) => console.log(err));

      if (id) {
        await api
          .get(`appointments/${id}`)
          .then((res) => {
            console.log(res.data[0])
            const data = res.data[0];
            const time = data.dateHour.split(" ");
            
            setMedic(data.doctorId);
            setPatient(data.patientId);
            setScheduleDate(time[0]);
            setScheduleHour(time[1]);
            setSpeciality(data.doctor.specialty)
          })
          .catch((err) => console.log(err));
      }
    };

    data();
  }, [id]);

  const handleChange = (e: any) => {
    setMedic(e.target.value);
    const speciality = document.getElementById(e.target.value);
    setSpeciality(speciality?.dataset.speciality);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!scheduleHour || !scheduleDate) return;

    const dateHour = `${scheduleDate} ${scheduleHour}`;
    const data = { dateHour, patientId: patient, doctorId: medic };

    if(id) {
      await api
      .put(`appointments/${id}`, data)
      .then((res) => {
        history.goBack();
      })
      .catch((err) => console.log(err));
    } else {
      await api
      .post("appointments", data)
      .then((res) => {
        history.goBack();
      })
      .catch((err) => console.log(err));
    }
  };

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
            <form onSubmit={handleSubmit}>
              <label htmlFor="scheduleDate">Data da Consulta</label>
              <Input
                type="date"
                id="scheduleDate"
                name="scheduleDate"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
              />
              <br />
              <label htmlFor="scheduleHour">Hora da Consulta</label>
              <Input
                type="time"
                id="scheduleHour"
                name="scheduleHour"
                value={scheduleHour}
                onChange={(e) => setScheduleHour(e.target.value)}
              />
              <br />
              <label htmlFor="patient">Paciente</label>
              <Select
                name="patient"
                id="patient"
                onChange={(e) => setPatient(e.target.value)}
              >
                <option value="-1" disabled selected>
                  Selecione um paciente
                </option>
                {patientOptions &&
                  patientOptions.map((m: UserProps) => (
                    <option value={m.id} key={m.id} selected={patient === m.id}>
                      {m.name}
                    </option>
                  ))}
              </Select>
              <br />
              <br />
              <label htmlFor="medic">Médico</label>
              <Select name="medic" id="medic" onChange={(e) => handleChange(e)}>
                <option value="-1" disabled selected>
                  Selecione um médico
                </option>
                {medicOptions &&
                  medicOptions.map((m: UserProps) => (
                    <option
                      data-speciality={m.specialty}
                      id={m.id}
                      value={m.id}
                      key={m.id}
                      selected={medic === m.id}
                    >
                      {m.name}
                    </option>
                  ))}
              </Select>
              <br />
              <br />
              <label htmlFor="speciality">Especialidade</label>
              <Input
                type="text"
                id="speciality"
                name="speciality"
                placeholder="Especialidade"
                value={speciality}
                disabled
              />
              <CardBottom>
                <Button type="submit">
                  <HiOutlineCheck size={56} />
                  {id ? "Editar" : "Criar"}
                </Button>
              </CardBottom>
            </form>
          </Card>
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Create;
