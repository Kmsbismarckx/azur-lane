import React from "react";
import "../App.css";
const Error = () => {
  return (
    <div className="error__404">
      <h1 className="error__404_text">
        Not Found
        <br />
        Error 404
      </h1>
      <img
        className="error__404_image"
        src={process.env.PUBLIC_URL + "/media/error.svg"}
        alt=""
      />
    </div>
  );
};

export default Error;
