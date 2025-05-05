import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Userlist extends Component {
  constructor() {
    super();
    this.state = {
      infoArray: []
    }
  }
  userData() {
    let url = 'https://manraj-ors-1.onrender.com/user'
    fetch(url).then((res)=>res.json()).then((result)=>{
      this.setState({infoArray:result})
    })
  }
  componentDidMount(){
    this.userData()
  }
  delData(id){
    console.log("update",id)
    fetch("https://manraj-ors-1.onrender.com/user/"+ id,
      {method :"DELETE"}).then((response)=>response.json()).then(()=>{
        this.userData()
      })
  }
  render() {
    return (
      <div>
        <h1>This is a Listing page of User list</h1>
        <table width={'100%'}>
<thead>
  <tr>
    <th>firstName</th>
    <th>lastName</th>
    <th>loginId</th>
    <th>password</th>
    <th>dob</th>
    <th>edit</th>
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
         <td>{item.loginId}</td>
         <td>{item.password}</td>
         <td>{item.dob}</td>
         <td><Link to={`/userform/${item._id}`}>Edit</Link></td>
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
