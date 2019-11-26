import React from 'react';
import { Container, TopImage, Title, Content, ListItem, TitleItem, TextItem, TextCall } from './styles';
import { Link } from 'react-router-dom';
import ImgItem from '../../assets/item.jpeg';

export default function DetailsProfission() {
  return (
    <Container>
      <TopImage>
        <Title>Frontend</Title>
      </TopImage>
      <Content>
        <ListItem>
          <img src={ImgItem} alt="Profissao" />
          <div>
            <TitleItem>Design</TitleItem>
            <TextItem>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita minus illum temporibus in accusamus rerum exercitationem, similique reprehenderit illo alias!</TextItem>
          </div>
          <div>
            <TextCall>
              Clique no botão para entrar
            </TextCall>
            <Link to="signin">Entre</Link>
          </div>
        </ListItem>
        <ListItem>
          <img src={ImgItem} alt="Profissao" />
          <div>
            <TitleItem>Design</TitleItem>
            <TextItem>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita minus illum temporibus in accusamus rerum exercitationem, similique reprehenderit illo alias!</TextItem>
          </div>
          <div>
            <TextCall>
              Clique no botão para entrar
            </TextCall>
            <Link to="signin">Entre</Link>
          </div>
        </ListItem>
      </Content>
    </Container>
  );
}
