import React from "react";
import styled from "styled-components";
import walletc from "./wallet/connectors";
export default function Button({ text, blue = false }) {
  return (
    <Div>
      <button className={`${blue ? "blue" : ""}`} onClick={walletc}>{text}</button>
    </Div>
  );
}

const Div = styled.div`
  button {
    border-radius: 4rem;
    padding: 0.8rem 2rem;
    border: none;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    :not(.blue) {
      background-color: transparent;
      border: 1px solid white;
    }
  }
  .blue {
    background-color: #2d69fd;
  }
`;

