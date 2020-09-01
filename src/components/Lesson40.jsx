import React, { Component } from '../../node_modules/react';
import "../App.css";
import {GoDashboard} from "../../node_modules/react-icons/go";
import Challenge40 from './Challenge40';




class Lesson40 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 40: React Props</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">Rendering Components with Props</h3>
                <p className="flowingText">We've already gone through how props and state are theoretically different, and we've covered React Components. 
                Let's go ahead and talk about how to pass props to a component that you are rendering. Props are passed inside your JSX element's tags like attributes would be. 
                Here is an example</p>
                <pre className="codeBlock">{`
class App extends React.Component {
    render() {
      return <Welcome name="Taylor"/>;
    }
  }
                `}</pre>
                <p className="flowingText">In this example, you can see that there is a prop called "name" and it's value is "Taylor". 
                That's all it takes to successfully pass down a prop, but let's take a look now at that Welcome component and see what it can do with the props it is given.</p>
                <pre className="codeBlock">{`
class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
                `}</pre>
                <p className="flowingText">Here you can see that the prop is being read using "this.props" and then the name of the prop wrapped in JSX syntax. 
                It is important to remember that props are read only. It is not possible for a component to update or write to it's own props. There is no "setProps".
                This can be a bit confusing because it's possible to read the props and use them in equations like this:</p>
                <pre className="codeBlock">{`
function sum(a, b) {
    return a + b;
  }      `}</pre>
                <p className="flowingText">In this example, imagine a and b are props, you can add them together and that is totally kosher. But what isn't kosher is if you try to
                manipulate the values and then reassign the props like this: </p>
                <pre className="codeBlock">{`
function withdraw(account, amount) {
    account.total -= amount;
  }    `}</pre>
  <p className="flowingText">As you can see, this function is trying to assign a new value to the total key on it's account prop. That is the thing that is forbidden and is what is meant when you read that
  "React props are read only". It might be easier to think about them as un-able to be written to.</p>
  
                 <button className="ready" onClick={() => this.props.callback(<Challenge40 callback={this.props.callback}/>)}>Challenge</button>
        
                </div>
            </div>
         );     
    }
}
 
export default Lesson40;