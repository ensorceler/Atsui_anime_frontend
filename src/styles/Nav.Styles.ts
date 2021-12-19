import styled from "styled-components";
import { MdOutlineArrowBackIosNew, MdHome } from "react-icons/md";
import { FaRandom, FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import { device } from "./globalStyles";

export const NavContainer = styled.div`
  margin-top: 5px;
  max-width: 1300px;
  min-width: 970px;
  margin-left: auto;
  margin-right: auto;
  min-height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media ${device.tablet} {
    min-width: 768px;
    width: 95vw;
  }
  @media ${device.laptop} {
    max-width: 1024px;
  }
`;
export const LogoImage = styled(Image)`
  position: relative;
  margin-right: 10px;
  cursor: pointer;
`;
export const NavSearch = styled.input`
  height: 25px;
  width: 330px;
  margin-left: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(230, 230, 230, 0.1);
  padding: 6px 12px;
  color: whitesmoke;
  font-family: "Lexend Deca", sans-serif;
  &:focus {
    outline: none;
    border: none;
    border: 1px solid rgba(167, 204, 234, 0.7);
  }
  &::placeholder {
    color: rgb(240, 240, 240, 0.9);
  }
`;

export const HomeButton = styled(MdHome)<{
  color?: string;
  hoverColor?: string;
}>`
  align-self: flex-end;
  height: 30px;
  width: 35px;
  margin-right: 20px;
  cursor: pointer;
  ${(props) => {
    if (props.color) return `color:${props.color}`;
  }}
`;
export const BackIcon = styled(MdOutlineArrowBackIosNew)`
  align-self: end;
  height: 20px;
  width: 35px;
  margin-right: 10px;
  transform: translateY(-3px);
  cursor: pointer;
`;

export const NavLink = styled.div<{ color?: string; hoverColor?: string }>`
  margin-left: 20px;
  transform: translateY(15px);
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;
  ${(props) => {
    if (props.color)
      return `color:${props.color};&:hover{color:${props.hoverColor}}`;
  }}
`;
export const RandomButton = styled(FaRandom)`
  transform: translateY(3px);
  margin-right: 3px;
  cursor: pointer;
`;
export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  top: 12px;
  cursor: pointer;
`;
export const TabletMenu = styled(IoMdMenu)`
  font-size: 35px;
  cursor: pointer;
`;
export const TabletSearch = styled(FaSearch)`
  font-size: 20px;
  cursor: pointer;
`;
