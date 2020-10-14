import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson44 from './Lesson44';

class Challenge44 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 44: Graphing and Headers</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson44 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                <div className="lessonBody">
                        <p>Please follow along with <a href="https://www.freecodecamp.org/news/learn-d3-js-in-5-minutes-c5ec29fb0725/">this Free Code Camp tutorial</a> about d3.</p>
                        <p>Here you will learn more about how to use d3 and graph in real time, it claims the tutorial will only take five minutes but it may take up to 30 depending on how quick you are. Best of luck and have fun!</p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge44;