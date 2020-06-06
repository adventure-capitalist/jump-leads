import React, { Component } from 'react';
import "../App.css";
import cat from "../images/cat.jpg";
import press from "../images/press.jpg";
import Challenge6 from "./Challenge6";
import {GoDashboard} from "react-icons/go";

class Lesson6 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
            <h2 className="lessonTitle">Lesson 6: CSS Declarations</h2>
            <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What kinds of CSS selectors can I use?</h3>
                <p>There are a many different kinds of selectors that are designed to style the following things:</p>
                <ul className="bulletedList">
                        <li>Text and Font</li>
                        <li>Colour and Background</li>
                        <li>Spacing and Positioning</li>
                        <li>Size of text areas/images etc.</li>
                        <li>Bullet points and Links</li>
                        <li>Outlines and borders</li>
                    </ul>
                <p>In this lesson, we will go through each of these catagories showing you all of the different tools that you have available to you.</p>
                <h3 className="sectionHeading">What options are available for Text and Font?</h3>
                    <p className="flowingText">Firstly, you should know that fonts as we think of them are actually downloaded and stored on your machine. Much like in the days of printing presses there is an image for every single letter both upper carries
                    and lower case. You will often need to link to these images or download fonts to make them work on your machine. Bear in mind that not all fonts are free to use.</p>
                    <img className="graphic" src={press}/>
                    <p className="flowingText">Here is a list of some of the most useful selectors available surrounding fonts and text:</p>
                    <ul className="bulletedList">
                        <li>font-style: italic, normal, etc.</li>
                        <li>font-weight: normal, bold, semi-bold</li>
                        <li>font-size: you can either use words like "medium" or specific units like 12px (more on the types of units later)</li>
                        <li>line-height: the spacing between lines. again you can use words like "normal", or specific units to set this value. (double-spaced, single-spaced)</li>
                        <li>font-family: selects the font, depends on the available fonts on your PC as well as the OS</li>
                    </ul>
                <h3 className="sectionHeading">What can I do with Colour and Background?</h3>
                    <p className="flowingText">There are four formats for picking colours.</p>
                    <ul className="bulletedList">
                        <li>keywords: red, rebeccapurple, lightspringgreen - limited to 140 options</li>
                        <li>hexidecimal codes: a hash symbol followed by six characters - #ff0000</li>
                        <li>rgb(a): red/green/blue/apha codes - Alpha is a transparency indicator. They have this format: rgb(255, 255, 255, 0)</li>
                        <li>hsl(a): hue/saturation/luminance/alpa codes - Really good for animations. They look like this: hsla(270, 60%, 30%, 0.5)</li>   
                    </ul>
                <p>For now, you can and should use a color picker like <a href={"https://htmlcolorcodes.com/"}>this one</a> to select colours and generate their colour codes in your chosen format.</p>
                <p>As time goes on you will naturally begin to understand the theory behind the composition of colour codes but it is not essential for now, just focus on learning about CSS.</p>
                <p>When it comes to backgrounds, it is possible to use both solid colors and images as backgrounds. Here are the properties you should know</p>
                <ul className="bulletedList">
                        <li>background-color: sets a background color</li>
                        <li>background-image: sets a background image</li>
                    </ul>
                <p>There are a few other background properties in existance that will give you more customisation options in particular when it comes to background images, but these are the main two.</p>
                <p>Again, you'll continue to discover more and more CSS properties throughout your journey as a developer, for now it is important that you practice using some common selectors and assigning them properties and values. It is less important that you try to memorise all the possible CSS properties available to you.</p>
                <h3 className="sectionHeading">What can I do with Spacing and Positioning?</h3>
                    <p className="flowingText">There are two main areas of spacing which you will need to know.</p>
                    <p className="flowingText">Namely:</p>
                    <ul className="bulletedList">
                        <li>margin: buffer on the outside of the walls or border of the element</li>
                        <li>padding: buffer on the inside of the walls of the element.</li>
                    </ul>
                    <p className="flowingText">This photo of a cat in a box demonstrates these different areas really well. What's more, this idea is often called box model. So who better to demonstrate than cats?</p>
                    <img className="graphic" src={cat}/>
                    <p className="flowingText">Now, you can either declare margin or padding for all four sides of a box equally by saying</p>
                    <pre className="codeBlock">{`h1 { margin: 0; }`}</pre>
                    <p className="flowingText">Or you can specify the spacing on each side of an element in one of two ways.</p>
                    <p className="flowingText">By selecting each side one after in clockwise order (top/right/bottom/left):</p>
                    <pre className="codeBlock">{`h1 { margin: 0 0 0 0; }`}</pre>
                    <p className="flowingText">Or more with more semantic selectors:</p>
                    <pre className="codeBlock">{`h1 { margin-bottom: 0 }`}</pre>
                    <p className="flowingText">When it comes to positioning, there are more options. Some of the most properties include: </p>
                    <ul className="bulletedList">
                        <li>display: can be used to not display, or display an element depending on the value you assign it.</li>
                        <li>left/right/top/bottom: can be used to assign a position to an element on the screen.</li>
                        <li>position: often used to decide how elements behave and are displayed relative to each other.</li>
                        <li>visibility: used to hide or unhide elements</li>
                    </ul>
                
                <h3 className="sectionHeading">What sort of size measurements are there?</h3>
                    <p className="flowingText">The most common size properties include:</p>
                    <ul className="bulletedList">
                        <li>width: determines the width of an element</li>
                        <li>height: determines the height of an element</li>
                        <li>max-width/min-width: determines the maximum or minimum width an element can be</li>
                        <li>max-height/min-height: determines the maximum or minimum height an element can be</li>
                    </ul>
                    <h3 className="sectionHeading">How can we measure?</h3>
                    <p className="flowingText">There are several different units that you can use to specify the size of elements</p>
                    <ul className="bulletedList">
                        <h5 className="listHeading">The unresponsive ones:</h5>
                        <li> px: pixels - good for very small measurements</li>
                        <li> mm/cm: millimeters - not accurate to real life based on fixed pixel counts </li>
                        <li> in: inches - not accurate either. Equal to 96 pixels regardless of how small the pixels are on your screen</li>
                        <h5 className="listHeading">The responsive ones:</h5>
                        <li> em/rem: useful for determining the size of fonts</li>
                        <li> vh/vw: viewport height/width - viewport here, means screen. These units are a fraction of the size of the screen</li>
                        <li> %: percentages - percentages of the full size of the screen. </li>
                        <h5 className="listHeading">Interesting values:</h5>
                        <li> max( ): dynamically evaluates to the higher of two measurements depending on the situation or screen size.</li>
<pre>{`h1 {
    width: max(200px, 20vw);
}`}</pre>
                        <li> min( ): dynamically evaluates to the lower of two measurements depending on the situation or screen size.</li>
<pre>{`h1 {
     width: min(200px, 20vw);
}`}</pre>
                        <li> calc( ): allows you to subtract or add two values dynamically.</li>
<pre>{`h1 {
     width: calc(50vw - 20px);
}`}</pre>
                    </ul>
                
                <h3 className="sectionHeading">What about bullet points and links?</h3>
                    <p className="flowingText">These are two types of elements that you will struggle the most with against the user agent style sheets.</p>
                    <p className="flowingText">The two properties that will be most valuable to you in your stuggle will be:</p>
                    <ul className="bulletedList">
                        <li>text-decoration: determines how certain types of text, like links, are displayed to the user.</li>
                        <li>list-style: dictates how a list is displayed to the user</li>
                    </ul>
                <h3 className="sectionHeading">What can I do in terms of borders and outlines?</h3>
                    <p className="flowingText">You will come across both outlines and borders in your coding journey. In many ways they behave similarly.</p>
                    <p className="flowingText">They are both declared using three values as follows:</p>
<pre>{`h1 {
     border: solid 2px black;
     outline: dashed 3px red;
}`}</pre>
                    <p className="flowingText">There is also a useful property called "border-radius" which determines the roundness of the corners of a border.</p>
                    <p className="flowingText">Borders can also be broken down similar to margins, with properties like "border-right" or "border-bottom"</p>
            
                    <p className="flowingText">Wow, that has been a lot of information on CSS properties! Remember that at this stage, you don't need to try and know every property that is available, but the more familiar you become with some of the common ones, the easier it will be for you to learn new ones later.</p>
                    <p className="flowingText">Now when you're ready feel free to take up the next challenge!</p>
                    <button className="ready" onClick={() => this.props.callback(<Challenge6 callback={this.props.callback}/>)}>Challenge</button>

            </div>

            </div>
         );
    }
}
 
export default Lesson6;