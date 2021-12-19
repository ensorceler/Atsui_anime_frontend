import React from "react";
import EditAnime from "../Modal/EditAnime";
import * as S from "./LeftPart.Styles";
import axios from "axios";
import { parseCookies } from "nookies";
import useSWR from "swr";
import Views from "./views/Views";
interface AnimeProp {
  user_id: string;
  anime_id: number;
  image_url: string;
  anime_title: string;
  status: string;
  episodes_watched: number;
  rating: number;
  review: string;
  start_date: string;
  end_date: string;
}

type AnimeListProp = Array<AnimeProp>;
interface Props {
  animeList: Array<AnimeProp>;
  showEditModal: boolean;
  setShowEditModal: Function;
}

const FetchAnime = async (url: string) => {
  const cookie = parseCookies();

  const user_id = cookie["userId"];
  const authToken = cookie["access-token"];
  const res = await axios.post(
    `${url}`,
    {
      user_id: `${user_id}`,
    },
    {
      headers: {
        auth: authToken,
      },
    }
  );
  return res.data;
};

const ShowWatchlist = ({
  animeList,
  showEditModal,
  setShowEditModal,
}: {
  animeList: AnimeListProp;
  showEditModal: boolean;
  setShowEditModal: Function;
}) => {
  const [animeToModal, setAnimeToModal] = React.useState<AnimeProp>(
    animeList[0]
  );
  const [SyncAnime, setSyncAnime] = React.useState<AnimeListProp>(animeList);

  const { mutate, data, isValidating } = useSWR(
    `https://atsui-api.herokuapp.com/getlist`,
    FetchAnime,
    {
      revalidateOnFocus: false,
    }
  );

  React.useEffect(() => {
    if (showEditModal == false) {
      mutate();
    }
  }, [showEditModal]);

  React.useEffect(() => {
    console.log(data);
    if (data) {
      setSyncAnime(data);
    }
  }, [data]);

  const editorFn = (id: number) => () => {
    let anime = SyncAnime.filter((anime) => anime.anime_id == id);
    setAnimeToModal(anime[0]);
    setShowEditModal(true);
  };

  return (
    <>
      {isValidating && (
        <S.LoadingDiv>
          <S.LoadingBar />
        </S.LoadingDiv>
      )}

      <S.GridItems>
        {SyncAnime.map((anime) => (
          <S.AnimeCard key={anime.anime_id}>
            <S.AnimeCardImage src={anime.image_url} />
            <S.AnimeCardContent>
              <S.AnimeCardTitle>{anime.anime_title}</S.AnimeCardTitle>
              <h3>
                Episodes watched:<span> {anime.episodes_watched}</span>
              </h3>
              <S.StatusSpan status={anime.status}>#{anime.status}</S.StatusSpan>
              <h3>
                Rated by user:<span> ⭐ {anime.rating} </span>
              </h3>
              <br />
              <span>
                {" "}
                <S.EditIcon onClick={editorFn(anime.anime_id)} />{" "}
              </span>
            </S.AnimeCardContent>
          </S.AnimeCard>
        ))}
        {showEditModal && (
          <EditAnime
            anime={animeToModal}
            showEditModal={showEditModal}
            setShowEditModal={setShowEditModal}
          />
        )}
      </S.GridItems>
    </>
  );
};

const LeftPart = ({ animeList, showEditModal, setShowEditModal }: Props) => {
  const [navOptions, setNavOptions] = React.useState<string>("watchlist");
  const changeNavOptions = (status: string) => () => {
    setNavOptions(status);
  };

  return (
    <S.Container>
      <S.NavTabs>
        <S.NavTabItems
          active={navOptions == "watchlist" ? true : false}
          onClick={changeNavOptions("watchlist")}
        >
          Watchlist
        </S.NavTabItems>
        <S.NavTabItems
          active={navOptions == "planning" ? true : false}
          onClick={changeNavOptions("planning")}
        >
          Planning
        </S.NavTabItems>
        <S.NavTabItems
          active={navOptions == "on-hold" ? true : false}
          onClick={changeNavOptions("on-hold")}
        >
          On-hold
        </S.NavTabItems>
        <S.NavTabItems
          active={navOptions == "finished" ? true : false}
          onClick={changeNavOptions("finished")}
        >
          Finished
        </S.NavTabItems>
        <S.NavTabItems
          active={navOptions == "more" ? true : false}
          onClick={changeNavOptions("more")}
        >
          More
        </S.NavTabItems>
      </S.NavTabs>
      <S.Divider />
      {navOptions == "watchlist" ? (
        <ShowWatchlist
          animeList={animeList}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
        />
      ) : (
        <Views />
      )}
    </S.Container>
  );
};

export default LeftPart;
