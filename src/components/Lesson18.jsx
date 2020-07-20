import React, { Component } from 'react';
import "../App.css";
import Challenge18 from "./Challenge18";
import {GoDashboard} from "react-icons/go";

class Lesson18 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 18: Data Types - Numbers</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">Welcome to Numbers</h3>
                    <p className="flowingText">Now, you probably have some basic undestanding of what a number is by this point in your life. At least I would hope that you do.</p>
                    <p className="flowingText">But there are a few key ways that numbers in JavaScript are ever so slightly different than the numbers you grew up learning about in school.</p>
                    <p className="flowingText">This is because numbers in JavaScript are technically speaking "double precision floating point numbers" or floats.</p>
                    
                <ul className="bulletedList">
                        <li>they do not behave normally for manipulating numbers with decimal points (think currency)</li>
                        <li>you must be careful to never leave extra zeros at the start of the number (octal numbers)</li>
                        <li>The maximum number you can use is: 1.7976931348623157e+308</li>
                        <li>The minimum number you can use is: 5e-324</li>
                        <li>Any numbers that are outside of the above range are considered to be "infinity"</li>
                        <li>There can be both 0 and -0</li>
                </ul> 

                <h3 className="sectionHeading">What things are Not a Number?</h3>
                    <p className="flowingText">In JavaScript if you try to do something silly with math like: "orange" * 24, it obviously won't work and the error that will be returned is "NaN" or: not a number.</p>
                    <p className="flowingText">Most things that are "not a number" will trigger a NaN error, with the exception of strings that contain numbers. JavaScript will attempt to make sense of the chaos of a string containing a number and a number in actual number format, but sadly you will always get a string as a result. Because numbers are "recessive" if you will.</p>
                
                <h3 className="sectionHeading">What kind of things can you do with Numbers?</h3>
                    <p className="flowingText">There are quite a few things you can do:</p>
                    <ul className="bulletedList">
                        <li> .toFixed() - limits the number of decimal places that a number will use.</li>
                        <li> .toString() - changes a number formatted as a number (7) into a number formatted as a string ("7").</li>
                        <p>The Number methods come from a pre-provided Number object, you must write Number before using them:</p>
                        <ul>
                            <li> Number.parseInt() - takes two arguments, the number you would like to parse and a "radix" which tells you the number of unique digits in a counting system. (2 is bianary, 8 is octal, 16 is hexadecimal, and decimal is 10) </li>
                            <li> Number.isNaN() - will test whether or the parameter that you pass is a number. Returns true or false.</li>
                        </ul>
                        <p>The Math methods come from a pre-provided Math object, you must write Math before using them:</p>
                        <ul>
                            <li> Math.random() -  returns a number between 1 and 0.</li>
                            <li> Math.round() - rounds the number to the nearest integer.</li>
                            <li> Math.ceil() - rounds the number up</li>
                            <li> Math.floor() - rounds the number down</li>
                            <li> Math.pow() - takes to arguments the number and the exponent you would like to raise it to.</li>
                            <li> Math.sin(), Math.cos(), Math.tan() - remember trigonometry? What about Sine, Cosine and Tangent?</li>
                        </ul>
                    </ul> 

    

<button className="ready" onClick={() => this.props.callback(<Challenge18 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );     
    }
}
 
export default Lesson17;