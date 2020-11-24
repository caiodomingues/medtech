import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;

  & svg {
    opacity: 0.5;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }

    &.trash {
      position: absolute;
      right: 16px;
      top: 16px;
    }

    &.down,
    &.up {
      padding: 0 10px;
    }

    &.trash:hover,
    &.down:hover {
      color: #ff1333;
    }

    &.up:hover {
      color: #ff7d7d;
    }
  }
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
