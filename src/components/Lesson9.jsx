import React, { Component } from 'react';
import "../App.css";
import Challenge9 from "./Challenge9";
import {GoDashboard} from "react-icons/go";
import flexbox from "../images/flexbox.png";

class Lesson9 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 9: Flexbox</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What is Flexbox?</h3>
                <p className="flowingText">Flexbox, is a relatively new but quite nifty CSS feature. It flexes to allow elements to auto-distribute in the space provided. It helps when it comes to responsiveness, but can only help flex things across one axis.</p>
                <p className="flowingText">
                    It can be used to fix height issues, and specifically allows for you to center things vertically in a container relatively easily. It is designed to be used on a smaller scale. On sections of a webpage, but it can be used for entire web layouts. This is controversial, not everyone loves flexbox enough to use it this extensively, but some people do. 
                </p>
                <h3 className="sectionHeading">When should I use flexbox?</h3>
                    <p className="flowingText">Ultimately, this is up to you, you are free to use flexbox as extensively as your heart desires. However, you should start thinking about maybe using flexbox when you want to put things next to each other. If you are ever thinking about using float, stop yourself and try using flexbox instead!</p>
                <h3 className="sectionHeading">How does it work?</h3>
                    <p className="flowingText">Well, if an ordinary layout is based on block and inline flow directions then flexbox is laid out according to flex flow directions like in this diagram:</p>
                    <img className="graphic" src={flexbox}/>
                    <p className="flowingText">Items will be laid out either along the main axis, or the cross axis. The orientation of these axies depends on the flex-direction property. (In other words, the main axis can sometimes be vertical!)</p>
                <h3 className="sectionHeading">What are my options with Flexbox?</h3>
                    <p className="flowingText">There are two different kinds of properties when it comes to flex box. There are properties that you apply to the parent, or the flex container, and then there are properties that you apply to the child element, or the flex item.</p> 
                <h3 className="sectionHeading">What properties can I apply to the flex container?</h3>
                <ul className="bulletedList">
                        <li>display - this is how you implement the flex box layout</li>
                        <li>flex-direction - determines the direction of the main axis</li>
                        <li>flex-wrap - sets whether or not flex items must fit on one line or if they can move to the next</li>
                        <li>justify-content - aligns the flex items along the main axis</li>
                        <li>align-items - defines how items are aligned on the cross axis</li>
                        <li>align-content - adjusts the line height of the different rows along the main axis</li>
                    </ul> 
                    <h3 className="sectionHeading">What properties can I apply to the flex items?</h3>
                <ul className="bulletedList">
                        <li>order - controls the order that the flex items appear in the container</li>
                        <li>flex-grow/flex-shrink - determines whether or not the items are allowed to expand or contract acording to the space available</li>
                        <li>flex-basis - sets the starting size of each item</li>
                        <li>align-self - acts as a single item override for the align items property</li>
                    </ul> 
                    
            </div>

            </div>
         );
    }
}
 
export default Lesson9;