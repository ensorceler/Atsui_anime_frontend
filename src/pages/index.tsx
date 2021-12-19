import React from "react";
import HomeContent from "../components/Home/HomeContent";
import Head from "next/head";
import { GetStaticProps } from "next";

export default function Home(props: GetStaticProps) {
  let animeData = (props as any).anime!;

  return (
    <div style={{ marginBottom: "20px" }}>
      <Head>
        <title>Atsui Anime</title>

        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <HomeContent animeData={animeData} />
    </div>
  );
}
export const getStaticProps = async () => {
  try {
    const res = await fetch("https://api.jikan.moe/v3/season/2021/fall");
    const data = await res.json();

    if (Object.keys(data).length == 0) {
      return {
        notFound: true,
      };
    } else
      return {
        props: { anime: data.anime },
      };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
