import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson12 from './Lesson12';

class Challenge11 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 12 CSS Grid</h2>
                <div class="icons">
                <GoBook onClick={() => this.props.callback(<Lesson12 callback={this.props.callback}/>)} className="dashIcon"/>
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
 
export default Challenge12;