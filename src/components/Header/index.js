import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo-purple.svg"

import { Container, Content, Profile } from "./styles"

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="" />
          <Link to="/lits">MENTORES</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/">Meu Perfil</Link>
            </div>
            <img
              src={"https://api.adorable.io/avatars/50/abott@adorable.png"}
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
