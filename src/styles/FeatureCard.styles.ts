import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

/*

  ${(props: { backgroundImage: string }) => {
    if (props.backgroundImage)
      return `
      background:url(${props.backgroundImage}); 
      background-size:cover; 
    background-blend-mode:darken;
      `;
  }}
*/

export const Container = styled.div<{ backgroundImage?: string }>`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 160px;
  overflow: hidden;
  background: url(${(props: any) => props.backgroundImage});
  background-size: cover;
`;
export const Card = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
  margin: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  color: #a7ccea;
  margin-left: 10px;
  font-weight: 400;
`;
export const CardDetails = styled.div`
  height: 80px;
  p {
    margin: 0px;
    margin-bottom: 20px;
    font-size: 13px;
    color: rgba(240, 240, 240, 0.8);
    inline-size: 95%;
    margin-left: 10px;
  }
`;
export const CardGenres = styled.div`
  p {
    margin: 0px;
    margin-bottom: 20px;
    font-size: 13px;
    color: rgba(240, 240, 240, 0.8);
    inline-size: 95%;
    margin-left: 10px;
  }
`;

export const ForwardIcon = styled(IoIosArrowForward)`
  width: 50px;
  font-size: 25px;
  color: #a7ccea;
  cursor: pointer;
`;
export const BackIcon = styled(IoIosArrowBack)`
  width: 50px;
  font-size: 25px;
  color: #a7ccea;
  cursor: pointer;
`;
