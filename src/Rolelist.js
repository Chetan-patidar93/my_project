import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Rolelist extends Component {
    constructor() {
        super();
        this.state = {
          infoArray: []
        }
      }
      updateData() {
        let url = 'https://manraj-ors-1.onrender.com/role'
        fetch(url).then((res)=>res.json()).then((result)=>{
          this.setState({infoArray:result})
        })
      }
      componentDidMount(){
        this.updateData()
      }
      delData(id){
        console.log("update",id)
        fetch("https://manraj-ors-1.onrender.com/role/"+ id,
          {method :"DELETE"}).then((response)=>response.json()).then(()=>{
            this.updateData()
          })
      }
      render() {
        return (
          <div>
            <h1>This is a Listing page of Role list</h1>
            <table width={'100%'}>
    <thead>
      <tr>
        <th>name</th>
        <th>discription</th>
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
             <td>{item.discription}</td>
             <td><Link to={`/roleform/${item._id}`}>Edit</Link></td>
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
