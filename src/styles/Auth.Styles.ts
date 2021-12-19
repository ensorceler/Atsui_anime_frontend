import styled from "styled-components";
import { Colors } from "./globalStyles";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(25, 25, 25);
  color: white;
  display: flex;
  justify-content: center;
`;
export const AuthCard = styled.div`
  width: 400px;
  background-color: ${Colors.cardGray};
  border: 1px solid rgb(230, 230, 230, 0.3);
`;
export const CardTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
`;
export const CardTitle = styled.h1<{ active?: boolean }>`
  cursor: pointer;
  margin: 0px;
  font-weight: 400;
  font-size: 19px;
  margin-right: 10px;
  color: rgba(230, 230, 230, 0.9);
  margin-bottom: 0px;
  ${(props) => {
    if (props.active)
      return `color:whitesmoke;font-weight:500;border-bottom:1px solid whitesmoke;padding-bottom:15px;`;
  }};
`;

export const Divider = styled.hr`
  height: 1px;
  border-top: 0px;
  margin: 0px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(230, 230, 230, 0.3);
`;
export const InputSection = styled.div<{ login?: true }>`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  label {
    color: rgba(230, 230, 230, 1);
  }
`;

export const Inputbox = styled.input`
  height: 30px;
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid rgb(230, 230, 230, 0.1);
  color: whitesmoke;
  &:focus {
    outline: none;
    border: 1px solid rgb(230, 230, 230, 0.5);
    box-shadow: 1px 1px 5px rgb(230, 230, 230);
  }
`;

export const Loginbutton = styled.button`
  border: none;
  margin-left: 10px;
  margin-top: 20px;
  margin-right: 20px;
  height: 40px;
  width: 70px;
  font-size: 15px;
  font-weight: 500;
  color: black;
  background-color: #a7ccea;
  padding: 5px 5px;
  cursor: pointer;
  &:active {
    transform: scale(0.9, 0.9);
  }
`;

export const SuccessDiv = styled.div`
  min-height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  color: #b3e283;
  margin-top: 10px;
  p {
    font-size: 15px;
  }
`;

export const ErrorDiv = styled.div`
  min-height: 30px;
  margin-left: 10px;
  margin-right: 10px;
  color: #e99497;
  margin-top: 10px;
  p {
    font-size: 15px;
  }
`;
