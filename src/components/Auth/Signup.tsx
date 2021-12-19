import axios from "axios";
import React from "react";
import * as S from "../../styles/Auth.Styles";
import { Spinner } from "../../styles/Icons";
interface authCredentialsProps {
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [state, dispatch] = React.useState({
    loading: false,
    error: false,
    success: false,
  });

  const [authCredentials, setAuthCredentials] =
    React.useState<authCredentialsProps>({
      username: "",
      email: "",
      password: "",
    });

  let regexRef = React.useRef(false);

  const [regexError, setRegexError] = React.useState({
    usernameError: null,
    emailError: null,
    passwordError: null,
  });

  const regexCheck = async () => {
    setRegexError({
      usernameError: null,
      emailError: null,
      passwordError: null,
    });
    let regUser = /\w{6,}/;
    let regPass = /.{6,}/;
    let regEmail = /^[a-zA-Z0-9-]+@\w+\.\w+(\.\w+)?$/;

    let okUser = regUser.test(authCredentials.username);
    let okEmail = regEmail.test(authCredentials.email);
    let okPass = regPass.test(authCredentials.password);

    if (!okUser) {
      regexRef.current = true;
      setRegexError((p: any) => ({
        ...p,
        usernameError:
          "Username must be a between 6-20 char long and can contain underscore(_) and must not contain any special character(*,.,^)etc ",
      }));
    }
    if (!okEmail) {
      regexRef.current = true;
      setRegexError((p: any) => ({
        ...p,
        emailError: "email not a valid type",
      }));
    }
    if (!okPass) {
      regexRef.current = true;
      setRegexError((p: any) => ({
        ...p,
        passwordError: "password must be atleast 6 characters long",
      }));
    }
    if (okEmail && okUser && okPass) regexRef.current = false;
  };

  const changeUsername = (e: any) => {
    setAuthCredentials((p) => ({
      ...p,
      username: e.target.value,
    }));
  };
  const changeEmail = (e: any) => {
    setAuthCredentials((p) => ({
      ...p,
      email: e.target.value,
    }));
  };
  const changePassword = (e: any) => {
    setAuthCredentials((p) => ({
      ...p,
      password: e.target.value,
    }));
  };

  const makeRequest = async () => {
    dispatch((p) => ({
      ...p,
      loading: true,
      error: false,
    }));
    try {
      const res = await axios.post("https://atsui-api.herokuapp.com/signup", {
        username: authCredentials.username,
        email: authCredentials.email,
        password: authCredentials.password,
        time_of_joining: Date.now().toString().substring(0, 10),
      });
      console.log(res);
      dispatch({
        success: true,
        loading: false,
        error: false,
      });
    } catch (err) {
      console.log(err);

      dispatch({
        success: false,
        loading: false,
        error: true,
      });
    }
  };

  const signupButton = async () => {
    await regexCheck();
    if (regexRef.current == false) makeRequest();
  };

  return (
    <React.Fragment>
      <S.InputSection>
        <label>Username</label>
        <S.Inputbox placeholder="Username" onChange={changeUsername} />
        {regexError.usernameError && (
          <S.ErrorDiv>{regexError.usernameError}</S.ErrorDiv>
        )}
        <label>Email</label>
        <S.Inputbox placeholder="Email" onChange={changeEmail} />

        {regexError.emailError && (
          <S.ErrorDiv>{regexError.emailError}</S.ErrorDiv>
        )}
        <label>Password</label>
        <S.Inputbox placeholder="Password" onChange={changePassword} />

        {regexError.passwordError && (
          <S.ErrorDiv>{regexError.passwordError}</S.ErrorDiv>
        )}
      </S.InputSection>
      <S.Loginbutton onClick={signupButton}> Signup</S.Loginbutton>

      {state.loading && <Spinner fontSize={18} />}
      {state.error && <S.ErrorDiv>Username or Email already exists</S.ErrorDiv>}
      {state.success && (
        <S.SuccessDiv>
          <p>Successful Registered ,Now Login with your credentials </p>
        </S.SuccessDiv>
      )}
    </React.Fragment>
  );
};

export default Signup;
