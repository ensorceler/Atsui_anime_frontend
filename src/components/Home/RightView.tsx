import React from "react";
import styled from "styled-components";
import GenreList from "./GenreList";
import SearchOptions from "./SearchOptions";
import WeeklyTopList from "./WeeklyTop";
import { device } from "../../styles/globalStyles";
import PanelCard from "./PanelCard";
const Container = styled.div`
  background-color: #1e1e1e;
  margin-left: 10px;
  height: max-content;
  margin-top: 20px;
  overflow: hidden;
  @media ${device.tablet} {
    display: none;
  }
`;

const RightView = () => {
  return (
    <Container>
      <PanelCard />
      <SearchOptions />
      <GenreList />
      <WeeklyTopList />
    </Container>
  );
};

export default RightView;
