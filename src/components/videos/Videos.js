import React from "react";
import "./_videos.scss";
import { AiFillEye } from "react-icons/ai";

const Videos = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/t1nFAMws5FI/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLBsZglc17U79h7AcFovF5fYGUx7Rg"
          alt=""
        />

        <span className="video__top__duration"></span>
      </div>
      <div className="video__title">Create an App by Tony</div>
      <div className="video__details">
        <span>
          <AiFillEye />5 Min
        </span>{" "}
        <span> 5 Day Ago</span>
      </div>
      <div className="video__channel">
        <img src="" alt="img" />
        <p>Kuch bhi dal do</p>
      </div>
    </div>
  );
};

export default Videos;
