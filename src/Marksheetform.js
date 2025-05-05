
import React, { Component } from 'react'



export default class Marksheetform extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      studentId: "",
      rollNo: "",
      physics: "",
      chemistry: "",
      maths: "",
    

    };
    this.urlapi = "https://manraj-ors-1.onrender.com/marksheet"
    this.id = window.location.pathname.split("/")[2];
    console.log(this.id)
    if (this.id) {
      this.getupdate()
    }
  }
  handleData() {
    console.log("Handle data", this.state);



    if (this.id) {
      fetch(this.urlapi + "/" + this.id, {
        method: 'PUT',
        body: JSON.stringify(this.state),
        headers: {
          'Content-type': 'application/json; charset=UTF-8 ',
        },
      })
        .then((response) => response.json())

        .then((json) => console.log(json));


    } else {
      fetch(this.urlapi, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-type': 'application/json; charset=UTF-8 ',
        },
      })
        .then((response) => response.json())

        .then((json) => console.log(json));

    }
  }

  getupdate() {

    fetch(this.urlapi+"/"+this.id).then((response) =>
      response.json().then((num) => {
        console.log("result......", num)
        this.setState({
          name: num.name,
          studentId: num.studentId,
          rollNo: num.rollNo,
          physics: num.physics,
          chemistry: num.chemistry,
          maths: num.maths,
        })
      }))

  }




  render() {
    return (

      <>   
      <h1>this is the Texting purpose for up loading </h1>
       <h1 className='cc'>Form of the Marksheet</h1>
        <div className='aa'>
          <label> name : <input type='text' placeholder='name' value={this.state.name}
            onChange={(event) => this.setState({ name: event.target.value })} /></label><br /> <br />

          <label> studentId : <input type='text' placeholder='studentId' value={this.state.studentId}
            onChange={(event) => this.setState({ studentId: event.target.value })} /></label><br /> <br />

          <label> rollNo: <input type='text' placeholder='rollNo' value={this.state.rollNo}
            onChange={(event) => this.setState({ rollNo: event.target.value })} /></label><br /> <br />

          <label> physics : <input type='text' placeholder='physics' value={this.state.physics}
            onChange={(event) => this.setState({ physics: event.target.value })} /></label><br /> <br />


          <label> chemistry : <input type='text' placeholder='chemistry' value={this.state.chemistry}
            onChange={(event) => this.setState({ chemistry: event.target.value })} /></label><br /> <br />

            
          <label> maths : <input type='text' placeholder='maths' value={this.state.maths}
            onChange={(event) => this.setState({ maths: event.target.value })} /></label><br /> <br />

          <button className='bb' onClick={() => this.handleData()}>submit</button>
        </div>
      </>

    )
  }

}
