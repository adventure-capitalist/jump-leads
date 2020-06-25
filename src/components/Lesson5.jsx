import React, { Component } from 'react';
import "../App.css";
import css from "../images/css.gif";
import Challenge5 from "./Challenge5";
import {GoDashboard} from "react-icons/go";

class Lesson5 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 5: Intro To CSS</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What is CSS?</h3>
                    <p className="flowingText">CSS stands for Cascading Style Sheets</p>
                    <p className="flowingText">"Cascading" (yes, like a waterfall) refers to how the DOM runs down these style instructions from the top to the bottom.</p>
                    <p className="flowingText">This behaviour essentially means that if you give an instruction at the top of your sheet, another similar instruction at the bottom can overwrite the first instruction.</p>
                    <p className="flowingText">Taken one step further, if you have two separate style sheets imported as separate files, the instructions in the file that is imported second will take precedence.</p>
                    <p className="flowingText">"So the last will come first, and the first will, well, be overwritten"? </p>
                    <p className="flowingText">It's actually slightly more complicated than that, but we will discuss which style gets overwritten and which gets to live on at the very end, so stay tuned!</p>
                    <img alt="css animation" className="graphic" src={css}/>
                    <p className="flowingText">Unlike HTML, which is concerned only about the content and structure of information or images on a page, CSS is a language which is used exclusively for aesthetics and design.</p>
                    <p className="flowingText">It is even possible to create animations using only CSS. That being said, Javascript will take your animations to the next level, and allow for users to really interact with your creations. </p>
                    <p className="flowingText">But this lesson is on CSS, Javascript will have to wait.</p>
                <h3 className="sectionHeading">What beautification options do I have with CSS?</h3>
                    <p className="flowingText">Great question! With CSS, it is possible to do most of the style things that you could reasonably achieve in Microsoft Word, and a bit extra when it comes to simple animations.</p>
                    <p className="flowingText">You might find lots of these features very similar to your word processing experiences. This makes sense, because webpages are afterall, documents.</p>
                    <p className="flowingText">Some types of things you can style with CSS:</p>
                    <ul className="bulletedList">
                        <li>Text and Font</li>
                        <li>Colour and Background</li>
                        <li>Spacing and Positioning</li>
                        <li>Size of text areas/images etc.</li>
                        <li>Bullet points and Links</li>
                        <li>Outlines and borders</li>
                    </ul>
                    <p className="flowingText">I told you they would sound familiar!</p>
                <h3 className="sectionHeading">How do I write these CSS instructions?</h3>
                    <p className="flowingText">Another brilliant question. CSS files will need to be saved in ".css" format. Once you've achieved this, it's pretty straight forward!</p>
                    <p className="flowingText">Unlike HTML, CSS doesn't use tags. It instead uses <strong>selectors</strong> which, as the name suggests, help select, or target the specific elements that you want to add styles to.</p>
                    <p className="flowingText">Here is the vocabulary for the different parts of one line of CSS:</p>
                    <pre className="codeBlock">{`selector { property: value; }`}</pre>
                    <p className="flowingText">As you can see you first target a <strong>selector</strong> then you select a <strong>property</strong> which you would like to assign a <strong>value</strong>.</p>
                    <p className="flowingText">Now this might seem a bit abstract. So let's clear things up with a real life example:</p>
                    <pre className="codeBlock">{`h1 { color: red; }`}</pre>
                    <p className="flowingText">You might be able to guess by now that this would select all h1 elements in your HTML and change the color to red.</p>
                    <p className="flowingText">NOTE: CSS uses the American spellings for things like "color" and "center" if you use the UK spellings, it won't work I'm afraid.</p>
                <h3 className="sectionHeading">What kinds of selectors are there?</h3>
                    <p className="flowingText">There are a few main types of selectors:</p>
                    <ul className="bulletedList">
                        <h5 className="listHeading">The basic ones:</h5>
                        <li> h1 - HTML elements (a bit too much style sharing to be generally considered good practice)</li>
                        <li> .allHeadings - Class names (styles are shared among elements in the same class) </li>
                        <li> #theHeadingNamedFrank - Ids (must be unique: absolutely no style sharing)</li>
                        <h5 className="listHeading">The advanced ones:</h5>
                        <li> * - this is called the universal selector, it applies blanket styles to your webpage.</li>
                        <li> h1[href="www.facebook.com"] - Attributes (you can target elements specifically with attributes that match a specific value)</li>
                        <li> h1::hover / h1::first-child - Pseudo attributes and classes. Used to target neighbouring elements or even change styles on hover, or on focus etc.</li>
                        <li> h1::not(.allHeadings) - targets all elements that do not fit the criteria in the brackets</li>
                        <h5 className="listHeading">The combinator ones:</h5>
                        <li> h1, h2 - the commas act like "and" meaning that the styles will be applied to each of these selectors at the same time</li>
                        <li> h1 + p - used to affect the closest downstairs neighbour (child element).</li>
                        <li> h1 ~ p - used to select multiple downstairs neighbours (children).</li>
                        <li> h1 &gt; p - targets downstairs neighbour elements (children) only. It is also possible to forego the &gt; and leave a space, but this will target children, and grandchildren etc. </li>
                    </ul>
                
                <h3 className="sectionHeading">There are so many options, but how can I target my styles well?</h3>
                    <p className="flowingText">There is a balance to be struck between oversharing styles and being too exclusive. Generally you should never be using HTML element names alone as a selector. </p>
                    <p className="flowingText">The use of Ids as CSS selectors has widely fallen out of favour because it is too specific and the styles cannot be reused.</p>
                    <p className="flowingText">The level of specificity also determines which styles will be applied in the event of a precedence "tie" with more general styles losing out to more exact ones.</p>
                    <p className="flowingText">It is also worth noting that there is an escape hatch which will gurantee that a style will win in these situations.</p>
                    <p className="flowingText">This escape hatch takes the shape of the important flag and is used like this:</p>
                         <pre className="codeBlock">{`h1 { color: red !important; }`}</pre>
                    <p className="flowingText">It is better if you resolve these style conflicts peacefully by readjusting how your selectors are working. The brute force use of the important flag should be left as a last resort.</p>

                <h3 className="sectionHeading">Wait, how is the CSS file able to select from HTML files?</h3>
                    <p className="flowingText">CSS files are usually imported in the head of an HTML file as a style sheet. The browser is actually the one that "unpacks" the CSS file that came along with the HTML and carries out the CSS instructions on the HTML.</p>
                    <p className="flowingText">Think of the HTML as the bits you get in an IKEA flat pack. The parts usually have stickers with letters or numbers on them for labels. The instructions then tell you what to do with each labelled part, so that in the end you have beautiful furniture.</p>
                    <p className="flowingText">Now, it's also important to know that the browser has some very sparse in-built style sheets. These are called "user agent style sheets" Think of this as IKEA pre-assembling some things and cutting the boards for you. You cannot undo these basic default styles, but you can overwrite the with your own custom styles. Just like you cannot uncut the boards, but you can paint them.</p>
                    <p className="flowingText">This overwriting only behaviour comes back to the cascading thing we talked about earlier. Your styles will always take precedence over the user agent stylesheets</p>
                    <p className="flowingText">Some people use a pre-set "CSS reset" file, designed to negate everything in the user agent stylesheets so they start with a clean canvas.</p>
                <h3 className="sectionHeading">Ok how do I import, or link up, my stylesheets and my HTML?</h3>
                    <p className="flowingText">Style sheets are imported using link tags in the head of the HTML document. This looks like this: </p>
<pre className="codeBlock">{`<!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="./styles/styles.css">
        </head>
    <body>... `}</pre>
                    <p className="flowingText">These href links can be full file locations (absolute) but more often they are shortened, or relative to the HTML file.</p>
                    <p className="flowingText">This part can be a bit confusing, but basically you need to give the browser step by step directions to the CSS file from its current location (the HTML file).</p>
                    <p className="flowingText">There are some things you need to know about shortening paths:</p>
                    <ul className="bulletedList">
                        <li>"." - means in this folder</li>
                        <li>".." - means go back one level in the folder structure</li>
                        <li>"/" - this is used just like it is in the file explorer on your computer to separate locations</li>
                    </ul>
                    <p className="flowingText">It is also possible to use these HTML style tags: <pre className="codeBlock">{`<style></style>`}</pre> to write a block of CSS inside the head of an html file. However, this is not good practice and should generally be avoided. Just know that this exists and you might see it mentioned in resources online.</p>
                    <p className="flowingText">Also note that any in-line style written in HTML style tags or even by using the style attribute of other HTML tags like this: <pre className="codeBlock">{`<h1 style="color: red;"></h1>`}</pre> will take precedence over stylesheets that are imported as links in the head of an HTML file.</p>
                    <p className="flowingText">Now feel free to get out there and start styling your heart out!</p>
                    <button className="ready" onClick={() => this.props.callback(<Challenge5 callback={this.props.callback}/>)}>Challenge</button>
            </div>
            
            </div>
         );
    }
}
 
export default Lesson5