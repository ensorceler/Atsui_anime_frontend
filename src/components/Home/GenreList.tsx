import React from "react";
import { genreMap } from "../../utility/genreMapping";
import styled from "styled-components";
import { Colors } from "../../styles/globalStyles";
import { DownIcon, UpIcon } from "../../styles/Icons";
import produce from "immer";
import { searchQueryStore } from "../../context/store";
import router from "next/router";
import SeasonResults from "./SeasonResults";

const Container = styled.div`
  width: 100%;
  height: max-content;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
`;
const GridContainer = styled.div<{ showFullSize?: boolean }>`
  width: 90%;
  height: 200px;
  overflow: hidden;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  ${(props) => {
    if (props.showFullSize) return `height:max-content`;
  }}
`;
const ItemDiv = styled.div`
  font-size: 14px;
  font-family: "Lexend Deca", sans-serif;
  color: ${Colors.blueishWhite};
  opacity: 0.9;
`;
const Icondiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  color: #e6e6e6;
`;
const Divider = styled.hr`
  height: 0;
  border: 0;
  border-bottom: 1px solid rgba(230, 230, 230, 0.2);
`;

const GenreList = () => {
  const searchQuery = searchQueryStore();
  const [expand, setExpand] = React.useState<boolean>(false);
  const [genreState, setGenreState] = React.useState(() => {
    let newGenre = [];
    for (let i = 0; i < genreMap.length; i++) {
      newGenre.push({
        ...genreMap[i],
        checked: false,
        disabled: false,
      });
    }
    return newGenre;
  });

  const changeGenreList = () => {
    setExpand(!expand);
  };

  const checkBoxInput = (option: number, idx: number) => (e: any) => {
    console.log(option, idx);
    if (genreState[idx].checked == false) {
      searchQuery.genreSearch(option);
      router.push(`/?genre=${genreState[idx].genre}`, undefined, {
        shallow: true,
      });
    } else {
      searchQuery.reset();
      router.push("/", undefined, { shallow: true });
    }
    setGenreState(
      produce(genreState, (draft) => {
        if (draft[idx].checked == true) draft[idx].checked = false;
        else draft[idx].checked = true;
        for (let i = 0; i < genreState.length; i++) {
          if (i != idx) {
            if (draft[idx].checked == true) draft[i].disabled = true;
            else draft[i].disabled = false;
          }
        }
      })
    );
  };
  return (
    <Container>
      <Divider />
      <TitleDiv>Genres</TitleDiv>

      <Divider />
      <GridContainer showFullSize={expand}>
        {genreState.map((obj, idx) => (
          <ItemDiv key={idx}>
            <input
              type="checkbox"
              checked={obj.checked}
              disabled={obj.disabled}
              onChange={checkBoxInput(obj.genreId, idx)}
            />
            {obj.genre}
          </ItemDiv>
        ))}
      </GridContainer>
      <Icondiv>
        {expand === false ? (
          <DownIcon fontSize={18} onClick={changeGenreList} />
        ) : (
          <UpIcon fontSize={18} onClick={changeGenreList} />
        )}
      </Icondiv>
    </Container>
  );
};

export default GenreList;
