import React from 'react'

const Card = (props) => {
    return (
      <div className='row'>
        <div className="col-6 f-flex gy-4">
                <div className="card">
                  <img
                    src={props.image}
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
                    <h3>{props.title}</h3>
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
                      <h6>{props.price}<span>/month</span></h6>
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
        </div>
      </div>
    );
  };
  

export default Card
