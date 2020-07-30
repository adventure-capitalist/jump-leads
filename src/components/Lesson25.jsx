import React, { Component } from 'react';
import "../App.css";
import Challenge25 from "./Challenge25";
import {GoDashboard} from "react-icons/go";
import revolutionary from "../images/revolutionary.jpg";

class Lesson25 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 25: Conditionals, Loops, and Timers</h2>
                    {/* TLC? Timers Loops and Conditionals? */}
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What are Conditionals?</h3>
                    <p className="flowingText">Conditional statements are always based on "what ifs". So that if a scenario happens then something else happens. In fact, the word if is very important for conditionals. Lets take a look at an example and then talk about it a bit more in detail.</p>
                    <pre className="codeBlock">{`
if(name = "Peter Piper") {
    picked("a peck of pickled peppers"); // assume picked() is a function.
} else {
    picked("one pepper");
}
                `}</pre> 
                    <p className="flowingText">In the above example, the code checks whether or not the scenario is true that your name is Peter Piper, and if it turns out to be true, it will go on to run the picked() function with "a peck of pickled pepers" otherwise if the scenario is not true, it will run the picked() function with "one pepper" and will not even consider that your name could have ever been Peter Piper.</p>
                    <p className="flowingText">These if/else statements are a bit like those choose your own adventure books where you go to page 18 to open the spooky cellar door and go to page 35 to get the heck out of the haunted house. Now if you are not a peeker.... you go straight to the page that matches your decision and you do not look at the other possibilities. The same thing is true for conditionals. The computer checks all of the conditions, decides which one is true, then it goes straight to reading the code in that scenario. It does not pass go. It does not peek into the other scenarios. Computers aren't peekers.</p>
                    <p className="flowingText">But the crucial similarity is that you can still have a blender even if you don't know what ingredients you're going to blend yet. This means that you can use the blender for lots of things and just give it different ingredients.</p>
                    <p className="flowingText">If this analogy isn't helpful you can also think of them as a multilayered bulleted list.</p>
                <img alt="wait theres more" className="figure" src={revolutionary}/>
                    <p className="flowingText">With a multi-level list, although humans tend to read it from the top of the page to the bottom of the page, the computer will always read from the top level of the bullet points in. So let's presume that the computer was deciding which of the things on the list to do next. It would go through the top level and check if things has already been finished, and the first task that it found to be unfinished it would dig deeper into. However, if a task was not incomplete at the top most level it wouldn't bother to dig deeper into the lower levels. They just aren't relevant for the computer given the current scenario.</p>
                    <p className="flowingText">You can keep using the same functions each time give it different things to work with, and the results will vary depending on what you put in.</p>
                    <p className="flowingText">It is possible for there to be multiple scenarios to check if they are true. Here is an example with many possible scenarios.</p>
                    <pre className="codeBlock">{`
if(1910 >= birthYear <= 1924) {
    generation = "The Greatest Generation";
} else if(1925 >= birthYear <= 1945){
    generation = "The Silent Generation";
} else if(1946 >= birthYear <= 1964) {
    generation = "Baby Boomer Generation";
} else if(1965 >= birthYear <= 1975) {
    generation = "Generation X";
} else if(1976 >= birthYear <= 1985){
    generation = "Xennial Generation";
} else if(1986 >= birthYear <= 1995) {
    generation = "Millennial Generation"
} else if(1996 >= birthYear <= 2012) {
    generation = "Generation Z";
} else if(2013 >= birthYear <= 2025) {
    generation = "Generation Alpha";
} else {
    generation = undefined;
}
                `}</pre> 
            <p className="flowingText">There are other ways of handling conditional statements. Another common way is the switch statement. Which is primarily used with concrete alternative scenarios. Let's look at another example:</p>
            <pre className="codeBlock">{`
switch (eyeColor) {
    case 'brown':
      percentage = '70%';
      break;
    case 'blue':
      percentage = '8%';
      break;
    case 'green':
      percentage = '2%';
      break;
    case 'grey':
      percentage = '3%';
      break;
    case 'hazel':
      percentage = '9%';
      break;
    case 'amber':
      percentage = '8%';
      break;
    default:
      percentage = '0%';
 }
                `}</pre>
            <p className="flowingText">In the above example, there are several different possible "cases" that could be true. There is also a default case at the bottom which will set the percentage to 0 if an eyecolor is not given. The break keyword is included in every case scenario. It is important to include it as it exits the switch. If you do not  include it the switch will not be exited and they next scenario will be considered part of the inital one, which defeats the purpose of having multiple possible scenario.</p>
            <p className="flowingText">There are also ternaries, which are basically short form conditional statements. The only catch is that a single ternary can only handle two possible conditions. Let's look at an example.</p>
            <pre className="codeBlock">{`
age < 18 ? console.log("You are not permitted to visit this site") : console.log("You are permitted to visit this site ")
}`}</pre>
            <p className="flowingText">In the above example, the condition is whether or not the age variable is greater than 18. The question mark acts similarly to how a question mark works in written English. As a recursive "what if". If the condition is true, then the middle section of the ternary is executed. If the condition is not true, then everything after the colon is executed. The colon acts just like an else statement in an if/else conditional. It is possible to nest ternaries to create more than one possible outcome. However if you are nesting more than one ternary, you might want to consider using a different syntax to express you condition.</p>
            <p className="flowingText">Next up is arguments, arguments are the things that fill those placeholders when functions are being used. Let's look at an example again:</p>
        <h3 className="sectionHeading">Introducing loops</h3>
            <p className="flowingText">Speaking of what ifs, what if you don't have multiple scenarios but you want to repeat the actions for your scenario over and over again. That is where you would use a loop.</p>
            <p className="flowingText">There are a few different types of loops that you can use, but first it's important to understand exactly when you should use a loop. Let's imagine something for a moment.</p>
            <p className="flowingText">Imagine you are working as a blacksmith and your job is to create horseshoes from iron rods. You would need to form the metal rods into a round shape and smash them with a hammer until they look like horseshoes. Unfortunately "smash it until it looks like a horseshoe" is not something that a computer is very good at interpreting. A computer does not have eyes and has never seen a horse, let alone a horseshoe before. But I digress. The problem here is that every single horseshoe you make will require you to hit it a different number of times with the hammer. It is not programmatically possible to determine the perfect number of hits but you do have a goal in mind. So long as that goal is measurable, you can express that to the computer and keep repeating a process until the computer checks and sees that the goal has been reached.</p>
            <p className="flowingText">Let's look at an example to get an idea of the expected syntax of the most basic kind of loop, a for loop:</p>
            <pre className="codeBlock">{`
for(var i=0; i < 5; i+=1){
    console.log('i is now equal to: ' + i);
};
                `}</pre> 
            <p className="flowingText">When writing a for loop, the first step is to use the key word "for". Once that's done, you will have to start with the arguments. For loops take three different arguments. The first argument represents the starting conditions, and will keep track of how many times the loop has run. In the above example the first argument is this variable declaration: "var i = 0". The second argument is the ending conditions, and represents the goal that you want the loop to reach before it stops. In the above example the goal is "i &lt; 5" meaning that the loop will stop if i is not less than 5.</p>
            <p className="flowingText">The third argument is the counter. which will add one to the number of loops that has run. Technically speaking, you can do any action here you are not limited to increasing by one. Maybe you want to decrease by one, or even multiply. There are many possibilities for many different scenarios. In the above example, the third argument is "i+=1". </p>
            <p className="flowingText">To go back to the horseshoe example, let's say you want to hit the horseshoe until it is 5 millimeters thick. The logic for calculating how thick the horshoe is is missing here, but you can see how creating a measurable goal is important to setting up a for loop.</p>
            <p className="flowingText">There is also a kind of loop called a "while loop". While loops can be used for measurable goals just like for loops but they are particularly useful if the goal is not so measurable. Once again, let's look at an example:</p>
            
            <pre className="codeBlock">{`
while(morningAlarm = true) {
    soundtheAlarm(); // assume this is a function that sounds an alarm.
}
`}</pre> 
<p className="flowingText">In this example, the alarm will continue to sound so long as the variable morningAlarm is true. However, as soon as the alarm is dismissed, and morningAlarm equals false, the alarm will no longer sound.</p>
<p className="flowingText">While loops are quite easy to accidentally make infinant. If you end up in an endless loop, your software might crash, or you will be forced to hard quit and figure out how to reprevent the loop from running forever.</p>
<p className="flowingText">There are also slightly newer versions of both the for loop and the while loop. Let's take a look at the newer version of the for loop first:</p>
<pre className="codeBlock">{`
var person = {"name": "Clark", "surname": "Kent", "age": "36"};

for(var prop in person) {  
    document.write("<p>" + prop + " = " + person[prop] + "</p>"); 
}
`}</pre> 
<p className="flowingText">The "for in" loop, will go through an object one by one and do something for each key/value pair in the object. In the above example there is an object called "person" and there is a for in loop which looks for each key value pair in the person object (each key value pair is assigned to the variable prop), and uses square bracket syntax to sort of treat the object like an array, so that each value in the object with the "index" of its key is printed out onto the screen.</p>
<p className="flowingText">The new version of the while loop, is called the do while loop and it works quite similarly to the original while loop. Let's once again, look at an example:</p>
<pre className="codeBlock">{`
var i = 0;

do {
  console.log('i is now: ', i);
} while (i > 0)

// expected result: "i is now: 0"
`}</pre>
    <p className="flowingText">What's funny about do while loops is that they will always execute the "do" section at least once. This is why in the example, although i is equal to zero and the while condition of i being greater than zero is never true, you will see the output "i is now: 0" printed in the console.</p>     
    <p className="flowingText">Much like with the regular while loop, it is very easy to accidentally create a while loop that will run forever.</p>
    <p className="flowingText">For all of the above named loops, you can use the keywords "break" and "continue" to manipulate the behavior of your loop. The break clause can be used to check if a while loop is at risk of running forever, and can stop the entire loop dead in its tracks. And the continue keyword can be used to skip to the next iteration without running any logic that appears under the continue keyword. It is usually used in conjunction with an if statement so that there is more precision about when to skip ahead.</p>
<h3 className="sectionHeading">JavaScript Timers</h3>
    <p className="flowingText">In JavaScript, you might want to set something to repeat an action based on how much time has passed in the human world. Think about how on online banking you are logged out due to inactivity, or how you only have a certain amount of time to checkout with those tickets to see that band you really like. Those are using timers to determine what happens after a certain amount of time. You can also use them to repeat actions every so often. Let's think about instagram which cycles through the images uploaded to your friends' stories and shows each of them to you for 5 seconds. This kind of functionality is quite useful, and it's all around you but how do you use it?</p>
    <p className="flowingText">The first kind of timer is called SetInterval(), let's look at an example:</p> 
    <pre className="codeBlock">{`
function sayHello(){
    console.log("Hello");
};

var helloTime = setInterval(sayHello, 3000);
`}</pre>           
   <p className="flowingText">In the above example you can see that the setInterval timer takes two arguments. The first being a function called sayHello() and the second is time in milliseconds (3 seconds).</p> 
   <p className="flowingText">The setInterval timer will run whatever function you give it in intervals of a size that you specify in the second parameter. The expected result of the example function would be that "Hello" would be printed to the console every three seconds.</p>            
   <p className="flowingText">The second type of timer is called setTimeout(). This is the kind of feature used to log you out due to inactivity. It does not repeat the same code over and over like setInterval(). it simply delays and waits to do something.</p>        
   <p className="flowingText">Let's look at another example:</p>             
   <pre className="codeBlock">{`
function sayGoodbye(){
    console.log("Goodbye.");
};

var goodbyeTime = setTimeout(sayGoodbye, 1200000);
`}</pre>
<p className="flowingText">So in this example, you will see Goodbye printed in the console after 20 minutes (1200000 milliseconds) has passed. It will only run once so even if you wait an hour you will only be told Goodbye a single time.</p>
<p className="flowingText">It is important to note that it is good practice to close your timers. If your user navigates away from a page with a timer or if something else is happening, it is nice if you let the computer know not to count anymore, in fact, sometimes if the computer continues to try to count despite the user quiting the application etc. it can lead to errors and sadness. So always close down the timers using clearTimeout() or clearInterval().</p>
<p className="flowingText">Here is what that would look like:</p>
<pre className="codeBlock">{`
clearInterval(helloTime);
clearTimeout(goodbyeTime);
`}</pre>          
                <button className="ready" onClick={() => this.props.callback(<Challenge25 callback={this.props.callback}/>)}>Challenge</button>
            </div>
        </div>
     );     
    }
}
 
export default Lesson25;