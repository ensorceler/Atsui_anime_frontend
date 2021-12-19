import React from "react";
import * as Styles from "../../styles/Nav.Styles";
import logo from "../../../public/white_revised.png";
import { Colors, device } from "../../styles/globalStyles";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

const randomAnime = [
  1, 34280, 34636, 34104, 37982, 40750, 30831, 31043, 11617, 12189, 11757,
  20853, 22199, 22535, 22147, 25157, 23673, 24455, 28121, 277663, 28677, 23847,
  37210,
];

const Nav = ({ animePage }: { animePage?: boolean }) => {
  const router = useRouter();
  // if the navbar is placed in the anime page
  const isTablet = useMediaQuery({ query: `${device.tablet}` });

  const goBack = () => {
    router.back();
  };
  const goToHome = () => {
    router.push("/");
  };

  const randomButton = () => {
    let rnd = Math.floor(Math.random() * randomAnime.length);
    router.push(`/anime/${randomAnime[rnd]}`);
  };
  if (animePage) {
    return (
      <Styles.NavContainer
        style={{
          position: "absolute",
          zIndex: "500",
          top: "0px",
          left: "0",
          right: "0",
          margin: "auto",
          width: "1000px",
          fontFamily: "'Lexend Deca', sans-serif",
        }}
      >
        <Styles.BackIcon color={Colors.blueishWhite} onClick={goBack} />
        <Styles.HomeButton color={Colors.blueishWhite} onClick={goToHome} />
        <Styles.LogoImage
          src={logo}
          height={60}
          width={135}
          onClick={goToHome}
        />
        <div
          style={{
            alignSelf: "flex-end",
            position: "relative",
          }}
        >
          <Styles.NavSearch placeholder="Search" />
          <Styles.SearchIcon color={Colors.white1} />
        </div>
        <Styles.NavLink
          color={Colors.white1}
          hoverColor="white"
          onClick={randomButton}
        >
          <Styles.RandomButton />
          Random
        </Styles.NavLink>
        <Styles.NavLink color={Colors.white1} hoverColor="white">
          Schedule
        </Styles.NavLink>
      </Styles.NavContainer>
    );
  } else if (isTablet) {
    return (
      <Styles.NavContainer>
        <div>
          <Styles.BackIcon />
          <Styles.HomeButton onClick={goToHome} />
          <Styles.LogoImage
            src={logo}
            height={60}
            width={135}
            onClick={goToHome}
          />
        </div>
        <div
          style={{
            position: "absolute",
            right: "0px",
            top: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <Styles.TabletSearch />
          <Styles.TabletMenu onClick={() => alert("hamburger-menu")} />
        </div>
      </Styles.NavContainer>
    );
  }

  // default Nav
  else
    return (
      <Styles.NavContainer>
        <Styles.BackIcon onClick={goBack} />
        <Styles.HomeButton onClick={goToHome} />
        <Styles.LogoImage
          src={logo}
          height={60}
          width={135}
          onClick={goToHome}
        />
        <div
          style={{
            alignSelf: "flex-end",
            position: "relative",
          }}
        >
          <Styles.NavSearch placeholder="Search" />
          <Styles.SearchIcon />
        </div>
        <Styles.NavLink onClick={randomButton}>
          <Styles.RandomButton />
          Random
        </Styles.NavLink>
        <Styles.NavLink>Schedule</Styles.NavLink>
      </Styles.NavContainer>
    );
};

export default Nav;
