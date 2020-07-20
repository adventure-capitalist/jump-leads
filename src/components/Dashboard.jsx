import React, { Component } from 'react';
import Lesson5 from "./Lesson5";
import Lesson6 from "./Lesson6";
import Lesson7 from "./Lesson7";
import Lesson8 from "./Lesson8";
import Lesson9 from "./Lesson9";
import Lesson10 from "./Lesson10";
import Lesson11 from "./Lesson11";
import Lesson12 from "./Lesson12";
import Lesson13 from "./Lesson13";
import Lesson14 from "./Lesson14";
import Lesson15 from "./Lesson15";
import Lesson16 from "./Lesson16";
import Lesson17 from "./Lesson17";

class Dashboard extends Component {
    state = { 
        ready: null
     }

    clickHandler = (component) => {
        this.setState({ready: component})

    }

    challengeCallback = (component) => {
        this.setState({ready: component})
    }
    
    render() { 
        return ( 
        <>
        {this.state.ready === null &&
        <div className="dashboardHolder">
            <div className="lessonCard">
                <h2 className="lessonTitle">Lesson 5: Intro To CSS</h2>
                <ul>
                    <li>What is CSS?</li>
                    <li>How do you write in CSS?</li>
                    <li>What all can CSS do?</li>
                    <li>How do you set up CSS?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson5 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
                <h2 className="lessonTitle">Lesson 6: CSS Declarations</h2>
                <ul>
                    <li>Text, Font, Colour and Background</li>
                    <li>Spacing, Positioning and Size</li>
                    <li>Bullets, Links and Borders</li>
                    <li>How do we measure in CSS?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson6 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
                <h2 className="lessonTitle">Lesson 7: CSS Layouts</h2>
                <ul>
                    <li>History of tables</li>
                    <li>CSS Box model</li>
                    <li>How to deal with overflow</li>
                    <li>The issue with float</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson7 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
                <h2 className="lessonTitle">Lesson 8: Responsive Design</h2>
                <ul>
                    <li>What is responsive design?</li>
                    <li>Media Queries</li>
                    <li>Mobile first development</li>
                    <li>Breakpoints</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson8 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
                <h2 className="lessonTitle">Lesson 9: Flexbox</h2>
                <ul>
                    <li>When should you use Flexbox?</li>
                    <li>Flexbox properties</li>
                    <li>flex container</li>
                    <li>flex items</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson9 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
            <h2 className="lessonTitle">Lesson 10: Advanced CSS</h2>
                <ul>
                    <li>Shadows</li>
                    <li>Borders</li>
                    <li>Backgrounds</li>
                    <li>CSS Animations</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson10 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
            <h2 className="lessonTitle">Lesson 11: Intro to SVG</h2>
                <ul>
                    <li>What is SVG?</li>
                    <li>How can we draw with SVG?</li>
                    <li>What can SVG draw?</li>
                    <li>SVG tips and tricks</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson11 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
            <h2 className="lessonTitle">Lesson 12: CSS Grid</h2>
                <ul>
                    <li>What is CSS Grid?</li>
                    <li>Planning a Grid</li>
                    <li>Grid Syntax and Terms</li>
                    <li>Navigating a Grid</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson12 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
            <h2 className="lessonTitle">Lesson 13: CSS Fonts</h2>
                <ul>
                    <li>Importing Fonts</li>
                    <li>@font-face</li>
                    <li>Downloading Fonts</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson13 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
            <h2 className="lessonTitle">Lesson 14: CSS Preprocessors</h2>
                <ul>
                    <li>What is preprocessing</li>
                    <li>What formats are there?</li>
                    <li>Variables, Mixins, and Nesting</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson14 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
            <h2 className="lessonTitle">Lesson 15: Introduction to Programming</h2>
                <ul>
                    <li>What is programming?</li>
                    <li>What is pseudo code?</li>
                    <li>How do I write good pseudo code?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson15 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
            <h2 className="lessonTitle">Lesson 16: Introduction to JavaScript</h2>
                <ul>
                    <li>What is JavaScript?</li>
                    <li>Why are we learning JavaScript?</li>
                    <li>Any relation to Java?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson16 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
            <h2 className="lessonTitle">Lesson 17: Datatypes Strings</h2>
                <ul>
                    <li>What are Datatypes?</li>
                    <li>What can I do with strings?</li>
                    <li>How can I make a string?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson17 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
            <h2 className="lessonTitle">Lesson 18: Datatypes Numbers</h2>
                <ul>
                    <li>What are Numbers?</li>
                    <li>What aren't Numbers?</li>
                    <li>What can I do with Numbers?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson18 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
        </div>
        }
        {this.state.ready !== null && 
            <div>
           {this.state.ready}
           </div>
        }
        </> 
          );
         }
}
 
export default Dashboard;
