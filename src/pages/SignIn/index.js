import React from "react"
import { Link } from "react-router-dom"
import { FaMapSigns } from "react-icons/fa"

import { Container, Content } from "./styles"

export default function SignIn() {
  return (
    <Container>
      <Content>
        <FaMapSigns color="#fff" size={80} />

        <form>
          <input placeholder="E-mail" />
          <input placeholder="Senha" />

          <Link to="/">Acessar</Link>
        </form>
      </Content>
    </Container>
  )
}
