import React from "react";
import * as Styles from "../../styles/FeatureCard.styles";
import { BsFillTagFill } from "react-icons/bs";
import taktop from "../../../public/takt_op_destiny.jpg";
const cardData = [
  {
    title: "Takt Op. Destiny",
    image_url: "https://cdn.myanimelist.net/images/anime/1559/116101l.jpg",
    description:
      "The year is 2047, a world where music has been forgotten. In America which has fallen to ruin thanks to the D2, Takt, a Conductor, is partnered with a Musicart named Unmei. Takt yearns for music to be returned to the world, and Unmei wishes to destroy the D2. Their aim is to travel to New York.",
    genres: "Action,Fantasy, Music",
  },
  {
    title: "Platinum End",
    image_url: "https://cdn.myanimelist.net/images/anime/1524/110802l.jpg",
    description:
      "Kakehashi Mirai lost his parents in an accident and lived in misery with the relatives who took him in. Having lost hope in everything, he jumped off the roof of a building on the day of his middle school graduation. But then he met an angel..",
    genres: "Psychological,Shounen,Supernatural,Thriller",
  },
  {
    title: "Komi-san wa, Comyushou desu.",
    image_url: "https://cachecow.eu/min/mal/1899/117237.jpg",
    description:
      "Timid Tadano is a total wallflower, when he finds himself alone in a classroom on the first day of high school with the legendary Komi. He quickly realizes she isn’t aloof—she’s just super awkward. Now he’s made it his mission to help her on her quest to make 100 friends!",
    genres: "Comedy, Slice of Life, School, Shounen",
  },
  {
    title: "Kimetsu no Yaiba: Yuukaku-hen",
    image_url: "https://cdn.myanimelist.net/images/anime/1908/120036.jpg",
    description:
      "Tanjirou, Zenitsu, and Inosuke, aided by the Sound Hashira Tengen Uzui, travel to Yoshiwara red light district to hunt down a demon that has been terrorizing the town. In order to investigate, Tanjiro and the others disguise themselves as women to sneak in...",
    genres: "Supernatural, Demons, Historical, Shounen",
  },
];

type CardProps = typeof cardData[0];

const FeatureCard = () => {
  const [showData, setShowData] = React.useState<CardProps>(cardData[0]);
  const [idx, setIdx] = React.useState<number>(0);

  const forward = () => {
    setIdx((idx) => (idx + 1) % 4);
  };
  const backward = () => {
    setIdx((idx) => (idx - 1 + 4) % 4);
  };
  React.useEffect(() => {
    setShowData(cardData[idx]);
  }, [idx]);

  React.useEffect(() => {
    let timeId = setInterval(forward, 10000);
    return () => {
      console.log("clean up from featurecard");
      clearInterval(timeId);
    };
  }, []);

  return (
    <Styles.Container backgroundImage={showData.image_url}>
      <Styles.Card>
        <img src={showData.image_url} height="160px" />
        <Styles.CardContent>
          <Styles.CardTitle>{showData.title}</Styles.CardTitle>

          <Styles.CardDetails>
            <p>{showData.description}</p>
          </Styles.CardDetails>

          <Styles.CardGenres>
            <p>
              <BsFillTagFill style={{ transform: "translate(-2px,2px)" }} />
              {showData.genres}
            </p>
          </Styles.CardGenres>
        </Styles.CardContent>
        <div style={{ position: "absolute", top: "120px", right: "35px" }}>
          <Styles.BackIcon onClick={backward} />
          <Styles.ForwardIcon onClick={forward} />
        </div>
      </Styles.Card>
    </Styles.Container>
  );
};

export default FeatureCard;
