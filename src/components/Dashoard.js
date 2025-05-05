
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashoard extends Component {
  constructor() {
    super();


  }
  handlelogout() {
    localStorage.clear();
    // window.location.reload()
    window.location.pathname = "login"
  }
  render() {

    let auth = localStorage.getItem("token")
    auth = JSON.parse(auth)
    console.log(auth)
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div>
                {

                  !auth ?
                    <>
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <Link className="nav-link active" aria-current="page" to="login">Login</Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="registration">Registration</Link>
                        </li>
                      </ul>
                    </> : <>
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <Link className="navbar-brand" to="/">Home</Link>
                        <li class="nav-item dropdown">
                          <Link class="nav-link dropdown-toggle" to="user" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            User
                          </Link>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="userlist">Userlist</Link></li>
                            <li><Link className="dropdown-item" to="userform">Userform</Link></li>
                          </ul>
                        </li>

                        <li class="nav-item dropdown">
                          <Link class="nav-link dropdown-toggle" to="user" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            College
                          </Link>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="collegelist">Collegelist</Link></li>
                            <li><Link className="dropdown-item" to="collegeform">Collegeform</Link></li>
                          </ul>
                        </li>

                        <li class="nav-item dropdown">
                          <Link class="nav-link dropdown-toggle" to="user" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marksheet
                          </Link>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="marksheetlist">Markheetlist</Link></li>
                            <li><Link className="dropdown-item" to="marksheetform">Marksheetform</Link></li>
                          </ul>
                        </li>


                        <li class="nav-item dropdown">
                          <Link class="nav-link dropdown-toggle" to="user" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Role
                          </Link>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="rolelist">Rolelist</Link></li>
                            <li><Link className="dropdown-item" to="roleform">Roleform</Link></li>
                          </ul>
                        </li>


                        <li class="nav-item dropdown">
                          <Link class="nav-link dropdown-toggle" to="user" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Studnet
                          </Link>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="studentlist">Studentlist</Link></li>
                            <li><Link className="dropdown-item" to="studentform">Studnetform</Link></li>
</ul>
                        </li>
                       <li>
                        <Link class="nav-link" to="login" onClick={() => this.handlelogout()}>Logout({auth?.firstName})</Link>
                        </li>
                      </ul>
                    </>
                }
              </div>

            </div>
          </div>
        </nav>


      </div>
    )
  }
}
