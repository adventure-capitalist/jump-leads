import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson33 from './Lesson33';

class Challenge33 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 33: JavaScript in the Browser</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson33 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                <div className="lessonBody">
                        <p>Fork the Code Pen bellow follow the instructions written in the JavaScript column.</p>
                        <p>Here you will see more challenges based on the DOM. Best of luck and have fun!</p>
                        <p className="codepen" data-height="309" data-theme-id="light" data-default-tab="css,result" data-user="jmsherry" data-slug-hash="rNxVzxY" style={{height: "309px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em"}} data-pen-title="DOM Selection Challenge">
                            <span>See the Pen <a href="https://codepen.io/jmsherry/pen/xxVVwbq?editors=0010">DOM Selection Challenge</a></span>
                        </p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge33;