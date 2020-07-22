import React, { Component } from 'react';
import "../App.css";
import Challenge20 from "./Challenge20";
import {GoDashboard} from "react-icons/go";

class Lesson20 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 20: Writing in JavaScript</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What are Variables</h3>
                    <p className="flowingText">Now that you know quite a few different data types, you can start learning how to save them as variables.</p>
                    <p className="flowingText">Variables can be used to store and name data so that you can keep it forever and use it again and again in you code. If you don't assign your data a name, it will not be kept in the program when JavaScript is being read and interpreted.
                    This process of JavaScript getting rid of any unnamed or unclaimed data is called "garbage collecting" and it helps keep programs running efficiently. When you name a chunk of data you are assigning it a spot in the programs memory. Without a name, the data cannot get an assigned spot. Think of it like trying to open a bank account without a name!</p>
                <h3 className="sectionHeading">How can I pick the perfect name?</h3>
                    <p className="flowingText">Excellent question. Naming variables is a bit like naming children. You can name your human child: X AE A-XII if you like (I'm looking at you Elon Musk) but this doesn't convey very much information to other people about your child. Were they born as a male or a female? Are they British or maybe Spanish? Although the exact meanings of human names don't necessarily capture the entire essence of the humans that they
                    are given, you no doubt have been told at some point what your name means, and hopefully it means something reasonable, and not "princess of the banana hammock"</p>
                    <p className="flowingText">The point is that names can hold meaning, and your variable names should tell other developers about what that chunk of data does. Here are some examples of good variable names:</p>
                    <ul className="bulletedList">
                            <li> const birthday = "26/12/1988";</li>
                            <li> const welcomeMessage = "Welcome to the best website ever!";</li>
                            <li> let age = 44;</li>
                            <li> var likesBananas = false;</li>
                    </ul>
                <h3>Grammar: JavaScript Edition</h3>
                    <p className="flowingText">There are a few things you need to know about how capitalisation and punctuation etc this is not actually refered to as "grammar" but rather syntax in the world of programming. work in the world of JavaScript. Firstly, your variable names are case sensitive, meaning that HappyDays will not be considered to be the same name as happydays or happyDays. So please always spell the names the exact same way with the same capitalisation.</p>
                    <p className="flowingText">Names cannot start with every single character in existance. You can use all the letters, both capital and lowercase as well as $ or _ to start your name.</p>
                    <p className="flowingText">By convention, variable names usually start with a lowercase letter, however some special types of variables are typically written in all caps.</p>
                    <p className="flowingText">At the end of your variable declarations, and eventually after every section (not line) of code you write, you must use a semi-colon. Semi-colons act like punctuation in JavaScript creating clearer boundries between areas of code for the machine. They are similar in many ways to how STOP was used in telegrams to denote the end of an idea STOP.</p>
                    <p className="flowingText">You can also leave comments for yourself or others that the computer will totally ignore. You can also "hide" lines or sections of code by turning them into ignored comments. This is especially useful if you are troubleshooting.</p>
                    <p className="flowingText">These comments are created by using two slashes // at the begining of a single line which you want to be for human eyes only. You can also comment out multiple lines by using stars and stripes like this: /* this is a pretend multiple line comment */</p>
                <h3>Variable Types</h3>
                    <p className="flowingText">There are three different kinds of variables, or at least there are three different ways that you can declare variables and they are as follows:</p>
                    <ul>
                            <li> var - the original kind of variable declaration where the value can change, potentially has more of a global effect on the program. </li>
                            <li> let - a newcomer and similar to var in that the value can change, except it is more locally or block restricted.</li>
                            <li> const - another newcomer these values cannot be changed once you set them. They are the special type that is typically written in all caps.</li>
                        </ul>
                <button className="ready" onClick={() => this.props.callback(<Challenge20 callback={this.props.callback}/>)}>Challenge</button>
            </div>
            </div>
         );     
    }
}
 
export default Lesson20;