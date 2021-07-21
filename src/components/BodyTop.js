import React from "react";
import { Button } from "@material-ui/core";
import "../components/css/BodyTop.css";

function BodyTop({ heading, desc, button }) {
  return (
    <div className="body__top">
      <center>
        <h2 className="h_one">{heading}</h2>
        <p>{desc}</p>
        <div className="hacktoberFest__alert">
          <Button
            variant="outlined"
            color="primary"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/Skill-Class";
            }}
          >
            {button}
          </Button>
        </div>
      </center>
    </div>
  );
}

export default BodyTop;
