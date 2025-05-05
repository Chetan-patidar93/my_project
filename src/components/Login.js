import React, { Component } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

export default class Login extends Component {
constructor(){
  super();
  this.state={
    loginId:"",
    password:"",
    msg:"",
    color:"",
    isTrue:false
  }
}
handleLogin(e){
  e.preventDefault();
  this.setState({msg:""})

  console.log("Login form",this.state)

  let formData ={
    loginId:this.state.loginId,
    password:this.state.password,
  }
  fetch('https://manraj-ors-1.onrender.com/login', {
    method: 'POST',
    body: JSON.stringify(
      formData
     
    ),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
.then((response)=>response.json())
.then((json) =>{
  this.setState({isTrue:true})
  console.log(json)
  if(json.message){
    this.setState({msg:json.message,color:"danger"})
  }
  else if(json.loginId===this.state.loginId){
    this.setState({msg:"Loginsuccessful",color:"success"})
  
    const token = JSON.stringify(json);
    localStorage.setItem("token", token);

   
  }
window.location.pathname='userlist'
})




}
render() {
    return (
      <div>
        <section classNameName="">
      <div classNameName="">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              classNameName="img-fluid" alt="Sample image"/>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>
    
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>
    
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>
             
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              {/* <!-- Email input --> */}
              <div data-mdb-input-init className="form-outline mb-4">
              <p className={`text-${this.state.color}`}>{this.state.msg}</p>
                
                <label className="form-label" htmlFor="form3Example3">Email address</label>
                <input type="email" id="email" className="form-control form-control-lg"
                  placeholder="Enter a valid email address" 
                  value={this.state.loginId} onChange={(e)=>this.setState({loginId:e.target.value})}/>
                  {!this.state.loginId && this.state.isTrue && <div id="emailHelp" className="from-text">Must not be empty</div>}            
              </div>
    
              {/* <!-- Password input --> */}
              <div data-mdb-input-init className="form-outline mb-3">
               
                <label className="form-label" for="form3Example4">Password</label>
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                  placeholder="Enter password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
              </div>
    
              <div className="d-flex justify-content-between align-items-center">
              
                <a href="#!" className="text-body">Forgot password?</a>
              </div>
    
              <div className="text-center text-lg-start mt-4 pt-2">
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg" onClick={(e)=>this.handleLogin(e)}
                >Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                    className="link-danger">Register</a></p>
              </div>
    
            </form>
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        {/* <!-- Copyright --> */}
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        {/* <!-- Copyright --> */}
    
        {/* <!-- Right --> */}
        <div>
          <Link to="https://www.facebook.com" classNameName="text-white me-4">
          <i classNameName="fa fa-facebook" aria-hidden="true"></i>
          </Link>
          <Link to="#!" classNameName="text-white me-4">
            <i classNameName="fab fa-twitter"></i>
          </Link>
          <Link to="#!" classNameName="text-white me-4">
            <i classNameName="fab fa-google"></i>
          </Link>
          <Link to="#!" classNameName="text-white">
            <i classNameName="fab fa-linkedin-in"></i>
          </Link>
        </div>
        {/* <!-- Right --> */}
      </div>
    </section>
    </div>
    )
  }
}
