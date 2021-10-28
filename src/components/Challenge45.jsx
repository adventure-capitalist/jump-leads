import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson45 from './Lesson45';

class Challenge45 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 45: React State</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson45 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>Please follow along with <a href="https://hackernoon.com/a-crash-course-on-serverless-with-node-js-632b37d58b44?ref=hackernoon.com">this tutorial</a> about creating your first serverless application.</p>
                        <p>Do note, that although there is also a framework called serverless that is used in the tutorial, serverless development as a concept extends beyond just that framework. Best of luck and have fun!</p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge45;