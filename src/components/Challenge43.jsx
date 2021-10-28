import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson43 from './Lesson43';

class Challenge43 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 43: React Context API</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson43 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                <div className="lessonBody">
                        <p>Please follow along with <a href="https://www.freecodecamp.org/news/react-context-in-5-minutes/">this Free Code Camp tutorial</a> about React State management.</p>
                        <p>Here you will learn more about how to use the React Context API, it claims the tutorial will only take five minutes but it may take up to 30 depending on how quick you are. Best of luck and have fun!</p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge43;