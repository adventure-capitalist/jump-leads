import React, { Component } from '../../node_modules/react';
import "../App.css";
import {GoDashboard} from "../../node_modules/react-icons/go";
import Challenge42 from './Challenge42';


class Lesson42 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 42: React Hooks</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">What are Hooks?</h3>
                    <p className="flowingText">Hooks are a way of adding functionality to a function component in React. 
                    This includes state and some lifecycle methods which previously required a class component. 
                    The people who build React (Facebook) say that although there are no plans to stop supporting class components, the future is in hooks.
                    There are plans for React to move towards emerging technologies that involve pre-compiling and not all class components will be able to cope with this.
                    You can make custom hooks that do common tasks and keep track of important variables which can enhance the functionality of the component.
                    Hooks are designed to help share functionality between components, including the functionality that state and some lifecycle methods provides.</p>
                <h4>Lifecycle functionality</h4>
                    <p className="flowingText">With functional components, you can use useEffect() instead of: componentDidMount(), componentDidUpdate(), and componentWillUnmount().
                    When you use useEffect(), it's not exactly like a lifecycle method. It's not a perfect equivalent. The useEffect method tells React to run your "effect" after changes have been made to the DOM.
                    These effects are declared inside the component so they have access to both the props and the state. By default, React runs the effects after every single render.
                    You can also specif how to clean up after the effects after them by returning a function so that one function is run while the component is mounted
                    and another function is run to clean up right before the component unmounts.
                    </p>
                <h4>State functionality</h4>
                    <p className="flowingText">The useState hook replaces the state that we know from class components.
                    Lets look at an example.</p>
                    <pre className="codeBlock">{`
const [count, setCount] = useState(0)
                `}</pre>
                <p className="flowingText">As you can see in this example, you first declare a variable (count), and you declare the name of a setter function which will be used to update that variable (setCount). 
                Then you can use the useState hook and pass it the initial value you would like to initialize. Crucially, the setter function also takes a new value as an argument. 
                Or it can take a function that accepts the last value of the state if you're getting real fancy.
                Let's take a look at a useEffect example too while we are here.</p>
                <pre className="codeBlock">{`
useEffect(
    () => {
      const handler = setTimeout(() => { // do a thing on mount/update
      return () => {
        clearTimeout(handler); // do a thing on unmount
      };
    },
    [value, delay] // watch these (dependencies), if they change re-run.
  );
                `}</pre>
                <p className="flowingText">If you don't include an array of dependencies for the useEffect hook to watch, the useEffect hook will run on every render.
                If you include an empty array, it will only run on the initial render. And if the array actually contains dependencies, then it will only run if those dependencies change.</p>
            <h4>useContext Hook</h4>
                <p className="flowingText">The useContext hook taps into the context API that we were talking about earlier. If you have created a context using React.createContext, and saved it to a variable, you can pass that variable representing an object to the useContext hook.
                It is important that you don't pass the Provider or the Consumer but rather the object itself.
                Crucially, the useContext hook only lets you read the context and subscribe to its changes.
                You'll still need a Provider in the component tree in order to provide the value for this context.</p>
           <h4>Writing your own hooks</h4>
                <p className="flowingText">It's possible for you to build your own hooks and extract component logic into reusable functions. 
                By convention, the name of your hook should start with use. Custom hooks are especially useful when it comes to sharing logic between two different components or functions.
                Custom hooks, allow you to extract and share common code between components easily, the alternative with class components would mean adding in container classes that pass down functions as props to multiple children.
                However, two components that share the same hook do not share the same state. The instances of each hook are fully isolated. Remember that you can use the same hook multiple times in a component and they will be completely independent. </p>
            <h4>Other pre-packaged, but less common hooks</h4>
                <p className="flowingText">React comes kitted out with a few other hooks that you might see in examples around the internet. Here is a list of them, each item contains a link where you can read more about each . Just be aware that they exist for the time being:</p>
                <ul className="bulletedList">
                    <a href='https://reactjs.org/docs/hooks-reference.html#usereducer'><li>useReducer</li></a>
                    <a href="https://reactjs.org/docs/hooks-reference.html#usecallback"><li>useCallback</li></a>
                    <a href="https://reactjs.org/docs/hooks-reference.html#useMemo"><li>useMemo</li></a>
                    <a href="https://reactjs.org/docs/hooks-reference.html#useRef"><li>useRef</li></a>
                    <a href="https://reactjs.org/docs/hooks-reference.html#useImperativeHandle"><li>useImperativeHandle</li></a>
                    <a href="https://reactjs.org/docs/hooks-reference.html#useLayoutEffect"><li>useLayoutEffect</li></a>
                    <a href="https://reactjs.org/docs/hooks-reference.html#useDebugValue"><li>useDebugValue</li></a>
                </ul>
           
           <button className="ready" onClick={() => this.props.callback(<Challenge42 callback={this.props.callback}/>)}>Challenge</button>
    
                </div>
            </div>
         );     
    }
}
 
export default Lesson42;