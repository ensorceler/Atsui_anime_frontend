import React from "react";
import * as S from "../../styles/Footer.Styles";

const Footer = () => {
  return (
    <S.Container>
      <S.HeadPart></S.HeadPart>
      <S.FooterContent>
        <div>
          <p>
            <S.GithubIcon fontSize={30} />
            Site developed by mel0n aka ensorceler{" "}
          </p>
        </div>
        <span>
          Disclaimer: Site does not store nor own the anime data on it's server
          except for the user data
        </span>
      </S.FooterContent>
    </S.Container>
  );
};

export default Footer;
