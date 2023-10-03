import React, { useState } from "react";
import Newyorkdata from "../data.json";
import { Link } from "react-router-dom";

const Newyork = () => {
  const [visible, setVisible] = useState(6);

  function showMore() {
    setVisible((value)=> value + 3);
    document.getElementById("showBtn").style.display = "none"
  }

  return (
    <div className="position-relative pb-4">
      <div className="row f-flex gy-4">
        {
        Newyorkdata.slice(0,visible).filter((elem)=> elem.category === "newyork").map((item) => {
          return (
            <div className="col-4">
              <Link to={`/${item.id}`} className="text-decoration-none">
              <div className="card">
                <img
                  src={item.image}
                  className="img img-fluid rounded"
                  width="100%"
                  alt="img"
                />
                <div className="topBar">
                  <button>For Rent</button>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="card-body">
                  <div className="location mb-3">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="ms-2">New york st.</span>
                  </div>
                  <h3>{item.title}</h3>
                  <div className="specs mt-3 d-flex justify-content-around">
                    <div className="room">
                      <i className="fa-regular fa-building"></i>
                      <p>3 Room</p>
                    </div>
                    <div className="bed">
                      <i className="fa-solid fa-bed"></i>
                      <p>3 Room</p>
                    </div>
                    <div className="room">
                      <i className="fa-regular fa-building"></i>
                      <p>3 Room</p>
                    </div>
                    <div className="room">
                      <i className="fa-regular fa-building"></i>
                      <p>3 Room</p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <h6>{item.price}<span>/month</span></h6>
                    <button>Read More</button>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          );
        })}
      </div>

      <button id="showBtn" className="showBtn rounded-pill" onClick={showMore}>Show more</button>
    </div>
  );
};

export default Newyork;
