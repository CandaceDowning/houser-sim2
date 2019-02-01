import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {updateOne, changeHandler} from '../../ducks/reducer'




class StepOne extends Component {
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
    // }

    // changeHandler(id, value) {
    //     this.setState({ [id]: value })
    // }


    render() {
        console.log(this.props)
        return (
          <div className="wizard">
            <div>Wizard</div>
            <form className="inputForm">
              <input
                type="text" 
                placeholder="Property Name"
                value={this.props.match.name}
                onChange={e =>
                  this.props.changeHandler("name", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Address"
                value={this.props.match.address}
                onChange={e =>
                  this.props.changeHandler("address", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="City"
                value={this.props.match.city}
                onChange={e =>
                  this.props.changeHandler("city", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="State"
                value={this.props.match.state}
                onChange={e =>
                  this.props.changeHandler("state", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Zip"
                value={this.props.match.zip}
                onChange={e =>
                  this.props.changeHandler("zip", e.target.value)
                }
              />
            </form>
            <Link to="/wizard/step2">
              <button onClick={updateOne} className="nextBtn">Next Step</button>
            </Link>
          </div>
        );
    }
}

const mapStateToProps=(state) => state;

export default connect(mapStateToProps, {updateOne, changeHandler})(StepOne);