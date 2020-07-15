import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson15 from './Lesson15';

class Challenge15 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 15:  Introduction to Programming</h2>
                <div class="icons">
                <GoBook onClick={() => this.props.callback(<Lesson15 callback={this.props.callback}/>)} className="dashIcon"/>
                <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <p>Open up a word document and write out instructions in pseduo code for how to create the perfect cup of Tea.</p>
                <p>Remember to think about what the computer needs from you in order to understand what you want it to do.</p>
                <p>Be as specific as possible and try to eliminate any room for misunderstanding.</p>
            </div>
        </div> 
        );
    }
}
 
export default Challenge15;