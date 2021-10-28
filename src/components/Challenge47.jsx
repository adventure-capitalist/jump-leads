import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson47 from './Lesson47';

class Challenge47 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 47: GraphQL</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson47 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                <div className="lessonBody">
                        <p>Please follow along with <a href="https://www.youtube.com/watch?v=yKFoAF7J0mc">this tutorial</a> about creating a Pokemon app using React and GraphQL.</p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge47;