import React, { Component } from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import User from './components/User'
import Home from './Home'
import College from './College'
import Marksheet from './Marksheet'
import Role from './Role'
import Userlist from './Userlist'
import Student from './Student'
import Userform from './Userform'
import Dashoard from './components/Dashoard'
import Collegeform from './components/Collegeform'
import Collegelist from './components/Collegelist'
import Marksheetform from './Marksheetform'
import Marksheetlist from './Marksheetlist'
import Roleform from './Roleform'
import Rolelist from './Rolelist'
import Studentform from './components/Studentform'
import Studentlist from './components/Studentlist'
export default class App extends Component {

  render() {
   
    return (
      <BrowserRouter>
           
        <Dashoard />
       

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<Login />} />
            <Route path="college" element={<College />} />
            <Route path="student" element={<Student />} />
            <Route path="marksheet" element={<Marksheet />} />
            <Route path="user" element={<User />} />
            <Route path="role" element={<Role />} />
            <Route path="userlist" element={<Userlist />} />
            <Route path="userform" element={<Userform />} />
            <Route path="userform/:id" element={<Userform />} />
            <Route path="collegeform" element={<Collegeform/>}/>
            <Route path="collegeform/:id" element={<Collegeform/>}/>
            <Route path="collegelist" element={<Collegelist/>}/>
            <Route path="marksheetform" element={<Marksheetform/>}/>
            <Route path="marksheetform/:id" element={<Marksheetform/>}/>
            <Route path="marksheetlist" element={<Marksheetlist/>}/>
            <Route path="rolelist" element={<Rolelist/>}/>
            <Route path="roleform" element={<Roleform/>}/>
            <Route path="roleform/:id" element={<Roleform/>}/>
            <Route path="studentform" element={<Studentform/>}/>
            <Route path="studentform/:id" element={<Studentform/>}/>
            <Route path="studentlist" element={<Studentlist/>}/>








          </Routes>





















        </BrowserRouter>

    

    )
  }
}
