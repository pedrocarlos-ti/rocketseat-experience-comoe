import styled from "styled-components";

export const Container = styled.div`
  display: block;
  margin: 0 auto;
  padding-top: 100px;
  width: 800px;

  > h1 {
    margin: 0 0 40px;
    text-align: center;
  }

  > form {
    > a {
      background-color: #5c8df5;
      border: none;
      border-radius: 6px;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      padding: 20px 24px;
      text-transform: uppercase;
      text-decoration: none;
      display: block;
      text-align: center;
      width: 100%;
    }
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;

  * {
    font-size: 20px;
  }

  > label {
    display: block;
    font-weight: 500;
    margin-bottom: 10px;
    text-align: left;
  }

  > select {
    background: none;
    border: solid 2px #d9dce6;
    border-radius: 6px;
    color: #676e7b;
    padding: 15px;
    width: 100%;
  }
`;
