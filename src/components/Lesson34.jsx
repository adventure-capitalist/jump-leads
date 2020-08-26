import React, { Component } from '../../node_modules/react';
import "../App.css";
import Challenge34 from "./Challenge34";
import {GoDashboard} from "../../node_modules/react-icons/go";
import stringify from "../images/stringify.jpg";
import url from "../images/url.jpg";


class Lesson34 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 34: Transport</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
        <h3 className="sectionHeading">Thinking about Transport</h3>
            <p className="flowingText">The internet is basically a giant file system. Just like the one you have on your computer. You have paths and addresses that take you to Videos, Documents, Downloads and everything in between. The internet is similar except the files are stored on multiple different servers across various networks.</p>
            <p className="flowingText">The word "server" can seem really technical but a server is really only somebody else's computer. Now, that somebody is not usually going to be your Nan, often there are large companies like Amazon and Microsoft who have entire rooms filled with computers/servers where websites and apps are "hosted" or saved. If you visit a website that is stored on an Amazon server, you'll need a file location or address. That address is the URL. 
            You can then add on to that URL to navigate deeper into the webpage Like this:</p>
            <p className="flowingText">Home page: <a href="https://cat-bounce.com">https://cat-bounce.com</a></p>
            <p className="flowingText">About page: <a href="https://cat-bounce.com">https://cat-bounce.com/about/</a></p>
            <p className="flowingText">The navigation syntax is very familiar because it's very similar to the syntax used in file navigation on your computer (C:\Users\Admin\Downloads\Kartoffelsalatrezept.docx) </p>
            <p className="flowingText">Here is a closer look at the constituent parts of a URL if you need a refresher:</p>
                <img className="graphic" src={url}/>
            <p className="flowingText">That's about where the similarities end though, on the web you can ask for more than websites and depending on what you are asking for, you might need to use a different kind of transport: </p>
            <ul className="bulletedList">
                        <li>HTTP(S) - HyperText Transfer Protocol (Secure) sends static code files including .doc .pdf, .js, .css and data like xml and JSON</li>
                        <li>FTP - File Transfer Protocol</li>
                        <li>SMTP - Simple Mail Transfer Protocol</li>
                        <li>POP3 - Post Office Protocol</li>
                        <li>WS - Web Sockets</li>
                        <li>SSH - Secure Shell</li>
                        <li>TEL - Telephone Service</li>
                        <li>SMS - Short Messaging Service</li>
                    </ul>
            <p className="flowingText">WHen sending data instead of files the most common way to send it is over HTTPS in JSON format.</p>
            <p className="flowingText">JSON stands for JavaScript Object Notation and using JSON format wil turn JavaScripts Arrays and Objects into a string that can be used in transport.</p>
            <p className="flowingText">There are methods available to help you convert your JavaScript into JSON and visa versa. They are as follows:</p>
            <ul className="bulletedList">
                <li>JSON.stringify() - turns JavaScript into JSON for transport.</li>
                <li>JSON.parse() - turns JSON into JavaScript for normal programing.</li>
            </ul>
            <p className="flowingText">Here is an example to demonstrate the difference between normal JavaScript and JSON syntax.</p>
                <img className="graphic" src={stringify}/>
        <h3 className="sectionHeading">Making a request for data</h3>
            <p className="flowingText">So you have the right domain/url and you know where your data is at. So how do actually request to do something?</p>
            <p className="flowingText">There are a number of transport verbs that you'll need to know in order to make transport happen these are the most popular:</p>
            <ul className="bulletedList">
                <li>GET - asks for and retrieves resources/pages/data</li>
                <li>POST - sends (often new) information in the request to the server.</li>
                <li>PUT - similar to POST but is used to send and update information that the server already has.</li>
                <li>PATCH - similar to PUT but designed to be used for small or partial updates of information. (Instead of updating a whole user profile, fixing just the spelling of their name)</li>
                <li>DELETE - deletes information from the server</li>
                <li>HEAD - gets the headers (meta information shared between computers) that will come back if you were to make a GET request to that URL.</li>
                <li>OPTIONS - returns the transport options that are available on that URL (i.e.: [GET, POST, OPTIONS]</li>
            </ul>
            <p className="flowingText">A more comprehensive list is available <a href="https://www.iana.org/assignments/http-methods/http-methods.xhtml">here</a> if you're interested in the fringe scenarios.</p>
            <p className="flowingText">Let's talk a little bit more about headers for a moment. Headers are information that is attached to the request by machines for machines. They can be thought of as luggage tags, that tell the transport system how the information is encoded, what type of response to expect, and if it is properly authenticated with security tokens etc. </p>
    <h3 className="sectionHeading">I made a request, now what?</h3>
            <p className="flowingText">You will always get a response from the server to every request that you make. This response will generally include a status code which is a three digit number. The numbers will tell you things:</p>
            <ul className="bulletedList">
                <li>100s - means that something is still happening</li>
                <li>200s - successful request</li>
                <li>300s - means that you made a request to somewhere weird but will be redirected to the right place</li>
                <li>400s - you've made a bad request and it's not successful</li>
                <li>500s - your request was probably fine, but the server is not okay right now</li>
            </ul>
            <p className="flowingText">You can see a full list of these HTTP status codes <a href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">here</a>, and for extra fun you can see them with pictures of cats <a href="https://http.cat/">here</a>. (Dog people, you are also catered to <a href="https://httpstatusdogs.com/">here</a>).</p>
    <h3 className="sectionHeading">What can we make requests to?</h3>
            <p className="flowingText">The short answer is "services". But what is a service? A service will return something for you after you make a request. It might return a resized image, or translate the text that you send into it. Services, do not remember what you send them. They don't store your requests they just handle them from scratch every time. You will not have permission as the user to change things inside the service; you can only send GET requests. Sometimes APIs are restricted in a similar way meaning that you can only retrieve data not post any new data to them.</p>
        <h4>APIs</h4>
            <p className="flowingText">API stands for Application Programming Interface. It allows users to interact with services. APIs are for dynamic and intelligent transport, there are all kinds of APIs that do all kinds of interesting tasks.</p>
            <p className="flowingText">In theory, you can modify the records that it holds if it is not protected. You've probably used many APIs and not even known that you were doing so. For example, Tesco uses an API to allow you to view, select, and book a home delivery slot.</p>
            <p className="flowingText">APIs often use REST principles to keep the lines of communication open between the client and the server thereby ensuring that information is always up to date. What is REST, I hear you asking? Well it's a term that stands for Representational State Transfer. It is used when APIs share what's going on in your app with the server so that they are in sync with each other and always up to date. Let's consider an example.</p>
            <p className="flowingText">What if you have a shopping basket and you want to view, add, modify, or remove items from that shopping basket? Well in order to do this properly, you will need to be able to keep the the stock levels behind the scenes up to date. REST works of CRUD methods which are: Create, Read, Update, and Delete.</p>
            <p className="flowingText">The CRUD methods are synonymous with POST GET PUT and DELETE. </p>
            <p className="flowingText">You can test API calls and requests using clients like <a href="https://www.getpostman.com/">Postman</a> or <a href="https://insomnia.rest">insomnia</a></p>
    <button className="ready" onClick={() => this.props.callback(<Challenge34 callback={this.props.callback}/>)}>Challenge</button>
        
        </div>
    </div>
         );     
    }
}
 
export default Lesson34;