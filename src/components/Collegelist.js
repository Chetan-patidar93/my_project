import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Collegelist extends Component {
    constructor() {
        super();
        this.state = {
            infoArray: []
        }
    }
    listData() {
        let url = 'https://manraj-ors-1.onrender.com/college'
        fetch(url).then((res) => res.json()).then((result) => {
            this.setState({ infoArray: result })
        })
    }
    componentDidMount(){
        this.listData()
    }
    delData(id){
        console.log("update",id)
        fetch("https://manraj-ors-1.onrender.com/college/ "+ id,
          {method :"DELETE"}).then((response)=>response.json()).then(()=>{
            this.listData()
          })
      }

    render() {
        return (
            <div>
                <h1>This is a Listing page of College list</h1>
                <table width={'100%'}>
                    <thead>
                        <tr>
                            <th>collegName</th>
                            <th>city</th>
                            <th>address</th>
                            <th>mobileNo</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.infoArray?.map((item, i) => {
                                console.log(item)
                                return (
                                    <tr>
                                        <td>{item.collegeName}</td>
                                        <td>{item.city}</td>
                                        <td>{item.address}</td>
                                        <td>{item.mobileNo}</td>
                                        <td><Link to={`/collegeform/${item._id}`}>Edit</Link></td>
                                        <td><button onClick={() => this.delData(item._id)}>Delete</button></td>
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