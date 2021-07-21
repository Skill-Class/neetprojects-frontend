import React from "react";
import "../components/css/HomeLeft.css";

function HomeLeft(props) {
  return (
    <div className="homeLeft">
      <h4> {props.title}</h4>
      <p> {props.desc}</p>
      <p> {props.time}</p>
    </div>
  );
}

export default HomeLeft;
