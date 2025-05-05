import React, { Component } from 'react'




export default class Studentform extends Component {
constructor(){
  super();
  this.state ={
   firstName:"",
   lastName:"",
   emailId:"",
   collegeId:"",
    mobileNo: "",
  
  };
  this.urlapi="https://manraj-ors-1.onrender.com/student"
  this.id =window.location.pathname.split("/")[2];
console.log(this.id)
if(this.id){
  this.getupdate()
}
}
handleData(){
  console.log("Handle data",this.state);



if(this.id){
  fetch(this.urlapi+"/"+this.id,{
    method: 'PUT',
    body: JSON.stringify(this.state),
    headers: {
      'Content-type':'application/json; charset=UTF-8 ',
    },
  })
  .then((response) =>response.json())
  
  .then((json) => console.log(json));
  
  
}else{
fetch(this.urlapi,{
  method: 'POST',
  body: JSON.stringify(this.state),
  headers: {
    'Content-type':'application/json; charset=UTF-8 ',
  },
})
.then((response) =>response.json())

.then((json) => console.log(json));

}
}

getupdate(){

  fetch(this.urlapi+"/"+this.id).then((response)=> 
    response.json().then((num)=>{
      console.log("result......",num)
      this.setState({
     firstName:num.firstName,
     lastName:num.lastName,
     emailId:num.emailId,
     collegeId:num.collegeId,
     mobileNo:num.mobileNo,
    })
    }))
   
}




render(){
  return(
<>    <h1 className='cc'>Form of College</h1>
    <div className='aa'>
    <label> firstName : <input type='text'  placeholder='firstName' value={this.state.firstName}
    onChange={(event)=>this.setState({firstName:event.target.value})}/></label><br/> <br/> 
   
     <label> lastName : <input type='text'  placeholder='lastName' value={this.state.lastName}
    onChange={(event)=>this.setState({lastName:event.target.value})}/></label><br/> <br/>
   
   <label> emailId: <input type='text'  placeholder='emailId' value={this.state.emailId}
    onChange={(event)=>this.setState({emailId:event.target.value})}/></label><br/> <br/>

<label> collegeId: <input type='text'  placeholder='collegeId' value={this.state.collegeId}
    onChange={(event)=>this.setState({collegeId:event.target.value})}/></label><br/> <br/>



    <label> mobileNo : <input type='text'  placeholder='mobileNo' value={this.state.mobileNo}
    onChange={(event)=>this.setState({mobileNo:event.target.value})}/></label><br/> <br/>   
   
   
    <button className='bb' onClick={()=>this.handleData()}>submit</button>
  </div>
  </>

  ) 
}

  }