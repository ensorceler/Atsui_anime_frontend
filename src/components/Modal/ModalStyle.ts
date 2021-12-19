import styled from "styled-components";
import { Colors } from "../../styles/globalStyles";
import { FcCheckmark } from "react-icons/fc";
import { BiErrorCircle } from "react-icons/bi";
export const Container = styled.div`
  width: 600px;
  min-height: 500px;
  max-height: max-content;
  font-family: "Lexend Deca", sans-serif;
  border: 1px solid rgba(230, 230, 230, 0.2);
  background-color: ${Colors.modalCardbg};
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
`;

export const EditContainer = styled.div`
  width: 500px;
  min-height: 500px;
  max-height: max-content;
  font-family: "Lexend Deca", sans-serif;
  border: 1px solid rgba(230, 230, 230, 0.05);
  background-color: ${Colors.modalCardbg};
  opacity: 0.85;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -300px;
  margin-top: 0px;
  border-radius: 10px;
  z-index: 500;
`;

export const Title = styled.h1`
  font-size: 19px;
  color: white;
  font-weight: 400;
  margin: 10px 20px 10px 20px;
`;
export const EditModalTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  span {
    font-size: 15px;
    color: #a7ccea;
  }
`;

export const InputOptions = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.5fr 1fr 0.51fr 1fr 1fr 0.5fr 3fr;
  grid-gap: 10px;

  label {
    font-size: 14px;
  }
  textarea {
    background-color: ${Colors.cardGray};
    color: whitesmoke;
  }
`;
export const Increment = styled.div`
  width: 50px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const InputDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  gap: 2px;
  justify-content: space-between;
  select {
    height: 100%;
    font-size: 16px;
    width: 100%;
    font-family: "Lexend Deca", sans-serif;
    background-color: ${Colors.cardGray};
    color: whitesmoke;
  }
  input[type="text"] {
    padding: 5px;
    font-size: 16px;
    width: 100%;
    font-family: "Lexend Deca", sans-serif;
    background-color: ${Colors.cardGray};
    color: whitesmoke;
    border: 1px solid grey;
  }
  input {
    font-size: 12px;
    width: 120px;
  }
`;
export const DateDiv = styled.div`
  width: 100%;
  height: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  p {
    margin: 0px;
  }
`;

export const SaveButton = styled.button<{ disabled?: boolean }>`
  width: 60px;
  border: none;
  padding: 5px;
  background-color: lightblue;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  &:active {
    transform: scale(0.95, 0.95);
  }
  ${(props) => {
    if (props.disabled == true) {
      return `
      cursor:not-allowed;
      color:black; 
      `;
    }
  }}
`;

export const CancelButton = styled.button`
  width: 60px;
  padding: 5px;
  border: none;
  color: lightblue;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
  }
`;

export const SaveArea = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
`;

export const Warningdiv = styled.div`
  background-color: rgba(241, 193, 65, 0.5);
  color: rgb(230, 230, 230);
  min-height: 50px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    word-wrap: break-word;
    margin: 0;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 16px;
  }
  span {
    color: lightblue;
    font-size: 16px;
  }
`;
export const Alert = styled.div<{ type?: string }>`
  padding: 5px;
  display: flex;
  width: max-content;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow-wrap: break-word;

  p {
    word-break: break-all;
    white-space: normal;
    margin: 0px;
  }
  ${(props) => {
    if (props.type == "error") return `color:#f4c7c7`;
  }}
`;

export const SaveIcon = styled(FcCheckmark)`
  margin-right: 5px;
`;
export const ErrorIcon = styled(BiErrorCircle)`
  color: red;
  margin: 0px;
  margin-right: 5px;
`;
