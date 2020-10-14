import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson48 from './Lesson48';

class Challenge48 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 48: Servers</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson48 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                <div className="lessonBody">
                        <p>Please follow along with <a href="https://scotch.io/tutorials/build-a-blog-using-expressjs-and-react-in-30-minutes">this tutorial</a> about creating a blog using React and Express.js</p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge48;