import React from 'react';
import { Wrapper, Container } from "./styles";
import { Link } from 'react-router-dom';
import Select from 'react-select'

import StepWizard from "react-step-wizard";

const options = [
  { value: 0, label: 'Sim' },
  { value: 1, label: 'Não' }
]

export default function Wizard() {
  return (
    <StepWizard>
      <Container>
        <h1>Entendendo mais você 😍</h1>

        <form>
          <Wrapper>
            <label htmlFor="">Você gosta de computadores ?</label>
            <Select 
              options={options} 
              placeholder="Selecione uma opção"
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="">
              Tem curiosidade de como faz para construir uma rede social ?
            </label>
            <Select 
              options={options} 
              placeholder="Selecione uma opção"
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="">Já desmontou um computador ?</label>
            <Select 
              options={options} 
              placeholder="Selecione uma opção"
            />
          </Wrapper>

          <Link to="list">
            <span>Aplicar</span>
          </Link>
        </form>
      </Container>
    </StepWizard>
  );
}
