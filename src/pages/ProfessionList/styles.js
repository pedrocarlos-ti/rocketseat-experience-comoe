import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px;
  justify-items: center;
  justify-content: center;
`

export const Title = styled.h2`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  font-size: 28px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #40376e;
`

export const List = styled.div`
  width: 250px;
  margin: 10px;
  border: 1px solid #d8d8d8;
  background: #f5f6fa;
  border-radius: 5px;

  :hover {
    border: 1px solid #36558f;
  }
`

export const Image = styled.img`
  max-width: 250px;
`

export const Description = styled.h4`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  font-size: 16px;
  font-family: "Roboto", sans-serif;
  text-align: justify;
  padding: 10px;
  color: #40376e;
`

export const Text = styled.h2`
  font-size: 22px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #40376e;
`
