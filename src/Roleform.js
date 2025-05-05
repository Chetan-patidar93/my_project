import React, { Component } from 'react'
import './Roleform.css';



export default class Roleform extends Component {
constructor(){
  super();
  this.state ={
    name: "",
    discription: "",
  
  };
  this.urlapi="https://manraj-ors-1.onrender.com/role"
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

window.location.pathname ="rolelist"

}
}

getupdate(){

  fetch(this.urlapi+"/"+this.id).then((response)=> 
    response.json().then((num)=>{
      console.log("result......",num)
      this.setState({
        name: num.name,
        discription: num.discription,

    })
    }))
   
}




render(){
  return(
<>    <h1 className='cc'>Form of Roleform </h1>
    <div className='aa'>
    <label> name : <input type='text'  placeholder='name' value={this.state.name}
    onChange={(event)=>this.setState({name:event.target.value})}/></label><br/> <br/> 
   
     <label> discription : <input type='text'  placeholder='discription' value={this.state.discription}
    onChange={(event)=>this.setState({discription:event.target.value})}/></label><br/> <br/>
   
   
   
   
    <button className='bb' onClick={()=>this.handleData()}>submit</button>
  </div>
  </>

  ) 
} 

  }