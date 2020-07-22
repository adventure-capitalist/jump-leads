import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson18 from './Lesson18';

class Challenge18 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 18:  Strings</h2>
                <div class="icons">
                <GoBook onClick={() => this.props.callback(<Lesson18 callback={this.props.callback}/>)} className="dashIcon"/>
                <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>Fork the Code Pen bellow follow the instructions written in the JavaScript column.</p>
                        <p>Here you will see several different challenges based on numbers. Best of luck!</p>
                        <p>You can use <a href={"https://www.tutorialrepublic.com/javascript-reference/javascript-number-object.php"}>this reference list</a> <a href="https://www.tutorialrepublic.com/javascript-tutorial/javascript-math-operations.php">and this reference list</a> of all the methods available to help you. And most importantly, have fun!</p>
                        <p className="codepen" data-height="309" data-theme-id="light" data-default-tab="css,result" data-user="ashleylaurel" data-slug-hash="rNxVzxY" style={{height: "309px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em"}} data-pen-title="Strength in Numbers">
                            <span>See the Pen <a href="https://codepen.io/ashleylaurel/pen/PoZXjLj">Strength in Numbers</a></span>
                        </p>
                    </div>
                </div>
            
        
        </div> 
        );
    }
}
 
export default Challenge18;