import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson38 from './Lesson38';

class Challenge38 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 38: JavaScript Animation</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson38 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>Fork the Code Pen bellow follow the instructions written in the JavaScript column.</p>
                        <p>Here you will see a challenge for you based off of GreenSocks Tweens and Animation. Best of luck and have fun!</p>
                        <p className="codepen" data-height="309" data-theme-id="light" data-default-tab="css,result" data-user="ashleylaurel" data-slug-hash="rNxVzxY" style={{height: "309px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid", margin: "1em 0", padding: "1em"}} data-pen-title="Smells like Tween Spirit">
                            <span>See the Pen <a href="https://codepen.io/ashleylaurel/pen/BaKRqmE">Smells like Tween Spirit</a></span>
                        </p>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge38;