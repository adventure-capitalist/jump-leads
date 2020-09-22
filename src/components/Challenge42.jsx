import React, { Component } from '../../node_modules/react';
import {GoDashboard, GoBook} from "../../node_modules/react-icons/go";
import Lesson42 from './Lesson42';

class Challenge42 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 42: React Hooks</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson42 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>Follow along with this <a href="https://www.youtube.com/watch?time_continue=7&v=Z5RbPrK4VqM&feature=emb_logo">Scrimba tutorial</a> where you will learn how to build a tic-tac toe game using React Hooks.
                        The course is given in English by Thomas Weibenfalk, a Swedish developer and lasts about 40 minutes in total.</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z5RbPrK4VqM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
        
        </div> 
        );
    }
}
 
export default Challenge42;