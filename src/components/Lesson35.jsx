import React, { Component } from '../../node_modules/react';
import "../App.css";
import Challenge35 from "./Challenge35";
import {GoDashboard} from "../../node_modules/react-icons/go";



class Lesson35 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 35: Stack, Web APIs, Queue and the Event Loop</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
            <div className="lessonBody">
            <h3 className="sectionHeading">The Stack</h3>
            <p className="flowingText">Computers make a series of requests and because computers are more polite than people give them credit for, as they read through code place these tasks in a "stack" or an orderly queue where they wait to be fired. </p>
            <p className="flowingText">When the computer is making this stack, if it comes across something that is async, like a request to a web API, it takes that work off of the stack and let's the API's server handle it.</p>
            <p className="flowingText">Once the computer gets a response from the web API's server, it places the response in a separate message queue.</p>
            <p className="flowingText">The computer is constantly checking and switching between these various queues in a cyclical behavior known as the event loop.</p>
            <p className="flowingText">Once something is completed it advances the queue and the next task is up to bat, these tasks are usually in some sort of logical order and might be relying on responses from the earlier tasks depending on how you have written your code.</p>
            <p className="flowingText">The issue with this, is that if the next task does depend on the earlier task and that bit is asynchronous, the dependant task will likely finish running before the async code finishes. In other words, various functions will finish running and close prematurely before they have the chance to get the information from the other functions that they should be waiting on. </p>
            <p className="flowingText">We need to teach these dependant functions a lesson in patience. There are three ways to tell async code to hold its horses and act in a pseudo-synchronous way, they are as follows:</p>
            <ul className="bulletedList">
                <li>Callbacks</li>
                <li>Promises</li>
                <li>async/await</li>
            </ul>
            <p className="flowingText">Let's look at Callbacks first. Callbacks are functions that are executed only after another function has finished executing.
            In JavaScript, you can pass a function into another function as an argument, the function that receives the argument is then sometimes referred to as a higher-order function.
            Let's look at an example: </p>
            <pre className="codeBlock">
        {`
// DECLARING THE CALLBACK FUNCTION 
 function alertFinished(){
    alert('Finished my homework');
}

// DECLARING THE HIGHER ORDER FUNCTION WHICH TAKES TWO ARGUMENTS, SUBJECT AND A CALLBACK
function doHomework(subject, callbackPlaceholder) {
    alert(\`Starting my \${subject} homework.\`);
    callbackPlaceholder();
}

// CALLING THE HIGHER ORDER FUNCTION AND PASSING OUR CALLBACK
doHomework('math', alertFinished);
`}
</pre>
<p className="flowingText">Callbacks are really neat, and they are fine if you only have to pass it on one level, but what if you have a chain of functions that all depend on each other? The nesting soon becomes very unmanageable and this is often referred to as "callback hell" because it makes your code extremely difficult to debug or read. </p>
<p className="flowingText">The good people in charge of ECMA Script standards realized that callback hell was a kind of hell that no developer would want to endure for a lengthy period of time, so they came up with the idea of Promises. Which work of the same idea of functions waiting for other functions but are written in a way that is much easier for humans to read: and as an added bonus they allow you to equip your program with good error handling.</p>
<p className="flowingText">Let's think of an example. What if I promise to bake you some brownies for your birthday next week. You don't know if I will actually bake you those brownies. But you are willing to wait and see if I do. A promise has three states as follows:</p>
<ul className="bulletedList">
                <li>Pending - you don't know if you will get those brownies</li>
                <li>Fulfilled - you did get those brownies, they are delicious and you are happy.</li>
                <li>Rejected - you did not get any brownies, you are sad and hungry</li>
            </ul>
            <p className="flowingText">Let's look at what this would look like in code:</p>
            <pre className="codeBlock">
        {`
        var browniesBaked = false;

        // Promise
        var willIEatBrownies = new Promise(
            function (resolve, reject) {
                if (browniesBaked) {
                    var brownies = {
                        flavor: 'Chocolate',
                        mixins: 'nuts'
                    };
                    resolve(brownies); // fulfilled
                } else {
                    var reason = new Error('I forgot to bake you brownies');
                    reject(reason); // reject
                }
        
            }
        );
`}
</pre>
<p className="flowingText">Much like callbacks, it is possible to chain promises together, and they also come up with a few methods that you can take a look at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Static_methods">here</a>.</p>
<p className="flowingText">Promises, especially if they are chained together can get a bit dense too due to the use of .then , the answer to this came with ES6 when the good people behind the ECMA Script standards came out with the sweet, sweet syntactic sugar we know as "async await".</p>
<p className="flowingText">Async/await let's you write asynchronous code, using mostly normal function syntax. Behind the scenes, an async function will return a promise and that promise will resolve and be returned by the async function. Let's take a look at an example:</p>
<pre className="codeBlock">
        {`
async function(){
    try {
      const result1 = await asyncCall1();
      const result2 = await asyncCall2(result1);
       
      console.log('result', result2);
       
    } catch(err) {
      // handle error
      console.log('err', err);
    }
   }
`}
</pre>
<p className="flowingText">the async keyword adds the asynchronous functionality to the function, and the await key word indicates that the function should wait for that promise to resolve.</p>
<h3 className="sectionHeading">AJAX Clients</h3>
<p className="flowingText">The following clients allow you to make requests to web APIs in an asynchronous way: </p>
<ul className="bulletedList">
                <li>fetch() -  takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request</li>
                <li>axios() - a third party package that allows you to make API requests by passing a config object to axios</li>
            </ul>
            <p className="flowingText">Let's look at an example fetch request so you can see how they work in tandem with API endpoints (URLS):</p>
            <pre className="codeBlock">
        {`
fetch('http://example.com/movies.json', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(requestBody)
  })
  .then((response) => {
     // Handle response codes here...
     if (response.status >= 200 && response.status < 300) {
       return response.json();
     } else {
       throw response;
     }
  })
  .then((result) => {
      console.log(result);
  })
  .catch((err) => {
      console.log(err)
  });
`}
</pre>

     
     <button className="ready" onClick={() => this.props.callback(<Challenge35 callback={this.props.callback}/>)}>Challenge</button>
        
        </div>
    </div>
         );     
    }
}
 
export default Lesson35;