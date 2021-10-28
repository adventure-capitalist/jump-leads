import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson30 from './Lesson30';

class Challenge30 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 30: CSS Layouts</h2>
                <div class="icons">
                <GoBook onClick={() => this.props.callback(<Lesson30 callback={this.props.callback}/>)} className="dashIcon"/>
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
 
export default Challenge30;