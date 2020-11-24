import React from "react";
import { DivProps } from "../../types";

import { Container, HelpContainer, HelpText } from "./styles";

const Content: React.FC<DivProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <HelpContainer>
        <HelpText>Precisando de </HelpText>
        <a
          href="https://github.com/caiodomingues/medtech"
          className="help-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          ajuda?
        </a>
      </HelpContainer>
      {children}
    </Container>
  );
};

export default Content;
