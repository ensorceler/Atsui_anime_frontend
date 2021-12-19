import styled, { keyframes } from "styled-components";
import { IoMdRefresh } from "react-icons/io";
import {
  AiFillStar,
  AiFillMinusCircle,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { MdAddCircle } from "react-icons/md";
import { ImSpinner, ImSpinner2 } from "react-icons/im";

export const RefreshIcon = styled(IoMdRefresh)<{ color?: string }>`
  color: ${(props) => props.color};
  transform: translate(0, 3px);
  cursor: pointer;
`;

export const StarIcon = styled(AiFillStar)`
  color: #a89042;
  transform: translate(0, 2px);
`;

export const DownIcon = styled(AiOutlineDown)`
  cursor: pointer;
`;

export const UpIcon = styled(AiOutlineUp)`
  cursor: pointer;
`;
export const BookmarkIcon = styled(BsFillBookmarkHeartFill)`
  cursor: pointer;
`;
export const AddIcon = styled(MdAddCircle)`
  cursor: pointer;
`;

export const MinusIcon = styled(AiFillMinusCircle)`
  cursor: pointer;
`;

const LoadingSpinnerAnimation = keyframes`
 50%{
    transform:rotate(90deg); 
 } 
  100%{
    transform:rotate(360deg);
  }
`;

export const Spinner = styled(ImSpinner2)`
  color: #a7ccea;
  animation: ${LoadingSpinnerAnimation} 1s infinite ease-in;
`;
