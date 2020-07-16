import React, { Component } from 'react';
import "../App.css";
import Challenge16 from "./Challenge16";
import {GoDashboard} from "react-icons/go";


class Lesson16 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 15: Introduction to Javascript</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What exactly is JavaScript</h3>
                    <p className="flowingText">JavaScript is an "interpreted" programming language that is very convenient for human developers to use. Now what does interpreted mean? Well it means that the computer does not directly deal with JavaScript. It needs an "interpreter" to compile it into a language that the computer can understand.</p>
                    <p className="flowingText">If you have a Windows computer, your machine will turn JavaScript into C++, and if you have a Mac it will turn JavaScript into Objective C. Don't worry if you don't know anything about either of these languages. The point of coding in JavaScript, is so that you as the developer don't have to worry about learning the ins and outs of Object C and C#.</p>
                    <p className="flowingText">Basically, all this means is that you need a computer program to run and interpret JavaScript for you. There are a few different programs that can take on the role of the interpreter. The most common interpreter is a regular browser like: Google Chrome, Safari, Internet Explorer etc. But JavaScript is a very versitle language and can run not only on the front end in the browser, but also in the backend like in Node.JS</p>
                    <p className="flowingText">There are other ways and programs that can run JavaScript in the frontend, on the backend and everywhere in between but we will cover more of those later on in the course.</p>
                    <p className="flowingText">If you think really abstractly about it. JavaScript is actually just a fancy bit of software written in C that helps humans to program.</p>
                <h3 className="sectionHeading">Where did JavaScipt come from?</h3>
                    <p className="flowingText">JavaScript has an interesting history. It was initially designed to bridge the gap between the browser and the server. This was an effort to bring more of the functionality, processing and general "doing stuff" ability traditionally found in the backend forward to the front end. It proved esspecially useful in handling actions that happen at uncertain intervals.</p>
                    <p className="flowingText">The official name for JavaScript is actually ECMAscript. And this is how it is referred to in the official programming standard. New versions of ECMA Script (or ES for short) come out from time to time, these are numbered in order like this: ES5, ES6 and ES7.</p>
                    <p className="flowingText">Although the brains behind ECMAScript, or JavaScript as it is affectionately known, do make improvements and changes with each evolution of the language, it is designed to always be backwards compatible so this means that although new and great features will come along, any less loved quirks must remain supported.</p>
                    <p className="flowingText">There are actually quite a few interesting quirks built into JavaScript. These can at least partially be attributed to the fact that the language was written in 10 days (probably in a caffiene fuelled frenzy) by this really clever guy called Brenden Eich way back in 1995.</p>
                    <p className="flowingText">Don't worry about memorising all the quirks and ins and outs of JavaScript right now. But do bear in mind whenever you spot something unusual in the organisation of the syntax that although Rome wasn't built in a day... JavaScript was built in only 10!</p>
                <h3 className="sectionHeading">There are many languages. Why are we learning JavaScript?</h3>
                    <p className="flowingText">Despite the ideosyncracies of JavaScript, it is one of the most popular and versitle programming languages in existance.</p>
                    <p className="flowingText">It is an extremely expressive language that supports a wide range of functionality and that can be used to teach you about programming on the front-end, in the browser and on the back-end on the server.</p>
                    <p className="flowingText">Now the distinction between the front end and the backend might seem a bit hazy at the moment. But if you think of it exactly like a restaurant you cannot go too far astray.</p>
                    <p className="flowingText">In a restaurant you have a "front of house team" with wait staff that interacts and communicates directly with the user/customer and you have a "back of house" or a kitchen where the ingredients are stored and the messages that the front of house relays through are processed into edible dishes. This is a classic example of separation of concerns. You have the friendly attentive wait staff who are expert servers, and then you have the chefs who might not be the friendliest bunch but they know a whole lot about cooking and preparing food.</p>
                    <p className="flowingText">There is the same basic concept working in software networks. There is the browser which is sometimes called the "client-side" or front-end. This is the part of the infrastructure that is friendly and talks directly to your user. Then there is the less friendly backend where the raw data is kept and proccessed according to the messages relayed by the front end.</p>
                 <h3 className="sectionHeading">Is there any relation between Java and JavaScript</h3>
                    <p className="flowingText">The short answer is absolutely not. In fact JavaScipt is not even its real name. There is a famous saying that Java and JavaScript are just about as similar as Ham and Hamsters. The similar name is a marketing thing. Java came first and was well estabilished and so who wouldn't trust something called JavaScript? Sounds like must be related right!? (Nope. JavaScript wishes). </p>

<button className="ready" onClick={() => this.props.callback(<Challenge16 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );     
    }
}
 
export default Lesson16;