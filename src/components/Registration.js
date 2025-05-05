import React, { Component } from 'react'
import './Registration.css'
export default class Registration extends Component {

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
    return (
      <div><section class="h-100 bg-dark">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo" class="img-fluid"
                     />
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">Student registration form</h3>
    
                    <div class="row">
                      <div class="col-md-12 mb-3">
                        <div data-mdb-input-init class="form-outline">
                          <label class="form-label" for="form3Example1m">First name:
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder='firstName' value={this.state.firstName} onChange={(event)=>this.setState({firstName:event.target.value})} />
                          {
              !this.state.firstName && this.state.isTrue && <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            }</label>
                        </div>
                      </div>
                      <div class="col-md-12 mb-3">
                        <div data-mdb-input-init class="form-outline">
                          <label class="form-label" for="form3Example1m">Last name:
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder='LastName' value={this.state.lastName} onChange={(event)=>this.setState({lastName:event.target.value})} /></label>
                        </div>
                      </div>
                      <div class="col-md-12 mb-3">
                        <div data-mdb-input-init class="form-outline">
                          <label class="form-label" for="form3Example1m">loginId:
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder='loginId' value={this.state.loginId} onChange={(event)=>this.setState({loginId:event.target.value})} /></label>
                        </div>
                      </div>
                      <div class="col-md-12 mb-3">
                        <div data-mdb-input-init class="form-outline">
                          <label class="form-label" for="form3Example1m">password:
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder='password' value={this.state.password} onChange={(event)=>this.setState({password:event.target.value})} /></label>
                        </div>
                      </div>
                       <div class="col-md-12 mb-3">
                        <div data-mdb-input-init class="form-outline">
                         <label class="form-label" for="form3Example1m">roleId</label>
{/*                         
                          <input type="text" id="form3Example1m" class="form-control form-control-lg" placeholder='dob' value={this.state.roleId} onChange={(event)=>this.setState({roleId:event.target.value})}  */}

                          <select onClick={(e)=>this.handleChange(e)}>
                            <option value={""}>select</option>
                            {
                              this.state.roleData && this.state.roleData.map((ele)=>
                              {
                                {
                                  return <option value={ele._id}>{ele.name}</option>
                                }
                              })
                            }
                          </select>
                          
                      
                          <button className='bb' onClick={(event)=>this.submitForm(event)}>submit</button>
                        </div>
                      </div>
                    </div>
    
                   
    
                  
    
    
                
    
    
                  
    
                  
    
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></div>
    )
  }
}
