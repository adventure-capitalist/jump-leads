import React, { Component } from '../../node_modules/react';
import "../App.css";
import {GoDashboard} from "../../node_modules/react-icons/go";
import Challenge44 from './Challenge44';


class Lesson44 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 44: JavaScript Graphing and Headers</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">JavaScript Canvas</h3>
                    <p className="flowingText">The canvas element creates a fixed-size drawing surface that can be used to create and manipulate the content shown to the user.
                    The canvas starts off blank, in order to display something a script first needs to access the canvas and draw on it.
                    All canvas elements come with a built in method called: "getContext()" which takes the type of context as its only parameter.
                    You can use the DOM to allow the scripts access to the canvas like this:</p>
                    <pre className="codeBlock">{`
var canvas = document.getElementById('myBigCanvas');
var ctx = canvas.getContext('2d');
                `}</pre>
                <p className="flowingText">Let's take a look at how you might draw something on the canvas. This is an example of two intersecting rectangles, but you can draw anything and there are many examples on the Code Pen and the wider internet in general.</p>
                <pre className="codeBlock">{`
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10, 10, 50, 50);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 50, 50);
    }
                `}</pre>

<p className="flowingText">The html canvas element is widely supported by most modern browsers, and it's really good at handling a high graphics load.
Because it tends to be capable of a higher graphics load than SVG you should consider using it if your animations hav hundreds or thousands of moving parts.</p>
          <h4>Graphing libraries</h4>
          <p className="flowingText">Two of the best graphing libraries include Chart.js and D3. Here we are going to talk a bit more about d3.
          D3 is a JavaScript library designed to manipulate data. It helps you to bring data to life using HTML SVG and CSS. This library centers around the DOM.
          It allows you to bind data to the DOM and then use that data to display it nicely in the document. For example it can help you to create an HTML table from an array of numbers, or even an interactive SVG bar chart.
          You can find several different examples online and there is even a library called nvd3 that was built with the aim of cataloging different graphs and charts designed for reusability.</p>
          <h4>Realtime Data</h4>
          <p className="flowingText">What is realtime data? Well, it is data that immediately updates in the UIs for all users across the system. This is in contrast to REST where the user would have to refresh the page.
          Realtime data streams are made possible only by using WebSockets. WebSockets are an advanced technology that makes it possible to open a two-way interactive session between a browser and a server.
          Ultimately, this allows you to send messages to a serve and receive event driven response without having to call the server for a reply. WebSockets use the ws:// protocol instead of http:// or https:// .
          There is a notable framework that will help you called: socket.io . The framework will enable real-time bidirectional and event-based communication focussed on cross-platform support, reliability and speed.</p>
          <h4>Storing Data</h4>
          <p className="flowingText">If you need to, you can store data in a makeshift database like firebase for now. Firebase is neat because it is a cloud platform owned by google that is serverless. It began as a socketed database service but is now much more.</p>
          <h4>WebRTC</h4>
          <p className="flowingText">The only issue with WebSockets, is that it can cause a delay in propagating information. And if there is a large load on the server, it could lead to a jam and if the server eventually fails because of it, everything goes down and you'll need to rely on a cache so that the data isn't lost forever.
          WebRTC ensures that the server brokers the connection between the clients. This makes it ideal for things like video/audio chat. The downside is that it doesn't check the packets so you might end up losing a few frames of video, but presumably this is not a large problem. WebRTC (Real Time Communication) enables web applications and sites to capture and stream audio or video media
          as wel as exchange generic data types between browsers without requiring an intermediary server. It works across most modern browsers.</p>
           <button className="ready" onClick={() => this.props.callback(<Challenge43 callback={this.props.callback}/>)}>Challenge</button>

                </div>
            </div>
         );     
    }
}
 
export default Lesson44;