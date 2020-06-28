import React, { Component } from 'react';
import "../App.css";
import Challenge8 from "./Challenge8";
import {GoDashboard} from "react-icons/go";

class Lesson8 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 8: Responsive Design</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What is responsive design</h3>
                <p className="flowingTest">Well, when we refer to web design as being responsive we do not mean that it has super-human reflexes. Responsive web design simply means that a website or application will look fabulous
                no matter which size screen it is displayed on. This doesn't necessarily mean that the pages will look the same on all screen sizes, and it is totally fine to adapt the content and condense down the number of images etc. depending on the size of the user's screen.
                So long as the webpage or app is still functionally the same across all possible versions then you can consider it responsive!</p>
                <p>
                </p>
                <h3 className="sectionHeading">Why should we make something responsive? Who cares?</h3>
                    <p className="flowingText">In the modern era, more and more of web traffic is stemming from mobile phones. It is entirely possible that the majority of your users will be interacting with your interface from a mobile device and if it is broken or 
                    not friendly enough to all users, then people will leave the website and you are losing your audience.</p>
                <h3 className="sectionHeading">Ok I am convinced. What are the first steps for ensuring responsive design?</h3>
                    <p className="flowingText">Great to have you on board! Well, like with most things in life, it is easiest to start small and work your way up. Starting from the smallest screen size, is called: "Mobile first development" this is widely recommended.</p>
                    <p className="flowingText">Now inside the actual CSS file, this also conventionally means that you write the CSS for the mobile version at the top of the file and then you create separate sections for the different screen sizes in increasing order as you move down the page.</p>
                    <p className="flowingText">If you consider the design for the mobile version of your interface first, it will be easier for you to try and add in extra imagry etc to fill in the extra space than to try and cut out visual elements that you already have fallen in love with.</p>
                <h3 className="sectionHeading">How do I create different designs for different screen sizes?</h3>
                    <p className="flowingText">Great question, there are a few different tools you can use for this, but one of the most ubiquitous are writing: media queries. Media queries are like conditional bits of CSS that are carried out depending on how big the user's viewing media (or screen) is.</p> 
                <h3 className="sectionHeading">What does a media query look like?</h3>
                    <p className="flowingText">Most often media queries are used inside style sheets. It is possible to use them outside of the css style sheet, but generally in-line styling is less graceful than styling that is contained in designated CSS stylesheets.</p>
<pre className="codeBlock">{`
// This is an ordinary CSS class
    .myheaderClass {
        color: red;
    }

// This is a CSS class inside a media query
    @media screen and (min-width: 300px) and (orientation: landscape) {
        .myheaderClass {
            color: black;
        }
    }`}</pre>
     <h3 className="sectionHeading">How many screen sizes are there?</h3>
        <p className="flowingText">Well, technically there are an infinite number of possible screensizes, however, it is not possible for you as a developer to consider all of the different screen sizes individually, so we tend to group them in together into what are commonly called "breakpoints".</p>
        <p className="flowingText">When it comes to breakpoints you should consider the following types of screens:</p>
    <ul className="bulletedList">
                        <li>mobile: 600px wide or less</li>
                        <li>tablet: between 600px and 1200 px wide</li>
                        <li>desktop: over 1200px wide</li>
                    </ul> 
    <h3 className="sectionHeading">What kind of stuff can I do?</h3>
            <p className="flowingText">For the most part, you will be looking to target the screen media type to set conditional formating based on the size of the screen. However there are also speech and print media types which you can use to target speech synthesisers (like the ones used on google translate to pronounce things) or to set styles and conditions for printers.</p>                   
            <p className="flowingText">You can also target every type of media by using all for the media type. If you don't specify a type, all will be used as default so please bear this in mind.</p>
    <h3 className="sectionHeading">What else can I do?</h3>
    <p className="flowingText">There are actually quite a few options available to you, as a developer in the various media features. However, many of them are rarely used and we are focussing on the ones that will be used for the purpose of responsive design.</p>
    <p className="flowingText"> Feel free to explore all of the features <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features">here</a>, but for now, some of the most useful features for you will be:</p>
    <ul className="bulletedList">
                        <li>min-width/max-width: this sets the minimum or maximum screen size that the CSS will apply to.</li>
                        <li>orientation: this allows you to change something based on the user's screen orientation if you want.</li>
                        <li>prefers-color-scheme: you might want to use different styles if the user has dark mode enabled. This feature will allow you to do that.</li>
                    </ul> 
        <h3 className="sectionHeading">What about those other tools you glossed over?</h3>
        <p className="flowingText">Well since you asked... we touched on the fact that there were different ways to measure things in CSS earlier. Not all of those ways are responsive, but some of them are.</p>
        <p className="flowingText">The responsive ones are:</p>
        <ul className="bulletedList">
                        <li>rem/em: used primarily for making responsive font sizes</li>
                        <li>percentages (100% etc.): These are based on the size of parent elements and ultimately the screen.</li>
                        <li>vh/vw (viewport height/width): Directly related to a fraction of the size of the screen (also known as a viewport).</li>
                    </ul>
        <p className="flowingText">There are also pre-made responsive CSS grids like bootstrap's grid layout. It is good to know that this kind of ready made solution exists, however, there are clear advantages to understanding the fundamentals of responsiveness too. We will talk more about this in the next lesson.</p>
        <h3 className="sectionHeading">What about responsive images and image quality?</h3>
        <p className="flowingText">There can be many different benefits for not rendering large or high quality images for a small screen size. But there are a few similar but distinct ways that you can achieve this.  </p>
        <p className="flowingText">The first way is to use the &lt;picture&gt; html tag with a series of media queries built into the &lt;source&gt; tags with media and srcset attributes, like this:</p>
        <pre className="codeBlock">{`
    <picture>
      <source media="(max-width: 799px)"
      srcset="https://picsum.photos/id/237/200/300.jpg">
      
      <source media="(min-width: 800px)"
      srcset="https://picsum.photos/id/238/200/300.jpg">
      
      <img src="https://picsum.photos/id/237/200/300.jpg" alt="Thing">
      
    </picture>
`}</pre>
        <p className="flowingText">Another similar solution involves using the srcset attribute to set media queries for different screen sizes.</p>
        <pre className="codeBlock">{`
<img src="cat.jpg" alt="cat" srcset="
cat_600.jpg 600w,
cat_960jpg 900w,
cat_1280.jpg 1280w">
        `}</pre>
        <p className="flowingText">This is great but what if my image size and the size of the screen are not the same? What if I want the image to take up only half the width of the screen? Fear not there is also a source attribut that you can use to make this happen.</p>
        <pre className="codeBlock">{`
<img src="cat.jpg" alt="cat" srcset="
cat_600.jpg 600w,
cat_960jpg 900w,
cat_1280.jpg 1280w"

sizes="(max-width: 600px) 300px,
       (max-width: 960px) 500px,
       800px">
        `}</pre>
        <p className="flowingText">Remember that the browser will check the conditions in order! So be mindful to list them in a logical sequence! The final value in the example (800px) is the fallback value which is applied if none of the other conditions are met.</p>
        <p className="flowingText">Please also remember that not all browsers support the srcset attribute, so you might want to include a src attribute as a fallback just in case.</p>        
                    <button className="ready" onClick={() => this.props.callback(<Challenge8 callback={this.props.callback}/>)}>Challenge</button>
                    
            </div>

            </div>
         );
    }
}
 
export default Lesson8;