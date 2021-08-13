import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./_login.scss";
import { login } from "../../redux/actions/auth.action";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2>Youtube Clone</h2>
        <i className="fab fa-youtube login__logo "></i>

        {/* <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png?__cf_chl_captcha_tk__=pmd_5ba5c4d7c41fb5e179b38d2500623d60ebadc33b-1628829691-0-gqNtZGzNAuKjcnBszQOO"
          alt=""
        /> */}
        <button onClick={handleLogin}>Login With google</button>
        <p>This Project is made using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
