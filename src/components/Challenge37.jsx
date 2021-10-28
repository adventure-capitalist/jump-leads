import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson37 from './Lesson37';

class Challenge37 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 37: Git and Github</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson37 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>The best way to learn how to use git is to start using git. Go through the short challenges on the <a href="https://learngitbranching.js.org/">Learn git branching website here</a> and complete each of them in order. BE WARNED: the interface is a little bit clunky. The settings in the BOTTOM RIGHT corner are super useful to know about.</p>
                        <p>There is also a more practical git game that is saved to a repo that you can use to practice your git skills in the command line. <a href="https://github.com/adventure-capitalist/git-game"> It can be found here for you</a>. Some of the riddles can be a little tricky, so the solutions are <a href="https://ankitvad.github.io/blog/completingthegitgame.html">here</a> if you do get stuck but please try to do as much on your own as you can! </p>
                    </div>
        </div> 
        );
    }
}
 
export default Challenge37;