import React from "react";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import InfoCard from "./InfoCard";
import SeasonResults from "./SeasonResults";

const Container = styled.div`
  margin-top: 10px;
  height: max-content;
  @media ${device.tablet} {
    width: 100%;
  }
`;
import { AnimeDataProps } from "./HomeContent";
import { device } from "../../styles/globalStyles";
interface Props {
  animeData: AnimeDataProps;
}
const LeftView = ({ animeData }: Props) => {
  React.useEffect(() => {
    console.log("render in the left view");
  });

  return (
    <Container>
      <FeatureCard />
      <InfoCard />
      <SeasonResults animeData={animeData} />
    </Container>
  );
};

export default LeftView;
