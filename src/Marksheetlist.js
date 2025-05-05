import React, { Component } from 'react'
import {Link} from "react-router-dom"

import './Marksheetlist.css';


export default class Marksheetlist extends Component {
 
    constructor() {
        super();
        this.state = {
          infoArray: []
        }
      }
      fetchData() {
        let url = 'https://manraj-ors-1.onrender.com/marksheet'
        fetch(url).then((res)=>res.json()).then((result)=>{
          this.setState({infoArray:result})
        })
      }
      componentDidMount(){
        this.fetchData()
      }


      delData(id){
        console.log("update",id)
        fetch("https://manraj-ors-1.onrender.com/marksheet/"+ id,
          {method :"DELETE"}).then((response)=>response.json()).then(()=>{
            this.fetchData()
          })
      }
      
      render() {
        return (
          <div>
            <h1>This is a Listing page of Student list</h1>
            <table width={'100%'}>
    <thead>
      <tr>
        <th>name</th>
        <th>studentId</th>
        <th>rollNo</th>
        <th>physics</th>
        <th>chemistry</th>
        <th>maths</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        this.state.infoArray?.map((item, i) => {
          console.log(item)
          return(
            <tr>
             <td>{item.name}</td>
             <td>{item.studentId}</td>
             <td>{item.rollNo}</td>
             <td>{item.physics}</td>
             <td>{item.chemistry}</td>
             <td>{item.maths}</td>
             <td><Link to={`/Marksheetform/${item._id}`}>Edit</Link></td>
            <td><button onClick={() =>this.delData(item._id)}>Delete</button></td>
            </tr>
          )
        })
      }
    </tbody>
            </table>
          </div>
        )
      }
    }