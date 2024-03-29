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
import Lesson18 from "./Lesson18";
import Lesson19 from "./Lesson19";
import Lesson20 from "./Lesson20";
import Lesson21 from "./Lesson21";
import Lesson22 from "./Lesson22";
import Lesson23 from "./Lesson23";
import Lesson24 from "./Lesson24";
import Lesson25 from "./Lesson25";
import Lesson26 from "./Lesson26";
import Lesson27 from "./Lesson27";
import Lesson28 from "./Lesson28";
import Lesson29 from "./Lesson29";
import Lesson30 from "./Lesson30";
import Lesson31 from "./Lesson31";
import Lesson32 from "./Lesson32";
import Lesson33 from "./Lesson33";
import Lesson34 from "./Lesson34";
import Lesson35 from "./Lesson35";
import Lesson36 from "./Lesson36";
import Lesson37 from "./Lesson37";
import Lesson38 from "./Lesson38";
import Lesson39 from "./Lesson39";
import Lesson40 from "./Lesson40";
import Lesson41 from "./Lesson41";
import Lesson42 from "./Lesson42";
import Lesson43 from "./Lesson43";
import Lesson44 from "./Lesson44";
import Lesson45 from "./Lesson45";
import Lesson46 from "./Lesson46";
import Lesson47 from "./Lesson47";
import Lesson48 from "./Lesson48";

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
            <div className="lessonCard" style={{backgroundColor: "#c8cdf7"}}>
                <h2 className="lessonTitle">Lesson 5: Intro To CSS</h2>
                <ul>
                    <li>What is CSS?</li>
                    <li>How do you write in CSS?</li>
                    <li>What all can CSS do?</li>
                    <li>How do you set up CSS?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson5 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8cdf7"}}>
                <h2 className="lessonTitle" >Lesson 6: CSS Declarations</h2>
                <ul>
                    <li>Text, Font, Colour and Background</li>
                    <li>Spacing, Positioning and Size</li>
                    <li>Bullets, Links and Borders</li>
                    <li>How do we measure in CSS?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson6 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8cdf7"}}>
                <h2 className="lessonTitle">Lesson 7: CSS Layouts</h2>
                <ul>
                    <li>History of tables</li>
                    <li>CSS Box model</li>
                    <li>How to deal with overflow</li>
                    <li>The issue with float</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson7 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8cdf7"}}>
                <h2 className="lessonTitle">Lesson 8: Responsive Design</h2>
                <ul>
                    <li>What is responsive design?</li>
                    <li>Media Queries</li>
                    <li>Mobile first development</li>
                    <li>Breakpoints</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson8 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8cdf7"}}>
                <h2 className="lessonTitle">Lesson 9: Flexbox</h2>
                <ul>
                    <li>When should you use Flexbox?</li>
                    <li>Flexbox properties</li>
                    <li>flex container</li>
                    <li>flex items</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson9 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8cdf7"}}>
            <h2 className="lessonTitle">Lesson 10: Advanced CSS</h2>
                <ul>
                    <li>Shadows</li>
                    <li>Borders</li>
                    <li>Backgrounds</li>
                    <li>CSS Animations</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson10 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8cdf7"}}>
            <h2 className="lessonTitle">Lesson 11: Intro to SVG</h2>
                <ul>
                    <li>What is SVG?</li>
                    <li>How can we draw with SVG?</li>
                    <li>What can SVG draw?</li>
                    <li>SVG tips and tricks</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson11 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8cdf7"}}>
            <h2 className="lessonTitle">Lesson 12: CSS Grid</h2>
                <ul>
                    <li>What is CSS Grid?</li>
                    <li>Planning a Grid</li>
                    <li>Grid Syntax and Terms</li>
                    <li>Navigating a Grid</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson12 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8cdf7"}}>
            <h2 className="lessonTitle">Lesson 13: CSS Fonts</h2>
                <ul>
                    <li>Importing Fonts</li>
                    <li>@font-face</li>
                    <li>Downloading Fonts</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson13 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8cdf7"}}>
            <h2 className="lessonTitle">Lesson 14: CSS Preprocessors</h2>
                <ul>
                    <li>What is preprocessing</li>
                    <li>What formats are there?</li>
                    <li>Variables, Mixins, and Nesting</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson14 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 15: Introduction to Programming</h2>
                <ul>
                    <li>What is programming?</li>
                    <li>What is pseudo code?</li>
                    <li>How do I write good pseudo code?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson15 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 16: Introduction to JavaScript</h2>
                <ul>
                    <li>What is JavaScript?</li>
                    <li>Why are we learning JavaScript?</li>
                    <li>Any relation to Java?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson16 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 17: Datatypes Strings</h2>
                <ul>
                    <li>What are Datatypes?</li>
                    <li>What can I do with strings?</li>
                    <li>How can I make a string?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson17 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 18: Datatypes Numbers</h2>
                <ul>
                    <li>What are Numbers?</li>
                    <li>What aren't Numbers?</li>
                    <li>What can I do with Numbers?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson18 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 19: Datatypes Booleans and Empties</h2>
                <ul>
                    <li>What are Booleans?</li>
                    <li>What are the empty data types?</li>
                    <li>How can I figure out the type of some data?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson19 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 20: Variables</h2>
                <ul>
                    <li>What are Variables?</li>
                    <li>How to make good variable names</li>
                    <li>JavaScript variables and syntax</li>
                    <li>The three types of variables</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson20 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 21: Datatypes Objects</h2>
                <ul>
                    <li>What is an object?</li>
                    <li>How to create an object</li>
                    <li>Accessing information in objects</li>
                    <li>Modifying objects</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson21 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 22: Datatypes Arrays</h2>
                <ul>
                    <li>What is an array?</li>
                    <li>How to create an array</li>
                    <li>Accessing information in arrays</li>
                    <li>Array Methods</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson22 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 23: Introduction to Operators</h2>
                <ul>
                    <li>What are operators?</li>
                    <li>Assignment operators</li>
                    <li>Comparison operators</li>
                    <li>Logical operators</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson23 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 24: Introduction to Functions</h2>
                <ul>
                    <li>What are functions?</li>
                    <li>How are functions writen?</li>
                    <li>Referencing functions</li>
                    <li>Running functions</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson24 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 25: Conditionals, Loops, and Timers</h2>
                <ul>
                    <li>What are Conditionals?</li>
                    <li>What are Loops?</li>
                    <li>What are Timers?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson25 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 26: Regular Expressions</h2>
                <ul>
                    <li>Introduction to Regular Expressions</li>
                    <li>Meta Characters</li>
                    <li>What can regex do?</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson26 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 27: Dates</h2>
                <ul>
                    <li>Types of Dates</li>
                    <li>The Date Object</li>
                    <li>Date Formatting</li>
                    <li>Moment JS</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson27 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 28: Advanced Functions</h2>
                <ul>
                    <li>How do functions work?</li>
                    <li>Try/Catch and Async/Await</li>
                    <li>Scope and Context</li>
                    <li>Constructor Functions</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson28 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 29: Introduction to ES6</h2>
                <ul>
                    <li>Fat Arrow Functions</li>
                    <li>Destructuring</li>
                    <li>Template literals</li>
                    <li>Spread and rest operators</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson29 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 30: Object Theory</h2>
                <ul>
                    <li>Adding and removing from objects</li>
                    <li>In, Delete and For/In</li>
                    <li>Iterating</li>
                    <li>Adding and removing using methods</li>
                    <li>Classes and Prototypes</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson30 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 31: Programing Best Practice</h2>
                <ul>
                    <li>KISS</li>
                    <li>DRY</li>
                    <li>SOLID</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson31 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 32: Document Object Model</h2>
                <ul>
                    <li>What is the DOM?</li>
                    <li>How to do things with the DOM</li>
                    <li>The DOM and Events</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson32 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 33: JavaScript in the Browser</h2>
                <ul>
                    <li>Including JavaScript in webpages</li>
                    <li>What tools does the browser have</li>
                    <li>Third party scripts</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson33 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 34: JavaScript Transport</h2>
                <ul>
                    <li>What is Transport?</li>
                    <li>Requesting Data</li>
                    <li>HTTP response codes</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson34 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 35: APIs</h2>
                <ul>
                    <li>Intro to the Stack</li>
                    <li>Callbacks/Promises/async &amp; await</li>
                    <li>AJAX clients</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson35 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 36: Command Line Interface</h2>
                <ul>
                    <li>What is the Command Line?</li>
                    <li>Command line Syntax</li>
                    <li>Commands that are available</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson36 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 37: Git and Github</h2>
                <ul>
                    <li>Getting started with git</li>
                    <li>Your first commit</li>
                    <li>Git branches</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson37 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#f7f6c8"}}>
            <h2 className="lessonTitle">Lesson 38: JavaScript Animation</h2>
                <ul>
                    <li>Why Animation</li>
                    <li>SVG and JavaScript Animation</li>
                    <li>Third Party Libraries</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson38 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8f2f7"}}>
            <h2 className="lessonTitle">Lesson 39: Introduction to React</h2>
                <ul>
                    <li>History of React</li>
                    <li>Single Page Applications</li>
                    <li>The React Dynamics</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson39 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8f2f7"}}>
            <h2 className="lessonTitle">Lesson 40: React Props</h2>
                <ul>
                    <li>Rendering Components with Props</li>
                    <li>Passing Props</li>
                    <li>Immutability of Props</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson40 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8f2f7"}}>
            <h2 className="lessonTitle">Lesson 41: React State</h2>
                <ul>
                    <li>Uniqueness of state</li>
                    <li>Writing to state</li>
                    <li>State updates</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson41 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8f2f7"}}>
            <h2 className="lessonTitle">Lesson 42: React Hooks</h2>
                <ul>
                    <li>State functionality</li>
                    <li>useContext</li>
                    <li>DIY hooks</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson42 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8f2f7"}}>
            <h2 className="lessonTitle">Lesson 43: React Context API</h2>
                <ul>
                    <li>Context API</li>
                    <li>Reading context</li>
                    <li>Writing context</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson43 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8f2f7"}}>
            <h2 className="lessonTitle">Lesson 44: Graphing and Headers</h2>
                <ul>
                    <li>JavaScript Canvas</li>
                    <li>Graphing libraries</li>
                    <li>Realtime data</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson44 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8f2f7"}}>
            <h2 className="lessonTitle">Lesson 45: Serverless</h2>
                <ul>
                    <li>Functions as a service</li>
                    <li>Pros to Serverless</li>
                    <li>Cons to Serverless</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson45 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8f2f7"}}>
            <h2 className="lessonTitle">Lesson 46: Offline</h2>
                <ul>
                    <li>Web workers</li>
                    <li>Service workers</li>
                    <li>Progressive web apps</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson46 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8f2f7"}}>
            <h2 className="lessonTitle">Lesson 47: GraphQL</h2>
                <ul>
                    <li>GraphQL</li>
                    <li>GraphCMS</li>
                    <li>GraphiQL</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson47 callback={this.challengeCallback}/>)}>Jump In</button>
            </div>
            <div className="lessonCard" style={{backgroundColor: "#c8f2f7"}}>
            <h2 className="lessonTitle">Lesson 48: Servers</h2>
                <ul>
                    <li>Express JS</li>
                    <li>Routes</li>
                    <li>Middleware</li>
                </ul>
                <button className="ready" onClick={() => this.clickHandler(<Lesson48 callback={this.challengeCallback}/>)}>Jump In</button>
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
