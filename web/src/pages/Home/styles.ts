import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  opacity: 0.5;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
`;

export const CardIcon = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.16);
  border-radius: 15px;
  padding: 15px;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in-out;
`;

export const CardContent = styled.div`
  flex-direction: column;
  margin-left: 20px;
`;
