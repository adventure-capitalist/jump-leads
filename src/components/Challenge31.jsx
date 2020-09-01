import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson31 from './Lesson31';

class Challenge31 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 31: Programing Best Practices</h2>
                <div class="icons">
                <GoBook onClick={() => this.props.callback(<Lesson31 callback={this.props.callback}/>)} className="dashIcon"/>
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
 
export default Challenge31;