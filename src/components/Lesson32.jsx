import React, { Component } from '../../node_modules/react';
import "../App.css";
import Challenge32 from "./Challenge32";
import {GoDashboard} from "../../node_modules/react-icons/go";
import dom from "../images/DOM.jpg"

class Lesson32 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 32: Document Object Model</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What is the Document Object Model?</h3>
                    <p className="flowingText">To really understand what the document object model is, you have to remember that JavaScript was designed to be a scripting language that is used on the front-end to interact with the webpage that you see in the Browser.</p>
                    <p className="flowingText">The browser displays markup like HTML and it is styled using CSS. Now how in the world is JavaScript able to understand what's going on in the markup? Well it's thanks to the document object model. The document object model is an application programming interface (API) that translates markup, like HTML, into objects so that JavaScript can hook into those objects and start making things interactive.</p>
                    <p className="flowingText">Here is an analogy:</p>
                    <img src={dom} className="graphic" alt="DOM"/>
                    <p className="flowingText">Imagine HTML and JavaScript are two languages that are spoken in two different countries. Imagine JavaScriptaly wants to do some business in HTMLland. JavaScriptaly needs to be able to understand what is happening just enough to achieve what it needs to do in the name of business. That is where the document object model comes in. The DOM is a system that packages up and sorts the information in HTML land into objecteese which is commonly spoken in JavaScriptaly. This does not mean that Javascriptaly has any true understanding of what is happening in HTMLland.</p>
                    <p className="flowingText">If you go into the developer tools in the browser, you can actually see part of the DOM in the elements window. But you can also access the Document Object Model through the "document" keyword. The DOM comes as an API preinstalled into your browser. You don't have to install anything or make any calls. It happens automatically, which can make it a little mysterious, but it doesn't have to be!</p>
                    <p className="flowingText">The document object is built up of different nodes and you can see the whole raw version of the document object if in the console you run:</p>
                    <pre className="codeBlock">{`
console.dir(document); 
                `}</pre>
                <p className="flowingText">The fact that the Document Object is an object, means that you can tap into methods to start making stuff happen. Now there are two steps to making stuff happen. Selecting where you want things to occur, and then actually doing the action.</p>
            <h4>Selecting a spot to do something</h4>
                <p className="flowingText">There are several different methods and ways of selecting a spot in the html perform an action.</p>
                <ul className="bulletedList">
                        <li>.getElementById() - returns a singular element by looking it up by it's id</li>
                        <li>.getElementsByClassName() - returns an array-like collection of elements that belong to the class</li>
                        <li>.getElementsByTagName() - returns an array-like collection of elements of a specific tag.</li>
                        <li>.getElementsByName() - returns an array-like collection of elements that have the targeted name attribute.</li>
                        <li>.querySelectorAll() - returns array-like collection of all elements with the targeted css selector</li>
                        <li>.querySelector() - returns a the first element that is assigned the targeted css selector. </li>
                    </ul>
                    <p className="flowingText">You can also link together these methods to find a parent element then a specific child of that parent etc. If, on the other hand, you want to select the more generic parent element of a specific child element, then you can use .closest() to move backwards up the DOM from child to parent.</p>
                  <h4>Doing something</h4>
                  <p className="flowingText">One of the most common things that you'll want to do is change or dynamically render some text. There are a few methods available for this.</p>
                  <ul className="bulletedList">
                        <li>.textContent - returns the text content that is already there if it is just plain text</li>
                        <li>.innerHTML - returns all of the content inside the selected element even if that content contains other HTML elements.</li>
                    </ul>
                    <p className="flowingText">If you want to set the HTML to something new, you'll need to use the = operator like this:</p>
                    <pre className="codeBlock">{`
h1.textContent = "Welcome Home."

h1.innerHTML = "<p>Welcome <span>Home</span>.</p>"
                `}</pre>
                  <p className="flowingText">You can also use template literal strings to add in white space formatting and position your elements.</p>
                  <p className="flowingText">It's worth mentioning that the nodes in the DOM include things that aren't necessarily elements, like code comments for example.</p>
                  <p className="flowingText">You can use both .children and .childNodes to return the different children of a specific element. However, if you use .childNodes you will also get stuff like code comments which you probably won't want. Stick to .children, but know that .childNodes is there if you ever need it for whatever reason.</p>
                  <p className="flowingText">You might also want to change how an element looks. If you use .style you can achieve all this and more.</p>
                  <p className="flowingText">Much like .textContent and .innerHTML, .style will return a list of CSS properties applied to the element unless you use the = operator to set some instead.</p>
                  <p className="flowingText">If you need to see even more, you can use window.getComputedStyle() to see a more comprehensive list of CSS styles applied to the element that you pass it.</p>
                <h4>Changing an Element's class with JavaScript</h4>
                  <p className="flowingText">You can also use the connection provided by the DOM to change the classes of HTML elements.</p>
                  <p className="flowingText">You can use the following to help you with this, here EL will stand for your target element.</p>
                  <ul className="bulletedList">
                        <li>EL.classList - returns the list of classes that are applied to an element.</li>
                        <li>EL.classList.add() - takes a class name as a string, and applies it to the element that you are targeting</li>
                        <li>EL.classList.remove() - takes a class name as a string, and removes it from the element that you are targeting.</li>
                        <li>EL.classList.replace() - takes two strings as arguments. The first one is the one on the way out, and the second is the new one you want to be there.</li>
                        <li>EL.classList.contains() - takes a class name as a string and checks if the element that you are targeting has that class applied to it.</li>
                        <li>EL.classList.toggle() - takes a class name as a string and the targeted element has it, then it is removed. If it doesn't have it, then it is added.</li>
                    </ul>
                    <p className="flowingText">In a similar vein you can also use the DOM to access an element's other attributes (i.e. href etc.)</p>
                    <p className="flowingText">You can use the following to help you with this:</p>
                    <ul className="bulletedList">
                        <li>.attributes - returns a list of attributes.</li>
                        <li>.hasAttribute() - takes an attribute name as a string and checks if it exists</li>
                        <li>.getAttribute() - takes an attribute name as a string and returns its value.</li>
                        <li>.setAttribute() - takes two strings as arguments, the first being the attribute name, the second being the value you want to set it as.</li>
                        <li>.removeAttribute() - removes that attribute</li>
                    </ul>
                    <p className="flowingText">You can also store data in the html elements specifically for JavaScript, or CSS.</p>
                    <p className="flowingText">That might look like this:</p>
                    <pre className="codeBlock">{`
<p data-edition="third">Magazine Title</p>
                `}</pre>
                <p className="flowingText">This data will always have the prefix "data-" on the attribute name. You can store stuff in here and then access it using .dataset</p>
                <p className="flowingText">.dataset will return an object with all the data objects inside of it. This is quite advanced, but again, you might see it in existing code or in examples that you see online.</p>
            <h3 className="sectionHeading">DOM Creation and Insertion</h3>
                <p className="flowingText">You can also use the DOM to create elements programmatically. Like this:</p>
                <pre className="codeBlock">{`
let el = document.createElement(‘p’);
let text = document.createTextNode(‘Hello’);
                `}</pre>
                 <p className="flowingText">Once you've created the elements and saved them to variables you can manipulate them using any of the methods</p>
                 <p className="flowingText">And if you can create and modify things, then it only makes sense that you also insert those things into the DOM.</p>
                 <p className="flowingText">There are a few different options for achieving this: </p>
                 <ul className="bulletedList">
                        <li>.append() - appends nodes or strings right at the end of the targeted node.</li>
                        <li>.prepend() - inserts nodes or strings right at the beginning of the targeted node.</li>
                        <li>.before() - insert nodes or string before the start of the targeted node.</li>
                        <li>.after() - inserts nodes or strings after the end of the targeted node.</li>
                        <li>.replaceWith() - replaces the node with the nodes or strings passed to it.</li>
                    </ul>
                    <p className="flowingText">You can also use .insertAdjacentHTML() to insert HTML as strings. It takes two arguments a pre-determined position and the string of HTML that you want to pass. The four positions are: beforebegin, afterbegin, beforeend, and afterend. Let's look at an example</p>
                    <pre className="codeBlock">{`
myElement.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
                `}</pre>
                    <p className="flowingText">You can also remove entire nodes from the DOM using the .remove() method.</p>
                    <p className="flowingText">Additionally you can clone elements using the .cloneNode() method which takes a boolean. The boolean is a switch for the deep argument, which if passed as true also clones the child elements.</p>
                    <p className="flowingText">The DOM can be a bit clunky. The performance is not great and it's not something that you as a developer should be using in every single line of code you write. The JavaScript framework, React, has a "virtual DOM" to get around the clunkiness associated with the DOM, but there is also something called a Document Fragment which sort of acts like a mini DOM which you can then slot into the actual DOM once everything is ready.</p> 
                <h3 className="sectionHeading">The DOM and Events</h3>
                    <p className="flowingText">Sometimes you'll want to wait until something happens like a click or a scroll to run a bit of code.</p>
                    <p className="flowingText">JavaScript has built in functionality to handle certain events, and it is even possible to make custom events.</p>
                    <p className="flowingText">Events work similarly in that you need to first identify the elements that you want to be able to respond to an event, like a click etc.</p>
                    <p className="flowingText">Then you pass that element a function that runs if/when that event runs. Then hopefully, that event happens.</p>
                    <p className="flowingText">The event then "bubbles" and travels up and down the DOM. This event bubbling behavior means that any element identified as listening for that specific event will have it's function called.</p>
                    <p className="flowingText">You can find a complete list of all the events that JavaScript handles natively <a href="https://developer.mozilla.org/en-US/docs/Web/Events">here.</a></p>
                    <p className="flowingText">There are three ways to attach these event listeners to various elements. Let's look at some examples:</p>
                    <pre className="codeBlock">{`
// You can attach a specific listener to the element:
    <button onclick=”alert('Hi')”>Click me</button>

// You can attach it programmatically:
    document.getElementById("mybutton").onclick = function(event) { };

// You can use the wonderful .addEventListener():
    el.addEventListener(<event>, <function>[, <phase>]);

                `}</pre>
                 <p className="flowingText">Whatever function you pass add event listener to happen after the event happens, takes an event object.</p>
                 <p className="flowingText">That event object comes with lots of useful stuff inside that you can tap into. Here are some examples:</p>
                 <ul className="bulletedList">
                        <li> stopPropagation() - shuts off the bubbling behavior, (not recommended) </li>
                        <li> preventDefault() - stops default HTML behavior, i.e. a link will not navigate etc.</li>
                        <li> .target - tells you the thing that was clicked/hovered over etc.</li>
                        <li> .currentTarget - the node where the event listener lives.</li>
                        <li> clientX/clientY - helps with mouse coordinates when using determining "where" something happened</li>
                        <li> .key - determines which key was pressed (does not work on mobile)</li>
                    </ul>
                    <p className="flowingText">It's worth pointing out that when you run your scripts, it happens straight away after the DOM content is loaded. If you are loading elements based on other things after this first load has happened then they will not be included in the DOM. However, you can listen to a parent element that does exist and use the event object to check which eventual child element any given event came from. Essentially, if you can't grab onto an element yet because it doesn't exist yet, you can grab onto it's parent and then if it has a few children later on down the line then you can check out the details of those children and do stuff based on those details.</p>
                 
                 <button className="ready" onClick={() => this.props.callback(<Challenge32 callback={this.props.callback}/>)}>Challenge</button>
        
        </div>
    </div>
         );     
    }
}
 
export default Lesson32;