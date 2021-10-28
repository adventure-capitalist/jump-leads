import React, { Component } from '../../node_modules/react';
import "../App.css";
import {GoDashboard} from "../../node_modules/react-icons/go";
import Challenge39 from './Challenge39';
import state from "../images/state.JPG";
import lifecycle from "../images/lifecycle.JPG";



class Lesson39 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 39: Introduction to React</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">The Origin Story</h3>
                    <p className="flowingText">Long ago when the internet was brand new, the basic premiss of the world wide web was that it would work as a bunch of separate pages that link together and display content.
                    At this point you've all experienced this kind of linking behavior when navigating between different sub-pages on a website like the About, Contact Us or any other sub-pages that a website might contain.
                    However, in the current age of the internet where webpages are colorful and full of all kinds of content, much of which is repeated over multiple pages on the same website, it seems wasteful to keep 
                    completely toss out the elements in a website that are being reused. What if we could reuse all the more static parts of a website and only change the bits that need changing? Well with JavaScript, we can do this.</p>
                <h3 className="sectionHeading">Single Page Applications</h3>
                    <p className="flowingText">JavaScript can enable you take what would have been a collection of pages on your website, into a Single Page Application, where as many of the consistent parts of your website are being reused as possible.
                    Under the hood this works because a single page will load up synchronously from the server, but then all the internal site navigation will now happen asynchronously.
                    We already know that it is possible to use JavaScript to produce HTML, so it only takes a small stretch of the imagine how you would be able to implement this in a single page web application.
                    If you go one step further and think about what a website really is, it's really only some data, which might be stored on the server or somewhere else and a presentation layer which shows that data to the user in a nice format.
                    For example, on Twitter there are tweets and the number of comments retweets and likes on any given tweet can tick over and be updated in real time without you reloading the page. This is because they are updating that tiny bit of presentation layer of Twitter whenever the relevant data changes.</p>
                <h4>Reactive Programming</h4>
                    <p className="flowingText">This style of programming where you are watching the data for changes and re-rendering accordingly is called reactive, or procedural programing.
                    This is in contrast to procedural or imperative programing where you say that if a specific button is pressed then remove a specific part of the DOM, The reactive approach is more flexible and scalable.</p>
                <h4>SPA Frameworks</h4>
                    <p className="flowingText">There are a fair few different frameworks built to help developers create single page applications using JavaScript, the big three include:</p>
                    <ul className="bulletedList">
                        <li>React - made by Facebook</li>
                        <li>Angular - made by Google</li>
                        <li>Vue.js - open source community collaboration</li> 
                    </ul>
                    <p className="flowingText">There are, of course, other well-known contenders that are worth a mention:</p>
                    <ul className="bulletedList">
                        <li>Svelte</li>
                        <li>Backbone.js</li>
                        <li>Ext.js</li>
                        <li>Ember</li>
                        <li>Aurelia</li>
                        <li>Durandal</li>
                        <li>Can.js</li>
                    </ul>
                    <h3 className="sectionHeading">Why React?</h3>
                        <p className="flowingText">Well, React has been running on Facebook under fairly intense load for over a decade now and the <a href="https://reactjs.org/docs/getting-started.html">docs</a> are very detailed.
                        The component based architecture (which we will talk about next) helps to break down the problem into tiny problems, and ensures that your code is reusable.
                        These components also share information in a very predictable hierarchical way, which means that it's easier for you to control.
                        React also comes with its very own virtual DOM which means it's super fast! Finally, it supports JSX syntax meaning that you can essentially write HTML-like code inside of the JavaScript components and it will pop up when those components are rendered.</p>
                    <h4>Components</h4>
                        <p className="flowingText">Remember, when we were talking about reusing most of the code in a single page application and only updating certain bits based on how the data changes?
                        The different "bits" of the interface that handle different updates or views can be turned into a component in React. All a component is, is a file filled with javascript that imports the React package.
                        If you look carefully, you might think they look a bit like a function that returns HTML. And that's fairly accurate. Components should only have one job. So if we go back to the Twitter example there should be one component watching the likes, and one watching the retweets etc.
                        This helps to keep your code really reusable and streamlined. Components can either be stateful or stateless. A component that is stateless isn't a refugee, it just means that it relies on data in the form of arguments from higher up the hierarchy, these arguments are known as "properties" (props).
                        If the component holds it's own data that changes according to what the user does, then it is called "stateful" instead.</p>
                    <h4>JSX</h4>
                    <p className="flowingText">JSX stands for JavaScript XML. Which means it's like a weird cousin of HTML. In order to use it in your components, you will have to import React from your node modules. The return statement for your component must use parentheses if you are returning more than one line worth of stuff.
                    The return statement in your component must also be balanced, meaning that it must be wrapped in one parent div or a special React.Fragment tag if you are trying to avoid some of the things that come along with divs. In JSX, if your elements have attributes they will be camel cased. However, there is an issue with a few of the attributes, namely, "class" and "for" as these are already reserved in JavaScript for Object Classes and and For loops.
                    The event listeners also are now camel case so instead of writing onclick you should use: onClick. Inside the event listener, you can use JSX to write a function inside of curly brackets directly inside the element.
                    To get around this, you'll have to use className and htmlFor instead. Furthermore if you are using a placeholder anywhere you must use curly brackets, you can also put JavaScript in these brackets.</p>
                    <h3 className="sectionHeading">The Dynamics</h3>
                    <p className="flowingText">We've already discussed that components are made up of a data layer and a layer for visual presentation. So lets talk more about how components get that data. You already read about the difference between stateful and stateless components, but let's talk a little more about this "state" and properties or "props".
                    A stateful component will literally have a chunk of data that it holds called state. The state is declared in the constructor and if the component is unmounted then any data in that state is unmounted with it. The state itself is private to the component it is in, and it can be changed and mutated while the component is being displayed. Think back to the Twitter example, about the number of likes that is being displayed and updated in real time.
                    Whenever any data in this state is changed, the component will automatically re-render and update what the user sees. This means that if you as a developer are manipulating data that you want to update on the screen, you have to store that data in the state, and also update the state when things change in order to actually change the view for the users of your apps.
                    If you want to share information between components or views you can pass down data in the form of "props" or properties which behave a lot like arguments would in normal JavaScript. The only think about properties is that they are read-only. If you are a little component and you receive props from your parent, you cannot control and update the data that your parent is looking after, you can only read it. So there are two things:
                    </p>
                    <ul className="bulletedList">
                        <li>Props - values that we already know and that were calculated in advance, they inject data that the component needs to render.</li>
                        <li>State - values that are private to the component that might change depending on how application users behave.</li>
                    </ul>
                    <h4>Changing the state</h4>
                    <img className="graphic" src={state}/>
                        <p className="flowingText">The magic button to get React to, well react, is to update the state... but how do you achieve this? 
                        Well in class components you can use the setState method. You can call it inside of an event handler or some of the components built in lifecycle methods which we discuss next.</p>
                    <h4>The lifecycle of a component</h4>
                    <p className="flowingText">Unfortunately, there is no adorable tadpole stage when it comes to components, however, they do have their own lifecycle that you can tap into as a developer.
                    Remember when we were talking about how different components are rendered instead of different pages in a single page application? Well, changing between components isn't exactly a straight on/off switch:
                    There are actually three main phases: the mounting phase, the updating phase and the unmounting phase.</p>
                    <img className="graphic" src={lifecycle}/>
                    <p className="flowingText">In the mounting phase the component is being initialized and any initial state or props are being set. If you would like to execute a function or a block of code before the component is mounted and the app user can see it then use the lifecycle method componentWillMount()
                    However, if you want to execute a block of code right after a component is visible to an end user, then use the method componentDidMount(). Once the component is fully up and rendered you can check if the component receives props and you want to do something with the props after they are received you can hook into the componentWillReceiveProps method.
                    Or, if that like count on your Twitter post is going to update you can check if it should update using shouldComponentUpdate() and if the component passes this test and it decides it should update then you can run blocks of code in componentWillUpdate right before the component actually does the update.
                    If you want to wait for the component to update to run some code, then you can use componentDidUpdate(). If the component is about to be tore down as the user is navigating away to a different part of the app but you want to do something right before they go, you can run code in componentWillUnmount(), let's take a look at some of these methods in detail:</p>
                    <ul className="bulletedList">
                        <li>componentWillMount() - before the component is read into the DOM, you can sort out the formatting you need to do prior.</li>
                        <li>render() - surprise, but this is actually the most important method and it's included in every single component. This is where you write the actual HTML/JSX that you want to render. You cannot setState here or you'll get stuck in a terrible unending loop.</li>
                        <li>componentDidMount() - this component is successfully included in the DOM. Here is where you can put AJAX calls and timers and things.</li>
                        <li>componentWillReceiveProps() - allows you to look into the future and see the incoming props. You can here you can use setState, if the props haven't changed in this update then this block will not run.</li>
                        <li>shouldComponentUpdate() - allows you to make a decision based on the incoming props and next state and context and decide if the component should rerender. You cannot setState here. Returns true or false.</li>
                        <li>componentWillUpdate() - the same as componentWillMount, last stop before the re-render.</li>
                        <li>componentDidUpdate() - the same as componentDidMount, you are passed the previous props state and context and can access them.</li>
                        <li>componentWillUnmount() - the component is removed from the DOM, state will be destroyed, last chance to store the state and clear timers and clean things up. Cannot setState here.</li>
                    </ul>
                    <h3 className="sectionHeading">Styling</h3>
                        <p className="flowingText">There are a few options when it comes to styling in React, you can style in-line and it is not even considered sloppy, and you can import css files using css modules, or you can use styled components.
                        The big thing that is different about styling in line in React is that you are passing a style object and the keys are now all camel case and the values must be written with quotations surrounding them let's look at an example:</p>
                        <pre className="codeBlock">{`
class MyComponent extends React.Component {
    render() {
        return (
            <h1 style={{backgroundColor: "#f00"}}>{this.props.heading}</h1>
        );
    }
}
`}</pre> 
<p className="flowingText">Or you can also import classes from css files like this:</p>
<pre className="codeBlock">{`
// Here, Container is a class in the css file

    import { container } from './styles.css';

    function MyComponent(){
      return (
        <h1 className={container}>Hello!</h1>
      );
    }
`}</pre>
<p className="flowingText"><a href="https://styled-components.com/">Styled components</a> is an npm package that allows you to declare elements as variables, using their html tagname and the styled keyword. Then you list out all the css for that element in backticks, and then render that element as you would any component.</p>                   
                    <button className="ready" onClick={() => this.props.callback(<Challenge39 callback={this.props.callback}/>)}>Challenge</button>
        
                </div>
            </div>
         );     
    }
}
 
export default Lesson39;