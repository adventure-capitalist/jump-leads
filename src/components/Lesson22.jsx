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
                    <p className="flowingText">It's best if we explore this while looking at a real life example of some arrays so let's consider this array:</p>
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
            <h3>How to add information to Arrays</h3>
            <p className="flowingText">You can also use the system of indexes to overwrite specific items in the array. So if, god forbid, Dasher died and Santa replaced him with a reindeer named Rudolph, he do it like this:</p>
            <pre className="codeBlock">{`
myFirstArray[0] = "Rudolph" // expected result: ["Rudolph", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
                `}</pre>
            <p className="flowingText">You can also add new items to the end of an array by using the .push() method like this:</p>
            <pre className="codeBlock">{`
myFirstArray.push("Hermes") // expected result: ["Rudolph", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen", "Hermes"]
                `}</pre>
                And if you don't want to add them to the end, but would prefer to add them to the beginning of the array there is a method for that too; .unshift() and it is used like this:
                <pre className="codeBlock">{`
myFirstArray.push("Skipper") // expected result: ["Skipper", "Rudolph", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen", "Hermes"]
                `}</pre>
            <p className="flowingText">It is important to note that all these changes are not tracked, so the program will not store when things are added or removed and what these additions are. It only stores the current collection of data. </p>
                <button className="ready" onClick={() => this.props.callback(<Challenge22 callback={this.props.callback}/>)}>Challenge</button>
            <h3>How to remove/return information from Arrays</h3>
            <p className="flowingText">It is also possible to simultaneously remove and return elements of an array from both the start and from the end. </p>
            <p className="flowingText">To remove the last item from the end:</p>
            <pre className="codeBlock">{`
mySecondArray.pop() // expected result: {email: "hello@thejumpdigital.co.uk", password: "password"}, the array will now look like this: [200, "Welcome", [true, false, true]];
                `}</pre>
            <p className="flowingText">To remove the first item from the start:</p>
            <pre className="codeBlock">{`
mySecondArray.shift() // expected result: 200, the array will now look like this: ["Welcome", [true, false, true]];
                `}</pre>
            <h3>Removing/Adding sections of the Array at a specific index</h3>
            <p className="flowingText">You can use the .splice method to either remove sections of an array, or add something into an array from a specific point in the array.</p>
            <pre className="codeBlock">{`
myFirstArray.splice(2, 1) // expected result: ["Skipper", "Rudolph", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen", "Hermes"] // 1 item: "Dancer" was removed from position 2
                `}</pre>
            <p className="flowingText">You can also use this method to add things into the array if you like.</p>
            <pre className="codeBlock">{`
myFirstArray.splice(2, 0, "Jiver") // expected result: ["Skipper", "Rudolph", "Jiver", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen", "Hermes"] // 0 items were removed from position 2 and "Jiver" was added
                `}</pre>
            <p className="flowingText">Be aware that using splice is actually mutating (changing) the original array. What if you don't want to change the original array.</p>
            <p className="flowingText">You can use the sister method .slice() which will return a copy of the array or part of the array but the original array will stay intact.</p>
            <pre className="codeBlock">{`
let copy = myFirstArray.slice() // expected result: ["Skipper", "Rudolph", "Jiver", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen", "Hermes"] // the whole array is copied.
                `}</pre>
            <p className="flowingText">If you only want to copy some of the array you can use indices like this:</p>
            <pre className="codeBlock">{`
let copy = myFirstArray.slice(0, 2) // expected result: ["Skipper", "Rudolph" ] // the items between 0 and 2 are returned ( only the 0th, and 1st. NOT the 2nd)
                `}</pre>
            <p className="flowingText">There are a few other methods that you should know about when working with arrays.</p>
                <ul className="bulletedList">
                            <li> .reverse() - reverses the order of the items in the array</li>
                            <li> .concat() - allows you to combine two arrays together</li>
                            <li> .join() - will turn an array into a string with a comma (or something of your choice) between each item</li>
                            <li> .forEach() - allows you to do something (carry out a function) to each element in the array, this is used in combination with functions. More on functions later.</li>
                            <li> .includes() - searches through the array and says whether or not the array contains the thing you are looking for.</li>
                            <li> .indexOf() - if you know an array includes an item but you don't know the index, this will return it for you.</li>
                            <li> .every() - tests each item in the array against a condition, if every single item passes it will return true.</li>
                            <li> .some() - similar to .every() but only one item in the array needs to pass for it to return true.</li>
                            <li> .filter() - once again tests each item in the array against a condition but this will return a new array with only the items that passed the test.</li>
                            <li> .find() - tests each item against a condition UNTIL it finds one, and it will return the first one it finds and only that one.</li>
                            <li> .findIndex() - similar to .find() but it will return the INDEX of the first item that passes the test.</li>
                            <li> .sort() - sorts the array in order of the first character (alphabetically is fine, but numbers can cause an issue think: 1, 10, 2... oops) </li>
                            <li> .map() - creates a new array based off of the old array except all the items have been manipulated in the same way.</li>
                    </ul>
                <p className="flowingText">You can read more about all of the array methods <a href="https://www.tutorialrepublic.com/javascript-reference/javascript-array-object.php">here</a></p>
            </div>
        </div>
     );     
    }
}
 
export default Lesson22;