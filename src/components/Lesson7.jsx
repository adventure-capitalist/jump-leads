import React, { Component } from 'react';
import "../App.css";
import Challenge7 from "./Challenge7";
import {GoDashboard} from "react-icons/go";

class Lesson7 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 7: Old CSSchool Layouts</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What do we mean by CSS Layouts</h3>
                <p className="flowingTest">The layout of a website is largely thanks to the advent of CSS. Without it, we wouldn't have the nicely spaced and arranged
                websites that we know and love today, and the web would likely look more like a boring interlinking black and white encyclopedia.</p>
                <p>CSS has come a long way since its rather humble beginings. Did you know that web developers used to have to use tables for the entire webpage 
                    and arrange items in the the various rows and columns of the table? Its true. This approach came along with obvious drawbacks as inside a strict table
                    the size and structure of elements is very regular and regimented. 
                </p>
                <h3 className="sectionHeading">What all is possible with table?</h3>
                    <p className="flowingText">There are several CSS properties that apply specifically to tables. Obviously, in modern times you won't be treating the 
                    entire webpage as a table, but if you ever want to include a little table of prices, or sizes, or anything on a website it will be good to know 
                    your options. In addition to this, HTML emails still often make use of table properties so should you ever have to design a mailer these will be useful: </p>
                    <ul className="bulletedList">
                        <li>border-collapse: determines whether or not the shared borders of cells are combined or kept as two separate borders.</li>
                        <li>border-spacing: sets the spacing between the borders of neighbouring cells</li>
                        <li>caption-side: positions the placement of the table captions.</li>
                        <li>empty-cells: lets you decide if you want to include borders around empty cells or not</li>
                        <li>table-layout: determines how the cells and table respond to the size of the content</li>
                    </ul>
                    <h3 className="sectionHeading">What came after the table?</h3>
                    <p className="flowingText">Once CSS had arrived on the scene, people started making use of the box model (remember the cat from last time?)
                    divs quickly took over because they automatically and independantly resize to hold their content.</p>
                    <p className="flowingText">When it comes to positioning, there is actually a CSS property called position that you can make use of, however, please remember not to
                    over use this. It's really only necessary when you are positioning something in an unusual way. The vast majority of your elements will not require special positioning using the 
                    positioning element, however should you ever need to use it, here are your options: </p>
                    <ul className="bulletedList">
                        <li>static: this is the default that all elements come as, however you can use this to override the values in certain circumstances.</li>
                        <li>fixed: positions something relative to the viewport. Think of headers and footers that are "fixed" to the bottom or top of your view.</li>
                        <li>absolute: removes an element from the flow of a document and positions it according to a nearby element</li>
                        <li>relative: the element actually stays where it would be statically, but is drawn in a different place relative to the original position. To change the position, you'll need to use
                            the top/bottom/left/reight properties.
                        </li>
                        <li>sticky: a love-child between relative in fixed. Basically an element acts likes like a normal relatively positioned element until you scroll and it reaches a specific position. Then it sticks like a fixed element.</li>
                    </ul>
                <h3 className="sectionHeading">What is CSS Overflow?</h3>
                    <p className="flowingText">Overflow happens when the content of an element is larger than the boundries of its parent element. There are specific CSS properties that 
                    you can use to control how the overflow behaves. These are as follows:</p>
                    <ul className="bulletedList">
                        <li>visible: this is the default, and it will just overlap and overflow the boundries.</li>
                        <li>hidden: the overflow will just be cut off and it will not be visible to the users.</li>
                        <li>scroll: creates a scrollbar inside the parent element which allows the user to scroll to see the overflowed content.</li>
                        <li>auto: a scrollbar MIGHT appear depending on the browser and the powers that be.</li>
                        <li>overflow-x / overflow-y: sets which direction the scroll bars and the overflow will go, left to right, or up and down. </li>  
                    </ul>
                <h3 className="sectionHeading">What about Floats?</h3>
                    <p className="flowingText">Floats were an intereting period in CSS history where developers were looking for a solution to try and put elements next to each other.
                    It allows text to flow around images, or for some elements to flow around other elements. There are problems with the float property. It can cause weird behaviour in your structure and it is generally not recommended 
                    to use floats widely in modern times.</p>
                    <button className="ready" onClick={() => this.props.callback(<Challenge7 callback={this.props.callback}/>)}>Challenge</button>

            </div>

            </div>
         );
    }
}
 
export default Lesson7;