import styled from "styled-components";
import { Colors } from "./globalStyles";

export const Container = styled.div`
  min-width: 750px;
  height: max-content;
  font-family: "Lexend Deca", sans-serif;
`;

export const AddDiv = styled.div`
  height: 100px;
  margin-top: -20px;
  width: 100px;
  background-color: transparent;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const AddButton = styled.button`
  border: 1px solid rgba(167, 204, 234, 0.21);
  border-color: #a7ccea opacity(0.7);
  color: #a7ccea;
  font-family: "Lexend Deca", san-serif;
  background-color: rgb(28, 28, 28);
  font-size: 18px;
  border-radius: 10px;
  align-items: center;
  cursor: pointer;
  &:active {
    transform: scale(0.9, 0.9);
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  h3 {
    color: rgba(250, 250, 250, 0.85);
    font-size: 16px;
    margin: 0px;
    margin-top: 5px;
    font-weight: 400;
  }
`;
export const Title = styled.h1`
  margin: 0px;
  margin-top: 40px;
  word-wrap: break-word;
  font-family: "Lexend Deca", san-serif;
  color: #e3e3e3;
  font-size: 27px;
  font-weight: 400;
`;

export const Genres = styled.span`
  margin: 0px;
  font-weight: 400;
  color: #a7ccea;
  white-space: pre;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const CardNav = styled.div`
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-column-gap: 5px;
`;
export const CardNavOptions = styled.div<{ active?: boolean }>`
  height: 35px;
  background-color: #282828;
  display: flex;
  color: #a7ccea;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) => {
    if (props.active)
      return `

    background-color: #3e3e3e;
    color: white;
    font-style:bold;
  `;
  }}
  &:hover {
    background-color: #303030;
    color: whitesmoke;
  }
`;

export const Divider = styled.hr`
  margin: 0;
  width: 100%;
  border: 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const CardSummary = styled.div`
  inline-size: fit-content;
  display: block;
  overflow-wrap: break-word;
  margin-top: 5px;
  p {
    font-size: 15px;
    color: #ddd;
    margin: 0px;
    inline-size: 750px;
    text-align: justify;
  }
`;

export const SimilarCard = styled.div`
  width: 100%;
  height: 100px;
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr 10fr;
  margin-top: 10px;
  &:hover {
    background-color: #282828;
  }
`;

export const SimilarCardImage = styled.img`
  width: 80px;
  height: 100px;
`;
export const SimilarCardContent = styled.div`
  height: 80px;
  margin: 5px;
  text-align: left;
  h1 {
    word-wrap: break-word;
    overflow: hidden;
    margin: 0px;
    color: #a7ccea;
    opacity: 0.8;
    font-size: 15px;
    font-weight: 400;
  }
  h3 {
    margin: 0px;
    margin-top: 5px;
    font-size: 12px;
    font-weight: 400;
    color: grey;
    overflow: hidden;
  }
  a {
    text-decoration: inherit;
  }
`;

export const OpEdDiv = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  color: #e6e6e6;
`;

export const OpItems = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
  }
`;
