import React from "react";

import { Link } from "react-router-dom";

class HotelItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // rating : this.props.reviews[0].rating
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="row row-no-gutters">
          <div className="col-md-10 offset-md-2">
            <div className="row mt-2 border border-dark rounded">
              <div className="col-md-8 ">
                <h5 className="card-title mt-1">
                  <Link to={`/hotels/${this.props.id}`}>{this.props.name}</Link>
                </h5>
                <p>Tags: {this.props.categories}</p>
                <hr />
                <p>
                  <span className="fa fa-map-marker"> {this.props.city} </span>{" "}
                </p>
                <hr />
                {/* Rating :  */}
                <Link to={`/hotels/${this.props.id}`}>
                  <button className="btn btn-primary mb-1">More details</button>
                </Link>
              </div>
              <div className="col-md-4">
                <img
                  src="https://s-ec.bstatic.com/images/hotel/max1024x768/163/163623329.jpg"
                  style={{
                    float: "right",
                    margin: "0px -15px 0px 0px",
                    height: "50%",
                    width: "50%"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HotelItem;
