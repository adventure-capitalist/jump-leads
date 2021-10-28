import React, { Component } from 'react';
import "../App.css";
import Challenge31 from "./Challenge31";
import {GoDashboard} from "react-icons/go";

class Lesson30 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 31: Programing Best Practices</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">KISS</h3>
                    <p className="flowingText">You may have already heard of the acronym Keep It Simple Stupid in your day to day life. But it can also apply to how you write code as well. It is important that they code that you write is simple and easy for other developers, or even your future self to: read, maintain, and spot mistakes in. 
                    It also usually means that your code is more efficient. When you are writing code don't feel like you have to reinvent the wheel. Don't overthink things, or over-engineer them. Ideally your finished program should fell lightweight and slick not clunky or cluttered.</p>
                    
                    
                <h3 className="sectionHeading">DRY</h3>
                <p className="flowingText">In programming, you might hear the acronym: DRY, which stands for Don't repeat yourself. People also refer to writing DRY code when the code doesn't repeat itself.
                What does repeating yourself in code mean though? Obviously you aren't going to write the exact same lines over and over again. But you might be writing very similar things or repeating the same logic for different buttons etc.</p>
                <pre className="codeBlock">{`
// HERE THE CLICK HANDLER REPEATS THE SAME FUNCTION TWICE FOR TWO BUTTONS
button1.addEventListener('click', function clickHandler(){
    doThing(thing.property.subProperty + 1);
    doAnotherThing(thing.property.subProperty * 100);
});

button2.addEventListener('click', function clickHandler(){
    doThing(thing.property.subProperty + 1);
    doAnotherThing(thing.property.subProperty * 100);
});



// YOU CAN PREVENT THIS REPETITION BY WRITING THE FUNCTION ONCE AND REUSING IT
function clickHandler(){
    var value = thing.property.subProperty;
    doThing(value + 1);
    doAnotherThing(value * 100);
}

button1.addEventListener('click', handler);
button2.addEventListener('click', handler);
                `}</pre>
                <p className="flowingText">Along similar lines, not only should you try and reuse functions wherever possible, you should also try and extract and reuse variables so that your code is more maintainable for the future. Let's take a look at an example:</p>
                <pre className="codeBlock">{`
const ANIMAL_CYCLE_START_YEAR = 1900;
const YEARS_IN_ONCE_CYCLE = 12;

function calculatePeriod(year) {
  const yearOfTheCycle = (year - ANIMAL_CYCLE_START_YEAR) % YEARS_IN_ONCE_CYCLE;
  return animals[yearOfTheCycle];
}
                `}</pre>
                <p className="flowingText">As you can see in this example, the two numbers that are crucial to the calculation are at the top of the file and you will only need to change them in one spot to update your whole file should the year change to 1920 or something. It's also worth noting that you should try and name the variables something meaningful so that other developers will know what they do. </p>
                <h3 className="sectionHeading">Some good rules of thumb</h3>
                    <p className="flowingText">When writing code, follow your instinct if it feels a bit clunky and weird, it probably is a bit clunky and weird. As you progress as a developer the code that you write will continue to improve. You don't need reinvent things from scratch. It's fine to google a good method of doing something, find a slick solution and use that in your project. You should spend some time before you jump straight into coding planning how you are going to approach a problem. 
                    In terms of breaking down a problem or a story that you need to tell using code, it helps if you save all the "nouns" as variables, and all of the "verbs" in your story as functions. If a method or variable is only used in one spot and won't need to be shared out to the entire program don't overshare. But if you do need to share the variable or method with the entire program, then you should bring it to the top of the program.</p>
                <h3 className="sectionHeading">SOLID</h3>
                    <p className="flowingText">Solid is programming acronym that stands for:</p>
                    <ul className="bulletedList">
                        <li>Single Responsibility Principle</li>
                        <li>Open/Closed Principle</li>
                        <li>Liskov Substitution Principle</li>
                        <li>Interface Segregation Principle</li>
                        <li>Dependency Inversion Principle</li>
                    </ul>
                    <p className="flowingText">Don't worry, we will go through each of these principles in detail.</p>
                <h4>Single Responsibility Principle</h4>
                    <p className="flowingText">The Single Responsibility Principle reads: "Every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class."</p>
                    <p className="flowingText">This is similar to the division of labor principle that you probably learned about in your school Economics classes where Adam Smith the founder of Economics ran a pin factory and found that he could make pins more efficiently if his workers specialized in making only one part of the pin.</p>
                    <p className="flowingText">When it comes to programming in many ways the same thing is true, if you write your code so that your functions are only responsible for handling one thing then your whole card will be the stuff of Adam Smith's dreams.</p>
                <h4>Open/Closed Principle</h4>
                    <p className="flowingText">The Open/Closed Principle reads as follows: "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification".</p>
                    <p className="flowingText">This means that you should be able to update your code and add new features without having to scrap everything that already exists. This comes back to making sure that your variables are declared and your code is reusable. Consider making your functions configurable so that you can pass new arguments every time that you call it.</p>
                <h4>Liskov Substitution Principle</h4>
                    <p className="flowingText">The Liskov Substitution Principle reads: "If S is a subtype of T, then objects of type T may be replaced with objects of type S (i.e. an object of type T may be substituted with any object of a subtype S) without altering any of the desirable properties of the program (correctness, task performed, etc.)" </p>
                    <p className="flowingText">This means that if you have a constructor that is making objects that behave in a specific way then don't have any code outside of the constructor that means that certain objects of that class or sub-class will have different methods and therefore behave differently.</p>
                <h4>Interface Segregation Principle</h4>
                    <p className="flowingText">The Interface Segregation Principle reads as follows: "No client should be forced to depend on methods it does not use." This means that you should make sure that none of your objects are weighed down with inherited or hard-coded methods that they don't use or need.</p>
                <h4>Dependency Inversion Principle</h4>
                <p className="flowingText">The Dependency Inversion principle suggests that high-level modules should not depend on low-level modules. And both should depend on abstractions, but that abstractions should not depend on details rather details should depend on abstractions.</p>
                <p className="flowingText">What this means is that you shouldn't let low-level details determine high-level functional abilities. The control, and all the strategic decisions should follow a top down structure and not a bottom up structure.</p>
                <button className="ready" onClick={() => this.props.callback(<Challenge31 callback={this.props.callback}/>)}>Challenge</button>
        
        </div>
    </div>
         );     
    }
}
 
export default Lesson30;