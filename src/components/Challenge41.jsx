import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson41 from './Lesson41';

class Challenge41 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 41: React State</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson41 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>Please follow along with <a href="https://www.digitalocean.com/community/tutorials/how-to-manage-state-on-react-class-components">this Digital Ocean tutorial</a> about React State management.</p>
                        <p>Here you will learn more about using state in a component, and setting state from a static value. Best of luck and have fun!</p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge41;