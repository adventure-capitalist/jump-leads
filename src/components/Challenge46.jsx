import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson46 from './Lesson46';

class Challenge46 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 46: Offline</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson46 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>Please play through <a href="https://serviceworkies.com">this really nice training game</a> about creating your first serverless application.</p>
                        <p>Also have a look at <a href="https://www.youtube.com/watch?v=17kGWJOuL-A&feature=youtu.be">this training video</a> from google. Best of luck and have fun!</p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge46;