import axios from "axios";
import { parseCookies } from "nookies";
import React from "react";
import { animeProps } from "../components/SingleAnime/Page";

interface trackAnimeDataProp {
  status: string;
  episodes_watched: number;
  rating: number;
  start_date: string | null;
  end_date: string | null;
  review: string;
}
const useAddAnime = (
  animeData: animeProps,
  trackAnimeData: trackAnimeDataProp
) => {
  const [data, setData] = React.useState<any>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const [mutate, setMutate] = React.useState<boolean>(false);

  const makeRequestToServer = async () => {
    const cookie = parseCookies();
    const user_id = cookie["userId"];
    const authToken = cookie["access-token"];
    try {
      const res = await axios.post(
        "https://atsui-api.herokuapp.com/addanime",
        {
          user_id: `${user_id}`,
          anime_id: animeData.mal_id,
          image_url: animeData.image_url,
          episodes_watched: trackAnimeData.episodes_watched,
          anime_title: animeData.title,
          status: trackAnimeData.status,
          rating: trackAnimeData.rating,
          review: trackAnimeData.review,
          start_date: trackAnimeData.start_date,
          end_date: trackAnimeData.end_date,
        },
        {
          headers: {
            auth: authToken,
          },
        }
      );
      //console.log(res);
      if (res) {
        setLoading(false);
        setData(true);
      }
    } catch (err: any) {
      setLoading(false);
      setError(true);
    }
  };

  React.useEffect(() => {
    if (mutate == true) {
      setLoading(true);
      //console.log("add clicked");
      makeRequestToServer();
    }
  }, [mutate]);

  return {
    data,
    error,
    loading,
    setMutate,
  };
};

export default useAddAnime;
