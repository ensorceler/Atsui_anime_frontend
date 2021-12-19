import React from "react";
import { DownIcon } from "../../styles/Icons";
import * as Styles from "../../styles/WeeklyTop.Styles";
import { top_airing } from "../../utility/weekly";

type animeType = typeof top_airing[0];
const WeeklyTopList = () => {
  const [weeklyList, setWeeklyList] = React.useState(top_airing);
  const [sliceCount, setSliceCount] = React.useState<number>(11);

  const changeSliceCount = () => {
    console.log(sliceCount);
    if (sliceCount + 10 < top_airing.length) setSliceCount((p) => p + 10);
    else setSliceCount(top_airing.length);
  };

  React.useEffect(() => {
    setWeeklyList(top_airing.slice(0, sliceCount));
  }, [sliceCount]);

  return (
    <Styles.Container>
      <Styles.Divider />
      <Styles.Title>Weekly Top</Styles.Title>
      <Styles.Divider />
      {weeklyList.map((anime: animeType) => (
        <Styles.Card key={anime.mal_id}>
          <Styles.CardImage src={anime.image_url} />
          <Styles.CardContent>
            <h1>{anime.title}</h1>
            <h3>
              <Styles.StarIcon /> {anime.score} <Styles.VisibleIcon />{" "}
              {anime.members}
            </h3>
          </Styles.CardContent>
        </Styles.Card>
      ))}
      <div>
        <DownIcon onClick={changeSliceCount} />
      </div>
    </Styles.Container>
  );
};

export default WeeklyTopList;
