import React from "react";
import GlobalStyle from "../styles/globalStyles";
import Nav from "./Shared/Nav";
import Head from "next/head";
import Footer from "./Shared/Footer";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Nav />
      <GlobalStyle />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
