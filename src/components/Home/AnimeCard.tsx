import React from "react";
import styled, { keyframes } from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/router";

interface Props {
  animeData: any;
}

const Card = styled.div`
  min-height: 275px;
  max-height: 287px;
  position: relative;
  background-color: #202020;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  overflow: hidden;
  text-overflow: ellipsis;
  & :hover {
    background-color: #303030;
    transform: scale(0.97, 0.97);
  }
`;
// normal programming symbols

const CardImage = styled.img`
  width: 100%;
  height: 217px;
  opacity: 0.93;
`;
const CardTitle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline;
  height: 30px;
  margin: 5px;
  font-size: 13px;
  color: #95b6d0;
  font-weight: 400;
`;

const StyledIcon = styled(AiFillStar)`
  color: gold;
`;

const Rating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
`;

const AnimeCard = ({ animeData }: Props) => {
  const router = useRouter();
  const navigateToAnimePage = (id: string) => {
    router.push(`/anime/${id}`);
  };
  return (
    <Card onClick={() => navigateToAnimePage(`${animeData.mal_id}`)}>
      <CardImage src={animeData.image_url} />
      <CardTitle>{animeData.title}</CardTitle>
      <Rating>
        <StyledIcon /> {animeData.score}
      </Rating>
    </Card>
  );
};

export default AnimeCard;
