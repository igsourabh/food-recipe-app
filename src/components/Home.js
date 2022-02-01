import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import Carditem from "./Carditem";
import { fetchasyncrecipe } from "./redux/features/foodSlice";;
const Home = (props) => {
  const dispatch = useDispatch();


  useEffect(() => {
  
    dispatch(fetchasyncrecipe())
  }, [dispatch]);
  

  return (
    <>
      <div className="container">
        search page
      <Carditem/>
      </div>
    </>
  );
};

export default Home;
