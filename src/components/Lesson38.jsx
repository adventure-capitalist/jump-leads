import React, { Component } from '../../node_modules/react';
import "../App.css";
import {GoDashboard} from "../../node_modules/react-icons/go";
import Essays from "../images/Essays.jpg";
import git from "../images/git.png";
import rebase from "../images/rebase.png";
import Challenge38 from './Challenge38';



class Lesson38 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 38: JavaScript Animation</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">Why use JavaScript Animation?</h3>
                    <p className="flowingText">Although it is possible to do some animation with CSS, it can often require a lot of work and if you want to change the way something works or looks you will likely have to completely scrap large chunks of styling and start over from scratch.</p>
                    <p className="flowingText">There have been various studies that show that user will wait longer on a page if there is animation, and if a user is staying on your website for longer then that is good for business.</p>
                    <p className="flowingText">Of course, you don't HAVE to use animation in your apps, but if you ever get asked to use it, you'll want at least a basic understanding of how you can make things happen.</p>
                <h3 className="sectionHeading">SVGs and JavaScript Animation</h3>
                    <p className="flowingText">JavaScript animation uses SVGs, which are scalable vector graphics. SVG is an image format that is loosely based on XML format. You can think of it working similar to how HTML works; namely, there are many different elements that get defined and combined in the markup to produce two dimensional graphics.
                    The best part about SVG graphics, is that they are supported across a wide range of browsers. And since SVG graphics are secretly XML documents under the hood, the web browser will provide a DOM API that you can use to interact with the elements in your JavaScript. This means that you can hook into these elements, and use JavaScript to animate them.</p>
                    <h4>SVG path elements</h4>
                        <p className="flowingText">The most powerful SVG element is the <pre className="codeBlock">{`<path>`}</pre> element. You can use it to create any advanced 2D shape you can imagine.
                        The element works by taking a sequence of drawing commands through the "d" attribute. Here is an example for a right-angled triangle:</p>
                        <pre className="codeBlock">{`<path d="M10 10 L75 10 L75 75 Z" />`}</pre>
                        <p className="flowingText">You can imagine it working like an invisible pen that draws on the screen and the instructions in the path element are what controls the pen.</p>
                        <p className="flowingText">Animating using  the SVG DOM is mostly using the visibility: hidden attribute for the elements, and then un-hiding them in a sequence.</p>
                <h3 className="sectionHeading">Animation: the easy way</h3>
                    <p className="flowingText">The easiest way to get hold of your SVGs is to import them from tools like illustrator, sketch or inkscape. Alternatively, you can steal them shamelessly from around the web, but be mindful of trademarks etc.</p>
                    <p className="flowingText">It's possible to look around on places like CodePen for animation inspiration, and then modify the things that you find to make them your own.</p>
                    <p className="flowingText">There are several third party libraries but many of them are made by a company called GreenSock the docs are available <a href="https://greensock.com/docs/">here:</a></p>
                    <ul className="bulletedList">
                        <li>Tween(Lite/Max) - used to program beTWEEN two states. To move from A to B.</li>
                        <li>Timeline(Lite/Max) - allows you to group tweens on a timescale with overlap to create a whole scene</li>
                    </ul>
                    <p className="flowingText"><a href="https://threejs.org">ThreeJS</a> is especially good for 3D animation like you would see in video games.</p>
                    <p className="flowingText"><a href="https://zzz.dog">Zdog</a> is a small engine that makes 3D models for use on the web using a user-friendly API.</p>
                    <p className="flowingText">There is also <a href="https://p5js.org">p5.js</a> which is useful for drawing and including HTML5 objects, videos, and sound.</p>
                    <p className="flowingText"><a href="https://phaser.io">Phaser</a> is another drawing framework specifically designed with games in mind.</p>
                    <p className="flowingText">It's also worth mentioning <a href="https://learnopengl.com/Getting-started/Shaders">GLSL Shaders</a>, which will require you to learn shader language but are available should you ever need them at any point in your career.</p>

                    <p className="flowingText">All that being said, there are a ton of ways you can make animations in JavaScript. As long as you find something that works for you and you have an understanding of SVGs and how animation works under the hood, you'll be just fine.</p>
                <button className="ready" onClick={() => this.props.callback(<Challenge38 callback={this.props.callback}/>)}>Challenge</button>
        
                </div>
            </div>
         );     
    }
}
 
export default Lesson38;