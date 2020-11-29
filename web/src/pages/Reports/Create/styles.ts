import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  .column {
    display: flex;
    flex-direction: column;
  }

  p {
    max-width: 450px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 16px;
  min-width: 340px;
  width: 100%;

  &::placeholder {
    opacity: 0.5;
  }

  &:hover {
    border: 1px solid rgba(19, 105, 255, 0.5);
  }

  &:active,
  &:focus {
    border: 2px solid rgba(19, 105, 255, 0.85);
  }
`;
