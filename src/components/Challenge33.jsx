import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson33 from './Lesson33';

class Challenge33 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 33: JavaScript DOM</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson33 callback={this.props.callback}/>)} className="dashIcon"/>
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
 
export default Challenge33;