import styled from "styled-components";
import { AiFillStar, AiFillEye } from "react-icons/ai";
export const Container = styled.div`
  width: 100%;
  height: max-content;
  align-content: center;
  text-align: center;
`;
export const Title = styled.h1`
  margin: 0px;
  font-size: 16px;
  color: #e6e6e6;
  font-weight: 400;
`;
export const Divider = styled.hr`
  width: 100%;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Card = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 80px;
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: 25fr 95fr;
  position: relative;
  &:hover {
    background-color: #282828;
  }
`;

export const CardImage = styled.img`
  width: 60px;
  height: 80px;
`;
export const CardContent = styled.div`
  height: 100%;
  margin: 5px;
  text-align: left;
  h1 {
    word-wrap: break-word;
    overflow: hidden;
    margin: 0px;
    color: #a7ccea;
    opacity: 0.8;
    font-size: 13px;
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
`;

export const StarIcon = styled(AiFillStar)`
  color: #a89042;
  transform: translate(0, 2px);
`;
export const VisibleIcon = styled(AiFillEye)`
  color: grey;
  transform: translate(0, 2px);
`;
