import React, { Component } from '../../node_modules/react';
import "../App.css";
import {GoDashboard} from "../../node_modules/react-icons/go";
import Challenge45 from './Challenge45';


class Lesson45 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 45: Serverless Development</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">What do you mean serverless?</h3>
          <p className="flowingText">Well, despite what the name might lead you to believe, serverless development does not mean that the code written only runs client side. The code still runs on a server it just works a little different than usual.
            Before we can talk about serverless technologies, I want to talk a little bit about how development usually works with a server. Traditionally, you would have a website or an app and in order to put it on the internet you'd need to purchase space on the server.
            You would traditionally pay for this space per year even if you leave it empty, and when shopping for space you should know how much traffic or resources that your app will need in order to buy enough space/power on the server (which is just a computer really) to run your app for all users.
            There is a lot of stuff that happens in the background on servers at large hosting companies like Amazon. There are services that work to balance the load, and run reverse proxies etc. All of this can be tampered with in the settings on the server if you know what you are doing.
            Often times this requires that you know a serverside language. However, things are changing. You no longer need to buy space on the internet and pay a fixed-rate for a certain amount of storage/power even if you are not using it. It is now possible to pay per use and fire up your app only as your customers/users are using it.
            This is called serverless development. Serverless has a few other names as well including: Functions as a service, or Cloud function. (Which are arguably more accurate than the serverless thing... but hey that horse has already bolted). Some people also call this style of development, event driven because your code will only be run on the server in response to some event (Like a user visiting your site).</p>
        <h3 className="sectionHeading">What are functions as a service?</h3>
            <p className="flowingText">Let's define this as: Code that runs on event-driven, ephemeral and stateless environments, fully managed by a third-party.</p>
            <p className="flowingText">Now, that we've got that out of the way, let's dig into what those words actually mean.
            Let's start with code: this is literally everything you need for your program to run, including external libraries. Now what do we mean by event-driven? In FaaS, everything is an event that triggers an action. There are dozens of events, inserting information into a database being a classic example and even HTTP requests can be events.
            Now... ephemeral environments... not as spooky as they sound I'm afraid. All this means is that every time you call a function a completely new environment is built from scratch and in turn it is killed right after your call is processed. 
            This is what allows you to be able to pay only for the execution time you use. Ok but what about "Stateless"? This one isn't that different to what a stateless component would be like in React. Basically no state is stored between invocations of the functions, meaning you can't rely on keeping data locally or in the memory for future use. Fully managed by a third party seems more approachable, but what does this third party actually manage?
            Well, absolutely everything. It's actually impossible for you to manage the infrastructure that you are running your code/functions on.</p>
        <h3 className="sectionHeading">Why do people like serverless?</h3>
            <p className="flowingText">Well the main reason that companies like serverless technologies is the cost savings that it can provide. There will be some exceptions and serverless will not work for every application especially if you have some functions that take a really long time to run like... more than five minutes to run. But most functions these days are fast and this will be the exception, not the rule.
            On the other hand the main reason that developers like serverless technologies is because it gives front-end developers the ability to do things on servers that they were never able to do before. 
            It's now possible to use third party services to send out emails, and build tap into and host entire APIs all just using functions as a service. You don't have to worry about downtime and you don't have to sweat scaling your servers. It allows developers to write less code and deploy apps faster.</p>
        <h3 className="sectionHeading">What don't people like about serverless?</h3>
            <p className="flowingText">Well, the things that make serverless great, namely the fact that it takes most of the back-end dev-ops stuff off your hands, opens up a vulnerability in error handling in that if you don't own a server, you can't check what went wrong on the server if it's not saving your logs.</p>
        <h3 className="sectionHeading">Practically, how do I think about writing a serverless app</h3>
        <p className="flowingText">Well it's similar to how you would think about creating REST APIs except all the API end points and HTTP calls are tiny separate events and you pay every time one of those events fires. This is a bit like buying car insurance by the mile instead of per month. Often times it is cheaper, but it comes with drawbacks like you probably won't get any roadside assistance included to help you figure out what happened to cause that error on mile 126... 
        Ok, enough with the bad analogies, the best way to learn about serverless technology is to get stuck in. Head on to the challenge when you're ready.</p>

           <button className="ready" onClick={() => this.props.callback(<Challenge45 callback={this.props.callback}/>)}>Challenge</button>

                </div>
            </div>
         );     
    }
}
 
export default Lesson45;