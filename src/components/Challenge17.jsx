import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson17 from './Lesson17';

class Challenge17 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 17:  Strings</h2>
                <div class="icons">
                <GoBook onClick={() => this.props.callback(<Lesson17 callback={this.props.callback}/>)} className="dashIcon"/>
                <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                <div className="lessonBody">
                <p>Fork the Code Pen bellow follow the instructions written in the JavaScript column.</p>
                <p>Here you will see several different strings which need to be edited to escape some of the characters they contain. Best of luck!</p>
                <p>You can use <a href={"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"}>this reference list</a> of all the CSS properties to help you. And most importantly, have fun!</p>
                <p className="codepen" data-height="309" data-theme-id="light" data-default-tab="css,result" data-user="ashleylaurel" data-slug-hash="rNxVzxY" style={{height: "309px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em"}} data-pen-title="Beauty and the Beast">
                    <span>See the Pen <a href="https://codepen.io/ashleylaurel/pen/GRoYBor">Brown Paper Packages Tied up with String</a></span>
                </p> </div>
                </div>
            </div>
        
        </div> 
        );
    }
}
 
export default Challenge17;