import React from "react";
import {
  HiOutlineDocument,
  HiOutlineDocumentAdd,
  HiLogout,
} from "react-icons/hi";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";
import { DivProps } from "../../types";

import Button from "../../components/Button";

const SideBar: React.FC<DivProps> = ({ children, visible, ...rest }) => {
  const history = useHistory();

  return (
    <Container style={{ width: visible ? 0 : 75 }} {...rest}>
      <Button
        style={{ border: "none" }}
        type="button"
        onClick={() => history.push("/reports")}
      >
        <HiOutlineDocument color="#181818" size={24} />
      </Button>
      <Button
        style={{ border: "none" }}
        type="button"
        onClick={() => history.push("/create-report")}
      >
        <HiOutlineDocumentAdd color="#181818" size={24} />
      </Button>
      <Button
        style={{ border: "none" }}
        type="button"
        onClick={() => history.push("/login")}
      >
        <HiLogout color="#181818" size={24} />
      </Button>
    </Container>
  );
};

export default SideBar;
