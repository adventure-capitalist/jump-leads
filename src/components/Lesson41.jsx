import React, { Component } from '../../node_modules/react';
import "../App.css";
import {GoDashboard} from "../../node_modules/react-icons/go";
import Challenge41 from './Challenge41';


class Lesson41 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 41: React State</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">What makes State special?</h3>
                <p className="flowingText"> 
                Like props, state is an object that holds information about the component, but there are subtle differences in how state works.
                A component doesn't come with state automatically. A component without state is often nicknamed "stateless".
                You should give a component state whenever you think that it will need to keep track of information between re-renderings of itself.
                Crucially, state can be changed or written to whereas props cannot.</p>
                <h3 className="sectionHeading">How do we write to state?</h3>
                <p className="flowingText">There are a few different methods available to update your components' states, however, you must never update the state directly.
                This is an important rule in React. You must never try to change or "mutate" the state directly.
                You must be thinking: "okay great... well how do I mutate the state indirectly?" and there is a method designed specifically for that let's look at what you should and shouldn't do:</p>
                <pre className="codeBlock">{`
// THIS WON'T WORK

updateCount () {
    this.state.count = 5;
}

// THIS WILL WORK 

updateCount() {
    this.setState({count: 5})
}
                `}</pre>
                <p className="flowingText">Here you can see that the method you should use is called setState. 
                This method technically takes function that returns an object. Here is an example of passing it a function:</p>
                <pre className="codeBlock">{`
updateCount() {
    this.setState((prevState, props) => {
    return { count: prevState.count + 1 }
    });
}
                `}</pre>
                 <p className="flowingText">The first argument is called prevState, and as you may have guessed, this means that you will have access to the previous state here.
                 You will often see examples of state being set using only an object. Technically this works and is okay, but be aware that setState operates asynchronously, so there are times 
                 when you will need to pass a function instead of an object if you find there are syncing issues.</p>
            <h3 className="sectionHeading">What happens when the state is updated?</h3>
                <p className="flowingText">Every time the state is updated, React will automatically re-render the component. 
                If you think back to the Twitter example, this re-render is what happens when you actually see the number of re-tweets update in real-time.
                In the render method of the component, this reading of the values in the state might look something like this</p>
                <pre className="codeBlock">{`
<p>Liked {this.state.count} times</p>
                `}</pre>
            <h3 className="sectionHeading">Which components should hold state?</h3>
                <p className="flowingText">Well, there is more than one answer to that question. Bear in mind that if your state is stored in a component that will un-mount then you will lose all the data in that component.
                So perhaps it would be better to store the state higher up in the component hierarchy and pass props down. The problem with passing down props through several generations of the component hierarchy is that this will require several different callbacks.
                This behavior is called "prop-drilling" and it can get kind of clumsy depending on how pervasive this practice is in your project.
                The solution to both of these issues is to store the state separately from the components.</p>
            <h3 className="sectionHeading">React Context</h3>
                <p className="flowingText">React comes with a Context API built-in. Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                Basically, it allows you to make particular data available to all components throughout the component hierarchy no matter how deeply nested that component may be. To get started, you can use the .createContext method like this:</p>
                <pre className="codeBlock">{`
import React from "react";

const ThemeContext = React.createContext("light");
export default ThemeContext;
                `}</pre>
                <p className="flowingText">In the above example, we passed the createContext method a string: "light" but in reality you can pass in anything.
                This alone is not enough, to share the context with all the other components, to start sharing you'll need to use a provider.
                These providers come built-in to React. This is used in the render method:</p>
                <pre className="codeBlock">{`
function App() {
    const theme = "light";
    return (
      <ThemeContext.Provider value = {theme}>
        <div>
        </div>
      </ThemeContext.Provider>
    );
  }
                `}</pre>
                <p className="flowingText">So now that you've provided the context to the other components, how can you access it? Well, React also has a method for "consuming the context" that is provided. 
                Depending on whether or not you are writing a class component or a functional component.</p>
                <h4>Class Components</h4>
                <p className="flowingText">With class components, you'll want to import the context, then access it using the contextType object like this:</p>
                <pre className="codeBlock">{`
import React, { Component } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

class Main extends Component{
    constructor(){
        super();
    }
    static contextType = ThemeContext;
    render(){
        const currentTheme = AppTheme[this.context];
        return(
            <main></main>
        );
    }

}
                `}</pre>
                 <p className="flowingText">But with functional components you'll want to use something called a hook which we will cover in the next lesson.
                 But let's leave this here for reference.</p>
                 <pre className="codeBlock">{`
const Main = () => {
    const theme = useContext(ThemeContext);
    const currentTheme = AppTheme[theme];
    return(
        <main style = {{
            padding: "1rem",
            backgroundColor: \`\${currentTheme.backgroundColor}\`,
            color: \`\${currentTheme.textColor}\`,
        
        }}>
            <h1>Heading 1</h1>
            <p>This is a paragraph</p>
            <button> This is a button</button>
        </main>
    );
}

export default Main;
                `}</pre>
                <p className="flowingText">If the Context API seems a bit intense, fear not, we will talk more about it in a later lesson and there are libraries that you can use instead. Like <a href="https://github.com/jamiebuilds/unstated-next">Unstated</a>, or <a href="https://redux.js.org/introduction/getting-started">Redux</a></p>
                 <button className="ready" onClick={() => this.props.callback(<Challenge41 callback={this.props.callback}/>)}>Challenge</button>
        
                </div>
            </div>
         );     
    }
}
 
export default Lesson41;