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
  name: string;
}

const Reports: React.FC = () => {
  const history = useHistory();
  const [reports, setReports] = useState<ReportType[]>([]);

  useEffect(() => {
    const data = async () => {
      // await api
      //   .get("?")
      //   .then((res) => {
      //     setReports(res.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      setReports([
        {
          id: "1",
          name: "Salve chat",
        },
      ]);
    };

    data();
  }, []);

  const handleDelete = async (id: string) => {
    // await api
    //   .delete(`?/${id}`)
    //   .then((res) => {
    //     history.push("/reports");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    setReports(reports.filter((r: ReportType) => r.id !== id));
  };

  return (
    <Container>
      <SideBar visible={true} />
      <Content>
        <CardContainer>
          <h1>Agendamentos</h1>
          {reports &&
            reports.map((r: ReportType) => (
              <Card>
                <h1>{r.name}</h1>
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
