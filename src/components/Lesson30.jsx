import React, { Component } from '../../node_modules/react';
import "../App.css";
import Challenge30 from "./Challenge30";
import {GoDashboard} from "../../node_modules/react-icons/go";

class Lesson30 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 30: Object Theory</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">Objects are underrated</h3>
                    <p className="flowingText">As you already know, objects are a datatype that stores key/pairs. They are designed to store related information. They can thought of similarly to database records, and sometimes they can be very large, which is why we use references to pass them around.</p>
                    <p className="flowingText">Let's review how you can access and mutate the values in objects</p>
                    <pre className="codeBlock">{`
let friend = {
    name: 'Jamie'
};

//DOT NOTATION
console.log(friend.name);
//SQUARE BRACKET NOTATION
console.log(friend['name']);
                `}</pre>
                    <p className="flowingText">You can also change the values contained in the objects using both of these methods. Let's take a look at an example:</p>
                    <pre className="codeBlock">{`
//DOT NOTATION
friend.name = "Jessie"
//SQUARE BRACKET NOTATION
friend['name'] = "Terry"
                `}</pre>
                    <p className="flowingText">Objects also come with what are called "accessors" in essence, they are methods that are automatically called every time a value within the object is either written to, or read from. They use the "get" and "set" keywords and are often referred to as getters and setters. Let's take a look at a few:</p>
                    <pre className="codeBlock">{`
const person = {
    firstName: 'Robin',
  	lastName: 'Singh',

    get fullName(){
        return \`$\{this.firstName} $\{this.lastName}\`;
    },
    set fullName(val){
        const namesArray = val.trim().split(' ');
        this.firstName = namesArray[0];
      	this.lastName = namesArray[namesArray.length - 1];
    }
};
                `}</pre>
                <p className="flowingText">In this example, the person object has both a getter and setter, which would only be triggered if the value of "person.fullName" was read or assigned respectively. </p>
            <h3 className="sectionHeading">The "in" Operator</h3>
                <p className="flowingText">the in operator can search for keys inside the object family it will return either true or false depending on whether or not the key is found. If the key doesn't have a value, or the value is "undefined" it will still return true, because it is only looking for keys. Let's look at a few examples:</p>
                <pre className="codeBlock">{`
// Examples of "in" with Arrays
const fruits = ['kiwi', 'grape', 'strawberry', 'lemon', 'mango'];
0 in fruits        // returns true
3 in fruits        // returns true
'lemon' in fruits    // returns false (it only checks keys! Not values.)

// Example of "in" with predefined objects
'PI' in Math          // returns true

// Examples of "in" in custom objects
const myLaptop = {make: 'Dell', model: 'Latitude 9510', year: 2020};
'make' in myLaptop  // returns true
'model' in myLaptop // returns true
                `}</pre>
                <h3 className="sectionHeading">The "for/in" loop</h3>
                <p className="flowingText">The for/in loop also makes use of the word in and uses this key referencing system. Let's take a look at an example: </p>
                <pre className="codeBlock">{`
// This object has letters as keys and numbers as values
const obj = {a: 1, b: 4, c: 9};

// creates a new variable placeholder that represents each key in the object.
for (const myKey in obj) {
    if (obj.hasOwnProperty(myKey)) { // checks if the object has the key, if it does, it moves on to the console.log
      console.log('the object includes: ' + myKey, '=', obj[myKey]);  // obj[myKey] will use square bracket notation to use the key to look up the value
      
      // logs the strings: "the object includes: a" "=" 1
                           "the object includes: b" "=" 4
                           "the object includes: c" "=" 9
    }
}
                `}</pre>
                <h3 className="sectionHeading">The "delete" keyword</h3>
                <p className="flowingText">There is the delete keyword which will remove key/value pairs from an object. Let's look at a practical example again:</p>
                <pre className="codeBlock">{`
// This object, myobj, has two properties; a and b.
const myobj = {};
      myobj.a = 5;
      myobj.b = 12;

delete myobj.a; // this will remove the 'a' property, leaving myobj with only the b property.
console.log ('a' in myobj); // You can confirm it is gone in a log
                `}</pre>
                <h3 className="sectionHeading">Assigning properties to objects</h3>
                    <p className="flowingText">Given that we have just discussed how you can delete properties from an object, there are also more advanced ways of adding properties to objects. The Object Object has some built in methods that you can use to set up properties and configure whether or not you want things like the "for in" loop to be able to access them. By default properties can be looped over (enumerable), can be modified (writable), and their behavior can be changed (configurable).</p>
                    <p className="flowingText">However, if you use the .defineProperty() method instead of assigning a property like normal, the defaults do not apply and you can turn off this enumerable, writable, configurable behavior. If you want to define multiple properties at once you can use the .defineProperties() method. And if you want to be able to check on how these properties are configured with regard to enumerability, writability, and configurability you can use the .getOwnPropertyDescriptor() method to return these settings.</p>
                    <p className="flowingText">For most objects, it will be absolutely fine to keep assigning properties using the traditional methods, however, sometimes you might want to restrict access to the object for security reason or otherwise. You might see this code in existing projects so it's useful if you are aware what it does.</p>
                <h3 className="sectionHeading">Iteration</h3>
                    <p className="flowingText">There are a few methods that come along with Objects that are useful when trying to access different parts of an object.</p>
                    <ul className="bulletedList">
                        <li>.entries() - transforms an object into multiple arrays each containing two items: the key, and the value. All of the key/value arrays are then nested in one large array.</li>
                        <li>.keys() - returns an array representing the keys of all the enumerable properties in the object.</li>
                        <li>.getOwnPropertyNames() - similar to .keys() but it will include non-enumerable properties too.</li>
                        <li>.values() - returns an array representing the values of all the enumerable values.</li>
                        <li>.fromEntries() - does the opposite of .entries() turns that list of nested arrays into an object.</li>
                        <li>.assign() - quick and dirty way of copying or merging together two objects into a single object. </li>
                    </ul>
                    <p className="flowingText">There are also a few methods you can use to attempt to tighten up security on your object. None of these are actually serious security and they will not provide you with true immutability but they are also good to know about. They are as follows: </p>
                    <ul className="bulletedList">
                        <li>.preventExtension() - will prevent new properties from being added to the object.</li>
                        <li>.isExtensible() - returns true/false depending on if .preventExtension has been applied</li>
                        <li>.seal() - prevents adding, deleting or modifying property definitions.</li>
                        <li>.isSealed() - returns true/false depending on if .seal() has been applied</li>
                        <li>.freeze() - prevents adding, deleting, or changing property definitions AND values.</li>
                        <li>.isFrozen() - returns true/false depending on if .freeze() has been applied</li>
                    </ul>
                <h3 className="sectionHeading">Prototypes</h3>
                    <p className="flowingText">In JavaScript almost everything is an object, but when you dig deeper you might find that every "Object" in JavaScript is a "prototype" based off of another. Most objects are based off of the OBject Object, and because of this they come with an accessor named: "__proto__". you might see this if you look in the console.</p>
                    <p className="flowingText">Inside of the __proto__ accessor, is all the shared code across objects. How this code is shared is referred to as the prototype chain. Let's discuss an example for a moment.</p>
                    <p className="flowingText">If you reference a method on an object, the system goes ahead and checks which object you're currently in, and then which object that object is in and then which object that object is in all the way up the prototype chain.</p>
                    <p className="flowingText">Every function you write will come with a prototype object which you can access using __proto__ if your function is going to be used to construct new objects.</p>
                    <p className="flowingText">Although it is technically possible, it's not advised to directly add new methods to the system wide prototypes like the Array Object or the Math Object for example. Instead make a new function which opens up a new prototype and make your extensions inside there.</p>
                <h3 className="sectionHeading">Inheritance</h3>
                    <p className="flowingText">Initially, this prototype chain was supposed to be used for creating objects across JavaScript, and the objects would share code all the way down the prototype chain. This idea might have worked a little like this:</p>
                    <pre className="codeBlock">{`
const Mammal = {}
Mammal.fur = true;
Mammal.speak= function() {
    return this.sound + "!!"
}
Mammal.story = function() {
    return this.name + "lived in" + this.home + "happily ever after"
}


const Canine = Object.create(Mammal);
    Canine.sound = "Howl";
    Canine.diet = ["meat"];
    Canine.home = "the arctic";


const Ursine = Object.create(Mammal); 
    Ursine.sound = "Growl";
    Ursine.diet = ["plants", "meat"];
    Ursine.home = "the woods"
    
const GrizzlyBear = Object.create(Ursine);
    GrizzlyBear.name = "Pooh";
 
const Wolf = Object.create(Canine);
    Wolf.name = "Balto";
                `}</pre>
                <p className="flowingText">Although the prototypal method is more "naturally" like JavaScript, because other programming languages use something called "classes" a pseudo class structure quickly gained popularity when it comes to managing inheritance.</p>
                <p className="flowingText">In other programming languages, it is not possible to simply create a new object. This is because in those programming languages, they wanted to make sure that all objects were similar and consistently formed. Because of this objects are described as "instances" of a class.</p>
                <p className="flowingText">What is a class? Well a class is kind of like a mould that would get re-used and would pass down the common features to it's members. Classes can inherit, or extend from other classes. The parent class is called the super-class and the child class is called the sub-class.</p>
                <p className="flowingText">Because JavaScript doesn't natively support classes, but developers still like to use them, we use functions; specifically constructor functions!</p>
                <pre className="codeBlock">{`
function greeter(){
    console.log(\` Hi my name is $\{this.name}\`);
  }
  
  const Alex = {
    name: 'Alex',
    greet: greeter,
  };
  
  const Pat = {
    name: 'Pat',
    greet: greeter,
  };
  
  Alex.greet();
  Pat.greet();
                `}</pre>
            <p className="flowingText">Let's take a look at a more complicated example again:</p>
            <pre className="codeBlock">{`
(function() {

function Mammal(name) { // this is a super class
    let fur = true; // private variable
    this.name = name; // public property 
    this.getSound = function() { // privileged method (goes on each object, can see private vars)
      return this.sound;
    };
  }
  
  Mammal.getRandomLifeSpan = function(age){ // Static method 
    return age * name.length;
  };

  Mammal.prototype.speak = function() { // shared public method (aka 'instance method') - all objects produced have access
    console.log(\`$\{this.name } says $\{this.getSound()}\`);
  };


// SUB-CLASS INHERITANCE
function Canine(name, bites) { // sub class
  Mammal.call(this, name);
  this.bites = bites;
}
Canine.prototype = Object.create(Mammal.prototype);
Canine.prototype.constructor = Canine;

Canine.prototype.bites = function() {
  console.log('The ' + this.name.toLowerCase() + ' bites you to death!');
};


function Ursine(name) { // sub class
  Mammal.call(this, name);
  this.maul
}

Ursine.prototype = Object.create(Mammal.prototype);
Ursine.prototype.constructor = Ursine;

  Ursine.prototype.maul = function() {
    return 'The ' + this.name.toLowerCase() + ' mauls you and you die!';
  };

const Wolf = new Canine('Wolf', 8);
 Wolf.sound = "Howl";
console.log('Wolf', Wolf);
  
const GrizzlyBear = new Ursine('GrizzlyBear', 8);
 GrizzlyBear.sound = "Growl";
console.log('GrizzlyBear', GrizzlyBear);


//From the base class both can 'speak' using a shared method';
  Wolf.speak();
  GrizzlyBear.speak();

//They have access to their sub-class methods:
 GrizzlyBear.maul();
 Wolf.bites();

// but not each others
  try {
    Wolf.maul();
  } catch (e) {
    console.log("a wolf cannot maul", e)
  }

  try {
    GrizzlyBear.bites();
  } catch (err) {
    console.log('A GrizzlyBear cannot bite', err);
  }

}());
                `}</pre>
                <p className="flowingText">There are a few problems with inheritance in JavaScript, however. Unlike other class-based languages, you can only inherit from one class. Additionally, if you do add properties to the super class specifically for one of the sub-classes, then all the sub-classes have access to those properties whether they need them or not.</p>
                <p className="flowingText">To avoid some of these issues it is advisable to use the "factory pattern" which is a way of creating objects without directly using a constructor. Instead you make a function which acts as a generic interface for creating all kinds of objects. This interface is called a factory, and all you have to do is tell the factory what kind of component you want to make.</p>
                <p className="flowingText">You can read more about how to set up factory objects <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript">here</a>.</p>
                <button className="ready" onClick={() => this.props.callback(<Challenge30 callback={this.props.callback}/>)}>Challenge</button>
        
        </div>
    </div>
         );     
    }
}
 
export default Lesson30;