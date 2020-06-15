import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson9 from './Lesson9';

class Challenge9 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 9: Flexbox</h2>
                <div class="icons">
                <GoBook onClick={() => this.props.callback(<Lesson9 callback={this.props.callback}/>)} className="dashIcon"/>
                <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                
            
            </div>
        </div> 
        );
    }
}
 
export default Challenge9;