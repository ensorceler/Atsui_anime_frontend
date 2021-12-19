import React from "react";
import { animeProps } from "./Page";
import * as S from "../../styles/InfoRight.Styles";
import { BookmarkIcon, Spinner } from "../../styles/Icons";
import useSWR from "swr";
import axios from "axios";

const Videos = ({ id }: { id: number }) => {
  const { data, isValidating, error } = useSWR(
    `https://api.jikan.moe/v3/anime/${id}/videos`,
    async (url) => {
      return await axios.get(url).then((res) => res.data);
    }
  );
  if (isValidating)
    return (
      <React.Fragment>
        <div
          style={{
            marginTop: "150px",
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Spinner fontSize={100} />
        </div>
      </React.Fragment>
    );
  if (error) {
    return (
      <>
        <h1>Error happened</h1>
      </>
    );
  }
  if (data) {
    return (
      <>
        <div
          style={{
            marginTop: "10px",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "10px",
          }}
        >
          {data.promo.map((video: any, idx: number) => (
            <div key={idx}>
              <iframe
                style={{ border: "none" }}
                src={video.video_url}
                width={"100%"}
                height={"200px"}
              ></iframe>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <React.Fragment>
        <div
          style={{
            marginTop: "150px",
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Spinner fontSize={100} />
        </div>
      </React.Fragment>
    );
  }
};

const Similar = ({ id }: { id: number }) => {
  const { data, isValidating, error } = useSWR(
    `https://api.jikan.moe/v3/anime/${id}/recommendations`,
    async (url) => {
      return await axios.get(url).then((res) => res.data);
    }
  );
  if (error) {
    return (
      <React.Fragment>
        <h1>Error</h1>
      </React.Fragment>
    );
  }
  if (isValidating)
    return (
      <React.Fragment>
        <div
          style={{
            marginTop: "150px",
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Spinner fontSize={100} />
        </div>
      </React.Fragment>
    );
  if (data) {
    return (
      <div>
        {data.recommendations.map((anime: any) => (
          <S.SimilarCard key={anime.mal_id}>
            <div>
              <S.SimilarCardImage src={anime.image_url} />
            </div>
            <S.SimilarCardContent>
              <a href={anime.recommendation_url}>
                <h1>{anime.title}</h1>
              </a>
              <h3>{anime.recommendation_count} users suggest</h3>
            </S.SimilarCardContent>
          </S.SimilarCard>
        ))}
      </div>
    );
  } else {
    return (
      <div
        style={{
          marginTop: "150px",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Spinner fontSize={100} />
      </div>
    );
  }
};

const ShowOP = ({ opening, ending }: { opening: any; ending: any }) => {
  return (
    <S.OpEdDiv>
      <S.OpItems>
        <div>Opening theme :</div>
        <div>
          {opening.map((song: any, idx: number) => (
            <p>
              {idx + 1}) {song}
            </p>
          ))}
        </div>
      </S.OpItems>

      <S.OpItems>
        <div>Ending theme :</div>
        <div>
          {ending.map((song: any, idx: number) => (
            <p>
              {idx + 1}) {song}
            </p>
          ))}
        </div>
      </S.OpItems>
    </S.OpEdDiv>
  );
};

const InfoRight = ({
  setShowModal,
  animeData,
}: {
  showModal: boolean;
  setShowModal: Function;
  animeData: animeProps;
}) => {
  const [navOptions, setNavOptions] = React.useState<string>("synopsis");

  const changeOptions = (opt: string) => () => {
    setNavOptions(opt);
  };

  React.useEffect(() => {
    console.log("info right mounted");
  });
  return (
    <S.Container>
      <S.Card>
        <S.AddDiv>
          <div></div>
          <S.AddButton
            onClick={() => {
              setShowModal(true);
            }}
          >
            <BookmarkIcon
              style={{
                color: "#a7ccea",
                fontSize: "18px",
                transform: "translate(0,2px)",
              }}
            />
            {""}
            &nbsp;Add
          </S.AddButton>
        </S.AddDiv>

        <S.Title>{animeData.title}</S.Title>
        <h3>
          Genres:
          {animeData.genres?.map((genre) => (
            <>
              &nbsp;
              <S.Genres key={genre.mal_id}>{genre.name}</S.Genres>
            </>
          ))}
        </h3>
        <S.CardNav>
          <S.CardNavOptions
            active={navOptions == "synopsis" ? true : false}
            onClick={changeOptions("synopsis")}
          >
            Synopsis
          </S.CardNavOptions>
          <S.CardNavOptions
            active={navOptions == "similar" ? true : false}
            onClick={changeOptions("similar")}
          >
            Similar
          </S.CardNavOptions>
          <S.CardNavOptions
            active={navOptions == "op.ed" ? true : false}
            onClick={changeOptions("op.ed")}
          >
            OP/ED
          </S.CardNavOptions>
          <S.CardNavOptions
            active={navOptions == "videos" ? true : false}
            onClick={changeOptions("videos")}
          >
            Videos
          </S.CardNavOptions>
        </S.CardNav>
        <S.Divider />
        {navOptions == "synopsis" && (
          <S.CardSummary>
            <p>{animeData.synopsis}</p>
          </S.CardSummary>
        )}
        {navOptions == "videos" && <Videos id={animeData.mal_id} />}
        {navOptions == "similar" && <Similar id={animeData.mal_id} />}
        {navOptions == "op.ed" && (
          <ShowOP
            opening={animeData.opening_themes}
            ending={animeData.ending_themes}
          />
        )}
      </S.Card>
    </S.Container>
  );
};

export default InfoRight;
