import styled from "styled-components";
import { Colors } from "../styles/globalStyles";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoPower } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
export const Container = styled.div`
  width: 100%;
  border-bottom: 10px solid rgb(25, 25, 25);
  min-height: 150px;
  background-color: ${Colors.cardGray};
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 14px;
  }
`;
export const TitleMessage = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 17px;
  text-align: center;
  color: rgba(230, 230, 230, 0.85);
  p {
    word-wrap: break-word;
    margin: 0;
    font-size: 17px;
  }
  span {
    background: linear-gradient(to right, #6998ab 10%, #b1d0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const GridItems = styled.div`
  width: 90%;
  height: max-content;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //border: 1px solid white;
`;
export const Item = styled.div`
  height: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #94b3fd;
  &:hover {
    color: #a7ccea;
  }
`;
export const PanelIcon = styled(AiOutlineUser)`
  font-size: 30px;
`;
export const RefreshIcon = styled(HiOutlineRefresh)`
  font-size: 30px;
  cursor: pointer;
`;
export const LogoutIcon = styled(IoPower)`
  font-size: 30px;
  cursor: pointer;
`;

export const Container2 = styled.div`
  width: 100%;
  border-bottom: 10px solid rgb(25, 25, 25);
  min-height: 100px;
  background-color: ${Colors.cardGray};
  color: rgba(230, 230, 230, 0.8);
  p {
    margin-left: 10px;
    font-size: 14px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  margin-left: 10px;
  font-style: bold;
  color: #a7ccea;
`;
export const ItemLink = styled.a`
  text-decoration: none;
  font-size: 14px;
`;
