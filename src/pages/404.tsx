import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import waifuImg from "../../public/404.gif";
import Image from "next/image";

const Container = styled.div`
  background-color: rgba(25, 25, 25);
  color: white;
  width: 100vw;
  height: 100vh;
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Imagediv = styled.div`
  width: 350px;
  height: 500px;
  text-align: center;
  h1 {
    margin: 0px;
    font-weight: 400;
  }
  h3 {
    margin: 0px;
    font-weight: 400;
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #a7ccea;
  font-size: 20px;
`;

const NotFound = () => {
  return (
    <Container>
      <Head>
        <title>404 Error</title>
      </Head>
      <Imagediv>
        <Image src={waifuImg} height={300} width={350} />
        <h1>Page Not Found</h1>

        <Link prefetch href={"/"} passHref>
          <StyledLink>go back</StyledLink>
        </Link>
      </Imagediv>
    </Container>
  );
};

export default NotFound;
