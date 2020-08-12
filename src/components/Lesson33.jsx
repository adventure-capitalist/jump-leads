import React, { Component } from '../../node_modules/react';
import "../App.css";
import Challenge33 from "./Challenge33";
import {GoDashboard} from "../../node_modules/react-icons/go";
import defer from "../images/defer.JPG";
import events1 from "../images/events.png";


class Lesson33 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 33: JavaScript in the Browser</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
    <h3 className="sectionHeading">JavaScript in Webpages</h3>
        <p className="flowingText">It's possible to include JavaScript directly inside HTML pages using script tags like this: 
        <pre className="codeBlock">{`<script> ...code goes in here directly... </script>`}</pre> 
        or by importing a shared javascript file like this:
        <pre className="codeBlock">
        {`<script src="index.js"></script>`}
        </pre>
        Always remember that script tags are not self closing and they do require that second closing tag! 
        </p>
        <p className="flowingText">Additionally, you'll need to know where in the HTML page to place these script tags. In the past, there has been a bit of back and forth about where to position the script tags in the HTML page, but it is now agreed that you should place them inside the HTML head.</p>
        <p className="flowingText">If you place them just willy-nilly in the head though, you risk slowing down your page. HTML is read top to bottom, and if your script is big and takes time to load, then you are delaying your first meaningful paint of your website unnecessarily. To combat this blocking behavior it is absolutely crucial that you use either the defer or async attributes on the script tag.</p>
        <p className="flowingText">The defer attribute allows you to load a script ASAP but will wait to run it until just before all the DOM content is finished loading and the DOMContentLoaded event is fired.</p>
        <p className="flowingText">On the other hand, the async keyword will load the script as soon as it can, but will fire it straight after it is loaded thereby interrupting the HTML parsing. Here is a comparison of both attributes so you can visualize what is happening:</p>
            <img className="graphic" src={defer}/>
        <p className="flowingText">We've mentioned the DOMContentLoaded() event, but there are a few other events that you should also be aware of. Let's take a look at a graphic that demonstrates all the tiny events going on behind the scenes as your webpages is loading up in the browser.</p>
            <img className="graphic" src={events1}/>
            <p className="flowingText">In addition to this, if you want to make sure everything is fully loaded before you run the script you can use the window.load event. However, if that seems a bit extreme, there is a document.readyState method that you can listen to. This readyState property has three possible statuses:</p>
            <ul className="bulletedList">
                        <li>loading - this status means that the document is still loading.</li>
                        <li>interactive - this status means that the document has finished loading and the document has been parsed but sub-resources such as images, stylesheets and frames are still loading.</li>
                        <li>complete - this status means that the document and all sub-resources have finished loading. The state indicates that the load event is about to fire.</li>
                    </ul>
            <p className="flowingText">You might be wondering why you care about these events and not blocking the HTML. Well not only is it good to have a website that loads fast, it's also possible that if your script runs before the HTML and DOM is fully formed, that if your script is referencing and element that hasn't been created yet by the DOM, that your entire site will crash.</p>
            <p className="flowingText">In short, you must hook your script in to run after an event like this if you are hooking into the DOM in your JavaScript file at all.</p>
        <h3 className="sectionHeading">What if I have quite a few bits of JavaScript to include?</h3>
            <p className="flowingText">If you are including different bits of JavaScript, you should really combine them by using modules.</p>
            <p className="flowingText">Exactly how modules works is a bit complex, but you can read more about the details in <a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/">this</a> article if you like.</p>
            <p className="flowingText">For now, know that it's more efficient if you include one file in the script tags like this:</p>
            <pre className="codeBlock">
        {`<script src="index.js" type=”module”></script>`}
        </pre>
        <p className="flowingText">You may have noticed the type attribute is set to module in the example. This is important, now inside index.js we can import chunks of code that are exported from other files like this: </p>
        <pre className="codeBlock">
        {`import helperFunction from './app.js';`}
        </pre>
        <p className="flowingText">In order to import something like this into a javascript file it would need to have been exported first from it's original file, in this case app.js, that would look like this:</p>
        <pre className="codeBlock">{`
export function helperFunction() {
    console.log('Hello this is the helper function, here to help!');
}`}</pre>  
        <p className="flowingText">By sort of nesting the imports in this way, you are improving the load time. Bundling files together reduces the number of trips that you have to make to the server. This makes your site faster! You can also further improve speed by minifying, or removing whitespace, from your files or my uglifying them by giving them names that are optimally suited for machines instead of humans.</p>
        <p className="flowingText">It is also possible to use brand new syntax to dynamically import modules, this should remind you of how functions work. Here is an example:</p>
        <pre className="codeBlock">{`
<script>
    import('./add.js')
    .then(module => module.default(7, 4)) //returns 11
    .catch(error => // log error);
</script>
`}
 <h3 className="sectionHeading">What tools does the browser come with?</h3>
 <p className="flowingText">It's worth mentioning again that not all browsers are created equally. A really old browser might not be equipped with all of the latest features. You will have to take this into consideration when you are building things.</p>
 <p className="flowingText">However, you shouldn't have too much trouble. Let's take a look at some of the tools that you can tap into.</p>
 <ul className="bulletedList">
                        <li>window - everything you can see in the browser is technically considered to be in the global scope which is referred to as window.</li>
                        <li>document - refers the the collection of DOM nodes in the page</li>
                        <li>requestAnimationFrame - A loop that can be used for animations</li>
                        <li>history - controls the browser's history</li>
                        <li>navigator - info about the browser and platform, including things like bluetooth and geolocation etc.</li>
                        <li>screen - shows the size of the device screen.</li>
                        <li>Storage API - Allows you to tap into localStorage, sessionStorage, IndexedDB etc.</li>
                        <li>Scrolling API - Allows you to specify a particular place in the window where you would like to scroll to.</li>
                        <li>Form Data API - used together with forms to manipulate the data that is eventually inserted.</li>
                    </ul>
        </pre>
        <h3 className="sectionHeading">Including Third Party Scripts</h3>
            <p className="flowingText">There are lots of wonderful libraries available to you which could save you a ton of time.</p>
            <p className="flowingText">But how should you include them? That's a great question. Simply include them in script tags but make sure they are all listed above your final custom script.</p>
            <p className="flowingText">When installing third party scripts please be mindful of what you are downloading, check to make sure that that library has good docs and is able to help you in your specific circumstances.</p>
                 <button className="ready" onClick={() => this.props.callback(<Challenge33 callback={this.props.callback}/>)}>Challenge</button>
        
        </div>
    </div>
         );     
    }
}
 
export default Lesson33;