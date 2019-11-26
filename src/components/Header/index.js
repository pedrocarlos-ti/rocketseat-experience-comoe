import React from "react"
// import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
// import Notifications from "~/components/Notifications"
import logo from "../../assets/logo-purple.svg"

import { Container, Content, Profile } from "./styles"

export default function Header() {
  //const profile = useSelector(state => state.user.profile)

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="goBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          {/* <Notifications /> */}

          <Profile>
            <div>
              <strong>Joao de Barro</strong>
              <Link to="/profile">Meu Perfil</Link>
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
