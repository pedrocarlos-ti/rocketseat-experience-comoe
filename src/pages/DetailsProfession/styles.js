import styled from 'styled-components';

import Profession from '../../assets/banner.jpg';

export const Container = styled.div`
  height: 100vh;
`;
export const TopImage = styled.div`
  background: url(${Profession}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 16rem;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.p`
  color: #FFF;
  font-size: 4rem;
  font-weight: 600;
  font-family: sans-serif;
`;
export const Content = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  background: #FFF;
  height: 16rem;
  margin: 2rem 4rem;
  box-shadow: 2px 4px 13px #381e1e0a;
  border-radius: 3px;
  display: flex;
  padding: 1rem;

  &:nth-of-type('') {
    width: 90%;
  }
`;

export const TitleItem = styled.h5`
  color: #353440;
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: 600;
`;
export const TextItem = styled.p`
  color: #353440;
  margin-left: 1rem;
  margin-top: 1rem;
`;
export const TextCall = styled.p`
  color: #353440;
  margin-left: 1rem;
  margin-top: 1rem;
`;
export const ButtonEntrar = styled.button`
  color: #353440;
  margin-left: 1rem;
  margin-top: 1rem;
`;