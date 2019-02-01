import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state={
            houses: []
        }
    }

    componentDidMount(){
        axios.get(`/api/houses`)
        .then(res=>{
            // console.log(res.data)
          this.setState({houses: res.data})
        }).catch(err=>{
            console.log(err)
        })
      }

      deleteHouse(id){
          console.log(id)
        axios.delete(`/api/house/${id}`)
        .then(res=>{
            console.log(res.data)
          this.setState({houses: res.data})
        }).catch(err=>{
            console.log(err)
        })
      }

   
    render(){
        const houses =  this.state.houses.map((house, id)=>(
            <div key={id} className='houseBox'>
               <p>Property Name: {house.name}</p>
               <p>Address: {house.address}</p>
               <p>City: {house.city}</p>
               <p>State: {house.state}</p>
               <p>Zip: {house.zip}</p> 
               <button onClick={e=>this.deleteHouse(house.id)}>Delete</button>
            </div>
        ));
        
        return(
            <div className="dash">
                <div>Dashboard</div>
                <Link to='/wizard/step1'><button className="addBtn">Add New Property</button></Link>                
                {houses}     
            </div>
        )
    }
}

        