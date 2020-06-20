import React, { Component } from 'react';
import "../App.css";
import Challenge11 from "./Challenge11";
import {GoDashboard} from "react-icons/go";
import SVGgrid from "../images/SVGgrid.png";

class Lesson11 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 11: Introduction to SVG</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What is SVG?</h3>
                <p className="flowingText">SVG stands for Scalable Vector Graphics and it is markup language used to descripe two dimensional shapes. It is based off of XML and it's primarily used for graphics and shapes!</p>
                <p className="flowingText">
                    in many ways you can compare it to HTML which is another markup language used to mark up text. However SVG is only used to mark up graphics or shapes like circles rectangels and simple and complex curves. Basically, you can use SVG to draw stuff!
                </p>
                <h3 className="sectionHeading">Is this the only way to draw stuff?</h3>
                    <p className="flowingText">No, there is also the HTML element named &lt;canvas&gt; which is popular for drawing complex animations and drawings. SVG is a little bit more simple and is good for simple drawings and animations. But if you want to do something complicated, you'll want to move to &lt;canvas&gt;.
                    This lesson is on SVG so we won't be covering the HTML &lt;canvas&gt; but it is worth mentioning at this point just so that you can keep it in the back of your mind for later.</p>
                <h3 className="sectionHeading">Well what's so good about SVG?</h3>
                    <p className="flowingText">I thought you would never ask! Here are some benefits:</p>
                    <ul className="bulletedList">
                        <li> SVGs are scalable which means they look fab on any size screen with any resolution, as a result, they print really well onto paper media as well!</li>
                        <li> SVGs are very well supported. Most browsers love them and the few browsers that don't have great fallbacks that are easy to implement.</li>
                        <li> You can use CSS and JavaScript on SVGs</li>
                        <li> SVG comes with built in clipping and graphic effects. With a bit of practice it's just as good as if you had PhotoShop available in the browser.</li>
                        <li> SVGs allow you to dig into each and every element inside of them using the developer tools inside the browser, which makes them super customisable.</li>
                        <li> It is easy to edit SVGs and there are lots of tools you can use to edit them. </li>
                    </ul> 
                <h3 className="sectionHeading">How can we render SVGs?</h3>
                    <p className="flowingText">Since HTML5 came out, most modern browsers will allow you to embed the SVG into the HTML directly in an &lt;object&gt; element an &lt;img&gt; element or an &lt;iframe&gt; element.</p>
                    <p className="flowingText">It is also possible to use JavaScript to dynamically create SVGs that can be rendered by the browser.</p>
                    <pre className="codeBlock">{`
<object data="image.svg" type="image/svg+xml" />
<iframe src="image.svg"></iframe>
<img src="image.svg"/>          
                `}</pre>
                <h3 className="sectionHeading">How do I make an SVG?</h3>
                    <p className="flowingText">Thought you would never ask! We will cover the different parts and how to build an SVG in good time. But for now, here is an example of a finished SVG:</p>
                    <pre className="codeBlock">{`
<svg viewBox="0 0 500 500">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="150" cy="100" r="80" fill="green" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
                `}</pre>
                    <p className="flowingText">SVG works using a grid coordinate system which starts in the upper left hand corner at coordinates (0,0).</p>
                    <img src={SVGgrid}/>
                    <p className="flowingText">You can control the parameters of the coordinate system using the viewBox attribute. In the example above, the viewBox attribute dictates that the grid runs from "0, 0" in the top left corner and moves 500 units in both directions to "500, 500" in the bottom right.</p>
                    <p className="flowingText">Remember that when we say that SVGs are scalable, this coordinate system is what will be used to scale it up and down. So that when you draw a line that moves from the coordinates "0, 0" to "0, 1" will be 1 unit long. This technical name for this unit is a "user unit".</p>
                    <p className="flowingText">Along side the viewBox attribute there is also the preserveAspectRatio attribute which helps to prevent the distortion of the image if the aspect ratio of the viewBox doesn't match up with the aspect ratio of the the image depicted in the SVG.
                    This works by scaling the image to either the height or the width and centering it to fit within any extra space.</p>
                    <pre className="codeBlock">{`
<svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMidmeet"></svg>     
                `}</pre>
                <p className="flowingText">The preserveAspectRatio is set by default to be xMidYMidmeed, but what does this mean? Well the first part, xMidYmid tells the browser to center the scaled viewBox region within the available space in both the x and y directions. You can replace Mid here with both Min or Max to align the graphic flush against one side or the other. 
                Please bear in mind that SVG is case sensitive though, and quite unusually the camelcasing rules mean that the x is lowercase whereas the Y is uppercase. The secon part of the the preserveAspctRatio property; meet is a part that tells the browser to scale the graphic until it just fits both height and width. It's very similar to background-size: contain; in CSS.
                Alternatively you could co with "slice" which is more like CSS's background-size cover; (the extra overflow will be sliced off).</p>
                <h3 className="sectionHeading">Well, what shapes can we draw with SVGs?</h3>
                    <ul className="bulletedList">
                        <li>&lt;rect&gt; - rectangles, sometimes with rounded corners</li>
                        <li>&lt;rect&gt; - circles</li>
                        <li>&lt;ellipse&gt; - ellipse</li>
                        <li>&lt;polyline&gt; - a group of connected lines</li>
                        <li>&lt;polygon&gt; - like a polyline but the connected lines form a shape.</li>
                        <li>&lt;path&gt; - a complex shape</li>
                    </ul>
                    <p className="flowingText">When you are drawing the shapes the lines drawn are called strokes and the colour inside shapes is called the fill. You can set either of the values to none or transparent to cancel them.
                    When it comes to fill and stroke, you can either target them directly, or you can give the SVG element a class name and target them using CSS properties like this: </p>
                    <pre className="codeBlock">{`
.myClass {
    fill: currentColor;
    stroke: #f00;
};
                `}</pre>
                    <p className="flowingText">The order that you draw the different elements in is called the injection order or the stacking order. This order is important because the last elements drawn get placed (or stacked) on top of the elements that came before them.</p>
                    <p className="flowingText">This is like the "bring to front" feature in Microsoft word". In this next part we will give examples of each kind of element and break down how to draw the different shapes.</p>
                    <h3 className="sectionHeading">Examples of the shapes you can draw:</h3>
                    <pre className="codeBlock">{`
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>  
                `}</pre>

    <p className="flowingText"> in this line,The x stands for the position of the top left corner of the rectangle. The y stands for the position of the top left corner of the rectangle. The width stands for the width of the rectangle. The height stands for the height of the rectangle. The rx stands for the x radius of the corners of the rectangle (this bit is optional). The ry stands for the y radius of the corners of the rectangle (this bit is also optional)</p>
<pre className="codeBlock">{`
<circle cx="60" cy="10" r="10" />
                `}</pre>
    <p className="flowingText">Here, the cx stands for the x position of the center of the circle, whereas the cy stands for the y position of the center of the circle and the r stands for the  radius of the circle</p>
    <pre className="codeBlock">{`
<ellipse cx="60" cy="10" rx="10" ry="10"/>
                `}</pre>
    <p className="flowingText">For this shape the cx stands for the x position of the center of the circle, the cy stands for the y position of the center of the circle, rx stands for the x dimension radius of the circle and ry stands for the y dimension radius of the circle.
</p>
<pre className="codeBlock">{`
<line x1="60" y1="10" x2="10" y2="10"/>
                `}</pre>
    <p className="flowingText">For lines, x1 stands for the x position of point 1. Meanwhile y1 stands for the y position of point 1. x2 stands for the x position of point 2, whilst y2 The y position of point 2.
There are also some other parameters like: stroke-width which determines the thickness of the line, stroke-linecap (butt, square, round) which determines how the line is ended, stroke-dasharray which sets the lengths of dashes and gaps(mdn), stroke-dashoffset which determines the offset between dashes (mdn).
</p>
<pre className="codeBlock">{`
<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>
                `}</pre>
    <p className="flowingText"> Polylines are made up of a series of ‘x y’ coordinates (with a space in between) all in a comma-separated list, which the line will join together one after the other.</p>
    <pre className="codeBlock">{`
<polygon points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>
                `}</pre>
    <p className="flowingText"> Polygons are just like polylines in that they are made up of a series of ‘x y’ coordinates (with a space in between) all in a comma-separated list, which the line will join together one after the other, except the last point will be auto-joined to the first</p>
    <pre className="codeBlock">{`
<path d="M 20 230 Q 40 205, 50 230 T 90230"/>
                `}</pre>
    <p className="flowingText"> So with paths, d stands for a series of commands to form the shape. </p>
    <ul className="bulletedList">
        <li>M 100,100 means "Pick up the pen and move it to the exact coordinates 100,100"</li>
        <li>m 100,100 means "Move the Pen 100 down and 100 right from wherever you currently are."</li>
        <li>L 100,100 means "DRAW a line to the exact coordinates 100,100"</li>
        <li>l 100,100 means "DRAW a line 100 down and 100 right from wherever you currently are."</li>
        <li>Z (or z) closes the path</li>
        <li>And many more… (inc. ARCS!)</li>
    </ul>
<pre className="codeBlock">{`
<text x="20" y="35" class="small">My</text>
                `}</pre>
    <p className="flowingText">With text, x  stands for the x coordinate, y stands for the y coordinate, dx stands for the offset from last text element’s x position, while dy is the offset from last text element’s y position.
 The textLength is the target size and lengthAdjust is adjusted after text size. There is also text-anchor (which determines where the text sits horizontally on the line)
and dominant-baseline (which determines where the text sits vertically on the line)
Text can also be made to follow a path using the textPath element. So many options!
</p>
<h3 className="sectionHeading">Any other random SVG things that we should know?</h3>
<p className="flowingText">You can put images inside SVGs.</p>
<p className="flowingText">You can group elements using &lt;g&gt; - it is comparable to how &lt;div&gt; works in HTML.</p>
<p className="flowingText">There is a &lt;defs&gt; element which is similar to the &lt;head&gt; element in that you cannot see anything inside it in the browser. Everything is off stage. It can be used together with the &lt;use&gt; element to copy elements.</p>   
<p className="flowingText">There used to be an animated version of SVG, and we have a few hangovers from that including the &lt;animate&gt; tag and the rotate attribute. But you should animate with CSS wherever possible.</p>

                

<button className="ready" onClick={() => this.props.callback(<Challenge11 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );
    }
}
 
export default Lesson11;