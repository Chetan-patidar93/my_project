import React, { Component } from 'react'

export default class Userfrom extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      loginId: "",
      password: "",
      roleId: "",
      msg: "",
      isTrue: false,
      roleData: []
    }
    this.id = window.location.pathname.split("/")[2];

  }

  getOneData(id) {
    fetch("https://manraj-ors-1.onrender.com/user/" + id).then((resp) => resp.json()).then((result) => {
      // console.log(result)
      // this.setState(result)
      this.setState({
        firstName: result.firstName,
        lastName: result.lastName,
        loginId: result.loginId,
        password: result.password,
        roleId: result.roleId,
      })
    })
  }

  componentDidMount() {
    if (this.id) {
      this.getOneData(this.id)
    }
    fetch("https://manraj-ors-1.onrender.com/role").then((res) => res.json()).then((result) => {
      // console.log(result)
      this.setState({ roleData: result })
    })
  }

  submitForm(event) {
    this.setState({ isTrue: true })
    let url = this.id ? "https://manraj-ors-1.onrender.com/user/" + this.id : "https://manraj-ors-1.onrender.com/user";
    let method = this.id ? "PUT" : "POST"
    event.preventDefault()
    console.log("submitForm", this.state);
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      loginId: this.state.loginId,
      password: this.state.password,
      roleId: this.state.roleId,
    }

    fetch(url, {
      method: method,
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        window.location.pathname = "/userlist"
      });
  }

  handleChange(e) {
    console.log(e.target.value)

    this.setState({ roleId: e.target.value })
  }
  render() {
    console.log(this.state.roleData)
    return (
      <div>
        <h2>Add user page</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">First name</label>
            <input type="text" className="form-control" id="fname" aria-describedby="emailHelp" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
            {
              !this.state.firstName && this.state.isTrue && <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            }
          </div>

          <div className="mb-3">
            <label htmlFor="lname" className="form-label">Last name</label>
            <input type="text" className="form-control" id="lname" aria-describedby="emailHelp" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.loginId} onChange={(e) => this.setState({ loginId: e.target.value })} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role address</label>
            {/* <input type="text" className="form-control" id="role" aria-describedby="emailHelp" value={this.state.roleId} onChange={(e) => this.setState({ roleId: e.target.value })} /> */}
            <select onClick={(e) => this.handleChange(e)}>
              <option value={""}>Select</option>
              {
                this.state.roleData && this.state.roleData.map((ele) => {
                  // console.log(ele)
                  {
                    return <option value={ele._id}>{ele.name}</option>
                  }
                })
              }
            </select>
            {/* <input type="text" className="form-control" id="role" aria-describedby="emailHelp" value={this.state.roleId} onChange={(e) => this.setState({ roleId: e.target.value })} /> */}
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button onClick={(event) => this.submitForm(event)} className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}