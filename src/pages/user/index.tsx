import React from "react";
import LeftPart from "../../components/UserPage/LeftPart";
import RightPart from "../../components/UserPage/RightPart";
import styled from "styled-components";
import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
import axios from "axios";
import { device } from "../../styles/globalStyles";
const Usercontainer = styled.div`
  position: relative;
  width: 1300px;
  min-height: 90vh;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 970px 290px;
  grid-gap: 10px;

  @media ${device.tablet} {
    width: 95vw;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  @media ${device.laptop} {
    display: grid;
    max-width: 1024px;
    grid-template-columns: 740px 270px;
  }
  // this is full screen desktop
  @media ${device.desktop} {
    display: grid;
    width: 1300px;
    grid-template-columns: 1000px 280px;
    grid-column-gap: 5px;
  }
`;
const User = (props: any) => {
  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);

  return (
    <Usercontainer>
      <LeftPart
        animeList={props.listdata}
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
      />
      <RightPart />
    </Usercontainer>
  );
};

export default User;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log("server side cookies", context.req.cookies);
  console.log("server side headers", context.req.headers);

  try {
    const cookie = parseCookies(context);
    console.log("access-token cookie", cookie["access-token"]);
    console.log("user id cookie", cookie["userId"]);
    const res = await axios.post(
      "https://atsui-api.herokuapp.com/getlist",
      {
        user_id: cookie["userId"],
      },
      {
        headers: {
          auth: `${cookie["access-token"]}`,
        },
      }
    );
    console.log("respone when serversideprops ", res.data);
    if (res.data.auth == false) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    return {
      props: {
        listdata: res.data,
      },
    };
  } catch (err: any) {
    return {
      notFound: true,
    };
  }
};
