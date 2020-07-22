import React, { Component } from 'react';
import "../App.css";
import Challenge21 from "./Challenge21";
import {GoDashboard} from "react-icons/go";

class Lesson21 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 21: Introduction to Objects</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What are Objects?</h3>
                    <p className="flowingText">Technically everything in JavaScript is an object because it is an interpreted language, but that's starting off a bit deep.</p>
                    <p className="flowingText">In the world of data types and variables, an object is a group of related data. It is organised similarly to some kind of table in that there are keys (or labels) and values.</p>
                    <p className="flowingText">Sometimes objects are called collections, or even "keyed collections"</p>
                <h3 className="sectionHeading">How do you write an object?</h3>
                    <p className="flowingText">There are a few interesting symantic things that you should bear in mind when writing an object, and they are as follows:</p>
                    <ul className="bulletedList">
                            <li> {'{}'} - an object is wrapped inside a pair of curly braces.</li>
                            <li> : - each key and the corresponding value should be seperated with a semi-colon.</li>
                            <li> , - each key value pair should be separated from the next with a comma.</li>
                    </ul>
                    <p className="flowingText">Let's look at a few examples.</p>
                    <pre className="codeBlock">{`
let myFirstObject = {
    name: "Jamie",
    age: 30,
    height: 70,
    favoriteColor: "orange",
    city: "Springfield"  // This last key/value pair doesn't need a comma, although ES6 will let you add one.
}
                `}</pre>
                <pre className="codeBlock">{`
let mySecondObject = {
    phoneNumber: "867-5309",
    address: "123 Sesame Street",
    city: "Midland",
    country: "USA",
    zip: 48657
}
                `}</pre>

                    
                <h3>How to access information stored in objects</h3>
                    <p className="flowingText">There are two ways to extract and isolate certain pieces of information from the collection.</p>
                    <p className="flowingText">The first way is called "dot syntax" and the second way is called "square bracket syntax".</p>
                    <p className="flowingText">It's best if we explore both of these while looking at a real life example of an object so let's consider this object:</p>
                    <pre className="codeBlock">{`
let myFirstObject = {
    name: "Jamie",
    age: 30,
    height: 70,
    favoriteColor: "orange",
    city: "Springfield"  // This last key/value pair doesn't need a comma, although ES6 will let you add one.
}
                `}</pre>
                    <p className="flowingText">Imagine you are running an age restricted service where you have to be under 35 to be allowed to sit with us. How do you return Jamie's age?</p>
                    <p className="flowingText">Well if you are using dot notation you write it like this:</p>
                    <pre className="codeBlock">{`
let jamiesAge = myFirstObject.age // expected result 30
                `}</pre>
                <p className="flowingText">If you are using square bracket notation, it would look like this:</p>
                <pre className="codeBlock">{`
let jamiesAge = myFirstObject['age'] // expected result 30
                `}</pre>
                <p className="flowingText">You can totally use either, and you will come across both at some point or another but the dot notation is more widely used.</p>
                <p className="flowingText">Square bracket notation can be useful if you don't necessarily know the name of the key, maybe it is custom made for every user etc. Or if the name of the key has a hyphen inside (hyphens can be mistaken for minus signs by computers).</p>
                <h3>How do you overwrite things in objects?</h3>
                    <p className="flowingText">It's as simple as reassigning the variables. Here are a few examples:</p>
                    <pre className="codeBlock">{`
myFirstObject.age = 31;

// expected result: myFirstObject = {
    name: "Jamie",
    age: 31,
    height: 70,
    favoriteColor: "orange",
    city: "Springfield"
}

myFirstObject.favoriteColor = "blue";

// expected result: myFirstObject = {
    name: "Jamie",
    age: 31,
    height: 70,
    favoriteColor: "blue",
    city: "Springfield"
}
                `}</pre>
            <p className="flowingText">It is important to note that all these changes are not tracked, so the program will not store when things are added or removed and what these additions are. It only stores the current collection of data. </p>
                <button className="ready" onClick={() => this.props.callback(<Challenge21 callback={this.props.callback}/>)}>Challenge</button>
            </div>
        </div>
     );     
    }
}
 
export default Lesson21;