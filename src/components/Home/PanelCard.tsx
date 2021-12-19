import React from "react";
import Link from "next/link";
import axios from "axios";
import { destroyCookie, parseCookies } from "nookies";
import * as S from "../../styles/PanelCard.Styles";
import router from "next/router";

const PanelCard = () => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>("");

  const checkSession = async (authToken: string) => {
    try {
      const res = await axios.get(
        "https://atsui-api.herokuapp.com/checksession",
        {
          headers: {
            auth: `${authToken}`,
          },
        }
      );
      if (res.data.auth == true) {
        setData(res.data);
        setLoggedIn(true);
      }
    } catch (err) {
      setLoggedIn(false);
    }
  };

  React.useEffect(() => {
    const authToken = localStorage.getItem("access-token");
    const cookies = parseCookies();
    checkSession(cookies["access-token"]);
  }, []);

  const userRoute = () => {
    router.push("/user");
  };

  const refreshPage = () => {
    router.reload();
  };

  const Logout = () => {
    destroyCookie(null, "access-token");
    destroyCookie(null, "userId");
    router.reload();
  };
  if (loggedIn == true)
    return (
      <S.Container>
        <S.TitleMessage>
          <p>
            👋 Welcome back
            <br />
            <span>{data.user_name}</span>
          </p>
        </S.TitleMessage>
        <S.GridItems>
          <S.Item onClick={userRoute}>
            <S.PanelIcon />
            <S.ItemLink>User Panel</S.ItemLink>
          </S.Item>
          <S.Item onClick={refreshPage}>
            <S.RefreshIcon />
            <S.ItemLink>Refresh</S.ItemLink>
          </S.Item>
          <S.Item onClick={Logout}>
            <S.LogoutIcon />
            <S.ItemLink>Log out</S.ItemLink>
          </S.Item>
        </S.GridItems>
      </S.Container>
    );
  else {
    return (
      <S.Container2>
        <p> 💀 User is not logged , Login to track your anime</p>
        <Link passHref href="/auth">
          <S.StyledLink>👉 login/signup</S.StyledLink>
        </Link>
      </S.Container2>
    );
  }
};

export default PanelCard;
