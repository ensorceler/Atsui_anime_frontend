import React from "react";
import LeftView from "./LeftView";
import RightView from "./RightView";
import styled from "styled-components";
import { animes } from "../../utility/animes";
import { device } from "../../styles/globalStyles";
import { searchQueryStore } from "../../context/store";
import LeftViewQueryResults from "./LeftViewQueryResults";
const Container = styled.div`
  position: relative;
  margin: 0 auto;
  font-size: 16px;
  color: white;
  min-height: calc(100vh- 190px);
  transition: width 0.5s;
  margin-left: auto;
  margin-right: auto;
  width: 1300px;
  grid-template-columns: 1000px 280px;
  grid-column-gap: 5px;

  // this is  laptop
  @media ${device.tablet} {
    width: 95vw;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr;
  }
  @media ${device.laptop} {
    display: grid;
    max-width: 1024px;
    grid-template-columns: 700px 270px;
  }
  // this is full screen desktop
  @media ${device.desktop} {
    display: grid;
    width: 1300px;
    grid-template-columns: 1000px 280px;
    grid-column-gap: 5px;
  }
`;
export type AnimeDataProps = typeof animes;

interface Props {
  animeData: AnimeDataProps;
}

const HomeContent = ({ animeData }: Props) => {
  const isQuery = searchQueryStore((state) => state.componentName);
  const reset = searchQueryStore((state) => state.reset);

  React.useEffect(() => {
    console.log("this is isQuery value", isQuery);
  }, [isQuery]);

  React.useEffect(() => {
    reset();
  }, []);

  return (
    <Container>
      {isQuery == null ? (
        <LeftView animeData={animeData} />
      ) : (
        <LeftViewQueryResults />
      )}
      <RightView />
    </Container>
  );
};

export default HomeContent;
