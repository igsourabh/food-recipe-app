import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { addFood } from "./redux/features/foodSlice";
import { useSelector } from "react-redux";
import { allfood } from "./redux/features/foodSlice";
const Carditem = (props) => {
  const dispatch = useDispatch();
  const fooddata = useSelector(allfood);
  const [state, setstate] = useState(
    props.location.state ? props.location.state : ""
  );
  const [results, setResults] = React.useState([]);

  const handelChange1 = (e) => {
    setstate(e.target.value);
    console.log("handel has been changing");
  };

  const handelSubmit1 = async (element) => {
    element.preventDefault();
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${state}&app_id=780ef115&app_key=886f8ff08f4765cb080898dfdaa81672`
      );
      if (response) {
        dispatch(addFood(response.data.hits));
        setResults(fooddata);
        console.log("store1", fooddata);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getPosts() {
      if (props.location.state) {
        try {
          const response = await axios.get(
            `https://api.edamam.com/search?q=${state}&app_id=780ef115&app_key=886f8ff08f4765cb080898dfdaa81672`
          );
          if (response) {
            dispatch(addFood(response.data.hits));
            setResults(fooddata);
            console.log("storehome", fooddata);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getPosts();
  }, []);

  return (
    <>
      <div className="container">
        search page
        <form class="d-flex" onSubmit={handelSubmit1}>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handelChange1}
            value={state}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Google Search"
          />
        </form>
        <div className="row">
          {results.map((element, index) => {
            return (
              <div className="col-md-3 my-2" key={element.recipe.uri}>
                <Card
                  source={element.recipe.source}
                  image={element.recipe.image}
                  healthLabels={element.recipe.healthLabels}
                  title={element.recipe.label}
                  dietLabels={element.recipe.dietLabels}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carditem;
