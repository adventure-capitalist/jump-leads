import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson36 from './Lesson36';

class Challenge36 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 36: The Command Line Interface</h2>
                <div class="icons">
                <GoBook onClick={() => this.props.callback(<Lesson36 callback={this.props.callback}/>)} className="dashIcon"/>
                <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <p className="flowingText">For this week's challenge, go ahead and beat these two games to help you master the command line.</p>
                <p className="flowingText">1) <a href="https://vim-adventures.com">https://vim-adventures.com</a></p>
                <p className="flowingText">2) <a href="https://github.com/veltman/clmystery">Command Line Murder Mystery</a></p>
                <p className="flowingText">Feel free to refer back to the lesson, should you get stuck.</p>
            </div>
        </div> 
        );
    }
}
 
export default Challenge36;