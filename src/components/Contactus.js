import React, { useState,useEffect } from "react";
import Alert from "./Alert";
import lo from "./lo.jpg";
import LoadingBar from "react-top-loading-bar";
import "./Contactus.css"
const Contactus = () => {
  const [progress, setprogress] = useState(10);

  useEffect(() => {
    setprogress(10)
    setprogress(20)
    setprogress(30)
    setprogress(40)
    setprogress(50)
    setprogress(60)
    setprogress(70)
    setprogress(80)
    setprogress(90)
    setprogress(100)
  }, []);
  
  const [state, setstate] = useState({
    name: "",

    email: "",

    message: "",
  });
  const [alert, setalert] = useState(false);
  let name, value;
  const handelChange = (element) => {
    name = element.target.name;
    value = element.target.value;
    setstate({ ...state, [name]: value });
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    const { name, email, message } = state;
    if (name && email && message) {
      const res = await fetch(
        "https://database-c6c1a-default-rtdb.asia-southeast1.firebasedatabase.app/form.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,

            email,

            message,
          }),
        }
      );
      if (res) {
        setstate({
          name: "",

          email: "",

          message: "",
        });
      }
    } else {
      setalert(true);
      setTimeout(() => {
        setalert(false);
      }, 1500);
    }
  };
  return (
    <>
          <LoadingBar height={2} color="#f11946" progress={progress} />

      <div className="container mt-5 d-flex justify-content-center " >
        <div className="card p-3 my-3" id="card1">
          <div className="d-flex align-items-center">
            <div className="image">
             
              <img src={lo}  draggable="false" alt="logo" className="rounded mx-2" width="155" />
            </div>
            <div className="ml-3 w-100 ">
              <h4 className="mb-0 mt-0">Sourabh vaish</h4>
              <span>Reactjs Devloper</span>
              <div className="p-2 mt-2 bg- d-flex justify-content-between rounded text-dark stats">
                <div className="d-flex flex-column">
                 
                  <span className="articles">posts</span>
                  <span className="number1">33</span>
                </div>
                <div className="d-flex flex-column">
                 
                  <span className="followers">Followers</span>
                  <span className="number2">16.8K</span>
                </div>
                <div className="d-flex flex-column">
                 
                  <span className="rating">Rating</span>
                  <span className="number3">8.9</span>
                </div>
              </div>
              <div className="button mt-2 d-flex flex-row align-items-center">
                <a 
                  className="btn btn-sm btn-primary w-100 ml-2 mx-2"
                  id="chat2"
                  href="https://www.instagram.com/igsourabh/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "white", color: "#0A58CA" }}
                >
                  Chat
                </a>

                <a  
                  className="btn btn-sm btn-primary w-100 ml-2 mx-2"
                  id="chat2"
                  href="https://www.instagram.com/igsourabh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Follow
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        {alert && <Alert />}

        <form method="POST">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              onChange={handelChange}
              name="name"
              value={state.name}
              className="form-control"
              id="name"
              type="text"
              placeholder="Name"
              data-sb-validations="required"
            />
            <div className="invalid-feedback" data-sb-feedback="name:required">
              Name is required.
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              onChange={handelChange}
              name="email"
              value={state.email}
              className="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email Address"
              data-sb-validations="required, email"
            />
            <div
              className="invalid-feedback"
              data-sb-feedback="emailAddress:required"
            >
              Email Address is required.
            </div>
            <div
              className="invalid-feedback"
              data-sb-feedback="emailAddress:email"
            >
              Email Address Email is not valid.
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              onChange={handelChange}
              name="message"
              value={state.message}
              className="form-control"
              id="message"
              type="text"
              style={{ height: "10rem" }}
              data-sb-validations="required"
            ></textarea>
          </div>

          <button
            className="btn btn-primary btn-lg"
            type="submit"
            onClick={formSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contactus;
