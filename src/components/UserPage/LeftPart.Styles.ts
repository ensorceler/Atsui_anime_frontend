import styled, { keyframes } from "styled-components";
import { device } from "../../styles/globalStyles";
import { FaEdit } from "react-icons/fa";
export const Container = styled.div``;

export const NavTabs = styled.div`
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-column-gap: 5px;
`;

export const NavTabItems = styled.div<{ active?: boolean }>`
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

export const GridItems = styled.div`
  margin-top: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const AnimeCard = styled.div`
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-column-gap: 10px;
  border-bottom: 1px solid rgba(230, 230, 230, 0.1);
  border-top: 1px solid rgba(230, 230, 230, 0.1);
  position: relative;
`;

export const AnimeCardImage = styled.img`
  width: 100px;
  height: 140px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
export const AnimeCardContent = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(230, 230, 230, 0.8);
  h1 {
    overflow: ellipsis;
    margin: 0px;
    font-weight: 400;
    font-size: 15px;
    color: #a7ccea;
  }
  h3 {
    margin: 0px;
    font-weight: 400;
    font-size: 14px;
  }
  p {
    overflow: hidden;
    height: 20px;
    margin: 0px;
    font-weight: 400;
    font-size: 15px;
    color: #a7ccea;
  }
  span {
    font-size: 15px;
    color: #a7ccea;
  }
`;
export const StatusSpan = styled.span<{ status: string }>`
  && {
    font-size: 15px;
    padding: 5px;
    width: max-content;
    ${(props) => {
      if (props.status == "watching")
        return `background-color:#222222;color:#B3E283;opacity:0.85`;
      if (props.status == "on-hold")
        return `background-color:#222222;color:#F3C583;opacity:0.85`;
      if (props.status == "considering")
        return `background-color:#222222;color:#E8E46E;opacity:0.85`;
      if (props.status == "completed")
        return `background-color:#222222;color:#E99497;opacity:0.85`;
    }}
  }
`;

export const AnimeCardTitle = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  height: 30px;
  margin: 0px;
  width: 250px;
  font-weight: 400;
  font-size: 15px;
  color: #a7ccea;
  white-space: nowrap;
  ${device.tablet} {
    min-width: 300px;
  }
  ${device.laptop} {
    max-width: 350px;
  }
`;
export const EditIcon = styled(FaEdit)`
  font-size: 18px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2, 1.2);
  }
  &:active {
    transform: translate(0, 2px);
  }
`;

const LoadingAnimation = keyframes`
  0%,100%{
    transform:translateX(0px);
  }
  50%{
    transform:translateX(500px);
    background-color:#B3E283;
  }

`;

export const LoadingDiv = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const LoadingBar = styled.div`
  width: 50px;
  border-radius: 2px;
  height: 4px;
  background: #29d;
  animation: ${LoadingAnimation} infinite ease forwards;
  animation-duration: 1s;
  animation-delay: 0s;
`;
