import React, { Component } from 'react';
import "../App.css";
import Challenge23 from "./Challenge23";
import {GoDashboard} from "react-icons/go";

class Lesson23 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 23: Introduction to Operators</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What are Operators?</h3>
                    <p className="flowingText">Operators are the part of expressions that help you to interact with your data. You actually might remember the word operators from your arithmatic classes long ago, they work exactly the same here in programming,
                    but instead of being used in an equation, they are used in an expression (an expression is any chunk of code that evaluates to a value.) </p>
                    <p className="flowingText">You can use operators to create expressions like this:</p>
                    <pre className="codeBlock">{`
                let myvar = a + b;
                `}</pre>
                    <p className="flowingText">It is also important to reach back into your memory to the order of operations you learned in math. Remember PEMDAS (Memory Device: Please Excuse My Dear Aunt Sally) which was used to figure out the precedence of the operators. In JavaScript this order still stands, however, there are a few more operators  than just Parenthesis, Exponents, Multiplication/Division, Addition/Subtraction.</p>
                    <p className="flowingText">The exact order of all the possible operations can be found <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table">here</a>.</p>
                
                    <p className="flowingText">Here is a list with explainations of some of the operators that you'll come across:</p>
                    <ul className="bulletedList">
                            <li> +n : coerces the value of a variable into a positive number</li>
                            <li> +  : performs regular addition</li>
                            <li> ++n, n++ : increases a variable by one</li>
                            <li> -n : coerces the value of a variable into a negative number.</li>
                            <li> - : performs regular subtraction</li>
                            <li> --n or n-- : decreases a variable by one</li>
                            <li> * : performs multiplication</li>
                            <li> ** : performs exponents for you. (3 squared? -&gt; 3**2)</li>
                            <li> / : performs division does not change the original values</li>
                            <li> % : returns only the remainder of a division does not change the original values</li>
                            <li> Math.floor() : returns everything from a division apart from the remainder. (rounds down to the nearest whole number)</li>
                    </ul>
                    <h3 className="sectionHeading">Assignment Operators</h3>
                    <p className="flowingText">None of these operators will have any effect on the original value of a variable that was previously declared unless you  use an assignment opperator to assign them a new value in the memory.</p>
                    <p className="flowingText">There are a few different assignment opperators that you can use in different situations. They are as follows:</p>
                    <ul className="bulletedList">
                        <li> x = y : normal equals sign </li>
                        <li> x += y : is short for x = x + y</li>
                        <li> x -= y : is short for x = x - y</li>
                        <li> x *= y : is short for x = x * y</li>
                        <li> x /= y : is short for x = x / y</li>
                        <li> x %= y : is short for x = x % y (remember the remainder calculator?)</li>
                        <li> x **- y : is short for x - x ** y (remember exponents?)</li>
                    </ul>
                    <p className="flowingText">It is always the first variable named on the left that is being reassigned a value in the memory.</p>
            <h3 className="sectionHeading">Comparison Operators</h3>
            <p className="flowingText">There are also operators for if you would like to compare different values to each other, all of these return either true, or false and they are as follows:</p>
                <ul className="bulletedList">
                        <li> == : equality comparison, checks if equal</li>
                        <li> === : strict equality comparison, the type of the value and the value of the value must both be equal</li>
                        <li> != : checks if something is not equal to something</li>
                        <li> !== : strict not equal similar to strict equals except, well, not equal</li>
                        <li> &lt; : less than</li>
                        <li> &lt;= : less than or equal to</li>
                        <li> &gt; : greater than</li>
                        <li> &gt;= : greater than or equal to</li>
                    </ul>
            <h3 className="sectionHeading">Logical Operators</h3>
            <p className="flowingText">Additionally, there are also a few logical operators that you will see all the time in JavaScript. These are as follows:</p>
            <ul className="bulletedList">
                <li>&amp;&amp; : "and", both conditions must be true to result in a response of true(age &gt; 16 &amp;&amp; height &gt; 160) </li>
                <li>|| : "or", means that either condition must be true to result in a response of true</li>
                <li>! : not means that the condition can not be true if it is to result in a response of true</li>
            </ul>
                <button className="ready" onClick={() => this.props.callback(<Challenge23 callback={this.props.callback}/>)}>Challenge</button>
            </div>
        </div>
     );     
    }
}
 
export default Lesson23;