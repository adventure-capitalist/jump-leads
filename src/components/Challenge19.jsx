import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson19 from './Lesson19';

class Challenge19 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 19: Booleans and Empty Data Types</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson19 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>Fork the Code Pen bellow follow the instructions written in the JavaScript column.</p>
                        <p>Here you will see several different challenges based on booleans and empty data types. Best of luck and have fun!</p>
                        <p className="codepen" data-height="309" data-theme-id="light" data-default-tab="css,result" data-user="ashleylaurel" data-slug-hash="rNxVzxY" style={{height: "309px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em"}} data-pen-title="Is it truly empty">
                            <span>See the Pen <a href="https://codepen.io/ashleylaurel/pen/YzwBybw">Is it truly empty?</a></span>
                        </p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge19;