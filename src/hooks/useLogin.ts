import React from "react";
import { parseCookies, setCookie } from "nookies";
import axios from "axios";
import { useRouter } from "next/router";

const corsHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
};

interface LoginProps {
  username: string;
  password: string;
}

const useLogin = () => {
  const router = useRouter();
  const [responseData, setResponseData] = React.useState<Object | null>(null);
  const [requestData, MakeRequest] = React.useState<LoginProps | any>(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  /*
    const data = await LoginRequest({
      username: authCredentials.username,
      password: authCredentials.password,
    });
*/

  const configFn = (data: any) => {
    setSuccess(true);
    localStorage.setItem("user_name", data.user_name);
    localStorage.setItem("isAuth", "true");

    setCookie(null, "access-token", data.access_token, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    setCookie(null, "userId", data.user_id, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const LoginRequest = async (data: LoginProps) => {
    setError(false);
    setLoading(true);
    try {
      const res = await axios.post(
        "https://atsui-api.herokuapp.com/login",
        {
          username: data.username,
          password: data.password,
        },
        {
          headers: corsHeader,
        }
      );
      setLoading(false);
      if (res.data.auth == true) configFn(res.data);
      else setError(true);
    } catch (err: any) {
      setError(true);
      console.log(err);
    }
  };
  React.useEffect(() => {
    if (
      requestData != null &&
      "username" in requestData &&
      "password" in requestData
    ) {
      LoginRequest(requestData);
    }
  }, [requestData]);

  return {
    responseData,
    MakeRequest,
    error,
    loading,
    success,
  };
};

export default useLogin;
