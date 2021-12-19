import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
body{
  background-color:#191919;
  color: #b2becd;
  margin: 0px;
  padding:0px;
  outline:0px;
  box-sizing:border-box;
  font-family: 'Lexend Deca', sans-serif; 
}

`;

export const Colors = {
  white1: "rgba(245, 245, 245, 0.9)",
  blueishWhite: "#cfdce6",
  cardGray: "#202020",
  modalCardbg: "#1e1e1e",
};

const size = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};
export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: 768px) and (max-width:1024px)`,
  laptop: `(min-width:1024px) and (max-width:1300px)`,
  desktop: `(min-width:1300px)`,
};

export default globalStyle;
