import React, { Component } from 'react';
import Lesson5 from "./Lesson5";
import Lesson6 from "./Lesson6";
import Lesson7 from "./Lesson7";

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
