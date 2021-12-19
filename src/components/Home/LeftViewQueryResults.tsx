import axios from "axios";
import React from "react";
import useSWR from "swr";
import styled from "styled-components";
import { device } from "../../styles/globalStyles";
import * as S from "../../styles/SeasonResults.Styles";
import AnimeCard from "./AnimeCard";
import { Spinner } from "../../styles/Icons";
import { searchQueryStore } from "../../context/store";
import { genreMap } from "../../utility/genreMapping";

const Container = styled.div`
  margin-top: 20px;
  height: max-content;
  @media ${device.tablet} {
    width: 100%;
  }
`;
const TitleBar = styled.div`
  width: 100%;
  background-color: #222222;
  color: whitesmoke;
  display: flex;
  height: 45px;
  justify-content: center;
  font-size: 20px;
  align-items: center;
`;

const fetcher = async (url: string) => {
  return axios.get(url).then((res) => res.data);
};

const findGenre = (id: number) => {
  let content = genreMap.filter((obj) => obj.genreId == id);
  return content[0].genre;
};
const LeftViewQueryResults = () => {
  const searchQuery = searchQueryStore();

  const [animeData, setAnimeData] = React.useState<any>();
  const [sliceIndex, setSliceIndex] = React.useState<number>(24);

  const decideLink = () => {
    switch (searchQuery.componentName) {
      case "genreSearch":
        return `https://api.jikan.moe/v3/genre/anime/${
          searchQuery.queryData!.genreId
        }`;
      case "seasonSearch":
        return `https://api.jikan.moe/v3/season/${
          searchQuery.queryData!.year
        }/${searchQuery.queryData!.season}`;
    }
  };
  const { data, error, isValidating } = useSWR(decideLink(), fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  React.useEffect(() => {
    if (data != null) {
      setAnimeData(data.anime);
    }
  }, [data]);

  const loadMoreData = () => {
    if (sliceIndex + 24 < data.anime.length) {
      setSliceIndex((p) => p + 24);
    } else setSliceIndex(data.anime.length);
  };

  if (isValidating) {
    return (
      <Container>
        <div
          style={{
            width: "100%",
            height: "500px",
            marginTop: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner fontSize={100} />
        </div>
      </Container>
    );
  } else if (error) {
    return (
      <div>
        <h1>Error </h1>
      </div>
    );
  } else if (animeData != null)
    return (
      <Container>
        <TitleBar>
          {searchQuery.componentName == "seasonSearch" && (
            <>
              {searchQuery.queryData!.season!.toUpperCase()}{" "}
              {searchQuery.queryData!.year}
            </>
          )}
          {searchQuery.componentName == "genreSearch" && (
            <>{findGenre(searchQuery.queryData!.genreId!)} Anime</>
          )}
        </TitleBar>
        <S.Container>
          {animeData.slice(0, sliceIndex).map((anime: any, idx: number) => (
            <AnimeCard animeData={anime} key={idx} />
          ))}
        </S.Container>
        <S.LoadingMore onClick={loadMoreData}>
          <S.DownIcon />
          &nbsp;Load More
        </S.LoadingMore>
      </Container>
    );
  else
    return (
      <Container>
        <h1>LeftViewQueryResults</h1>
      </Container>
    );
};

export default LeftViewQueryResults;
