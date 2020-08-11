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
                <p className="flowingText">For this week's challenge, go ahead and beat these two games to help you master the art of flexbox.</p>
                <p className="flowingText">1) <a href="https://flexboxfroggy.com/">https://flexboxfroggy.com/</a></p>
                <p className="flowingText">2) <a href="http://www.flexboxdefense.com/">http://www.flexboxdefense.com/</a></p>
                <p className="flowingText">Feel free to refer back to the lesson, should you get stuck.</p>
            </div>
        </div> 
        );
    }
}
 
export default Challenge9;