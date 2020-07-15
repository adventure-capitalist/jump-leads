import React, { Component } from 'react';
import "../App.css";
import Challenge15 from "./Challenge15";
import {GoDashboard} from "react-icons/go";


class Lesson16 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 15: Introduction to Javascript</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">Wait I thought we were already programming!?</h3>
                <p className="flowingText">Well, technically, you haven't been. Strictly speaking there is a semantic difference between "programming" languages like JavaScript or Python etc. and "markdown" languages like HTML or Typescript etc.</p>
                <p className="flowingText">
                   This is not a value judgement, just because something isn't technically considered programming doesn't mean that is not without difficulty or that it isn't as valuable a skill.
                </p>
                
                <h3 className="sectionHeading">Ok so what makes programming programming?</h3>
                <p className="flowingText">Well, it's all about giving and executing instructions. With markdown, it's more about rendering text, but with programming things are calculated, stuff moves about and things HAPPEN. Nothing HAPPENS with markup it just wonderfully IS.</p>
                
                    <p className="flowingText">Ok, so lets use an example to clear things up. Imagine you are trying to give a robot instructions about how to make the perfect cup of tea.</p>
                    <p  className="flowingText">Now, you might start by thinking about what you would tell a human to do: "two sugars, slightly milky"</p>
                    <p  className="flowingText">The problem with this, is that a robot, unlike a human will not assume that they should put the tea in a mug, or even know where to get the mug, and unless you explictly say: "Remove the lid from the tea jar at these coordinates (45, 140), remove one tea bag, replace the lid. Add the tea bag to boiling water, stir counterclockwise twice, remove the tea bag and place in the bin" there's a good chance that they won't be able to assume any of these tiny steps that your colleagues might be able to.</p>
                <h3 className="sectionHeading">Ok how far do we have to break it down?</h3>
                    <p className="flowingText">In theory you could break it down into 1s and 0s but that's not necessary because we have programming languages that are built to help make it easier to pass the computer instructions.</p>
                    <p className="flowingText">The problem is that the computer will follow your instructions exactly as they are given according to the rules of the programming language you are using.</p>
                    <p className="flowingText">So, if you give an instruction like: "pour water in a cup" the computer will pour the water in the cup. The water might overflow and spill everywhere or it might not even be the right cup. The computer doesn't know. It is just doing exactly as it is told. It is up to you to write clear instructions. In programming, every little instruction matters and is doing something important.</p>
               
                 <h3 className="sectionHeading">How can I give great instructions?</h3>
                    <p className="flowingText">Well, it takes practice. You have to give many bad instructions before you will give good instructions. Programming is to a large extent, trial and error. And speaking of trying stuff why don't we try out giving instructions using pseudo code.</p>
                    <p className="flowingText">Pseudo code is basically just a list of human readable instructions. Computers do not use pseduo code. This is just for the benefit of humans so that they can plan out what kind of instructions they want to give and how their code will operate before they start getting stuck into proper syntax.</p>
                    <p className="flowingText">You can roughly break down pseudo code into three main constituent parts</p>
                    <ul className="bulletedList">
                        <li> The actions or events (verbs) that will take place</li>
                        <li> The conditions that control when these actions are executed (if, when, then, otherwise)</li>
                        <li> The objects or variables (nouns) that need to be identified</li>
                    </ul> 

    

<button className="ready" onClick={() => this.props.callback(<Challenge15 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );     
    }
}
 
export default Lesson16;