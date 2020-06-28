import React, { Component } from 'react';
import "../App.css";
import Challenge13 from "./Challenge13";
import {GoDashboard} from "react-icons/go";
import fonts from "../images/fonts.png";

class Lesson13 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 13: CSS Fonts</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">Importing Fonts</h3>
                <p className="flowingText">By now, you will probably have used your fair share of fonts from around the internet. We have used several Google Fonts and you know how to fallback to system fonts just in case. But have you ever wondered what is going on behind the scenes? That's what we are going to dig into in this lesson.</p>
                <p className="flowingText">
                    Ok, so you know that you define web based fonts using the @fontface declaration.
                </p>
                <pre className="codeBlock">{`
@font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
            local("Open Sans"),
         url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  }
  
                `}</pre>
                    <p className="flowingText">You can add in either local file paths in the src attribute, or remote urls for downloading fonts from the internet. You also need to define a format! </p>
                <h3 className="sectionHeading">What kind of formats are possible?</h3>
                    <ul className="bulletedList">
                        <li> .woff / .woff2 - Web Open Font Format (best option, use version 2 for better compression if you can!)</li>
                        <li> .ttf - True Type Fonts (ok option, a bit old school, might not be future proof)</li>
                        <li> .svg - (made obselete by .woff)</li>
                        <li> .eot - (made obselete by .woff)</li>
                    </ul> 
                <h3 className="sectionHeading">What else can I do with @font-face?</h3>
                <ul className="bulletedList">
                        <li> font-family: allows you to give a name to the font which you can use in your css declarations</li>
                        <li> font-variants: there are several different options (normal/small-caps/slashed-zero) these allow you to use different versions of the same font </li>
                    </ul> 
                    <p className="flowingText">Please also bear in mind that not all fonts are left to right like in the case of English. You can use the writing-mode property in CSS to change the direction. These are the options:</p>
                        <img className="graphic" alt="direction table" src={fonts} />
                 <h3 className="sectionHeading">How should I pick a font?</h3>
                    <p className="flowingText">There are a wide range of things to consider when picking a font. Here is a video that might helps explain what makes a good font.</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/O3fVMm-Ef0Y" frameborder="0" alt="video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="flowingText">Please remember that not all fonts are free, but the paid fonts can be worth it as they often come with excellent customisation options.</p>
                    <p className="flowingText">Note: there is a difference between having the rights to use a font in print, and having the rights to use a font on the web! You have been warned, don't get caught out!</p>
                <h3 className="sectionHeading">How should fonts be downloaded?</h3>
                    <ol className="bulletedList">
                        <li> first download the font as a .woff file</li>
                        <li> next add <pre>{`<link rel=“preload” href=“<local>” type=“font/woff2”></local>`} to the head in the html</pre></li>
                        <li> finally add @font-face w/ font-display: swap to the CSS file</li>
                    </ol> 

<button className="ready" onClick={() => this.props.callback(<Challenge13 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );
    }
}
 
export default Lesson13;