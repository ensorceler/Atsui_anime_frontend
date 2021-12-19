import React from "react";
import logo from "../../public/white_revised.png";
import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "../styles/Auth.Styles";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import { QueryClient, QueryClientProvider } from "react-query";
const queryclient = new QueryClient();

// authentication page
const Authentication = () => {
  const [authType, setAuthType] = React.useState<string>("login");
  const router = useRouter();
  const changeAuthType = (s: string) => () => {
    setAuthType(s);
  };
  return (
    <QueryClientProvider client={queryclient}>
      <S.Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Image
            src={logo}
            height={50}
            width={110}
            onClick={() => router.push("/")}
          />
          <S.AuthCard>
            <S.CardTitleDiv>
              <S.CardTitle
                active={authType == "login" ? true : false}
                onClick={changeAuthType("login")}
              >
                Login
              </S.CardTitle>
              <S.CardTitle
                active={authType == "signup" ? true : false}
                onClick={changeAuthType("signup")}
              >
                Signup
              </S.CardTitle>
            </S.CardTitleDiv>
            <S.Divider />

            {authType == "login" ? <Login /> : <Signup />}

            <div style={{ marginBottom: "20px" }}></div>
          </S.AuthCard>
        </div>
      </S.Container>
    </QueryClientProvider>
  );
};

export default Authentication;
