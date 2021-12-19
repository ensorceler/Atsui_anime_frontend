import React from "react";
import * as Styles from "../../styles/SeasonResults.Styles";
import AnimeCard from "./AnimeCard";
import { AnimeDataProps } from "./HomeContent";

interface Props {
  animeData: AnimeDataProps;
}

const Movies = (props: Props) => {
  let movies = props.animeData.filter((anime) => anime.type == "Movie");

  return (
    <Styles.Container>
      {movies.map((anime, idx: number) => (
        <AnimeCard animeData={anime} key={idx} />
      ))}
    </Styles.Container>
  );
};

const OVAs = (props: Props) => {
  let ovas = props.animeData.filter((anime) => anime.type == "OVA");

  return (
    <Styles.Container>
      {ovas.map((anime, idx: number) => (
        <AnimeCard animeData={anime} key={idx} />
      ))}
    </Styles.Container>
  );
};

const SeasonResults = ({ animeData }: Props) => {
  const [animes, setAnimes] = React.useState<AnimeDataProps>(
    animeData.slice(0, 24)
  );
  const [sliceLength, setSliceLength] = React.useState<number>(24);

  const [options, setOptions] = React.useState<string>("animes");
  React.useEffect(() => {
    if (animeData.length > sliceLength)
      setAnimes(animeData.slice(0, sliceLength));
    else setAnimes(animeData);
  }, [sliceLength]);

  const showMoreAnime = () => {
    setSliceLength((p) => p + 24);
  };

  const changeOptions = (opt: string) => () => {
    setOptions(opt);
  };

  return (
    <>
      <Styles.Navbar>
        <Styles.NavOptions
          active={options == "animes" ? true : false}
          onClick={changeOptions("animes")}
        >
          Animes
        </Styles.NavOptions>
        <Styles.NavOptions>Recent</Styles.NavOptions>
        <Styles.NavOptions
          active={options == "ovas" ? true : false}
          onClick={changeOptions("ovas")}
        >
          OVAs
        </Styles.NavOptions>
        <Styles.NavOptions
          active={options == "movies" ? true : false}
          onClick={changeOptions("movies")}
        >
          Movies
        </Styles.NavOptions>
      </Styles.Navbar>
      <Styles.Divider />
      {options == "animes" && (
        <Styles.Container>
          {animes.map((anime, idx: number) => (
            <AnimeCard animeData={anime} key={idx} />
          ))}
        </Styles.Container>
      )}
      {options == "movies" && <Movies animeData={animeData} />}

      {options == "ovas" && <OVAs animeData={animeData} />}
      <Styles.LoadingMore onClick={showMoreAnime}>
        <Styles.DownIcon /> &nbsp;Load More
      </Styles.LoadingMore>
    </>
  );
};

export default SeasonResults;
