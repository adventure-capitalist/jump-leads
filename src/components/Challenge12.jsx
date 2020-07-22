import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson12 from './Lesson12';

class Challenge12 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 12: CSS Grid</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson12 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>Fork the Code Pen bellow follow the instructions written in the CSS column.</p>
                        <p>Here you will see several different challenges based on the CSS grid. Best of luck!</p>
                        <p>You can use <a href={"https://css-tricks.com/snippets/css/complete-guide-grid/"}>this guide</a> as reference. And most importantly, have fun!</p>
                        <p className="codepen" data-height="309" data-theme-id="light" data-default-tab="css,result" data-user="ashleylaurel" data-slug-hash="rNxVzxY" style={{height: "309px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em"}} data-pen-title="Grid Locked">
                            <span>See the Pen <a href="https://codepen.io/ashleylaurel/pen/MWKLKjL">Grid Locked</a></span>
                        </p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge12;