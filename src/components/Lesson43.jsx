import React, { Component } from '../../node_modules/react';
import "../App.css";
import {GoDashboard} from "../../node_modules/react-icons/go";
import Challenge43 from './Challenge43';


class Lesson43 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 43: React Context</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">React Context</h3>
                    <p className="flowingText">Part of the issue with React is that most of the data in the application will either be tied to the lifecycle or structure of the components.
                    The problem with components, is that if they unmount any data they held will be lost. To circumnavigate this, traditionally developers have held data higher up the hierarchy and use a method called "prop drilling"
                    which means that props are being passed through components that do not actually need them just so that the data will be able to reach the child components that do need them.</p>
                <h4>Context API</h4>
                <p className="flowingText">The minds behind React, noticed this and thought that it could be improved so they developed a feature for React called the "Context API" which allows you as the developer to store data outside of the components, similar to a global state.
                This means that the components are able to reach out and tap into the context without risking losing anything when the component unmounts, or passing state through props down several generations of components.</p>
                <p className="flowingText">At it's core, the context API allows you to create a store using .createContext like this:</p>
                <pre className="codeBlock">{`
const AppContext = React.createContext()
                `}</pre>
                <p className="flowingText">Then inside AppContext, you create a context provider component specifically to store in its state the data that is needed throughout the application.
                Then, simply wrap your application with the provider, so that it can tap into the context as needed. Let's take a look at what the provider might look like:</p>
                <pre className="codeBlock">{`
class AppProvider extends Component {
    state = {
      number : 10,
    }

    render() {
        // note: pass the entire state as props to the context

        return <AppContext.Provider value={this.state}>
        // this is an important bit of syntax to always include!
        {this.props.children}
        </AppContext.Provider>
      }
    }

    //...etc

    export default AppProvider
                `}</pre>
            <p className="flowingText">Then you can use this provider inside the render method in your application like this:</p>
            <pre className="codeBlock">{`
class App extends Component {
    render() {
      return  
        <AppProvider> 
          <div className="spacer">
            <MyGreatComponentName />
          </div>
        </AppProvider>
    }
  } 
  export default App
                `}</pre>
            <h4>Reading from the context</h4>
            <p className="flowingText">To access the context you will need to call a context consumer inside the component that you want to be able to access the store.
            This might look like this:</p>
            <pre className="codeBlock">{`
class LikesCounter extends Component {
        render() { 
        <div className="spacer">
            <AppContext.Consumer>
              {(context) => context.number}
            </AppContext.Consumer>
        </div>
        }
    }
  export default LikesCounter
                `}</pre>
                <h4>Writing to the context</h4>
                <p className="flowingText">What if you want to update the information being stored in this data store. How does this work within the context API? Well that is a great question.
                 You need to pass down a function in the app provider to act as a callback for setting the state in a child component. This might look something like this:</p>
                 <pre className="codeBlock">{`
class AppProvider extends Component {
    state = {
       number : 10,
       inc: () => {
         this.setState({number: this.state.number + 1})
       }
     }
     render() {
        return <AppContext.Provider value={this.state}>
          {this.props.children}
        </AppContext.Provider>
      }
    }
    export default AppProvider
                `}</pre>
                <p className="flowingText">Which can then be used like this:</p>
                <pre className="codeBlock">{`
class LikeButton extends Component {
    <div className="spacer">
      <AppContext.Consumer>
          {(context) => <button onClick={context.inc}>INC</button>}
      </AppContext.Consumer>
      
      <LikesCounter/>
    </div>
}
export default LikeButton
                `}</pre>

           <button className="ready" onClick={() => this.props.callback(<Challenge43 callback={this.props.callback}/>)}>Challenge</button>
    
                </div>
            </div>
         );     
    }
}
 
export default Lesson43;