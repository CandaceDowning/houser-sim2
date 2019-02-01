import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepThree from '../StepThree/StepThree'



export default class Wizard extends Component {
   


    render() {
        return (
          <div className="wizard">
            <div>Wizard</div>
            <Link to="/">
              <button>Cancel</button>
            </Link>
            <Switch>
                <Route component={StepOne} exact path='/wizard/step1'/>
                <Route component={StepTwo} path='/wizard/step2'/>
                <Route component={StepThree} path='/wizard/step3'/>
            </Switch>

            
          </div>
        );
    }
}