import React, { Component } from 'react';
import "../App.css";
import Challenge28 from "./Challenge28";
import {GoDashboard} from "react-icons/go";
import Russian from "../images/Russian.JPG";



class Lesson28 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 28: Advanced Functions</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3>How do functions work?</h3>
                    <p className="flowingText">We've already talked a bit about functions, when we were discussing all the different data types. And we've been talking about methods, which are technically a special type of function that are included inside an object, constructor function or a class.</p>
                    <p className="flowingText">Functions take in arguments. It is important that you keep the order of the arguments the same when you reference and pass them. This strict ordering reminds a lot of people of arrays, however, arguments only look like arrays. You can't actually treat them like arrays and use all the array methods on them.</p>
                    <p className="flowingText">However, because of this resemblance, they are referred to as being an array-like structure.</p>
                    <p className="flowingText">Functions, as a data type come with a few different attributes that you should be aware of as a developer. They are as follows:</p>
                    <ul className="bulletedList">
                        <li>length - will return the number of parameters a function was declared with.</li>
                        <li>name - will return the name the function was given </li>
                        <li>prototype - you will see this one in documentation a lot. It has to do with JavaScripts unique prototyping system. More on this later.</li>
                    </ul>
                    <p className="flowingText">There are also a few methods that functions as a datatype have inherently. You might see these around more than you actually use them, but they are important to be aware of. They are as follows: </p>
                    <ul className="bulletedList">
                        <li>call - executes a function, providing context and arguments are optional here.</li>
                        <li>apply - similar to call, but allows you to pass arguments as an array.</li>
                        <li>bind - creates a new function and cements in the context (more on context later).</li>
                        <li>toString - logs out the function as a string, usually for debugging purposes.</li>
                    </ul>
                    <p className="flowingText">Remember that it's possible to chain multiple methods together in a class. Let's look at an example:</p>
                    <pre className="codeBlock">{`
 RecipeObject.addIngredient('garlic').addIngredient('pepper').addIngredient('tomatoes').getIngredients();
                `}</pre>
                <h3>Try/Catch and Async/Await</h3>
                    <p className="flowingText">There are a few scenarios in which you might want to use the special type of functions that we are going to talk about next. First there are try/catch functions which will help you as a developer if you aren't sure if something will always work, and you want to handle that error in a specific way or make a backup plan if something fails. Let's look at an example:</p>
                    <pre className="codeBlock">{`
try {
    succeed();
} catch (err) {
    console.log(err);
} finally { 
    google(err);
}
                `}</pre>
                <p className="flowingText">In the above example, the try block lets you execute a bit of code that sometimes throws errors. If/when an error occurs, that error will be passed on to the catch statement.
The catch block lets you as the developer handle the error, by programming exactly what to do if an error occurs. Not all errors are bad. Sometimes we want a program to error if the user is doing something weird.
The err that is passed to the catch (i.e. catch(error)) takes the form of a JavaScript Error Object. The Error Object is a built in object that represents the error,  it has a number of properties which contain information about the specific error.
The finally block lets you to execute some code irrespective of whether or not an error has been thrown. The finally statement is optional meaning not every try/catch statement has one.</p>
                    <p className="flowingText">Secondly, there is the async/await syntax which you can use inside functions to wait on slower functions or calls to databases or APIs. This kind of function is useful if you don't want to clog up the application while you wait for a slow database to return something.</p>
                    <p className="flowingText">In JavaScript, code runs synchronously, which means that each line runs in order. This means that, for example, if a mother function calls a child function, the mother function stops and waits for the child function to run before carrying on with the rest of her business.</p>
                    <p className="flowingText">This waiting behavior means that functions will sometimes end up queueing and waiting to resolve. That queue is called a stack trace in programming. If you want to prevent that waiting behavior and keep the function traffic flowing, then you can use async/await. Let's look at an example:</p>
                    <pre className="codeBlock">{`
async function getUserAsync(name) 
{
  let response = await fetch('https://api.github.com/users/$\{name}');     // this is a request that will fetch a users github username.
  let data = await response.json()      // this will turn the response from the previous line into JSON (JavaScript Object Notation) format.
  return data;
}
                `}</pre>
                <p className="flowingText">In the above example, if the request to github is a bit slower, that is alright, the user can still click on stuff or interact with the page without inducing catastrophic failure. We will talk about this more when we talk about APIs.</p>
            <h3>Scope and Context</h3>
            <p className="flowingText">A few things that are really important to keep an eye on when writing your very own functions are scope and context.</p>
            <p className="flowingText">First up is scope. You can think about scope loosely like personal property. If some books are stored in your neighbor's house, you don't have access to them and you can't even really know for sure if your neighbor has books. Maybe they only listen to audio books... Who knows!? Scope is similar in that functions only have access to the data that they can access. 
            If there is data locked away somewhere off-limits then the functions won't successfully be able to access it. Another good way to think about how scopes are organized is like Russian nesting dolls. This is because scope isn't really linear, it is organized more in a nested or pocketed manner. </p>
            <img alt="russian nesting dolls at the library" className="figure" src={Russian}/>
            <p className="flowingText">So, if we combine these two analogies, we can see that the smallest russian nesting doll, or the "inner-most" doll, has access to the most books including the books from the public library and from all the outer dolls. However, the largest doll, or the "outer-most" doll only has access to it's book and the books in the public library. Scope is no different, but involves significantly fewer Russian antiques. With Scope there is a global scope, which typically includes all the variables included at the top of a file. 
            Anything that is included in the global scope can be accessed universally, just like a public library can. Much like the dolls inherit from the parent dolls. Functions can inherit data from the parent scopes as well. What's more important here is that parents can't "inherit" from child scopes. That's just because that's not how inheritance works. It's not impossible for children to share their books with their parents but it's doesn't come automatically built in.</p>
            <p className="flowingText">The technical term for this inheritance-like accessing of variables, is called a closure. Be mindful that if you have lots of children accessing something from higher-up the lines, then if at any point one of the children alters the data, it will change for everyone.</p>
            <p className="flowingText">It's worth noting that you won't always want everything stored in the global scope where every function can access it. For security and privacy reasons it's often good to limit which data is publicly available within the application and which is more hidden and private to an individual function. </p>
            <p className="flowingText">The "levels" of scope are referred to as the context of the functions. We've actually already been using context quite a bit when it comes to methods. When you use a method on an object you are declaring which object you want to look at, but with functions the linking between the context and the object can be provided using the "this" keyword. Now, the "this" keyword is infamous for making developers cry. It is used for binding the function to a given context. If you don't provide any other context, the functions will use the global scope as context by default.
            ES6 introduced fat arrow function syntax which helped to automate some of the context binding, but we will talk more about ES6 and all of the shiny new toys it provides us with in the lesson dedicated to ES6.</p>
            <p className="flowingText">You can also manipulate the context of a function by using one of these aforementioned methods that come along with the function data type here: .call(), .apply() and .bind()</p>
            <p className="flowingText">You might also come across the term hoisting when talking about scope and context, it is a phenomenon in JavaScript that basically means that no matter where within the current context you actually declare variables, they will be accessible universally across that whole level as if they are written at the very start of that scope. It's actually a really neat feature! </p>
        <h3>Constructor Functions</h3>
            <p className="flowingText">Constructor functions are a special type of function that imitate class structure in object oriented programming (OOP), if you have no idea what classes are or what kind of structure they have, that's okay we will talk more about them in the upcoming lesson dedicated to classes. Let's just start by looking at an example of a constructor function:</p>
            <p className="flowingText"></p>
            <pre className="codeBlock">{`
function Dog(name) {
    this.name = name;
}

var benji = new Dog('Benji');
var spot = new Dog('Spot');
                `}</pre>
                <p className="flowingText">In the above example you might notice that the constructor uses the word "this" inside the body of the function to bind the argument name into the variable name that we want to create. To take full advantage of the constructor functionality, instead of calling the function like normal, all you have to do is use the keyword "new" which will create a new object by running the constructor function. By convention, the names of constructor functions all start with a capital letter. This is just a matter of coding "tradition" so to speak, but knowing these traditions will help make your code easier to read. </p>
                <p className="flowingText">When it comes to constructor functions, if you want to be able to know if Benji was created with the Dog constructor class, you can use the instanceof keyword to check like this: </p>
                <pre className="codeBlock">{`
console.log(benji instanceof Dog); // true
                `}</pre>
                <button className="ready" onClick={() => this.props.callback(<Challenge28 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );     
    }
}
 
export default Lesson28;