import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InfoLeft from "./InfoLeft";
import InfoRight from "./InfoRight";
import useSWR from "swr";
import { animedata } from "../../utility/singleanime";
import Nav from "../Shared/Nav";
import AddAnime from "../Modal/AddAnime";
import { parseCookies } from "nookies";

const Container = styled.div`
  width: 1000px;
  position: absolute;
  top: -115px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -10px;
  display: grid;
  position: relative;
  z-index: 00;
  margin-top: -100px;
  grid-template-columns: 1fr 2fr;
`;
export type animeProps = typeof animedata;
interface PageProps {
  animeData: animeProps;
}

const checkurl = "https://atsui-api.herokuapp.com/checksession";

const fetcher = async (url: string) => {
  const cookies = parseCookies();

  const res = await fetch(url, {
    headers: {
      auth: `${cookies["access-token"]}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
};

const Page = ({ animeData }: PageProps) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [shouldFetch, setShouldFetch] = React.useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const { data, error, isValidating } = useSWR(
    shouldFetch ? checkurl : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: true,
    }
  );

  React.useEffect(() => {
    const cookies = parseCookies();
    if (cookies["access-token"]) {
      setShouldFetch(true);
    }
  }, []);
  React.useEffect(() => {
    if (data != null) {
      console.log("data is fetched", data);

      if (data.auth == true) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    }
  }, [data]);

  return (
    <React.Fragment>
      <Container>
        <InfoLeft {...animeData} />
        <InfoRight
          showModal={showModal}
          setShowModal={setShowModal}
          animeData={animeData}
        />
      </Container>
      {showModal && (
        <AddAnime
          showModal={showModal}
          isLoggedIn={isLoggedIn}
          setShowModal={setShowModal}
          animeData={animeData}
        />
      )}
    </React.Fragment>
  );
};

export default Page;
