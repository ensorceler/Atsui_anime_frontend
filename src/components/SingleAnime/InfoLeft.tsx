import React from "react";
import { RefreshIcon, StarIcon } from "../../styles/Icons";
import * as S from "../../styles/InfoLeft.Styles";
import { animeProps } from "./Page";

const showStudios = (studios: any) => {
  if (studios.length == 0) return <span>NA</span>;
  else {
    return (
      <span>
        {studios.map((studio: any, idx: number) => (
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            key={idx}
            href={studio.url}
          >
            {studio.name}{" "}
          </a>
        ))}
      </span>
    );
  }
};

const InfoLeft = (props: animeProps) => {
  return (
    <S.Container>
      <S.CardImage src={props.image_url} />
      <S.CardTitle>{props.title_english}</S.CardTitle>
      <S.CardTitle>{props.title_japanese}</S.CardTitle>
      <S.Divider />

      <h3>
        Information <RefreshIcon color={"#a7ccea"} />
      </h3>

      <S.Divider />

      <S.CardInfo>
        Score: <StarIcon /> {props.score}
      </S.CardInfo>
      <S.CardInfo>Episodes: {props.episodes}</S.CardInfo>
      <S.CardInfo>
        Status: <span>{props.status}</span>
      </S.CardInfo>
      <S.CardInfo>Aired: {props.aired?.string} </S.CardInfo>
      <S.CardInfo>Popularity: {props.popularity}</S.CardInfo>
      <S.CardInfo>Rating: {props.rating}</S.CardInfo>
      <S.CardInfo>Duration: {props.duration}</S.CardInfo>
      <S.CardInfo>
        Source: <span>{props.source}</span>
      </S.CardInfo>

      <S.CardInfo>Studios: {showStudios(props.studios)}</S.CardInfo>

      <S.CardInfo>
        More Info: <a href={props.url}>MAL</a>
      </S.CardInfo>
      <div style={{ marginBottom: "10px" }}></div>
    </S.Container>
  );
};
export default InfoLeft;
