import React, { Component } from '../../node_modules/react';
import "../App.css";
import Challenge10 from "./Challenge10";
import {GoDashboard} from "../../node_modules/react-icons/go";
import gradients from "../images/gradients.png";

class Lesson10 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 10: Advanced CSS</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">Welcome CSS3!</h3>
                <p className="flowingText">As of the time of writing, CSS3 is the latest version of CSS which brought along some interesting style properties that you might be able to make use of.</p>
                <p className="flowingText">
                    "What do you mean might?" I hear you asking. Well, as with all shiny new toys, you will need to check if they are compatible with the browsers that must interpret them. Think of it like a video game console. If Nintendo comes out with the Gameboy Advanced, all of the old Game Boy cartriges will still
                    work in the old system, and they will work in the Gameboy advanced too, however, the new smaller cartridges won't work in the older system. They haven't made the switch like the newer consoles. This happens with browsers too. Just because Chrome and Firefox can handle all the latest CSS features definitely does not mean
                    that you can use them in Internet Explorer 10 and everything will suddenly play in technicolor. Browser support takes time to happen as the people who make browsers adapt to the people who dream up CSS. 
                </p>
                <h3 className="sectionHeading">Is there an adapter sold seperately?</h3>
                    <p className="flowingText">The answer to this is unfortunately only sometimes. Now this adapter is officially called a vendor prefix, and effectively helps bridge some of that gap in terms of browser compatibility. They are as follows:</p>
                    <ul className="bulletedList">
                        <li> -webkit-*propertyNameHere*: for Safari and Chrome</li>
                        <li> -moz-*propertyNameHere*: for Firefox</li>
                        <li> -o-*propertyNameHere*: for Opera</li>
                        <li> -ms-*propertyNameHere*: for Internet Explorer and Edge</li>
                    </ul> 
                <h3 className="sectionHeading">Tell me about the new properties!</h3>
                    <p className="flowingText">Sure thing! The latest properties can be divided into four main catagories as follows:</p>
                    <ul className="bulletedList">
                        <li> shadows</li>
                        <li> borders</li>
                        <li> backgrounds</li>
                        <li> animation</li>
                    </ul> 
                <h3 className="sectionHeading">What are the shadows?</h3>
                    <p className="flowingText">There are two new kinds of shadows; text shadows and box shadows.</p>
                    <p className="flowingText">Text shadows, add a border or a shadow that traces the outline of the font.</p>
                <h3 className="sectionHeading">Box shadows add a border or a shadow that traces the outlien of a box.</h3>
                <pre className="codeBlock">{`
.myClass {
    text-shadow: 1px 1px 2px blue;
    box-shadow: 2px 2px 5px red;
}
                
                `}</pre>
                    <p className="flowingText">Both require you to determine: an x-offset and a y-offset, a radius determining how far that that the shadow spreads and the shadow colour.</p>
                    <p className="flowingText">However, with the box shadow you can also use the 'inset' property to place the shadow inside the box as opposed to outside.</p>
                <h3 className="sectionHeading">What is new in terms of borders?</h3>
                    <p className="flowingText">There are two new border properties as well! Border radius, and border image.</p>
                    <p className="flowingText">Border radius allows you to determine how round the corners of a border are.</p>
                <h3 className="sectionHeading">Border image allows you to draw the same image around an item like a border. (A border of love hearts or something).</h3>
                <pre className="codeBlock">{`
.myClass {
    border-radius: 50%;
    border-image:
        url("https://mdn.mozillademos.org/files/4127/border.png")  /* source */
        27 /        /* slice */
        36px        /* width */
        18px        /* outset */
        round;      /* repeat */
};
                
                `}</pre>
                <h3 className="sectionHeading">What about backgrounds? Surely there can be no updates to backgrounds?</h3>
                    <p className="flowingText">Sorry, but that is not true my friend. It is now possible to have multiple backgrounds listed in a comma separated list.</p>
                    <p className="flowingText">It is worth noting that you should include the solid colors last after any images.</p>
                    <p className="flowingText">These days it is also possible to create background gradients which consist of multiple colors both in a circle or line pattern.</p>
                    <pre className="codeBlock">{`
.myClass {
    background: url(./images/img1.jpg) top left no-repeat, 
        url(./images/img2.jpg) top right no-repeat #f00;
    background: linear-gradient(135deg, red, blue);
};
                
                `}</pre>
<img alt="gradients" className="figure" src={gradients}/>
<p className="flowingText">You can also make the gradients or backgrounds repeat by using the repeating keyword</p>
<pre className="codeBlock">{`
.myClass {
    background: repeating-linear-gradient(#e66465, #e66465 20px, #9198e5 20px, #9198e5 25px);
};   
                `}</pre>
                    <h3 className="sectionHeading">What about Animation? What is new here?</h3>
                <ul className="bulletedList">
                        <li>tranformations - visually moves the element, but it doesn't actually change. (translate, rotate, scale, skew) </li>
                        <li>transitions - allows you to slowly change the css over a number of seconds</li>
                            <ul>
                                <li>easing(in/out/etc.) - an action that accelerates, decelerates or both depending on how you specifiy it.</li>
                            </ul>
                        <li>animation - similar to transitions but they want to be perfect loops. I.e. they will start in the state they ended unless you say so.</li>
                    </ul> 
                    <pre className="codeBlock">{`
.myClass {
    transform: scale(2) translateX(15px);
    transition: margin-left 4s ease-in-out 1s;
    animation: pulse 5s infinite;
};   
                `}</pre>

<button className="ready" onClick={() => this.props.callback(<Challenge10 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );
    }
}
 
export default Lesson10;