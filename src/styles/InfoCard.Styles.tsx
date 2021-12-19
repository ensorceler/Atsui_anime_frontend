import styled from "styled-components";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export const Container = styled.div<{ expanded?: boolean }>`
  width: 100%;
  height: 100px;
  background-color: #1e1e1e;
  margin-top: 10px;
  color: #b3b3b3;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${(props) => {
    if (props.expanded == true) return `height:170px;`;
  }}
  span {
    color: #e99497;
  }
`;

export const TextContent = styled.p`
  margin-left: 10px;
  inline-size: 90%;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const ExpandIcon = styled(AiOutlineDown)`
  position: absolute;
  bottom: 5px;
  right: 50%;
  cursor: pointer;
`;

export const ContractIcon = styled(AiOutlineUp)`
  position: absolute;
  bottom: 5px;
  right: 50%;
  cursor: pointer;
`;
