import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"
const Card = (props) => {
  return (
    <>
   

<div className="container">
<div className="row">

  <Link className="btn " draggable="false" to={`/foodDetails/${props.id}`}>
	

		<div >


          
    <div className="profile-card-4 text-center" ><img src={props.image} alt={props.label} className="img img-responsive" 
          draggable="false"
    
    />
        <div className="profile-content">
            <div className="profile-name">{props.source}
                <p>{props.title}r</p>
            </div>
            <div className="profile-description text-capitalize fs-4 ">{props.title}</div>
            <div className="row">
                <div className="col-xs-4">
                    <div className="profile-overview">
                    <p className="fs-6 text-capitalize">cusinetype</p>
                        <h5 className="text-capitalize">{props.cusinetype}</h5>
                        </div>
                </div>
            
             
            </div>
        </div>
    </div>
</div>

  </Link>
          </div>
</div>
    </>
  );
};

export default Card;