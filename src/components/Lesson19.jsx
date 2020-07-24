import React, { Component } from 'react';
import "../App.css";
import Challenge19 from "./Challenge19";
import {GoDashboard} from "react-icons/go";
import wait from "../images/WaitTheresMore.jpg";

class Lesson19 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 19: Data Types - Booleans and Empty Data Types</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What are Booleans? </h3>
                    <p className="flowingText">Sadly, they are not particularly thin ghosts. But they are still pretty incredable!</p>
                    <p className="flowingText">Booleans can only be <i>true</i> or <i>false</i> but they are quite powerful in terms of performing logical checks.</p>
                    <p className="flowingText">They can be used to check if someone is logged in, or if they are over 18 etc. Here are some examples.</p>
                    
                <ul className="bulletedList">
                        <li>isOver18 = true</li>
                        <li>isLoggedIn = false</li>
                </ul> 
                <p className="flowingText">Pretty straight forward! You might be thinking that you got off lightly this lesson! But wait there's more!</p>
                <img alt="wait theres more" className="figure" src={wait}/>
                <h3 className="sectionHeading">What about Empty Data Types?</h3>
                    <p className="flowingText">Javascript has a few empty data types that can be used to hold the place of a value that does not yet exist. They are all special in their own way and are as follows:</p>
                    <ul className="bulletedList">
                            <li> null -  can be used to make something temporarily invalid like if you have a guest user on your website who has not provided details yet..</li>
                            <li> undefined - this is the default value if something has no value.</li>
                            <li> void - can be used to ensure that something will retun undefined, but honestly it is not needed just know that it exists.</li>
                            <li> Empty slot - related to leaving empty values in arrays, which is a data type we will touch on later, but this one isn't needed either. Just remember that it's out there.</li>
                    </ul>
                <h3>How can you tell the type of something?</h3>
                    <p className="flowingText">There is actually a built in operator that if you have a bit of information or data saved, and you need to know the type you can use it to determine the type.</p>
                    <pre className="codeBlock">{`
let myBitOfData = 365;

typeof myBitOfData; // expected result: Number


let myOtherBitOfData = true;

typeof myOtherBitOfData; // expected result: Boolean
                `}</pre>
                <p className="flowingText">In JavaScript, if you are checking whether or not something is true or false, the following values will always evaluate to be false:</p>
                <ul className="bulletedList">
                    <li>false</li>
                    <li>0</li>
                    <li>"" and '' and `` (an empty string with no spaces)</li>
                    <li>null</li>
                    <li>undefined</li>
                    <li>NaN</li>
                </ul>
                <p className="flowingText">Everything else will evaluate to be true!</p>
                <button className="ready" onClick={() => this.props.callback(<Challenge19 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );     
    }
}
 
export default Lesson19;