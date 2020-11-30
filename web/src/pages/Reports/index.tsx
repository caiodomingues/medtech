import React, { useState, useEffect } from "react";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import { CardContainer } from "./styles";

import SideBar from "../../components/SideBar";
import Content from "../../components/Content";
import Container from "../../components/Container";
import Card from "../../components/Card";

interface ReportType {
  id: string;
  dateHour: string;
  patient: {
    id: string;
    name: string;
  };
}

const Reports: React.FC = () => {
  const history = useHistory();
  const [reports, setReports] = useState<ReportType[]>([]);

  useEffect(() => {
    const data = async () => {
      await api
        .get("appointments")
        .then((res) => {
          console.log(res.data);
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
      .delete(`appointments/${id}`)
      .then((res) => {
        setReports(reports.filter((r: ReportType) => r.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <SideBar visible={true} />
      <Content>
        <CardContainer>
          <h1>Agendamentos</h1>
          {reports.length > 0 ? (
            reports.map((r: ReportType) => (
              <Card>
                <h1>{r.patient.name}</h1>
                <p>
                  {r.dateHour.split(" ")[0].split("-").reverse().join("/") +
                    " " +
                    r.dateHour.split(" ")[1]}
                </p>
                <br />
                <span>
                  <br />

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
            ))
          ) : (
            <Card>
              <p>Não há agendamentos</p>
            </Card>
          )}
        </CardContainer>
      </Content>
    </Container>
  );
};

export default Reports;
