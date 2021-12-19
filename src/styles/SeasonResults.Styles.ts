import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";
import { device } from "./globalStyles";
export const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 158px);
  grid-column-gap: 10px;
  grid-row-gap: 5px;
  @media ${device.tablet} {
    grid-template-columns: repeat(6, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Navbar = styled.div`
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-column-gap: 5px;
`;
export const NavOptions = styled.div<{ active?: boolean }>`
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

export const LoadingMore = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 130px;
  height: 50px;
  color: #a7ccea;
  border: 1px rgba(167, 204, 234, 0.4);
  border-style: dashed;
  background-color: rgba(167, 204, 234, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DownIcon = styled(AiOutlineDown)`
  font-size: 18px;
`;
