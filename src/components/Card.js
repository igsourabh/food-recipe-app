import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="card my-2" >
        <span
          className="badge rounded-pill bg-danger"
          style={{
            display: "flex",
            justifycontent: "flex-start",
            position: "absolute",
            right: 0,
          }}
        >
          {props.source}
        </span>
        <img
          src={
            props.image
              ? props.image
              : "https://bitsofco.de/content/images/2018/12/broken-1.png"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span class="badge bg-success">{props.dietLabels}</span>
          <h5
            className="card-title my-2"
            style={{
            
              textTransform: "capitalize",
            }}
          >
            {props.title}
          </h5>

          <Link
            rel="noreferrer"
            to={`/foodDetails/${props.id}`}
            className="btn btn-sm btn-dark"
          >
            Read mode
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;