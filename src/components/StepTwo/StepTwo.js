import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'



class StepTwo extends Component {
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

    changeHandler(id, value) {
        this.setState({ [id]: value })
    }


    render() {
        return (
          <div className="wizard">
            <div>Wizard</div>
            <form className="inputForm">
              <input
                type="text"
                placeholder="Image URL"
                value={this.props.match.name}
                onChange={e =>
                  this.changeHandler("name", e.target.value)
                }
              />
            </form>
            <Link to="/wizard/step1">
              <button>Previous Step</button>
            </Link>
            <Link to="/wizard/step3">
              <button>Next Step</button>
            </Link>
          </div>
        );
    }
}

const mapStateToProps=(state) => state;

export default connect(mapStateToProps)(StepTwo);