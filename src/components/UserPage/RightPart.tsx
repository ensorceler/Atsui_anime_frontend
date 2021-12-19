import router from "next/router";
import { destroyCookie } from "nookies";
import React from "react";
import * as S from "./RightPart.Styles";

const PanelCard = (props: any) => {
  console.log(props);

  const changeOption = (option: string) => () => {
    props.setOptionState(option);
  };
  const logoutUser = () => {
    destroyCookie(undefined, "access-token");
    destroyCookie(undefined, "userId");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <React.Fragment>
      <S.UserPanel>
        <S.IconBox>
          <S.PanelIcon />
          <p>User Panel</p>
        </S.IconBox>
        <S.IconBox onClick={logoutUser}>
          <S.LogoutIcon />
          <p> Log out</p>
        </S.IconBox>
        <S.IconBox onClick={changeOption("account")}>
          <S.AccountIcon /> <p>Account</p>
        </S.IconBox>

        <S.IconBox onClick={changeOption("account")}>
          <S.SearchIcon />
          <p>Search</p>
        </S.IconBox>
        <S.IconBox onClick={changeOption("account")}>
          <S.SettingsIcon />
          <p>Settings</p>
        </S.IconBox>
      </S.UserPanel>
      <S.Divider />
    </React.Fragment>
  );
};

const DevMode = (props: any) => {
  const gotoPanel = () => {
    props.setOptionState("panel");
  };
  return (
    <S.DevModeCard>
      We are working on the features currently , please be patient
      <p onClick={gotoPanel}>go back</p>
    </S.DevModeCard>
  );
};

const RightPart = () => {
  const [username, setUsername] = React.useState<string>("loading");

  const [optionState, setOptionState] = React.useState<string>("panel");

  React.useEffect(() => {
    let x = localStorage.getItem("user_name")!;
    if (x != null) setUsername(x);
  }, []);

  return (
    <div>
      <S.RightCard>
        <h1>{username}</h1>
        {optionState == "panel" ? (
          <PanelCard
            optionState={optionState}
            setOptionState={setOptionState}
          />
        ) : (
          <DevMode setOptionState={setOptionState} />
        )}
      </S.RightCard>

      <S.RightCard>
        <h1>Info</h1>
        <S.Divider />
        <S.InfoContent>
          <p>
            Add Anime to watchlist to start tracking.
            <br />
            Autotracking only involves tracked anime.
            <br />
            <br />
            <S.StatusSpan status="watching">#watching</S.StatusSpan>
            {"=>"} watching the anime currently
            <br />
            <S.StatusSpan status="completed">#completed</S.StatusSpan>
            {"=>"}finished the anime
            <br />
            <S.StatusSpan status="on-hold">#on-hold</S.StatusSpan>
            {"=>"}holding off watching that anime with the intention of
            finishing it
            <br />
            <S.StatusSpan status="considering">#considering</S.StatusSpan>
            {"=>"}considering to watch
            <br />
          </p>
        </S.InfoContent>
      </S.RightCard>
    </div>
  );
};

export default RightPart;
