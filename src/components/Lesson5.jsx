import React, { Component } from 'react';
import "../App.css";
import css from "../images/css.gif";

class Lesson5 extends Component {
    state = { 
        ready: false
     }

    clickHandler = () => {
        this.setState({ready: !this.state.ready})

    }

    render() { 
        return ( 
            <div className="mainHolder">
            <h2>Intro To CSS</h2>
            {!this.state.ready &&
            <button onClick={this.clickHandler}>Jump In</button>}
            {this.state.ready && 
            <div>
                <h3>What is CSS?</h3>
                    <p>CSS stands for Cascading Style Sheets</p>
                    <p>"Cascading" (yes, like a waterfall) refers to how the DOM runs down these style instructions from the top to the bottom.</p>
                    <p>This behaviour essentially means that if you give an instruction at the top of your sheet, another similar instruction at the bottom can overright the first instruction.</p>
                    <p>Taken one step further, if you have two seperate style sheets imported as seperate files, the instructions in the file that is imported second will take precidence.</p>
                    <p>"So the last will come first, and the first will, well, be overwritten" </p>
                    <img src={css}/>
                    <p>Unlike HTML, which is concerned only about the content and structure of information or images on a page, css is a language which is used exclusively for aesthetics and design.</p>
                    <p>It is even possible to create animations using only CSS. That being said, Javascript will take your animations to the next level, and allow for users to really interact with your creations. </p>
                    <p>But this lesson is on CSS, Javascript will come later in the course!</p>
                <h3>What beautification options do I have with CSS?</h3>
                    <p>Great question! With CSS, it is possible to do most of the style things that you could reasonably achieve in Microsoft Word.</p>
                    <p>You might find lots of these features very similar to your word processing experiences. This makes sense, because webpages are documents afterall.</p>
                    <p>Some types of things you can style with CSS:</p>
                    <ul>
                        <li>Text and Font</li>
                        <li>Color and Background</li>
                        <li>Spacing and Positioning</li>
                        <li>Size of text areas/images etc.</li>
                        <li>Bullet points and Tables</li>
                        <li>Outlines and borders</li>
                    </ul>
                    <p>I told you they would sound familiar!</p>
                <h3>How do I write these CSS instructions?</h3>
                    <p>Another brilliant question. CSS files will need to be saved in ".css" format. Once you've achieved this, it's pretty straight forward</p>
                    <p>Unlike HTML, CSS doesn't use tags. It instead uses <strong>selectors</strong> which, as the name suggests, help select, or target the specific elements that you want to add styles to</p>
                    <p>Here is the vocabulary for the different parts of one line of CSS:</p>
                    <pre>{`selector { property: value; }`}</pre>
                    <p>As you can see you first target a <strong>selector</strong> then you select a <strong>property</strong> which you would like to assign a <strong>value</strong>.</p>
                    <p>Now this might seem a bit abstract. So let's clear things up with a real life example:</p>
                    <pre>{`h1 { color: red; }`}</pre>
                    <p>You might be able to guess by now that this would select all h1 elements in your HTML and change the color to red.</p>
                    <p>NOTE: CSS uses the American spellings for things like "color" and "center" if you use the UK spellings, it won't work I'm afraid.</p>
                <h3>What kinds of selectors are there?</h3>
                    <p>There are a few main types of selectors:</p>
                    <ul>
                        <h5>The basic ones:</h5>
                        <li> h1 - HTML elements (a bit too much style sharing to be generally considered good practice)</li>
                        <li> .allHeadings - Class names (styles are shared among elements in the same class) </li>
                        <li> #theHeadingNamedFrank - Ids (must be unique: absolutely no style sharing)**</li>
                        <h5>The advanced ones:</h5>
                        <li> * - this is called the universal selector, it applies styles to everything.</li>
                        <li> h1[href="www.facebook.com"] - Attributes (you can target elements specifically with attributes that match a specific value)</li>
                        <li> h1::hover / h1::first-child - Pseudo attributes and classes. Used to target neighbouring elements or even change styles on hover, or on focus etc.</li>
                        <li> h1::not(.allHeadings) - targets all elements that do not fit the criteria in the brackets</li>
                        <h5>The combinator options</h5>
                        <li> h1, h2 - the commas act like "and" meaning that the styles will be applied to each of these selectors at the same time</li>
                        <li> h1 + p - used to affect the closest nextdoor neighbour (child element).</li>
                        <li> h1 ~ p - used to select multiple nextdoor neighbours (children).</li>
                        <li> h1 > p - targets nextdoor neighbour elements (children) only it is also possible to forego the > and leave a space, but this will target children, and grandchildren etc. </li>
                    </ul>
                
                <h3>There are so many options, but how can I target my styles well?</h3>
                    <p>There is a balance to be struck between oversharing styles and being too exclusive. Generally you should never be using html element names alone as a selector. </p>
                    <p>The use of Ids as CSS selectors has also fallen out of favour because it is too specific and the styles cannot be reused.</p>
                    <p>The level of specificity also effects which styles will be applied in the event of a "tie" with more general styles losing out to more exact ones.</p>
                    <p>It is also worth noting that there is an escape hatch which will gurantee that a style will win in these situations.</p>
                    <p>This escape hatch takes the shape of the important flag and is used like this:</p>
                <h3>Wait, how is the CSS file able to select elements?</h3>
                    <p>CSS files are usually imported in the head of an html file as a style sheet. The browser is actually the one that "unpacks" the CSS file that came along with the HTML and carries out the CSS instructions on the HTML.</p>
                    <p>Think of the HTML as the bits you get in an IKEA flat pack. The parts usually have stickers with letters or numbers on them for labels. The instructions then tell you what to do with each labelled part, so that in the end you have beautiful furniture.</p>
                    <p>Now, it's also important to know that the browser has some very sparse in-built style sheets. These are called "user agent style sheets" Think of this as IKEA pre-assembling some things like hinges etc. for you. You cannot undo these basic default styles, but you can overwrite the with your own custom styles.</p>
                    <p>This overwriting only behaviour comes back to the cascading thing we talked about earlier. Your styles will always take precidence over the user agent stylesheets</p>
                    <p>Some people use a pre-set "CSS reset" file, designed to negate everything in the user agent stylesheets so they start with a clean canvas.</p>
                <h3>Ok how do I import my stylesheets in my HTML?</h3>
                    <p>Style sheets are imported using link tags in the head of the HTML document. This looks like this: </p>
                    <pre>{`h1 { color: red !important; }`}</pre>
                    <p>It is better if you resolve these style conflicts by readjusting how your selectors are working. The important flag should be left as a last resort.</p>
                    <pre>{`
                    <!DOCTYPE html>
                        <html>
                            <head>
                                <link rel="stylesheet" href="./styles/styles.css">
                            </head>
                            <body>...
                    `}</pre>
                    <p>These href links can be full file locations (absolute) but more often they are absolute, which means they are relative to the HTML file.</p>
                    <p>This part can be a bit confusing, but basically you need to give the DOM step by step directions to the CSS file from it's current location (the HTML file).</p>
                    <p>There are some things you need to know about shortening paths:</p>
                    <ul>
                        <li>"." - means in this folder</li>
                        <li>".." - means go back one level in the folder structure</li>
                        <li>"/" - this used just like it is in the file explorer on your computer to separate instructions</li>
                    </ul>
                    <p>It is also possible to use html <pre>{`<style>`}</pre> tags to write a block of CSS inside the head of an html file. However, this is not good practice and should generally be avoided. Just know that this exists and you might see it mentioned in resources online.</p>
                    <p>Also note that any inline style will take precidence over stylesheets that are imported as links in the head of an HTML file.</p>
            </div>}

            </div>
         );
    }
}
 
export default Lesson5;