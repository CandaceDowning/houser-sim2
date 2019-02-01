import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {connect} from 'react-redux'



class StepThree extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         name: "",
    //         address: "",
    //         city: "",
    //         state: "",
    //         zip: ""
    //     }
    //     this.changeHandler = this.changeHandler.bind(this)
    //     this.postHouse = this.postHouse.bind(this)
    // }

    changeHandler(id, value) {
        this.setState({ [id]: value })
    }

    postHouse(){
        axios.post(`/api/house`, {
            name:this.state.name, 
            address:this.state.address, 
            city:this.state.city, 
            state:this.state.state, 
            zip:this.state.zip
        })
    }

    render() {
        return (
          <div className="wizard">
            <div>Wizard</div>
            <form className="Monthly Mortgage Amount">
              <input
                type="text"
                placeholder="name"
                value={this.props.match.name}
                onChange={e =>
                  this.changeHandler("name", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Desired Monthly Rent"
                value={this.props.match.address}
                onChange={e =>
                  this.changeHandler("address", e.target.value)
                }
              />
            </form>
            <Link to="/wizard/step2">
              <button>Previous Step</button>
            </Link>
            <Link to='/'>
                <button onClick={this.postHouse}>Submit</button>
            </Link>

          </div>
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(StepThree);