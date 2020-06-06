import React, { Component } from 'react';
import {GoDashboard} from "react-icons/go";

class Challenge5 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 5: Intro To CSS</h2>
                <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
        </div> 
        );
    }
}
 
export default Challenge5;