import React, { Component } from 'react';
import Lesson5 from "./Lesson5";
import Lesson6 from "./Lesson6";

class Dashboard extends Component {
    state = { 
        ready: null
     }

    clickHandler = (component) => {
        this.setState({ready: component})

    }
    
    render() { 
        return ( 
        <>
        {this.state.ready === null &&
        <div className="dashboardHolder">
            <div className="lessonCard">
                <h2 className="lessonTitle">Lesson 5: Intro To CSS</h2>
                <button className="ready" onClick={() => this.clickHandler(<Lesson5/>)}>Jump In</button>
            </div>
            <div className="lessonCard">
                <h2 className="lessonTitle">Lesson 6: CSS Declarations</h2>
                <button className="ready" onClick={() => this.clickHandler(<Lesson6/>)}>Jump In</button>
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
