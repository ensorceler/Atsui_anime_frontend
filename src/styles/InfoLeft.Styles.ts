import styled from "styled-components";

export const Container = styled.div`
  width: 225px;
  background-color: rgb(30, 30, 30);
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  h3 {
    font-size: 15px;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    margin: 0px;
    color: white;
    word-wrap: break-word;
    margin-left: 5px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 318px;
`;
export const CardTitle = styled.h1`
  align-items: flex-start;
  font-size: 13px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  margin: 0px;
  margin-top: 5px;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  overflow-wrap: break-word;
`;

export const CardInfo = styled.h2`
  align-self: flex-start;
  font-family: "Lexend Deca", sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin: 2px;
  margin-left: 10px;
  color: white;
  span {
    color: #a7ccea;
  }
  a {
    text-decoration: none;
    color: #a7ccea;
  }
`;
export const Divider = styled.hr`
  width: 100%;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
