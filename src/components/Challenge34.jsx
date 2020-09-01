import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson34 from './Lesson34';

class Challenge34 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 34: JavaScript Transport</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson34 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>Play this HTTP Error code level matching game and learn what the different levels mean: <a href="https://adventure-capitalist.github.io/HTTP-Status-Code-Memory-Game/">HTTP Error Memory Game</a></p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge34;