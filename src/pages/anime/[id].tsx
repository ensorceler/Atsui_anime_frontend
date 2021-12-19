import React from "react";
import styled from "styled-components";
import Nav from "../../components/Shared/Nav";
import Page from "../../components/SingleAnime/Page";
import { GetServerSideProps, GetStaticPropsContext } from "next";
const Container = styled.div<{ image?: string }>`
  background: url("${(props) => props.image}") repeat;
  overflow: auto;
`;

const TopPart = styled.div`
  z-index: 0;
  position: relative;
  content: "";
  box-sizing: border-box;
  display: block;
  height: 400px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
`;
const MiddlePart = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: rgb(20, 20, 20);
`;
const AnimePage = (props: GetServerSideProps) => {
  let animeData = (props as any).animeData;
  console.log(animeData);
  return (
    <Container image={animeData.image_url}>
      <Nav animePage={true} />
      <TopPart />
      <MiddlePart>
        <Page animeData={animeData} />
      </MiddlePart>
    </Container>
  );
};

export const getServerSideProps = async (context: GetStaticPropsContext) => {
  console.log(context.params);
  try {
    let id = context.params!.id;
    const res = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
    const data = await res.json();

    return {
      props: { animeData: data },
    };
  } catch (err: any) {
    return {
      notFound: true,
    };
  }
};

export default AnimePage;
