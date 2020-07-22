import React, { Component } from 'react';
import "../App.css";
import Challenge22 from "./Challenge22";
import {GoDashboard} from "react-icons/go";

class Lesson22 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 22: Introduction to Arrays</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What are Arrays?</h3>
                    <p className="flowingText">Under the hood, arrays are just objects with numbers for keys. They can be used to group or list bits of data esspecially if there is a sequential element to the grouping.</p>
                <h3 className="sectionHeading">How do you write an Array?</h3>
                    <p className="flowingText">There are a few interesting symantic things that you should bear in mind when writing an array, and they are as follows:</p>
                    <ul className="bulletedList">
                            <li> {'[]'} - an aray is wrapped inside a pair of square brackets.</li>
                            <li> , - each item in the array should separated from the next with a comma.</li>
                    </ul>
                    <p className="flowingText">Let's look at a few examples.</p>
                    <pre className="codeBlock">{`
let myFirstArray = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
                `}</pre>
                <pre className="codeBlock">{`
let mySecondArray = [200, "Welcome", [true, false, true], {email: "hello@thejumpdigital.co.uk", password: "password"}];
                `}</pre>
                <h3>What can you do with Arrays?</h3>
                    <p className="flowingText">Well mostly you can store bits of data. These bits of data are called "items". Interestingly, there is no limit to the number of items you can store in an array.</p>
                    <p className="flowingText">You can tell the array to be longer than it actually is by assigning it a larger length, this means it will add empty items to the end to fill up the space. However, if you shorten the length of the array to be shorter than it actually is then you will lose the data in the items that exceed the new shorter length.</p>
                    <p className="flowingText">Much like with many of the other data types you can access the .length property and check the length of the array.</p>
                <h3>How to access information stored in Arrays</h3>
                    <p className="flowingText">One of the most interesting things about arrays is that they have "pointers" or "indexes" that fill the exact same role as keys do for the object data type.</p>
                    <p className="flowingText">It is important to remember that array indexes start with 0, so the first item in the array is the 0th, and the second is the 1st.</p>
                    <p className="flowingText">It's best if we explore both of these while looking at a real life example of some arrays so let's consider this array:</p>
                    <pre className="codeBlock">{`
let myFirstArray = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
                `}</pre>
                    <p className="flowingText">Imagine it's a stormy and Santa only wants to take Donner and Blitzen out for their daily exercise because all the other reindeer are afraid of thunder. How would you access their names?</p>
                    <p className="flowingText">Well, you can use their index like this:</p>
                    <pre className="codeBlock">{`
let reindeer1 = myFirstArray[6] // expected result: "Donner"
                `}</pre>
                <pre className="codeBlock">{`
let reindeer2 = myFirstArray[7] // expected result: "Blitzen"
                `}</pre>
                <p className="flowingText">If you have nested arrays you can simply access the index within the index like this:</p>
                <pre className="codeBlock">{`
let loginDetails = mySecondArray[2][1] // expected result: false
                `}</pre>
                <p className="flowingText">You can try to use any index even if the array does not contain that many items, however, if that index is empty, it won't return any information only "undefined".</p>
                <p className="flowingText">You can also try and access a negative index but be warned that these indexes would come from before the 0th item, if you want to count items from the end instead of from 0 you need to utilise the length like this:</p>
                <pre className="codeBlock">{`
let loginDetails = mySecondArray[mySecondArray.length -1] // expected result: {email: "hello@thejumpdigital.co.uk", password: "password"}
                `}</pre>
                <p className="flowingText">In the above example you must subtract one from the length of the array in order to use it as an index because the 0th item has a length of 1. The array would only have a length of 0 if it were empty.</p>
            
            <p className="flowingText">It is important to note that all these changes are not tracked, so the program will not store when things are added or removed and what these additions are. It only stores the current collection of data. </p>
                <button className="ready" onClick={() => this.props.callback(<Challenge22 callback={this.props.callback}/>)}>Challenge</button>
            </div>
        </div>
     );     
    }
}
 
export default Lesson22;