import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <span
          class="badge rounded-pill bg-danger"
          style={{ position: "absolute", zIndex: "1" }}
        >
          {props.recipe}
        </span>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
        <Link to="/">
            <h3 className="card-text">{props.title}</h3>
            
        </Link>
          </div>
      </div>
    </>
  );
};

export default Card;
