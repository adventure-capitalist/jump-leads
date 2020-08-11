import React, { Component } from '../../node_modules/react';
import "../App.css";
import Challenge24 from "./Challenge24";
import {GoDashboard} from "../../node_modules/react-icons/go";

class Lesson24 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 24: Introduction to Functions</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What are Functions?</h3>
                    <p className="flowingText">Functions are what allow you to do things, Functions, like the mitochondria in a cell, are the powerhouse of JavaScript. Each function is like a little bit like a kitchen appliance. There are different appliances for different purposes much like there are different functions to do different things.</p>
                    <p className="flowingText">For instance in a blender, you might add fruit, yogurt, and spinach to create a smoothie. In the coffee maker you add coffee and water to create coffee. The toaster takes bread and outputs toast.</p>
                    <p className="flowingText">This analogy breaks down a bit, when you start having to "program" the blender, the toaster etc. by writing out the functions by hand... but hang in there.</p>
                    <p className="flowingText">But the crucial similarity is that you can still have a blender even if you don't know what ingredients you're going to blend yet. This means that you can use the blender for lots of things and just give it different ingredients.</p>
                    <p className="flowingText">It also goes without saying that functions, like kitchen appliances are not single use. You can use them over and over </p>
                    
                <h3 className="sectionHeading">What does this mean for functions?</h3>
                    <p className="flowingText">To recap, functions allow you as a developer to invent a series of instructions that can be reused. You can write these instructions in a fairly abstract way so that you don't have to specify all the things that you will give the function to work with in advance. You just have to tell the function to expect to receive things.</p>
                    <p className="flowingText">You can keep using the same functions each time give it different things to work with, and the results will vary depending on what you put in.</p>
                    
            <h3 className="sectionHeading">How to write a JavaScript function</h3>
            <p className="flowingText">There are two methods to write a function, first there is a function declaration using the function keyword:</p>
            <pre className="codeBlock">{`
function myFunctionName(){//stuff goes in here};
                `}</pre>
            <p className="flowingText">Second you can declare a variable and write out a function as part of the expression, like this:</p>
            <pre className="codeBlock">{`
var myFunctionName = function(){//stuff goes in here}
                `}</pre>
            <p className="flowingText">The different parts of a function have terminology that can be used to label the different elements. Let's cover those terms now.</p>
            <p className="flowingText">First up is parameters, the parameters are the abstracted things that you tell the function as you are writing it, that it can expect to receive once it is actually being used. Here is an example:</p>
            <pre className="codeBlock">{`
function myFunctionName(agePlaceholder, namePlaceholder){
        console.log( namePlaceholder + " is " agePlaceholder)
}`}</pre>
            <p className="flowingText">In the above example, agePlaceholder and namePlaceholder are the parameters. They are separated by commas.</p>
            <p className="flowingText">Next up is arguments, arguments are the things that fill those placeholders when functions are being used. Let's look at an example again:</p>
            <pre className="codeBlock">{`
myFunctionName("Taylor", 25);
}`}</pre>
<p className="flowingText">In this example Taylor and 25 are the arguments. It is important to note that you must line up the placeholders (or parameters) and the placetakers (or arguments) by listing them in the exact same way. So if you tell the function that it can expect an age and then a name. It expects to receive it in that order when you send in arguments.</p>
<p className="flowingText">You can use the arguments keyword inside a function to double check which arguments were sent into the function and in which order. Here is an example:</p>
<pre className="codeBlock">{`
// Declaring a function that logs out any arguments you send it to the console.

function checkArguments() {
    console.log(arguments)
}

// calling the function with arguments

checkArguments("eggs", 45, true)
}`}</pre>
<p className="flowingText">Sadly, you cannot use the arguments keyword in arrow functions in ES6 (the latest version of JavaScript)</p>
            
            <h3 className="sectionHeading">How to reference a function</h3>
            <p className="flowingText">Once you have a function written, you can use it's name to access it. For example if you want to print the function to the console, you can do this:</p>
            <pre className="codeBlock">{`
console.log(myFunctionName); // expected result: function myFunctionName(){//stuff goes in here}; 
                `}</pre> 
            <p className="flowingText">It's worth mentioning that not all functions have names, there are some special circumstances where functions are nameless or "anonymous" like in an eventListener, for example.</p>
            <h3 className="sectionHeading">How to run a function</h3>
            <p className="flowingText">To call a function and make it start, all you need to do is call it's name and pass it any things that you want to pass it. Let's look at an example:</p>
            <pre className="codeBlock">{`
//Declaring a function named greet that expects to receive a greeting and log it to the console.

function greet(greeting) {
    console.log(greeting);
}

//Calling the function

greet("Hello"); // expected result: "Hello" will appear in the console.
`}</pre> 
<h3 className="sectionHeading">How to make the function give you something</h3>
<p className="flowingText">The short answer is, use the return keyword. Let's check out an example:</p>
<pre className="codeBlock">{`
//Declaring a function named greet that expects to receive a greeting and log it to the console.

function greet(greeting) {
    return(greeting);
}

//Calling the function

greet("Hello"); // expected result: "Hello" will be returned by the function
`}</pre> 
<p className="flowingText">When a function gives you something back in a return statement, that means that it resolves to the thing inside the return statement. If nothing is returned, then the function will resolve to undefined.</p>
                <button className="ready" onClick={() => this.props.callback(<Challenge24 callback={this.props.callback}/>)}>Challenge</button>
            </div>
        </div>
     );     
    }
}
 
export default Lesson24;