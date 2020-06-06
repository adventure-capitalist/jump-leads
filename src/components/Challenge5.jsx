import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson5 from './Lesson5';

class Challenge5 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 5: Intro To CSS</h2>
                <div class="icons">
                <GoBook onClick={() => this.props.callback(<Lesson5 callback={this.props.callback}/>)} className="dashIcon"/>
                <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <p>Fork the Code Pen bellow follow the instructions written in the HTML column.</p>
                <p>Because this is Code Pen, you do not need to worry about importing or creating any css files into the HTML. That part is handled for you automatically by the interface. (You lucky duck!)</p>
                <p>You will need to come up with class names to add to the HTML tags. Those class names can then be used as selectors, in CSS instructions.</p>
                <p>You can use <a href={"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"}>this reference list</a> of all the CSS properties to help you. And most importantly, have fun!</p>
                <p className="codepen" data-height="309" data-theme-id="light" data-default-tab="css,result" data-user="ashleylaurel" data-slug-hash="rNxVzxY" style={{height: "309px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em"}} data-pen-title="Beauty and the Beast">
                    <span>See the Pen <a href="https://codepen.io/ashleylaurel/pen/rNxVzxY">Beauty and the Beast</a></span>
                </p>
            </div>
        </div> 
        );
    }
}
 
export default Challenge5;