import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const Carditem = (props) => {
  const [state, setstate] = useState(
    props.location.state ? props.location.state : ""
  );
  const [results, setResults] = React.useState([]);

  const handelChange = (e) => {
    setstate(e.target.value);
    console.log("handel has been changing");
  };

  const handelSubmit1 = (element) => {};

  useEffect(() => {
    async function getPosts() {
      if (props.location.state) {
        try {
          const response = await axios.get(
            `https://api.edamam.com/search?q=${state}&app_id=780ef115&app_key=886f8ff08f4765cb080898dfdaa81672`
          );
          if (response) {
            console.log(response.data.hits);
            setResults(response.data.hits);
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
            onChange={handelChange}
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
              return <div className="col-md-4 my-2"> 
              <Card
              recipe={element.recipe.source}
              image={element.recipe.image}
              healthLabels={element.recipe.healthLabels}
              title={element.recipe.label}
              /> 
              </div>;
            })}
          </div>
        </div>
     
    </>
  );
};

export default Carditem;
