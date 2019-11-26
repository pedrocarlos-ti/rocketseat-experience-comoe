import React from 'react';
import { Wrapper, Container } from "./styles";
import { Link } from 'react-router-dom';

import StepWizard from "react-step-wizard";

export default function Wizard() {
  return (
    <StepWizard>
      <Container>
        <h1>Entendendo mais você 😍</h1>

        <form>
          <Wrapper>
            <label htmlFor="">Você gosta de computadores ?</label>
            <select>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </Wrapper>

          <Wrapper>
            <label htmlFor="">
              Tem curiosidade de como faz para construir uma rede social ?
            </label>
            <select>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </Wrapper>

          <Wrapper>
            <label htmlFor="">Já desmontou um computador ?</label>
            <select>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </Wrapper>

          <Link to="list">
            <span>Aplicar</span>
          </Link>
        </form>
      </Container>
    </StepWizard>
  );
}
