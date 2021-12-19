import styled from "styled-components";
import { Colors } from "./globalStyles";
import { AiFillGithub } from "react-icons/ai";
export const Container = styled.div`
  margin-top: auto;
  width: 100%;
  height: 120px;
  color: white;
  background-color: ${Colors.cardGray};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;
export const HeadPart = styled.div`
  margin-top: 0px;
  background-color: #ffffff09;
  width: 100%;
  height: 20px;
`;

export const FooterContent = styled.div`
  margin-bottom: 20px;
  p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(230, 230, 230, 0.7);
  }
  span {
    font-size: 14px;
    font-weight: 400;
    color: rgba(230, 230, 230, 0.3);
  }
`;
export const GithubIcon = styled(AiFillGithub)`
  transform: translate(0, 5px);
`;
