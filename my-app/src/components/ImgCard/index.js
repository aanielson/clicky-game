import React from "react";
import "./style.css";

function ImgCard(props) {
  return (
    <div className="card" >
      <div className="img-container" onClick={() => props.click(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default ImgCard;