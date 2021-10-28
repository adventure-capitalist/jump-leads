import React, { Component } from '../../node_modules/react';
import "../App.css";
import {GoDashboard} from "../../node_modules/react-icons/go";
import Challenge48 from './Challenge48';


class Lesson48 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 48: NodeJS and Servers</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">About Node.js</h3>
                    <p className="flowingText">Node.js is a shell script that runs processes that creates an environment and runs javascript inside of it. This means that we can create a server inside this environment and run it. Commonly, we use a framework called Express.js to make it easier to get up and running quickly.
                    To get started running a node process simply type node into the terminal and hit return. Now, if you type process in the terminal you should see the process details. The process has access to certain environment variables, but only if they are available in the process.env file. These variables are often used to hold secrets like credentials or settings.
                    You can use these process variables inside various other files. But there are also some injected variables that will show you where you are on the disk like _filename and _dirname .
                    </p>
                    <p className="flowingText">The command "node" can also be used in the terminal in combination with a file path. So that if you type node index.js in the terminal, the script inside the index.js will run.
                    Alternatively, you can use the npm commands to run your project. But when you type npm start what is actually happening is the command: node server.js, but if you want to run a different script instead, you can add this to the scripts block in the package.json file.
                    If you want to end a script you can stop, or kill it by pressing ctrl + C</p>
                    <p className="flowingText">If you make changes to your script, you'll need to refresh it in order to see the changes, and the only way to do that is to kill the script (ctrl + C) and restarting it. This can get annoying especially if you are making a lot of changes, so someone created an app for that.
                    <a href="https://www.npmjs.com/package/nodemon">Here</a> you will find a helper package that will automatically restart the server every time you save new changes to the file.</p>
                <h4>Getting started</h4>
                    <p className="flowingText">First things first, open the command line. Create a new folder in the place where you store your programming work, and navigate inside of it. Now run: git init 
                    This should start off the git version control system for you. Then run npm init to access package management. Now try making your first commit.</p>
                    <pre className="codeBlock">{`
git add -A
git commit -m "initializing npm"
                    `}</pre>
                    <p className="flowingText">Now that you have a package manager, let's install your first package: Express body-parser.</p>
                    <pre className="codeBlock">{`
npm i express body-parser
                    `}</pre>
                    <p className="flowingText">
                        Perfect, now inside the project, create a new folder and name it public. You can store HTML, CSS, and JS files in here.
                        Create a new JS file named: server.js, which will be used to start up the server later.
                    </p>
                <h4>Creating a server</h4>
                    <p className="flowingText">Now that you are all set up, you can start inside server.js by adding in a basic express server template like this:</p>
                    <pre className="codeBlock">{`
const express = require('express');
const app = express();

// Good Practice, see next slide
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(\`Server is listening on port \${PORT}\`);
});
                    `}</pre>
                    <p className="flowingText">Here you will see that first the express package is being loaded. Then the port is being defined, and finally the listen method is being called on the express server which takes the port as an argument, and logs a message to the console.
                    Now run this file by using the command: npm start</p>
                    <p className="flowingText">If everything is good, you should see the message in the console!</p>
                <h4>Ports</h4>
                    <p className="flowingText">What is this port that we are using in the express server? Well servers use ports to control traffic. They are like gates at an airport which allow access to different parts of the outside world.
                    A server process must bind (or listen to) to a specific port number in order to hear or receive traffic sent to that port.
                    There are a few ports that are reserved for special processes. These are called system ports and they include: 80, 8080, 8008, 443, and anything under 1023.
                    You shouldn't use these ports as it can break other system processes like listening for new emails etc. It's totally fine to use numbers like 3000, 3333 among others.
                    Registered ports aren't really a huge issue on your local device but when you put your software on a 3rd party server, like with netlify or heroku, you'll get given a port via process.env.PORT</p>
                    <p className="flowingText">Sometimes another program or process might be blocking your port. If this is the case, you will see EACCESS error. Remember to check that it's not your old node server that is haunting the port.
                    Sometimes processes don't die properly and then they sort of linger around. <a href="https://stackoverflow.com/questions/24387451/how-can-i-kill-whatever-process-is-using-port-8080-so-that-i-can-vagrant-up/36876427#36876427">here</a> are some instructions on how to make sure a process dies once and for all.</p>
                <h4>Middleware</h4>
                    <p className="flowingText">Let's keep things simple by creating a static file server first. Go ahead and update the server code in server.js to be as follows:</p>
                    <pre className="codeBlock">{`
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3333;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(\`Server is listening on port \${PORT}\`);
});
                    `}</pre>
                    <p className="flowingText">Here you will see that we have used express.static , this is the middleware function that will enable static file sharing.
                    Now go ahead and add in some generic/basic html file in the public directory and request them by navigating to localhost:3333/nameofyourhtmlfileshere.html in the browser.
                    But what is middleware? Middleware can be thought of as helper functions or enhancements. They can be used for a variety of purposes including checking security or collating information.
                    For example, app.use() loads middleware into an array. The request travels through that array in the order that it was loaded.
                    Just like with route handlers, middleware is passed a request and response object and a next function (req, res, next). If the next function runs, then the script will move on to the next middleware.</p>
            <h4>Route Handlers</h4>
                <p className="flowingText">Route handlers act like user interaction event listeners (click, hover, etc.) which means that any request aimed at the relevant URL (/cars) will return the handler function.
                An example of this might look like this:</p>
                <pre className="codeBlock">{`
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.static('public'));

const cars = [{name: 'ferarri'}, {name: 'lamborghini'}];

app.get('/cars', function(req, res){
    return res.json(cars);
});

app.listen(PORT, () => {
    console.log(\`Server is listening on port \${PORT}\`);
});

                    `}</pre>
                    <p className="flowingText">In this example, whenever your app hits the /cars route, the express middleware will fire, and return a json object. Now, remember at the start when we installed that body-parser thing? We can use that in our app to regulate the format data is being passed around in on our server like this:
                    </p>
                    <pre className="codeBlock">{`
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse application/json

const cars = [{ name: "ferarri" }, { name: "lamborghini" }]; // In memory

app.get("/cars", function(req, res) {
  return res.json(cars);
});

app.post("/cars", function(req, res) {
  cars.push(req.body);
  return res.sendStatus(201);
});

// ....Delete and Update go here

app.listen(PORT, function() {
  console.log(\`Server is listening on port \${PORT}\`);
});
                    `}</pre>
                    <p className="flowingText">You can also use middleware to redirect to a different route if desired. Here is an example of what that might look like:</p>
                    <pre className="codeBlock">{`
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.get('/', function(req, res) {
    if(!req.user) res.redirect('/login');
    // other code goes here
});

app.listen(PORT, function() {
  console.log(\`Server is listening on port \${PORT}\`);
});

                    `}</pre>
                    <p className="flowingText">You can pass various information and different parameters via the URL. There is a really good guide in the docs <a href="https://expressjs.com/en/guide/routing.html">here</a> that explains all the different ways you can search using the route.
                    It is also possible to use a router to separate out sections of your logic. So if you have a user section of your app and maybe a car section of your app you can keep them separate. More details about implementing a router is available in the docs <a href="https://expressjs.com/en/4x/api.html#router">here</a></p>
           <button className="ready" onClick={() => this.props.callback(<Challenge48 callback={this.props.callback}/>)}>Challenge</button>

                </div>
            </div>
         );     
    }
}
 
export default Lesson48;