import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Studentlist extends Component {
    constructor() {
        super();
        this.state = {
          infoArray: []
        }
      }
      fetchData() {
        let url = 'https://manraj-ors-1.onrender.com/student'
        fetch(url).then((res)=>res.json()).then((result)=>{
          this.setState({infoArray:result})
        })
      }
      componentDidMount(){
        this.fetchData()
      }
      delData(id){
        console.log("update",id)
        fetch("https://manraj-ors-1.onrender.com/student/"+ id,
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
        <th>firstName</th>
        <th>lastName</th>
        <th>emailId</th>
        <th>collegeId</th>
        <th>mobileNo</th>
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
             <td>{item.firstName}</td>
             <td>{item.lastName}</td>
             <td>{item.emailId}</td>
             <td>{item.collegeId}</td>
             <td>{item.mobileNo}</td>
             <td><Link to={`/studentform/${item._id}`}>Edit</Link></td>
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