import React from "react"
import { Container, List, Title, Text, Image, Description } from "./styles"
import Header from "../../components/Header"

function cutText(text) {
  if (text.length > 70) {
    return text.slice(0, 120) + "..."
  }
}

const profissions = [
  {
    title: "Front-end",
    description:
      "O desenvolvedor front-end é responsável por “dar vida” à interface. Trabalha com a parte da aplicação que interage diretamente com o usuário. Por isso, é importante que esse desenvolvedor também se preocupe com a experiência do usuário.Na parte de estudo, este profissional foca em HTML (linguagem de marcação), CSS (linguagem de estilo) e JavaScript (linguagem de script/programação).",
    image:
      "http://www.infiniteloop.com.br/wp-content/uploads/2016/02/mercado_de_trabalho_destaque.jpg"
  },
  {
    title: "Back-end",
    description:
      "O desenvolvedor front-end é responsável por “dar vida” à interface. Trabalha com a parte da aplicação que interage diretamente com o usuário. Por isso, é importante que esse desenvolvedor também se preocupe com a experiência do usuário.Na parte de estudo, este profissional foca em HTML (linguagem de marcação), CSS (linguagem de estilo) e JavaScript (linguagem de script/programação).",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2077jqi0bzYS2_zjBw9EdMlBYyR_US4vlDyERBFVmyhWuc-opYA&s"
  },
  {
    title: "FullStack",
    description:
      "O desenvolvedor front-end é responsável por “dar vida” à interface. Trabalha com a parte da aplicação que interage diretamente com o usuário. Por isso, é importante que esse desenvolvedor também se preocupe com a experiência do usuário.Na parte de estudo, este profissional foca em HTML (linguagem de marcação), CSS (linguagem de estilo) e JavaScript (linguagem de script/programação).",
    image:
      "http://www.infiniteloop.com.br/wp-content/uploads/2016/02/mercado_de_trabalho_destaque.jpg"
  },
  {
    title: "UX",
    description:
      "O desenvolvedor front-end é responsável por “dar vida” à interface. Trabalha com a parte da aplicação que interage diretamente com o usuário. Por isso, é importante que esse desenvolvedor também se preocupe com a experiência do usuário.Na parte de estudo, este profissional foca em HTML (linguagem de marcação), CSS (linguagem de estilo) e JavaScript (linguagem de script/programação).",
    image:
      "https://image.shutterstock.com/image-photo/web-design-online-technology-content-260nw-424677625.jpg"
  },
  {
    title: "Mobile",
    description:
      "O desenvolvedor front-end é responsável por “dar vida” à interface. Trabalha com a parte da aplicação que interage diretamente com o usuário. Por isso, é importante que esse desenvolvedor também se preocupe com a experiência do usuário.Na parte de estudo, este profissional foca em HTML (linguagem de marcação), CSS (linguagem de estilo) e JavaScript (linguagem de script/programação).",
    image:
      "http://www.infiniteloop.com.br/wp-content/uploads/2016/02/mercado_de_trabalho_destaque.jpg"
  },
  {
    title: "Teste de Software",
    description:
      "O desenvolvedor front-end é responsável por “dar vida” à interface. Trabalha com a parte da aplicação que interage diretamente com o usuário. Por isso, é importante que esse desenvolvedor também se preocupe com a experiência do usuário.Na parte de estudo, este profissional foca em HTML (linguagem de marcação), CSS (linguagem de estilo) e JavaScript (linguagem de script/programação).",
    image:
      "data:image/jpeg;base64,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"
  }
]

export default function ProfessionList() {
  return (
    <>
      <Header />
      <Container>
        {profissions.map(p => (
          <List key={p.title} onClick={e => console.log(p.title)}>
            <Title>{p.title}</Title>
            <Image src={p.image} />
            <Description>{cutText(p.description)}</Description>
          </List>
        ))}
        <Text>{profissions.length} Profissões encontradas.</Text>
      </Container>
    </>
  )
}
