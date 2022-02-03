import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import axios from "axios";
import "./Fooddetails.css";
const FoodDetails = () => {
  const [details, setdetails] = useState([]);
  const [progress, setprogress] = useState(10);
  const [ingredients, setingredients] = useState([]);
  const [ingredientLines, setingredientLines] = useState([]);
  const [trueingredients, settrueingredients] = useState(false);

  const { foodid } = useParams();

  const fetchdetails = async () => {
    setprogress(10);
    setprogress(11);
    setprogress(12);
    setprogress(13);
    setprogress(17);
    setprogress(18);
    setprogress(19);
    setprogress(20);
    setprogress(22);
     setprogress(25);
     axios.get(`https://api.edamam.com/api/recipes/v2/${foodid}?app_id=780ef115&app_key=886f8ff08f4765cb080898dfdaa81672&type=public`).then(resp => {
     
    
      setprogress(50)
     
      setdetails(resp.data.recipe);
      setprogress(60)
        setingredients(resp.data.recipe.ingredients);
       setingredientLines(resp.data.recipe.ingredientLines);
       setprogress(80)
       setprogress(85)
       settrueingredients(true);
      setprogress(100)
        
     
      });
  
  
  };

  useEffect(() => {
    fetchdetails();
  }, []);

  return (
    <>
      <LoadingBar height={2} color="#f11946" progress={progress} />

      <article class="mb-4" style={{ margin: "4rem 0px 0px 0px" }}>
        <div class="container px-4 px-lg-5">
          <div className="row">
            <img
              src={trueingredients ? details.image : ""}
              alt=""
              className="mt-2 "
              style={{
                width: "20rem",
                margin: "0px auto",
                borderRadius: "15px",
                boxShadow: "rgb(0 0 0 / 56%) 0px 7px 22px",
                paddingRight: "0px",
                paddingLeft: "0px",
              }}
              draggable="false"
            />
          </div>
          <div class="row gx-4 gx-lg-5 justify-content-center mt-5">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <h1 className="text-center text-uppercase">{details.label}</h1>

              <h2 className="section-heading fs-4 text-center">
                {trueingredients ? "Source: " + details.source : ""}
              </h2>

              <blockquote class="blockquote text-capitalize">
                <div className="row">
                  <span className="badge bg-secondary fs-5 text-center">
                    {details.cuisineType
                      ? "Cuisine Type: " + details.cuisineType
                      : ""}
                  </span>
                </div>
              </blockquote>
              {trueingredients && (
                <h5 className="text-capitalize">Ingredients line</h5>
              )}
              <ul>
                {ingredientLines.map((element, index) => {
                  return <li key={index}>{element}</li>;
                })}
              </ul>
              {trueingredients ? <hr /> : ""}
              {trueingredients && (
                <h5 className="text-capitalize">Ingredients Qty & Weight</h5>
              )}
              <ul>
                {ingredients.map((e, index) => {
                  return (
                    <li key={index}>
                      {e.text}

                      {" Qty " + e.quantity}
                      {" Weight " + e.weight}
                    </li>
                  );
                })}
              </ul>

              <div className="row">
                <span className="badge bg-success fs-5 text-center">
                  {details.calories
                    ? "Total Calories: " + details.calories
                    : ""}
                </span>
              </div>

              <p></p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default FoodDetails;
