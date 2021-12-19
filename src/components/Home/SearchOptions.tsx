import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { searchQueryStore } from "../../context/store";

interface SeasonQueryProps {
  season: string;
  year: string;
}
enum Seasons {
  WINTER = "winter",
  SPRING = "spring",
  SUMMER = "summer",
  FALL = "fall",
}

const Container = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
`;

const SearchButton = styled.button`
  border: none;
  background-color: lightblue;
  border-radius: 5px;
  cursor: pointer;
  &:active {
    transform: scale(0.9, 0.9);
  }
`;

const InputOption = styled.select`
  background: url("https://animixplay.to/assets/fonts/arrows.svg") no-repeat
    100% 50%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  background-color: #333;
  color: white;
  padding: 5px;
  border-radius: 3px;
  width: 80px;
  font-family: "Lexend deca", sans-serif;
`;

const YearOptions = ({ setSeasonQuery }: { setSeasonQuery: Function }) => {
  const changeYear = (e: any) => {
    setSeasonQuery((p: SeasonQueryProps) => ({
      ...p,
      year: e.target.value,
    }));
  };
  return (
    <InputOption onChange={changeYear}>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
      <option value="2010">2010</option>
      <option value="2009">2009</option>
      <option value="2008">2008</option>
      <option value="2007">2007</option>
      <option value="2006">2006</option>
      <option value="2005">2005</option>
      <option value="2004">2004</option>
      <option value="2003">2003</option>
      <option value="2002">2002</option>
      <option value="2001">2001</option>
      <option value="2000">2000</option>
    </InputOption>
  );
};

const SearchOptions = () => {
  const router = useRouter();
  const searchQuery = searchQueryStore();
  const [seasonQuery, setSeasonQuery] = React.useState({
    season: Seasons["WINTER"],
    year: "2021",
  });

  const changeSeason = (e: any) => {
    setSeasonQuery((p) => ({
      ...p,
      season: e.target.value,
    }));
  };
  const SearchForSeason = () => {
    // console.log(seasonQuery);
    searchQuery.seasonSearch(parseInt(seasonQuery.year), seasonQuery.season);
    router.push(
      `/?season=${seasonQuery.season}&year=${seasonQuery.year}`,
      undefined,
      { shallow: true }
    );
  };

  return (
    <Container>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(2,1fr)",
        }}
      >
        <label
          style={{
            fontWeight: "400",
            fontSize: "14px",
            color: "#e6e6e6",
          }}
        >
          Season:
        </label>
        <InputOption onChange={changeSeason}>
          <option value="winter">winter</option>
          <option value="spring">spring</option>
          <option value="summer">summer</option>
          <option value="fall">fall</option>
        </InputOption>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(2,1fr)",
          color: "#e6e6e6",
        }}
      >
        <label style={{ fontWeight: "400", fontSize: "14px" }}>Year:</label>
        <YearOptions setSeasonQuery={setSeasonQuery} />
      </div>

      <div style={{ display: "grid", gridTemplateRows: "repeat(2,1fr)" }}>
        <div></div>
        <SearchButton onClick={SearchForSeason}>GO</SearchButton>
      </div>
    </Container>
  );
};

export default SearchOptions;
