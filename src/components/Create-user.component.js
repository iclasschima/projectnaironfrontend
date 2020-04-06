import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserFirstName = this.onChangeUserFirstName.bind(this);
    this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  onChangeUserFirstName(e) {
    this.setState({ firstName: e.target.value });
  }
  onChangeUserLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };

    axios
      .post("http://localhost:8081/spring-crm-rest/api/customers", userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ firstName: "", lastName: "", email: "" });
  }
  render() {
    return (
      <div className="wrapper">
        <form>
          <div className="form-group">
            <label>Enter first Name</label>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.onChangeUserFirstName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Enter last Name</label>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.onChangeUserLastName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Enter Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.onChangeUserEmail}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-success btn-block"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default CreateUser;
