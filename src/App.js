
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FoodDetails from "./components/FoodDetails";
import Contactus from "./components/Contactus";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
         <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/foodDetails/:foodid" component={FoodDetails} />
          <Route exact path="/contact" component={Contactus} />

        </Switch>
      </Router>
    </>
  );
}

export default App;