import axios from "axios";
import { parseCookies } from "nookies";
import React from "react";
import useAddAnime from "../../hooks/useAddAnime";
import { AddIcon, MinusIcon, Spinner } from "../../styles/Icons";
import { animeProps } from "../SingleAnime/Page";
import * as S from "./ModalStyle";

interface Props {
  showModal: boolean;
  setShowModal: Function;
  isLoggedIn: boolean;
  animeData: animeProps;
}
interface trackAnimeDataProp {
  status: string;
  episodes_watched: number;
  rating: number;
  start_date: string | null;
  end_date: string | null;
  review: string;
}

const Rating = ({ setTrackAnimeData }: any) => {
  const changeRating = (e: any) => {
    console.log(e);
    setTrackAnimeData((p: any) => ({
      ...p,
      rating: e.target.value,
    }));
  };

  return (
    <S.InputDiv>
      <select onChange={changeRating}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </S.InputDiv>
  );
};
const LoggedWarning = () => {
  return (
    <S.Warningdiv>
      <p>
        {" "}
        Login or sign up to track your anime <span>More Info</span>
      </p>
    </S.Warningdiv>
  );
};

const AddAnime = ({
  showModal,
  setShowModal,
  isLoggedIn,
  animeData,
}: Props) => {
  const modalRef = React.useRef(null);

  const [trackAnimeData, setTrackAnimeData] = React.useState({
    status: "watching",
    episodes_watched: 0,
    rating: 0,
    start_date: null,
    end_date: null,
    review: "",
  });

  const { data, error, setMutate, loading } = useAddAnime(
    animeData,
    trackAnimeData
  );
  const changeStatus = (e: any) => {
    console.log(e);
    setTrackAnimeData((p) => ({
      ...p,
      status: e.target.value,
    }));
  };

  const changeEpisodes = (sign: string) => () => {
    if (sign == "+") {
      setTrackAnimeData((p) => ({
        ...p,
        episodes_watched: p.episodes_watched + 1,
      }));
    } else {
      setTrackAnimeData((p) => ({
        ...p,
        episodes_watched: Math.max(p.episodes_watched - 1, 0),
      }));
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

  // this  is where we send the when click event is registered
  const saveAnimeFn = () => {
    //console.log(trackAnimeData);
    setMutate(true);
    //requestToAdd(animeData, trackAnimeData);
  };

  React.useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        modalRef.current &&
        !(modalRef.current as any).contains(event.target)
      ) {
        if (showModal == true) setShowModal(false); // closing the modal
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalRef]);
  return (
    <S.Container ref={modalRef}>
      <S.Title>List Editor:</S.Title>
      {!isLoggedIn && <LoggedWarning />}
      <S.InputOptions>
        <label>Status:</label>
        <S.InputDiv>
          <select defaultValue="watching" onChange={changeStatus}>
            <option value="watching">watching</option>
            <option value="completed">completed</option>
            <option value="on-hold">on-hold</option>
            <option value="considering">considering</option>
          </select>
        </S.InputDiv>

        <label>Episodes:</label>
        <S.InputDiv>
          <input type="text" value={trackAnimeData.episodes_watched}></input>
          <S.Increment onClick={changeEpisodes("+")}>
            <AddIcon color="black" />
          </S.Increment>
          <S.Increment onClick={changeEpisodes("-")}>
            <MinusIcon color="black" />
          </S.Increment>
        </S.InputDiv>

        <label>Rating:</label>
        <Rating setTrackAnimeData={setTrackAnimeData} />
        <S.InputDiv>
          <label>Start Date:</label>
          <input type="date" onChange={changeStartDate} />
          <label>Finish Date:</label>
          <input type="date" onChange={changeEndDate} />
        </S.InputDiv>

        {/*
          this is the review  area for anime 
      */}
        <label>Review:</label>
        <textarea disabled={!isLoggedIn} onChange={changeReview}></textarea>
      </S.InputOptions>

      <S.SaveArea>
        <S.SaveButton disabled={!isLoggedIn} onClick={saveAnimeFn}>
          Save
        </S.SaveButton>
        <S.CancelButton
          onClick={() => {
            setShowModal(false);
          }}
        >
          Cancel
        </S.CancelButton>
        {loading && <Spinner fontSize={10} />}

        {data && (
          <S.Alert>
            <S.SaveIcon />
            <p>Anime added successfully</p>
          </S.Alert>
        )}
        {error && (
          <S.Alert type="error">
            <S.ErrorIcon />{" "}
            <p>
              There was an error processing your request, refresh and try again
            </p>
          </S.Alert>
        )}
      </S.SaveArea>
    </S.Container>
  );
};

export default AddAnime;
