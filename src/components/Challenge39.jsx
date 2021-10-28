import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson39 from './Lesson39';

class Challenge39 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 39: Git and Github</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson39 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>The best way to learn how to use React is to start using React. Go ahead and try to follow this tutorial in the official React Docs: <a href="https://reactjs.org/tutorial/tutorial.html">Tic-Tac-Toe Tutorial</a>.
                        The starter code is linked in the docs, but in case you can't find it, <a href="https://codepen.io/gaearon/pen/oWWQNa?editors=0010">here</a> it is again.</p>
                    </div>
        </div> 
        );
    }
}
 
export default Challenge39;