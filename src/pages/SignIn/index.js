import React from "react"
import { Link } from "react-router-dom"

import { Container, Content } from "./styles"
import logo from "../../assets/logo.svg"

export default function SignIn() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />

        <form>
          <input placeholder="E-mail" />
          <input placeholder="Senha" />

            <Link to="/">
              Acessar
            </Link>
        </form>
      </Content>
    </Container>
  )
}
