import React, { Component } from 'react';
import "../App.css";
import {GoDashboard} from "react-icons/go";
import Challenge27 from "./Challenge27";


class Lesson27 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 27: JavaScript Dates</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What Kinds of Dates are there in JavaScript?</h3>
                    <p className="flowingText">Unfortunately, JavaScript doesn't have many of the kind of dates that involve long walks on the beach, but there are a few other kinds that are important to know about as a JavaScript developer.</p>
                    <p className="flowingText">Interestingly computers have many of the same issues that humans have when it comes to talking about dates. If I arrange to talk to my friend at 13:00, do I mean 13:00 UK time or 13:00 New York time? There are plenty of local time difference that make navigating dates and time difficult even for humans who have been keeping a rough eye on how the sun appears to move in the sky for centuries.</p>
                    <p className="flowingText">The first issue that a computer has to come up against is that the date and time that it has access to will be set according to the clock in the computer. If that clock is wrong, then all of that computers calculations involving date and time will also be off.</p>
                    <p className="flowingText">The second problem that computers have is that the idea of February isn't really a useful one to them. Computers are a bit weird in that, unlike most humans, they prefer to measure time in milliseconds. Specifically the number of milliseconds from January 1st 1970. This is a date that was arbitrarily chosen to be where computer time starts, they had reasons, one of them was that if we started counting milliseconds 3 billion years ago, then the numbers that we would be using for current day time would be massive and unruly.</p>
                    <p className="flowingText">The way that computers (and humans) get around the issue of timezones, is that they have created a universal time zone which acts as a central source of truth for what time it is. For Humans this is often called Greenwich Mean Time (or GMT) but for computers this is called Universal time code (or UTC) Then you can use offsets just like we do with daylight savings time to represent the timezone that you mean.</p>
                
                <h3 className="sectionHeading">The Date Object</h3>
                    <p className="flowingText">We've already talked about a few of JavaScript's inbuilt objects, like the Math object. But there is also a separate Date object which sort of acts like a translator between humans and computers when it comes to dates.</p>
                    <p className="flowingText">To create a new instance of the date object, all you have to do is instantiate it like this:</p>
                    <pre className="codeBlock">{`
let myFirstDate = new Date()
                `}</pre>
                    <p className="flowingText">Now if you do not pass any arguments inside the parenthesis when you instantiate the object, the default value for that date you just created will be returned to you as a human readable representation of this very moment. You can see that if you console.log() the variable we just declared like this: .</p>
                    <pre className="codeBlock">{`
let myFirstDate = new Date()

console.log(myFirstDate) // Expected Result : Thu Jan 01 1970 01:00:05 GMT+0100 (CET) 

// Also have you heard? It is currently the dawn of the seventies. Groovy!  
                `}</pre>
                    <p className="flowingText">You can also get right now by using:</p>
                    <pre className="codeBlock">{`
let mySecondDate = Date.now();
                `}</pre>
                <p className="flowingText">However, the result when you console.log() this instance is not so human readable.</p>
                <pre className="codeBlock">{`
let mySecondDate = Date.now()

console.log(mySecondDate) // Expected Result : 1596222415415  
                `}</pre>
                <p className="flowingText">Again, this number is a time stamp that represents the number of milliseconds that have elapsed since midnight on New Years' 1970. Try not to think about how big it is and the constant slipping of time, we can go back to the human readable ISO format if that lowers the level of human existential angst.</p>
                <p className="flowingText">There are a few different formats that you can use actually, as arguments when creating a date. They are as follows:</p>
                    <ul className="bulletedList">
                        <li>const option1 = new Date(2016, 6, 27, 13, 30, 0, 0);  // the order here is (year, month, day, hours, minutes, seconds, milliseconds)</li>
                        <li>const option2 = new Date(1571065751456) // a timestamp measured in milliseconds</li>
                        <li>const option3 = new Date("2016-07-27T13:30:00Z") // a UTC date string (Fun fact: Z stands for zulu time)</li>
                        <li>const option4 = new Date("Wed, 27 July 2016 13:30:00") // or with a traditional local human readable time string</li>
                    </ul>
                <p className="flowingText">When you are using option 1, you actually only absolutely need the year and the month. All the rest is optional extras. That's not to say it isn't useful and worthwhile, but this is the bare minimum to create a date.</p>
                <p className="flowingText">Bear in mind that if you use different options of declaring dates and sometimes you only include the month and sometimes you give a full time declaration that this will cause issues should you want to compare those dates later on.</p>
                <h3>What methods are there?</h3>
                <p className="flowingText">The methods that are involved with the Date() object can be divided into two main categories. Ones that are used to get the time and ones that are used to set the time. The get methods read from an instance of the date object and the set methods write to it.</p>
                <p className="flowingText">Let's look at the get methods first.</p>
                    <ul className="bulletedList">
                        <li>const date = new Date.getDate() // returns the number day of the month (1-31)</li>
                        <li>const day = new Date.getDay() // returns the number of day of the week (0-6) it is possible to return the human friendly string names using formatting</li>
                        <li>const month = new Date.getMonth() // returns the number of the month (0-11)</li>
                        <li>const year = new Date.getFullYear() // returns four digits of the year (e.g. 2003)</li>
                        <li>const hour = new Date.getHours() // returns the hours (0-23)</li>
                        <li>const minute = new Date.getMinutes() // returns the minutes (0-59)</li>
                        <li>const milliseconds = new Date.getMilliseconds()  // returns the milliseconds (0-999)</li>
                        <li>UTC_Offset = new Date.getTimezoneOffset() // returns the time difference for a particular timezone relative to UTC (aka Greenwich Mean Time)</li>
                    </ul>
                <p className="flowingText">Now let's take a look at the set methods, they actually mirror the get methods exactly.</p>
                <ul className="bulletedList">
                        <li>const date = new Date.setDate() // changes the number day of the month to whatever you input (1-31)</li>
                        <li>const day = new Date.setDay() // changes the number of day of the week to whatever you input (0-6)</li>
                        <li>const month = new Date.setMonth() // changes the number of the month to whatever you input (0-11)</li>
                        <li>const year = new Date.setFullYear() // changes the year to whatever four digit number you input (e.g. 2003)</li>
                        <li>const hour = new Date.setHours() // changes the hours to whatever you input (0-23)</li>
                        <li>const minute = new Date.setMinutes() // changes the minutes to whatever you input (0-59)</li>
                        <li>const milliseconds = new Date.setMilliseconds()  // changes the milliseconds to whatever you input (0-999)</li>
                        <li>UTC_Offset = new Date.setTimezoneOffset() // changes the time difference to be whatever you input</li>
                    </ul>
                    <p className="flowingText">Please be careful to set within the correct range, you risk causing weird "date rounding" issues (where parts of the date that you don't want to change will change) if you accidentally add 1000 milliseconds for example when you mean 999.</p>
                <h3>Date and Time Formatting</h3>
                    <p className="flowingText">What if you just want some nicely formatted dates. Or maybe your client wants to use the American date format. There are a few handy methods to help you achieve your goals.</p>
                    <ul className="bulletedList">
                        <li>const date = new Date.toLocalDateString('en-GB', {"{day : 'numeric', month : 'short', year : 'numeric'}"}) // allows you to specify which countries order you want to follow, and if you want numbers or longer strings for the constituent parts of the date</li>
                        <li>const time = new Date.toLocalTimeString() // similar to toLocalDateString but for times only (i.e. 14:00, or 10:00 AM etc.)</li>
                        <li>const datetime = new Date.toLocalString() // combines toLocalDateString and toLocalTimeString</li>
                        <li>const year = new Date.setFullYear() // changes the year to whatever four digit number you input (e.g. 2003)</li>
                        <li>const hour = new Date.setHours() // changes the hours to whatever you input (0-23)</li>
                        <li>const minute = new Date.setMinutes() // changes the minutes to whatever you input (0-59)</li>
                        <li>const milliseconds = new Date.setMilliseconds()  // changes the milliseconds to whatever you input (0-999)</li>
                        <li>UTC_Offset = new Date.setTimezoneOffset() // changes the time difference to be whatever you input</li>
                    </ul>
                    
                    <p className="flowingText">Although the Date object and those computer readable dates can be a bit scary to look at, they actually allow us as developers to do some cool stuff. Because the date has a value equal to a number of milliseconds, you can check if one date has more or less milliseconds or if they are equal etc. just like you would with normal numbers.</p>
                    <p className="flowingText">With the help of some basic maths knowledge of how time works, you can actually do quite a lot of date and/or time related operations relatively straight forward, however it can sometimes be a little difficult to read the time calculations and they can be tedious to write out, so as is usually the case in these tedious type situations, some clever people created a library that will handle time calculations for you. It is called "Moment.js" and is available <a href="https://momentjs.com">here</a>.</p>
                    <p className="flowingText">Moment is very commonly used among developers, but being able to use moment shouldn't prevent you from getting to know the Date() object at least a little. The documentation for Moment.js is very good, so please feel free to take the information straight from the horses mouth.</p>
                <button className="ready" onClick={() => this.props.callback(<Challenge27 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );     
    }
}
 
export default Lesson27;