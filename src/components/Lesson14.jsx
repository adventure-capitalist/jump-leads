import React, { Component } from 'react';
import "../App.css";
import Challenge14 from "./Challenge14";
import {GoDashboard} from "react-icons/go";
import CSSPRE from "../images/CSSPRE.png";
import mixins from "../images/chains.png";
import nest from "../images/nest.png";
import args from "../images/arguments.png";

class Lesson14 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 14: CSS Preprocessors</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What are CSS Preprocessors</h3>
                <p className="flowingText">Well from the word <strong>Pre</strong>-processor, you can probably gather that something is happening before. But what exactly is it?</p>
                <p className="flowingText">
                   Well a file is being processed, and you might think it is a CSS file that is being processed, but you would be mistaken! There are actually a few different types of files that can be pre-processed and the result of this processing is a CSS file.
                   That, my friends, is what we mean when we talk about CSS pre-processors.
                </p>
                <p className="flowingText">"What exactly is happening before what?" Great question, the files are being compiled or tranpiled into CSS by the browser before they are run.</p>
                <p className="flowingText">"What the heck!? Why am I transpiling stuff into CSS?" Why not just write CSS normally like everyone else. Well, CSS can actually be very repetitive and it lacks functionality compared to the newfangled preprocessors available today.
                </p>
                <p className="flowingText">"Ok then, why transpile at all? Why can't we just write in the new fangled formats?"" Well, because the browser can only understand CSS. So although humans prefer to use these new streamlined methods, machines still prefer to read the old stuff, at least for now.</p>
        
                <h3 className="sectionHeading">Which formats can we pre-processes?</h3>
                <p className="flowingText">Well, at the minute there are three main contenders. They are as follows:</p>
                    <ul className="bulletedList">
                        <li> SASS - Syntactically Awesome Style Sheets</li>
                            <ul>
                                <li>.sass - uses indentation and no brackets</li>
                                <li>.scss - uses brackets and no indentation</li>
                            </ul>
                        <li> LESS - LEaner Style Sheets</li>
                        <li> Stylus</li>
                    </ul> 
                    <p className="flowingText">Although, it is possible to use all of these formats, SASS and specifically the varient that uses the .scss formatting is the most popular and that's the one that we are going to use for this lesson.</p>
                <h3 className="sectionHeading">What problem does this solve?</h3>
                    <p className="flowingText">Great question, lets look at an example.</p>
                    <img className="graphic" alt="lots of code" src={CSSPRE}/>
                    <p className="flowingText">Here you can begin to see, that although the buttons are all nearly identical, you have to keep writing out the same properties. You can also see that vertical-align features again and again in many of the selectors.</p>
                    <p className="flowingText">If you still aren't compelled to do something about this repetition, imagine if you wanted to stop using this #f4f4f4 white color and swap it for a light beige. You'd have to go through each use of the color and try and change it.</p>
                    <p className="flowingText">Now, the time-concious of you might already be thinking that you can use shortcuts like copy and paste and find and replace to help you automate some of these repetative tasks. And you'd be right, however, find and replace is not without it's risks and although most programmers love a good bit of copy and paste action, there is a limit to what can be tolerated while maintating some sense of sanity.</p>
               
                 <h3 className="sectionHeading">How does SCSS solve this problem?</h3>
                    <p className="flowingText">One of the greatest features of SCSS in its early days was that it allowed software developers to create variables in the CSS and use them throughout the style sheet. This idea was actually so popular that in the latest version of vanilla CSS they actually started supporting variables!</p>
                    <p className="flowingText">Variables are particularly helpful when your boss tells you oh can you make our purple just 20% less purple across the entire website please? Then all you have to do, is change the purple one time in the value half of the variable declaration, and everywhere the variable name is used the new value is automatically pulled in! Really cool stuff I know!</p>
                    <p className="flowingText">In SCSS (it is different in the new vanilla CSS support), all you have to do to declare a variable is prepend a variable name with a dollar sign. Here is an example:</p>
<pre className="codeBlock">{`$themeWhite: #f4f4f4;`}</pre>
                    <p className="flowingText">Once you have declared the variable like this, you can use it as a value like this:</p>
                    <pre className="codeBlock">{`
.myClass {
    color: $themewhite;
}`}</pre>
                    <p className="flowingText">Pretty cool, I know! Now besides improving reusablilty these variables, you are also less likely to suffer from typos.</p>
                <h3 className="sectionHeading">What if I want to reuse entire chunks of code can I create large variables?</h3>
                    <p className="flowingText">Well, sort of. With SCSS it is possible to create what is called mix-ins which you can include in your classes if you use the same instructions all the time. This should save you from typing and it will be esspecially handy in those cases where you have a corporate style guide to implement.</p>
                    <p className="flowingText">Here is an example of what a mixin would look like to declare:</p>
                    <pre className="codeBlock">{`
 @mixin inline-block { 
     display: inline-block; 
     vertical-align: top; 
} `}</pre>
                    <p className="flowingText">In this example there are only two lines, but maybe you have tonnes of styling surrounding your font, or maybe all your images are round with a red border. The more lines of code you are duplicating regularly, the more efficient the use of mixins becomes. </p>
                    <p className="flowingText">Now here is an example of a class using a previously declared mixin in the CSS properties:</p>
                    <pre className="codeBlock">{`
.myClass { 
    @include inline-block;
    background-color: black;

}
`}</pre>
                    <p className="flowingText"> It is also possible to chain mixins together, maybe you have a small chunk of code that is repeated very often and the next 5 lines come in three different varients.</p>
                    <p className="flowingText">It would be clever to write a mixing for the first chunk that is always the same, then create three other mixins that include that first mixin and alter the five lines accordingly in each.</p>
                    <p className="flowingText">Here is an example of chained mixins for your viewing pleasure:</p>
                        <img className="graphic" alt="chained mixins" src={mixins}/> 
                <h3 className="sectionHeading">Wow. Mixins are wonderful is there anything they can't do!</h3>
                <p className="flowingText">Mixins, can actually even take arguments. It sounds a little crazy, but this functionality allows you to set up a mixing that customises itself based on the arguments that you pass to it.</p>
                <p className="flowingText">I know you might be thinking about Javascript and that's actually a really good way to think about these cool little mixins. For example this one:</p>
                        <img className="graphic" alt="mixins with args" src={args}/> 
                <p className="flowingText">The eagle eyed among you might be wondering what all those hash signs mean. They are used in SCSS for what is called <strong>String Interpolation</strong></p>
                <p className="flowingText">This is the synatax that you should use when you are not trying to change the value of a variable but are instead trying to conditionally embed some content into the CSS.</p>
                <p className="flowingText">Interpolation is a bit advanced, so don't panic too much, just know that this is possible and that it exists in case you ever see it on the internet.</p>
                
                <h3 className="sectionHeading">Wait that's not all!</h3>
                    <p className="flowingText">Another really interesting feature of SCSS, is that you can use this sort of chaining or "nesting" behaviour in the CSS declarations as well.</p>
                    <p className="flowingText">This removes a lot of the need for using crazy selector chains. Let's look at an example:</p>
                        <img className="graphic" alt="nested selectors" src={nest}/> 

<button className="ready" onClick={() => this.props.callback(<Challenge14 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );     
    }
}
 
export default Lesson14;