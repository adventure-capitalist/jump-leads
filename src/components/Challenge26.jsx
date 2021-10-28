import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson26 from './Lesson26';

class Challenge26 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 26: Regular Expressions</h2>
                <div class="icons">
                    <GoBook onClick={() => this.props.callback(<Lesson26 callback={this.props.callback}/>)} className="dashIcon"/>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            </div>
                <div className="spacer"></div>
                    <div className="lessonBody">
                        <p>The best way to learn how to write some regex is to start writing regex. Go through the short challenges on the <a href="https://regexone.com/">RegexOne website here</a> and complete each of them in order.</p>
                        <p>There is also a regex crossword game that you can use to practice your regular expressions. <a href="https://regexcrossword.com/">The website is here</a>, please have a go and remember to have fun!</p>
                    </div>
        </div> 
        );
    }
}
 
export default Challenge26;