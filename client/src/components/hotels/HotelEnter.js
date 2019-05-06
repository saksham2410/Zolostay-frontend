import React from "react";
import axios from "../../config/axios";

class HotelEnter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: " ",
      city: " ",
      state: " ",
      name: " ",
      errors: {}
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      name: this.state.name
    };

    axios.post("/users/HotelEnter", formData).then(response => {
      if (response.data.errors) {
        this.setState(() => ({
          errors: response.data.errors
        }));
      } else {
        // programmatically change from one component to another
        this.props.history.push("/hotels/HotelList");
      }
    });
  };

  render() {
    return (
      <div className="row mt-4">
        <div className="col-md-6 offset-3 mt-4">
          <h2>Register your hotel</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group mt-4">
              <label>
                address
                <input
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="hotel address"
                />
              </label>
              {/* {this.state.errors.username && <p className="text text-danger" >  {this.state.errors.username.message} </p> } */}
            </div>

            <div className="form-group">
              <label>
                city
                <input
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="your hotel city"
                />
              </label>
              {/* {this.state.errors.email && <p className="text text-danger" >  {this.state.errors.email.message} </p> } */}
            </div>

            <div className="form-group">
              <label>
                state
                <input
                  type="text"
                  name="state"
                  value={this.state.state}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="your hotel state"
                />
              </label>
              {/* {this.state.errors.password && <p className="text text-danger" >  {this.state.errors.password.message} </p> } */}
            </div>
            <div className="form-group">
              <label>
                name
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="your hotel name"
                />
              </label>
              {/* {this.state.errors.password && <p className="text text-danger" >  {this.state.errors.password.message} </p> } */}
            </div>
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    );
  }
}

export default HotelEnter;
