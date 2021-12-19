import React from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import useEditAnime from "../../hooks/useEditAnime";
import { AddIcon, MinusIcon, Spinner } from "../../styles/Icons";
import * as S from "./ModalStyle";
/*

  Read Carefully before jumping into the code

  trackAnimeData tracks specific anime data for the user



*/

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

interface Props {
  anime: AnimeProp;
  showEditModal: boolean;
  setShowEditModal: Function;
}

interface trackAnimeDataProp {
  status: string;
  episodes_watched: number;
  rating: number;
  start_date: string | null;
  end_date: string | null;
  review: string;
}

const Rating = ({ trackAnimeData, setTrackAnimeData }: any) => {
  const changeRating = (e: any) => {
    console.log(e);
    setTrackAnimeData((p: any) => ({
      ...p,
      rating: e.target.value,
    }));
  };

  return (
    <S.InputDiv>
      <select value={trackAnimeData.rating} onChange={changeRating}>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
    </S.InputDiv>
  );
};

const EditAnime = ({ anime, showEditModal, setShowEditModal }: Props) => {
  const modalRef = React.useRef(null);
  const [startDate, setStartDate] = React.useState<string>("2021-04-20");
  const [finishDate, setFinishDate] = React.useState(new Date());
  const startDateRef = React.useRef(null);
  const [trackAnimeData, setTrackAnimeData] =
    React.useState<trackAnimeDataProp>({
      status: "watching",
      episodes_watched: 0,
      rating: 0,
      start_date: null,
      end_date: null,
      review: "",
    });

  React.useEffect(() => {
    setTrackAnimeData({
      status: anime.status,
      episodes_watched: anime.episodes_watched,
      rating: anime.rating,
      start_date: anime.start_date,
      end_date: anime.end_date,
      review: anime.review,
    });
    if (trackAnimeData.start_date != null)
      setStartDate(trackAnimeData.start_date);
  }, [anime]);

  const { data, setMutate, error, loading } = useEditAnime(
    anime,
    trackAnimeData
  );

  const changeStatus = (e: any) => {
    setTrackAnimeData((p) => ({
      ...p,
      status: e.target.value,
    }));
  };

  const changeEpisodes = (sign: string) => () => {
    if (sign == "+") {
      if (typeof trackAnimeData.episodes_watched == "string") {
        let episodes = parseInt(trackAnimeData.episodes_watched);
        setTrackAnimeData((p) => ({
          ...p,
          episodes_watched: episodes + 1,
        }));
      } else {
        setTrackAnimeData((p) => ({
          ...p,
          episodes_watched: p.episodes_watched + 1,
        }));
      }
    } else {
      if (typeof trackAnimeData.episodes_watched == "string") {
        let episodes = parseInt(trackAnimeData.episodes_watched);
        setTrackAnimeData((p) => ({
          ...p,
          episodes_watched: Math.max(episodes - 1, 0),
        }));
      } else {
        setTrackAnimeData((p) => ({
          ...p,
          episodes_watched: Math.max(p.episodes_watched - 1, 0),
        }));
      }
    }
  };

  const changeStartDate = (e: any) => {
    setTrackAnimeData((p) => ({
      ...p,
      start_date: e.target.value,
    }));
  };
  const changeEndDate = (e: any) => {
    setTrackAnimeData((p) => ({
      ...p,
      end_date: e.target.value,
    }));
  };

  const changeReview = (e: any) => {
    setTrackAnimeData((p) => ({
      ...p,
      review: e.target.value,
    }));
  };

  const saveAnimeFn = () => {
    console.log(trackAnimeData);
    setMutate(true);
    //requestToAdd(animeData, trackAnimeData);
  };

  React.useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        modalRef.current &&
        !(modalRef.current as any).contains(event.target)
      ) {
        if (showEditModal == true) setShowEditModal(false); // closing the modal
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalRef]);

  /* 
  React.useEffect(() => {
    console.log("edit anime", trackAnimeData);
  }, [trackAnimeData]);
*/
  return (
    <S.EditContainer ref={modalRef}>
      <S.EditModalTitle>
        Edit Anime: <span>{anime.anime_title}</span>
      </S.EditModalTitle>
      <S.InputOptions>
        <label>Status:</label>
        <S.InputDiv>
          <select value={trackAnimeData.status} onChange={changeStatus}>
            <option value="watching">watching</option>
            <option value="completed">completed</option>
            <option value="on-hold">on-hold</option>
            <option value="considering">considering</option>
          </select>
        </S.InputDiv>

        <label>Episodes:</label>
        <S.InputDiv>
          <input
            type="text"
            readOnly
            value={trackAnimeData.episodes_watched}
          ></input>
          <S.Increment onClick={changeEpisodes("+")}>
            <AddIcon color="black" />
          </S.Increment>
          <S.Increment onClick={changeEpisodes("-")}>
            <MinusIcon color="black" />
          </S.Increment>
        </S.InputDiv>

        <label>Rating:</label>
        <Rating
          trackAnimeData={trackAnimeData}
          setTrackAnimeData={setTrackAnimeData}
        />

        {/*
         
         
         the date section of the edit          
          
          */}
        <S.DateDiv>
          <label>Start Date:</label>
          {trackAnimeData.start_date != null ? (
            <p>{trackAnimeData.start_date}</p>
          ) : (
            <p>NA</p>
          )}
          <label>Finish Date:</label>
          {trackAnimeData.end_date != null ? (
            <p>{trackAnimeData.end_date}</p>
          ) : (
            <p>NA</p>
          )}
        </S.DateDiv>

        {/*
         
         
         the review section of the edit          
          
          */}
        <label>Review:</label>
        <textarea
          defaultValue={trackAnimeData.review}
          onChange={changeReview}
        ></textarea>
      </S.InputOptions>

      {/*
         
         
         the save button and cancel button  section of the edit          
            and potentially the loading spinner

          */}

      <S.SaveArea>
        <S.SaveButton onClick={saveAnimeFn}>Save</S.SaveButton>
        <S.CancelButton onClick={() => setShowEditModal(false)}>
          Cancel
        </S.CancelButton>

        {loading && <Spinner fontSize={10} />}

        {data && (
          <S.Alert>
            <S.SaveIcon />
            <p>Anime edited successfully</p>
          </S.Alert>
        )}
        {error && (
          <S.Alert type="error">
            <S.ErrorIcon />{" "}
            <p>There was an error, try again or refresh the page</p>
          </S.Alert>
        )}
      </S.SaveArea>
    </S.EditContainer>
  );
};

export default EditAnime;
