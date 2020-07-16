import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson16 from './Lesson16';

class Challenge16 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 15:  Introduction to Programming</h2>
                <div class="icons">
                <GoBook onClick={() => this.props.callback(<Lesson16 callback={this.props.callback}/>)} className="dashIcon"/>
                <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
        
        </div> 
        );
    }
}
 
export default Challenge16;