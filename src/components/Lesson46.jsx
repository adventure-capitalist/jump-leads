import React, { Component } from '../../node_modules/react';
import "../App.css";
import {GoDashboard} from "../../node_modules/react-icons/go";
import serviceworker from "../images/serviceworker.png";
import Challenge46 from './Challenge46';


class Lesson46 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 46: Offline</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">Why should an app crash if the connection is down?</h3>
                    <p className="flowingText">Well the answer is that it shouldn't! In fact, when there's no connection in Chrome the browser displays an entire 8-bit dinosaur game entirely without the internet... So what else can we do? 
                    Well, if the app is offline, we can still check and detect if the app has a connection or not. We can display information to the user about not being online.
                    We can take tasks and queue them until the app comes back online, or periodically warn that those tasks are still outstanding. 
                    It's also possible to cache or save files, so that when the train inevitably goes through a tunnel the user can still use some of the apps main functionality. However, it's also possible to incorporate caching into the normal workflow just to improve efficiency even when there is access to the internet.</p>
                <h4>How do I check if we are online or not?</h4>
                    
                    <p className="flowingText">Your app can detect whether or not it has access to the internet with:</p>
                    <pre className="codeBlock">{`
window.navigator.onLine
                `}</pre>
                    <p className="flowingText">The capital "L" in online is no typo, just a charming little quirk. There are also events that can be triggered when the status changes, namely to 'online' and 'offline', however, you must add the event listener to the window and not the document.</p>
                <h4>Web Workers</h4>
                    <p className="flowingText">JavaScript, even when it is asynchronous typically only runs on one thread. Now for a mini-lesson on hardware. A computer has processors and processors have "cores" and each core has two threads. Normally your JavaScript files will run on only one of these cores.
                    If it is asynchronous, the processor is actually not truly multitasking. It is simply switching back and forth between two things extremely quickly. If you want to use more than one thread in your computer to run separate chunks of JavaScript you can. This happens a lot in video games where there is a lot of stuff happening simultaneously
                    and all of it is relatively expensive in terms of pushing the limits of your average computer. A modern video game could not run on a single thread in a single processor and keep up with all of the physics, graphics, and user interaction all at once. If the work is too heavy for a single thread, it will "block" the thread.
                    When you break off some of the work to a new thread, that thread is called the worker thread and it is a completely different environment. There is no window in the worker thread, there's no module system either. The point of the worker thread is to report back to the main thread but you can communicate between both threads bi-directionally and freely like so: 
                    </p>
                    <pre className="codeBlock">{`
postMessage(result, [StuffToTransferGoesHere])
                `}</pre>
                <h4>Service Workers</h4>
                <p className="flowingText">A service worker is a special kind of worker thread. It is responsible for caching assets, and hooks into the cache API.
                Service workers are designed to sit between the browser and the server. Service workers listen for fetch events which could be anything from loading html files, images, css or js files etc.
                Once the requests for those files have returned the service worker can cache them, and if the browser makes any repeated requests for those files, then the service worker can check to see if they are already cached instead of going all the way to the server again.</p>
                <p className="flowingText">Sweet, but how do you create a new service worker? Well, you can add one in your javascript like this:</p>
                <pre className="codeBlock">{`
if ('serviceWorker' in navigator) { // this is a defensive check to make sure the browser can talk to service workers
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // If the registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // If the registration failed
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
                `}</pre>
                <p className="flowingText">Or you can create a new service worker file specifically to add files to a cache like this:</p>
                <pre className="codeBlock">{`
	
    var CACHE_NAME = 'my-super-cool-site-cache-v1';
    var urlsToCache = [
      '/',
      '/styles/main.css',
      '/script/main.js'
    ];
     
    self.addEventListener('install', function(event) { // listens for the service worker to load/be installed
      event.waitUntil(
        caches.open(CACHE_NAME) // opens up a cache
          .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache); // stores files to the cache
          })
      );
    })

    	
self.addEventListener('fetch', function(event) { // listens for files to be fetched
    event.respondWith(
      caches.match(event.request) // checks if the file is already in the cache
        .then(function(response) {
          if (response) {
            return response; // if it is in the cache return it from the cache do not go to the server
          }
          return fetch(event.request); // if it's not in the cache go get it fresh from the server
        }
      )
    );
  });
                `}</pre>
                <p className="flowingText">You can check if your Service Workers are installed and ready to cache things like this:</p>
                <pre className="codeBlock">{`
	
    if ('serviceWorker' in navigator) { // If the browser can work with Service Workers
        const DOMNode = document.querySelector('#kind');
        navigator.serviceWorker.register('service-worker.js', { // register the service worker
            scope: './'
        }).then(function (registration) { // after the service worker is registered
            let serviceWorker = null;
            if (registration.installing) { // if the service worker is registered successfully and is now installing
                serviceWorker = registration.installing;
                DOMNode.textContent = 'installing';
            } else if (registration.waiting) { // if the service worker is registered and is waiting now
                serviceWorker = registration.waiting;
                DOMNode.textContent = 'waiting';
            } else if (registration.active) { // if the service worker is registered, installed, and is now active
                serviceWorker = registration.active;
                DOMNode.textContent = 'active';
            }
            if (serviceWorker) {
                serviceWorker.addEventListener('statechange', function (e) { // if the service worker changes between any of the installed, active, waiting states do something ... 
                    console.log(e.target.state);
                });
            }
        }).catch (function (error) {
            // Something went wrong during registration.
        });
    } else {
        // The current browser doesn't support service workers.
    }
                `}</pre>
                 <p className="flowingText">You can only ever run one Service Worker at once. If you have a second Service worker, then it will wait for the first one to terminate. That being said, service workers have a "life cycle" which can be seen pretty clearly </p>
                 <img alt="service worker graphic" className="graphic" src={serviceworker}/>
                 <p className="flowingText">There are a few useful methods that you can use in conjunction with service workers and they are as follows:</p>
                 <ul className="bulletedList">
                     <li>skipWaiting - doesn't wait for the previous service worker, will immediately force take over of the tab.</li>
                     <li>claimClients - immediately take over running other tabs</li>
                     <li>waitUntil - allows you to do something async during a lifecycle handler</li>
                 </ul>
            <h3 className="sectionHeading">External Libraries</h3>
                 <p className="flowingText">Offline can be a bit tricky to manage, but there is a great third party library that makes writing offline code easy to write and use. The Workbox docs are relatively good and are available <a href="https://developers.google.com/web/tools/workbox/guides/get-started">here</a> if you would like to explore.</p>
                 <p className="flowingText">There is also a library that is useful for caching things other than files. Now you might be harking back to localStorage again, but the issue wiht localStorage, is that it is synchronous and thus blocks the thread.
                 That's where IndexedDB comes in, it's an in-browser NoSQL database which will allow you to persist data across sessions.
                 The raw API can be a bit difficult to work with, but there are wrappers like Dexie (available <a href="https://dexie.org">here</a> that help make it a bit easier to work with.</p>
            <h3 className="sectionHeading">Progressive Web Apps</h3>
                 <p className="flowingText">There is a trend towards making all web apps "progressive web apps". This essentially means that web apps are more capable, more reliable and more installable than traditional web apps.
                 These days web applications are relatively capable, and they have access to many different features and media that they didn't have before. Reliability means building a program that is fast and responsive, even if the network connection is questionable (remember that train that went through a tunnel?). And Installability means that progressive web apps should run outside the browser, so that they are launchable from the user's home screen or desktop.
                 Installing things like service workers and a web app manifest can make your normal web apps reliable and installable.
                 Now we've covered service workers but what is this "web app manifest"? The web app manifest is just a JSON file that tells the browser about the Progressive Web App you built. It explains how it should behave when installed. A typical manifest file also includes extra information like the app name, the icons the app should use, and the URL that should be opened when the app is launched.
                 Here is an example of a typical manifest.webmanifest file:</p>
                 <pre className="codeBlock">{`
{
    "short_name": "Weather",
    "name": "Weather: Do I need an umbrella?",
    "description": "Weather forecast information",
    "icons": [
      {
        "src": "/images/icons-192.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "/images/icons-512.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "start_url": "/?source=pwa",
    "background_color": "#3367D6",
    "display": "standalone",
    "scope": "/",
    "theme_color": "#3367D6",
    "shortcuts": [
      {
        "name": "How's weather today?",
        "short_name": "Today",
        "description": "View weather information for today",
        "url": "/today?source=pwa",
        "icons": [{ "src": "/images/today.png", "sizes": "192x192" }]
      },
      {
        "name": "How's weather tomorrow?",
        "short_name": "Tomorrow",
        "description": "View weather information for tomorrow",
        "url": "/tomorrow?source=pwa",
        "icons": [{ "src": "/images/tomorrow.png", "sizes": "192x192" }]
      }
    ]
  }
                `}</pre>
                <p className="flowingText"><a href="https://tomitm.github.io/appmanifest/">Here</a> is a generator that will help you automatically build one specific for your app. You can also create a link to download your progressive webapp to the users device. Most browsers will auto-detect that you're running a progressive web app if you meet all <a href="https://web.dev/install-criteria/">the criteria</a> but you might want to create a backup download button as well.
                As far as synching the data from the cache to the live app, there are a few different methods that are available for use:
                </p>
                <ul className="bulletedList">
                    <li><a href="https://developers.google.com/web/updates/2015/12/background-sync">Background Sync</a> - stores fetch calls until the user has a connection</li>
                    <li><a href="https://developers.google.com/web/updates/2018/12/background-fetch">Background fetch</a> - slowly gets large files without alarming the browser, which normally would think something has hung up due to the slower download.</li>
                    <li><a href="https://web.dev/periodic-background-sync/">Periodic background sync</a> - makes long term calls at fixed cron times</li>
                </ul>
                <h4>Push Notifications</h4>
                <p className="flowingText">A common thing that apps do when they are offline or closed is to send the user push notifications. Now, please use push notifications carefully, because they can be rather bothersome to the end user.
                Service Workers can send notifications using the .showNotification() method, which takes two arguments "title", and "options". Let's look at an example:
                </p>
                <pre className="codeBlock">{`
const title = 'Simple Title';
const options = {
  body: 'Simple piece of body text. \nSecond line of body text :)'
};

theServiceWorkerRegistrationGoesHere.showNotification(title, options);
                `}</pre>
                <p className="flowingText">There is a playground available <a href="https://tests.peter.sh/notification-generator/">here</a> where you can try out a bunch of the different options and see what they do.</p>
           <button className="ready" onClick={() => this.props.callback(<Challenge46 callback={this.props.callback}/>)}>Challenge</button>

                </div>
            </div>
         );     
    }
}
 
export default Lesson46;