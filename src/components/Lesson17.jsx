import React, { Component } from 'react';
import "../App.css";
import Challenge17 from "./Challenge17";
import {GoDashboard} from "react-icons/go";

class Lesson17 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 17: Data Types - Strings</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">Intro to Data Types</h3>
                    <p className="flowingText">You have probably heard the phrase "Information technology" or IT used to refer to various computer related fields and things before. And it is not by conincidence that the word information is used!</p>
                    <p className="flowingText">The time since the boom of the internet has even been referred to as the "Information age". The reason that you understand that the internet and computers are based off of information or data is because programming is essentially just the manipulation of that data or information.</p>
                    <p className="flowingText">Although JavaScript is not a language that is as strict surrounding the conventions of the different formats that this information might come in, or the different types of data that you might want to manipulate, it is still important to know all of them and which methods JavaScript has in its toolbox for manipulating this data.</p>
                    <p className="flowingText">In JavaScript, there are six main types of data and two other interesting classifications: "null" and "undefined".</p>
                    <p className="flowingText">We will go through each of the different data types in detail in a dedicated lesson.</p>
                <h3 className="sectionHeading">First up is Strings</h3>
                    <p className="flowingText">Strings are pieces of information that are alphanumerical. In terms of syntax, they are always wrapped in quotation marks. It is possible to use both single or double quotation marks, you can use whichever you prefer, but please use them consistently.</p>
                    <p className="flowingText">All of the following examples are valid strings.</p>
                <ul className="bulletedList">
                        <li>'Hello World'</li>
                        <li>"op3nSes@me!"</li>
                        <li>'1993'</li>
                        <li>"2 March 1999"</li>
                </ul> 
                    <p className="flowingText">There are some things that can get you in trouble with strings and a big one is apostrophes, and quotation marks.</p>
                    <p  className="flowingText">If you try to write: 'don't stop me now!' as a string you can see that problematic apostrophe in don't. The machine will read this as a string that is equal to: 'don' and either stop reading upon meeting the apostrophe or catastrophically fail due to terminal confusion surrounding the input after the apostrophe.</p>
                    <p  className="flowingText">You can get around this by using double quotation marks like this: "don't stop me now", or by telling the computer to ignore the apostrophe by using a slash as an escape. Escaping the apostrophe would look like this: 'don\'t stop me now'.</p>
                    <p className="flowingText">Double quotes can be equally problematic. Imagine you need to write: "Sonja told me: "I love driving fast"". Here the indirect speech indicated by the quotation marks inside the string will cause an issue. Just like with the apostrophe, you can either escape the double quotes with a slash: "Sonja told me: \"I like driving fast\"", or you can surround the string in single quotes like this: 'Sonja told me: "I like driving fast"'.</p>
                <h3 className="sectionHeading">What kind of things can you do with Strings?</h3>
                    <p className="flowingText">Well how long is a piece of string?</p>
                    <ul className="bulletedList">
                        <li> .length - can be used to find out exactly how long that string actually is.</li>
                        <li> .toLowerCase() and .toUpperCase() - both can be used to change the case of the characters in a string.</li>
                        <li> .includes() - will test whether or not your string includes a character, or a word or anything really. Returns true or false.</li>
                        <li> .search() - will search a string for a character or a word and return the position of the first character of that word. If the character doesn't appear, it returns -1.</li>
                        <li> .slice() and .substr() -  both can be used to cherry pick bits of strings. For example .substring(2, 5) would return everything between the third and sixth character (because developers count from 0).</li>
                        <li> .replace() - can be used to "find and replace" you give it the character or word that you want to replace, and the character or word that you want to replace it with.</li>
                        <li> .charAt() - returns the character at a specific place in the string (once again counting from zero).</li>
                    </ul> 
                    <p className="flowingText">There are many other methods that you can use on strings and a more comprehesive list of the methods are available <a href="https://www.tutorialrepublic.com/javascript-reference/javascript-string-object.php">here</a></p>
                 <h3>How can I make a string?</h3>
                    <p className="flowingText">A string can be made simply by typing out a string in the literal sense (sometimes called a string literal, pun intended).</p>
                    <p className="flowingText">You can also add strings together. Like "Hello" + "World" to create "Hello World"</p>
                    <p className="flowingText">An interesting quirk of JavaScript is that if you add for example a number (without quotation marks formated like an number to a string the result will always be a string. It is "dominant" in that sense.</p>
                    <p className="flowingText">An example would be: 2 + "5" which will result in "7" and it will never just 7 (which is a number, more on numbers later.)</p>

    

<button className="ready" onClick={() => this.props.callback(<Challenge17 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );     
    }
}
 
export default Lesson17;