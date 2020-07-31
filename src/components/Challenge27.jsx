import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson27 from './Lesson27';

class Challenge27 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 27: JavaScript Dates</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson27 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>Try to think of five significant dates in your life, the first of which should probably be the day you were born, and go ahead and try and create variables and set them to contain each of these dates.</p>
                    </div>
        </div> 
        );
    }
}
 
export default Challenge27;