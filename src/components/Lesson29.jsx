import React, { Component } from 'react';
import "../App.css";
import Challenge29 from "./Challenge29";
import {GoDashboard} from "react-icons/go";

class Lesson29 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 29: ECMA Script 6</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">ECMA Script? </h3>
                    <p className="flowingText">You may or may not be surprised to know that JavaScript is actually standardized under the name: ECMA Script. Some of the biggest changes to JavaScript as we know it were released in ECMA Script version 6 which was published in 2015. However, there have been smaller releases since then, which you can read more about <a href="https://www.freecodecamp.org/news/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e/">here</a>.</p>
                    <p className="flowingText">As newer and newer versions of JavaScript are released, the people who make and maintain browsers like Microsoft, Google, and Mozilla among others, have to work to continue to be able to support the latest syntax. There are tables available <a href="https://kangax.github.io/compat-table/es6/">here</a> that allow you to check and keep track of which browsers can handle which bits of JavaScript Syntax.</p>
                    <p className="flowingText">Some of these issues can be mitigated through the use of something called a transpiler, which although traditionally used to convert code written in one language into another programming language can also be used to bridge gaps between versions of the same language. This ability for transpilers to "patch" between versions of JavaScript actually makes them really important when it comes to testing out how JavaScript will develop going forward.</p>
                    <p className="flowingText">Two of the most common transpilers are Traceur, and Babel. We will use Babel, you can test it out <a href="https://babeljs.io/repl/">here</a>.</p>
                    <p className="flowingText">As far as new features we will cover the following:</p>
                    <ul className="bulletedList">
                        <li>Module imports/exports</li>
                        <li>Let/const variable declarations</li>
                        <li>Fat arrow functions</li>
                        <li>Default parameters</li>
                        <li>Template literals</li>
                        <li>New string methods</li>
                        <li>New Array Methods</li>
                        <li>Object Literal Upgrades</li>
                        <li>Destructuring</li>
                        <li>Spread and rest operators</li>
                        <li>for/of loop</li>
                        <li>Promises</li>
                        <li>Async/Await</li>
                        <li>Symbols</li>
                        <li>Classes</li>
                        <li>Generators</li>
                        <li>Proxies</li>
                        <li>Sets and Weaksets</li>
                        <li>Maps and Weakmaps</li>
                    </ul>
                <h4>Modules</h4>
                    <p className="flowingText">When it comes to importing and exporting libraries the syntax has changed slightly fro ES5 to ES6. Lets take a look at some examples:</p>
                    <pre className="codeBlock">{`
// IMPORTING IN ES5
var myProgram = require('./myJS');
var data = require('./myJS').data;

// EXPORTING IN ES5
module.exports = function(){
    ...
   };
   exports.data = [{..}, {..}];
   exports.isDeveloper = false;



//IMPORTING IN ES6
import passport from 'passport';
import myScript, { MONTH } from './myEs6';

//EXPORTING IN ES6
export const MONTH = 'January';
export const DAY = 'Friday';
                `}</pre>
                <h4>Let/Const variable declarations</h4>
                    <p className="flowingText">With ES6 came two new flavors of variable; "const" and "let". const is short for constant which means that it cannot be re-declared or re-assigned. Interestingly, with objects although the whole object cannot be reassigned, their properties can be changed. let is a more flexible variable. Once again it cannot be re-declared but unlike const it can be re-assigned.
                    both let and const are 'block scoped' not 'function scoped', so they are not hoisted in the same way "var" would be. Not being able to access a variable before it is declared is sometimes referred to as the Temporal Dead Zone. What is important for you to know is, that it is often good practice to declare variables first, at the top of the relevant scope unless you have a reason for not doing so.</p>
                    <pre className="codeBlock">{`
// VARIABLES IN ES5
var myCoolVariable = 5;
}
// VARIABLES IN ES6
var myCoolVariable = 5;
let myFlexibleVariable = "Tuesday";
const myConstantVariable = "127.0.0.1"
}
                `}</pre>
                <h4>Fat Arrow Functions</h4>
                    <p className="flowingText">Fat arrow functions are called fat arrow functions because they are written using syntax that looks like an arrow: "=&gt;".</p>
                    <p className="flowingText">They are quite similar to normal ES5 functions except for a few key differences. Firstly, they are anonymous, which means that they don't have a name. This can make debugging a bit more difficult because the error messages will not contain the name of the function that is causing the issues, and it also prevents the function from self-referencing. Secondly, these functions work a little bit different when it comes to biding and scope. 
                    In ES5 you would need to bind the word "this" to give the function it's own context, otherwise, "this" wouldn't be defined, however with fat arrow functions, they automatically take on the parent context, so whatever "this" means one level up in terms of scope, is what "this" will mean inside the fat arrow function. This is called "lexical scoping" however, it's not always a good thing. If you are thinking about writing your own class constructors, do not use fat arrow functions for the methods that you give the class because the issue with "this" will mean that you are referencing stuff outside of the class. Also, it's sometimes a bad idea to use them for event handlers if you are going to need to use "this" to reference something inside of the event. Let's look at an example: </p>
                    <pre className="codeBlock">{`
// FUNCTIONS IN ES5
let add = function(x, y) {
    return x + y;
}
// FUNCTIONS IN ES6
(x, y) => {
    return a * 2;
}
                `}</pre>
                <h4>Default Function Parameters</h4>
                    <p className="flowingText">ES6 came along with the ability to give functions a fallback value to use incase that parameter isn't actually passed. Although similar things could be achieved in ES5, the new syntax helps to keep your code much more concise and readable.</p>
                    <p className="flowingText">All that you have to do to use this syntax is provide the default value inside the function's parameters when you are declaring them. You just use an equals sign after the name of the parameter and give the default value right then and there. Let's look at an example:</p>
                    <pre className="codeBlock">{`
function getDetails(userType = 'guest'){
    // ...
}
                `}</pre>
                 <h4>Template Literals</h4>
                    <p className="flowingText">Another cool thing that ES6 introduced are template literals, also referred to as template strings. They allow you to dynamically insert information into a string using variables. The only condition is that whatever you are storing in the variables that you are embedding in the strings, must be able to be turned into a string. Let's take a look at the syntax:</p>
                    <pre className="codeBlock">{`
const name = 'Jamie';
const age = 24;
const sentence = \`$\{name} is $\{age} years old\`;`}</pre>
                <p className="flowingText">It's possible to execute javascript inside the template literals, but the result must be able to be coerced into a string. Here are a few more examples:</p>
                <pre className="codeBlock">{`
// PERFORM SIMPLE OPERATIONS
const name = 'fido';
const age = 2;
const sentence = \`$\{name} is $\{ age * 7 } years old (in dog years)\`;

// EXECUTE JAVASCRIPT FUNCTIONS
let age = 4;
function calculateAge(age){
    if(age < 2){
        let humanYears = age * 14;
    }else {
        let humanYears = ((age - 2) * 7) + 28
    }
    return humanYears
}

const sentence = \`Your dog is the equivalent of $\{calculateAge(age)} in human years\`;

// CREATE HTML ELEMENTS
const friends = [{name: 'Taylor', age: 27}, {name: 'Jessie', age: 43}];
const sentence = \`
    <ul class="friends">
        $\{friends.map(friend => \`<li>$\{friend.name} is $\{friend.age} years old</li>\`).join('')}
    </ul>
\`;

`}</pre>
    <h4>New String Methods</h4>
        <p className="flowingText">There are also a few new string methods that came out with ES6. They are as follows:</p>
        <ul className="bulletedList">
            <li>.startsWith() - checks if the string starts with the argument</li>
            <li>.endsWith() - checks if the string ends with the argument</li>
            <li>.includes() - checks if the string includes the argument</li>
        </ul>
        <p className="flowingText">All of these methods take as a first argument a term for which to search the string for, and optionally as a second argument a position or index in the string at which to start the search (this index starts at 0).</p>
        <p className="flowingText">Then there are also these new methods:</p>
        <ul className="bulletedList">
            <li>.padStart() - adds characters to the beginning of the string</li>
            <li>.padEnd() - adds characters to the end of the string</li>
            <li>.trimStart() - cuts whitespace characters from the beginning of the string</li>
            <li>.trimEnd() - cuts whitespace characters from the end of the string</li>
        </ul>
        <p className="flowingText">The pad methods take a desired length as the first number and a character as the second argument, the trim methods don't take any arguments.</p>
        <pre className="codeBlock">{`
const str1 = 'Loading';
console.log(str1.padEnd(25, "."));
// expected result: "Loading.................."
                `}</pre>
        <p className="flowingText">In the example, 25 is the desired length of the string, so this method will add fullstops to the end until str1 has a total length of 25. </p>
        <p className="flowingText">The other methods work similarly, the padStart() method adds characters to the front of a string, the trimStart() method removes characters from the beginning of a string, and the trimEnd() method trims whitespace characters from the end of a string.</p>
    <h4>New Array Methods</h4>
    <p className="flowingText">ES6 also brought with it, some new instance methods for arrays which are now available for you to use on the arrays that you create.</p>
    <ul className="bulletedList">
            <li>.includes() - similar to the string method, checks if the array contains the argument you are searching for</li>
            <li>.some() - takes a function, will return true if any of the elements in the array pass the test in the function passed as an argument</li>
            <li>.every() - like some but only returns true if all of the elements in the array pass the test in the function passed as an argument</li>
            <li>.find() - takes a function and returns the value of the first item in an array that passes the test in the function passed as an argument.</li>
            <li>.findIndex() - similar to find but returns the index (starts at 0) of the first item to pass the test in the function passed as an argument.</li>
        </ul>
    <p className="flowingText">There are also some new static methods that have been created and can be used directly on the Array object. They are:</p>
    <ul className="bulletedList">
            <li>Array.from() - creates an array from any iterable thing (string, map, array, etc.)</li>
            <li>Array.isArray() - tests if something is an array. Because arrays are in the object family "typeof" returns object. So this is will tell you if it is an array object.</li>
            <li>.every() - like some but only returns true if all of the elements in the array pass the test in the function passed as an argument</li>
            <li>.find() - takes a function and returns the value of the first item in an array that passes the test in the function passed as an argument.</li>
            <li>.findIndex() - similar to find but returns the index (starts at 0) of the first item to pass the test in the function passed as an argument.</li>
        </ul>
    <h4>Object Literal Upgrades</h4>
        <p className="flowingText">The upgrades included object property shorthand. Which meant that if the key in an object matches the variable name for the value you only have to write it once like this:</p>
        <pre className="codeBlock">{`
function getPerson(name, age) {
    return {
        name,
        age
    };
}
                `}</pre>
          <p className="flowingText">You can now also use dynamically created keys in objects like this:</p>      
          <pre className="codeBlock">{`
const VIP_SUFFIX = 'VIP';
const KEY = 'CLIENT';
const name  = 'John'

let person = {}
person[\`$\{KEY}-$\{VIP_SUFFIX}\`] = name;

                `}</pre>
                <p className="flowingText">In the above example you will notice that the more "array-like" square bracket notation in combination with template literals to add the dynamically generated keys to the object.</p>
                <p className="flowingText">The new features also include some shorthand for object methods. Let's take a look at before and after.</p>
                <pre className="codeBlock">{`
// OLD WAY
function getPerson(name, age){
    return{
        start: function(){....},
        stop: function(){....}
    };
}

// NEW WAY
function getPerson(name, age){
    return{
        start(){....},
        stop(){....}
    };
}

                `}</pre>
    <h4>Destructuring</h4>
        <p className="flowingText">The ES6 gods also smiled upon us and gave us some more short cuts in terms of turning various constituent parts of objects, and by association arrays, into variables.</p>
        <p className="flowingText">Let's look at a few examples:</p>
        <pre className="codeBlock">{`
// GIVEN THIS OBJECT...
var person = {
    name: 'Riley',
    age: 39,
    social: {
        twitter: 'riley125',
        facebook: 'riley.smith'
    },
};

// YOU USED TO HAVE TO DO THIS...
var name = person.name;
var age = person.age

// BUT NOW YOU CAN DO THIS...
const { name, age } = person; // age and name are now variables that you can use!

                `}</pre>
        <p className="flowingText">you can also rename the variables in the same line if you want. To do that, you can use the following syntax:</p>            
        <pre className="codeBlock">{`
const { twitter:tw, facebook:fb } = person.social; // tw and fb are now variables that you can use!
                `}</pre>
        <p className="flowingText">You can create really concise lines of code if you combine destructuring with the default value syntax. This sort of gives you an idea of what the aim of creating these syntax short-cuts is:</p>
        <pre className="codeBlock">{`
const { width:w = '100%', height:h = '200', color = 'blue' } = settings; // h and w exist as variables, and have the default values 100% and 200 respectively
                `}</pre>
        <p className="flowingText">It's also possible to destructure arrays. This makes sense, because they are actually just objects by another name. Let's look at how the syntax works for this:</p>
        <pre className="codeBlock">{`
var friends = ['tom', 'dave', 'hannah'];
const [friend0, friend1, friend2] = friends; // friend0 is now a variable that is equal to friends[0]
                `}</pre>
    
    <h4>Spread and rest operators</h4>
        <p className="flowingText">The rest and spread operators are both handy and concise. You can think of the spread operator as unpacking or "spreading out" something. And the rest operator as something that "gathers" the rest of things together.</p>
        <p className="flowingText">Let's go ahead and look at some more examples:</p>
        <pre className="codeBlock">{`
const firefighters = ['devin', 'casey', 'ellis', 'sam', 'skylar'];
const [captain, dalmatian, ...everybodyElse] = firefighters;

console.log(captain) // expected result: 'devin'
console.log(dalmatian) // expected result:  'casey'
console.log(everybodyElse) // expected result:  ['ellis', 'sam', 'skylar']
                `}</pre>
        <p className="flowingText">As you can see, the ellipsis "grouped" all the rest of the items in the array into a single variable called "everybodyElse"</p>
        <p className="flowingText">The spread operator looks similar but works to "ungroup" the items in an array. Again, the best way to demonstrate is to look at some examples:</p>
        <pre className="codeBlock">{`
var arr1 = [0,1,2];
var arr2 = [3,4,5];

const arr3 = [...arr1, ...arr2];
const arr4 = [...arr1, 'some other value I added in the middle', ...arr2];

console.log(arr4) // expected result: [0, 1, 2, 'some other value I added in the middle', 3, 4, 5]
                `}</pre>
                <p className="flowingText">In the above example, you can see that the same ellipsis is working to spread the inner values of each variable into the new variables.</p>
    <h4>for/of loop</h4>
        <p className="flowingText">The new for/of loop is designed to loop over anything that is iterable, or can be gone through one by one. The exception is if you have an object (which is technically iterable), here you shouldn't use the for/of loop, but rather the for/in loop.</p>
        <p className="flowingText">The for/of loop is particularly useful if someone has added in a method to an object, so that that method can also be included in the iterations. Let's look at another example:</p>
        <pre className="codeBlock">{`
const pets = ['cat', 'dog', 'rabbit'];

for (const pet of pets) {
    console.log(pet); // expected result: 'cat', 'dog', 'rabbit'
}



for (const [index, pet] of pets.entries()) {
    console.log(index, pet); // expected result: 0, 'cat', 1, 'dog', 2,  'rabbit'
}
                `}</pre>
        <p className="flowingText">As you can see from this example, with the for/of loop the syntax involves creating a constant that represents one unit of the entire iterable item. It is worth noting that you can still use the continue and break keywords that we discussed earlier when we covered the other types of loops.</p>
    <h4>Promises</h4>
        <p className="flowingText">We will talk more in-depth about promises in the lesson dedicated to AJAX. Promises allow Javascript to wait for a result. This waiting behavior is described as asynchronous.</p>
    <h4>Async/Await</h4>
        <p className="flowingText">Once again, we will talk more about Async/Await in the AJAX lesson, however know that the new Async/Await syntax is built on top of Promises, and it lets developers write asynchronous code in a synchronous way so that the JavaScript doesn't feel like it is waiting.</p>
    <h4>Symbols</h4>
        <p className="flowingText">Symbols are a new datatype that were introduced in ES6 to the JavaScript world. They are used when you as a developer need to create something truly unique. Once you're created a symbol it will remain unique throughout the entire system. You can declare a new symbol in two ways: </p>
        <pre className="codeBlock">{`
Symbol(*identifier string goes here*)

Symbol.for() OR Symbol.keyFor()
                `}</pre>
    <p className="flowingText">If you iterate over an object that contains symbols, it will not show the symbols unless you specifically use: Object.getOwnPropertySymbols(obj). This means that they are naturally quite good for privacy.</p>
    <p className="flowingText">Even symbols that you create with the same identifier will not be considered equal because they are unique.</p>
    <p className="flowingText">They are commonly created whenever developers need to create a unique property key, or if there are important concepts that must be represented as unique across the whole system. Let's look at a few examples:</p>
    <pre className="codeBlock">{`
const COLOR_RED    = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN  = Symbol('Green');
const COLOR_BLUE   = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');
                `}</pre>
    <h4>Classes</h4>
        <p className="flowingText">We will explore the new class syntax in more detail in the lesson dedicated to classes, but know that there is a new JavaScript class syntax that is used to create objects and replaces an older method of using JavaScript functions to return objects.</p>
    <h4>Generators</h4>
        <p className="flowingText">The advent of generator functions allowed developers to be able to start and stop a function. This means that the function can return several times. You can tell something is a generator, if you see an asterisk (*) after the function key word and/or you see the word yield being used in the function body.</p>
        <p className="flowingText">Let's go ahead and look at an example:</p>
        <pre className="codeBlock">{`
function* myGenerator(i){
    yield i + 1
    yield i + 2
    yield i + 3
}

const iterator = myGenerator();
iterator.next(1); // {value: '2', done: false}
iterator.next(3); // {value: '5', done: false}
iterator.next(7); // {value: '10', done: true}
iterator.next(10); // {value: undefined, done: true}
                `}</pre>
        <p className="flowingText">As you can see, every time you call next on the function, it will move on to the next yield. When it runs out of yields it will return the value as undefined and done as true.</p>
    <h4>Proxies</h4>
    <p className="flowingText">Proxies are also new to JavaScript and they allow you to protect an object and use the proxy to manipulate it instead. You can create a proxy using the Proxy() object constructor as follows:</p>
    <pre className="codeBlock">{`
// OBJECT THAT MUST BE PROTECTED
const p = {};

// THE GETTER AND SETTER VALUES TO UPDATE THE PROXY SAFELY
const isAuthorized = true;
let ageValidator = {
    set: function(obj, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
        if (value > 200) {
          throw new RangeError('The age seems invalid');
        }
      }
  
      // DEFAULT BEHAVIOR 
      obj[prop] = value;
  
      // SUCCESS
      return true;
    },
    get: function(obj, prop) {
      if(!isAuthorized) {
        return null;
      }
      return obj[prop];
    }
  };

  // DECLARING THE PROXY
  let person = new Proxy(p, validator);
                `}</pre>
        <p className="flowingText">What is important to know about proxies, is that they take two arguments, the first represents the target object that you wish to proxy and protect. The second argument is a set of get/set overrides which determines whether the object is being updated safely.</p>
    <h4>Sets and Weaksets</h4>
        <p className="flowingText">Sets are another new kid on the JavaScript block. Sets are actually very similar to Arrays, however, they can ONLY contain unique values. They will exclude any values that are not unique, they can't sit with us. </p>
        <p className="flowingText">Examples are great, let's look at how sets work:</p>
        <pre className="codeBlock">{`
const colourArray = ['red', 'red', 'orange', 'blue'];
const colourSet = new Set(colourArray);

console.log(colourArray); // Expected Result: ['red', 'red', 'orange', 'blue']
console.log(colourSet); // Expected Results: ['red', 'orange', 'blue']
                `}</pre>
        <p className="flowingText">Whatever you pass to the set constructor, must be iterable. You can also test the size of a set by using the .size property which works exactly like the .length property does for normal arrays.</p>
        <p className="flowingText">There are a few methods that come along with sets that you should know about:</p>
        <ul className="bulletedList">
            <li>.add() - takes a value as an argument and adds it to the set if it is unique</li>
            <li>.has() - tests if the value that is passed as an argument is in the set. Returns true or false.</li>
            <li>.delete() - takes a value as an argument, if the value is within the set, it will remove it and return true, if it is not it will return false</li>
            <li>.clear() - doesn't take any arguments. Empties the set.</li>
            <li>.entries() - returns an iterable object for entries [value, value], exists only for compatibility with Map</li>
            <li>.keys() - returns an iterable object for values</li>
            <li>.values() - same as .keys(), for compatibility with our next data type: Map</li>
        </ul>
        <p className="flowingText">Great, but what was a weakset you ask? Well in JavaScript weak structures reference an object in such a way that doesn't stop it from being garbage collected if there are no other references to prevent this.</p>
        <p className="flowingText">A weakset only contains objects. And they only have the .add(), .has(), and .delete() methods. You cannot use .clear() or even .size with a weakset. It is also not possible to iterate over a weakset.</p>
        <p className="flowingText">Weaksets are created like so:</p>
        <pre className="codeBlock">{`
var ws = new WeakSet();
                `}</pre>
    <h4>Maps and Weakmaps</h4>
        <p className="flowingText">What is a map? A map is like an object except it's keys can be anything at all. The important differences between a map and an object are that maps allow you to dynamically look up keys. A Map only has values that are all the same type and that can be used interchangeably. 
        You can use keys that aren't strings in Maps. Maps are designed to help with situations where the key/value pairs are being added and removed and the number of key/value pairs are changing constantly. It is also possible to iterate over the Map.</p>
        <ul className="bulletedList">
            <li>.set() - takes a key and a value</li>
            <li>.size - property similar to length for arrays.</li>
            <li>.has() - tests if the key that is passed as an argument is in the set. Returns true or false.</li>
            <li>.get() - takes a key as an argument, returns the value</li>
            <li>.delete() - takes a key as an argument, if the key is within the set, it will remove the key/value pair and return true, if it is not it will return false</li>
            <li>.clear() - doesn't take any arguments. Empties the set.</li>
            <li>.entries() - returns an iterable object for entries [key, value]</li>
            <li>.keys() - returns an iterable object that contains the keys for each element in insertion order</li>
            <li>.values() - returns an iterable object that contains the values for each element in insertion order</li>
            <li>.forEach() - takes a function as an argument, and calls that function once for each object in insertion order</li>
        </ul>
        <p className="flowingText">Now, that we know all about the map, let's discuss the weakmap. With weakmap, the keys must be objects, and they only have the .get(), .set(), .has(), and .delete() methods there is no .clear() method and no .size</p>
        <p className="flowingText">These values are weakly held so if there are no other references to that item, then it will be garbage collected. Once again you cannot iterate over a weakmap. You can create one like this:</p>
        <pre className="codeBlock">{`
var ws = new WeakMap();
                `}</pre>
                <button className="ready" onClick={() => this.props.callback(<Challenge29 callback={this.props.callback}/>)}>Challenge</button>
        </div>
    </div>
         );     
    }
}
 
export default Lesson29;