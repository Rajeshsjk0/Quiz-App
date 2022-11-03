import React from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";

import { signin } from "../../store/actions/userActions";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleSuccess = async (res) => {
    const token = res?.credential;
    var decoded = jwt_decode(token);
    const result = decoded;
    result.token = token;
    console.log(result);
    try {
      dispatch(signin(result));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <GoogleLogin
        onSuccess={googleSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default LoginPage;
