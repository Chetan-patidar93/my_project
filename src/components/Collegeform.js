import React, { Component } from 'react'




export default class Collegeform extends Component {
constructor(){
  super();
  this.state ={
    collegeName :"",
    city : "",
    address : "",
    mobileNo: "",
  
  };
  this.urlapi="https://manraj-ors-1.onrender.com/college"
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
      collegeName :num.collegeName,
      city:num.city,
      address :num.address,
      mobileNo :num.mobileNo,
    })
    }))
   
}




render(){
  return(
<>    <h1 className='cc'>Form of College</h1>
    <div className='aa'>
    <label> collegeName : <input type='text'  placeholder='CollegeName' value={this.state.collegeName}
    onChange={(event)=>this.setState({collegeName:event.target.value})}/></label><br/> <br/> 
   
     <label> city : <input type='text'  placeholder='city' value={this.state.city}
    onChange={(event)=>this.setState({city:event.target.value})}/></label><br/> <br/>
   
   <label> address: <input type='text'  placeholder='adress' value={this.state.address}
    onChange={(event)=>this.setState({address:event.target.value})}/></label><br/> <br/>

    <label> mobileNo : <input type='text'  placeholder='mobileNo' value={this.state.mobileNo}
    onChange={(event)=>this.setState({mobileNo:event.target.value})}/></label><br/> <br/>   
   
   
    <button className='bb' onClick={()=>this.handleData()}>submit</button>
  </div>
  </>

  ) 
}

  }