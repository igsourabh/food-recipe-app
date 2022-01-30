import React, { useState, useEffect } from "react";

const Home = (props) => {
  const [state, setstate] = useState("");
  const handelSubmit=((e)=>{
props.history.push({pathname:"/search",state})

  })
  const handelChange = (e) => {
    setstate(e.target.value);
    console.log("handel has been changing");
  };
  return (
    <>
      <div className="container">
          home page
        <form class="d-flex" onSubmit={handelSubmit}>
          <input
            class="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={handelChange}
            value={state}
            required
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Google Search"
          />
        </form>
      </div>
    </>
  );
};

export default Home;
