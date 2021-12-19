import React from "react";
import * as S from "../../styles/Auth.Styles";
import { useRouter } from "next/router";
import useLogin from "../../hooks/useLogin";
import { Spinner } from "../../styles/Icons";

interface LoginProps {
  username: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [authCredentials, setAuthCredentials] = React.useState<LoginProps>({
    username: "",
    password: "",
  });
  const { responseData, MakeRequest, success, error, loading } = useLogin();
  let regexRef = React.useRef(false);

  const [regexError, setRegexError] = React.useState({
    usernameError: null,
    passwordError: null,
  });

  const regexCheck = async () => {
    let reguser = new RegExp("\\w{6,}");
    let regpass = new RegExp(".{6,}");

    let okUser = reguser.test(authCredentials.username);
    let okPass = regpass.test(authCredentials.password);

    if (!okUser) {
      regexRef.current = true;
      setRegexError((p: any) => ({
        ...p,
        usernameError: "Username invalid",
      }));
    }
    if (!okPass) {
      regexRef.current = true;
      setRegexError((p: any) => ({
        ...p,
        passwordError: "Password must be 6 or more characters long",
      }));
    }
    if (okUser && okPass) {
      regexRef.current = false;
      setRegexError({
        passwordError: null,
        usernameError: null,
      });
    }
  };

  const changeUsername = (e: any) => {
    setAuthCredentials((p) => ({
      ...p,
      username: e.target.value,
    }));
  };
  const changePassword = (e: any) => {
    setAuthCredentials((p) => ({
      ...p,
      password: e.target.value,
    }));
  };

  const LoginButton = async () => {
    await regexCheck();
    if (regexRef.current === false) MakeRequest(authCredentials);
  };

  return (
    <React.Fragment>
      <S.InputSection login={true}>
        <label>Username</label>
        <S.Inputbox placeholder="Username" onChange={changeUsername} />
        {regexError.usernameError != null && (
          <S.ErrorDiv>{regexError.usernameError}</S.ErrorDiv>
        )}
        <label>Password</label>
        <S.Inputbox
          type="password"
          placeholder="Password"
          onChange={changePassword}
        />

        {regexError.passwordError != null && (
          <S.ErrorDiv>{regexError.passwordError}</S.ErrorDiv>
        )}
      </S.InputSection>
      <S.Loginbutton onClick={LoginButton}>Login</S.Loginbutton>

      {loading && <Spinner fontSize={18} />}
      {error && <S.ErrorDiv>Wrong username/password</S.ErrorDiv>}
      {success && (
        <S.SuccessDiv>
          <p> Login Successful, Redirecting you to home page </p>
        </S.SuccessDiv>
      )}
    </React.Fragment>
  );
};

export default Login;
