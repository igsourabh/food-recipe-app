import React, { useState, useEffect } from "react";
import homelogo from "./foodrecipelogo.png";
import "./Home.css";
import LoadingBar from "react-top-loading-bar";
import axios from "axios";
import Spinner from "./Spinner";
import Compressor from 'compressorjs';

import Carditem from "./Carditem";

const Home = (props) => {
  const [state, setstate] = useState([]);
  const [progress, setprogress] = useState(0);
  const [value, setvalue] = useState("");
  const [loading, setloading] = useState(false);
  const [logo, setlogo] = useState(homelogo);
  
  const handelchange = (e) => {
    setvalue(e.target.value);
  };

  const handelclick = async () => {
    setloading(false);
    setprogress(10);
    setprogress(15);
    setprogress(16);
    setprogress(17);
    setprogress(18);
    setprogress(25);
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${value}&beta=false&app_id=780ef115&app_key=886f8ff08f4765cb080898dfdaa81672`
      )
      .then((resp) => {
        setprogress(30);
        setprogress(33);
        setprogress(35);
        setprogress(36);
        setprogress(37);
        setprogress(38);
        setstate(resp.data.hits);

        setloading(true);
        console.log(resp.data);

        setprogress(39);
        setprogress(40);
        setprogress(45);
        setprogress(50);

        setprogress(70);
        setprogress(100);
      });
  };

  useEffect(() => {
    handelclick();
    setloading(false);
    setlogo(homelogo);
  }, []);

  return (
    <>
      <LoadingBar height={2} color="#f11946" progress={progress} />

      <div
        className="section  d-flex justify-content-center mt-5"
        style={{ height: "8rem" }}
      >
        <img
          src={logo}
          draggable="false"
          alt=""
          style={{ margin: "1rem auto" }}
        />
      </div>
      <div id="mdt" className="container  d-flex justify-content-center my-2">
        <input
          type="text"
          className="form-control "
          placeholder="Search"
          onChange={handelchange}
          style={{ width: "50%" }}
        />

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handelclick}
        >
          Search
        </button>
      </div>
      <div className="container ">
        <div className="row" style={{ width: "70px", margin: "20px auto" }}>
          {!loading && <Spinner />}
        </div>
        <Carditem data={state} />
      </div>
    </>
  );
};

export default Home;
