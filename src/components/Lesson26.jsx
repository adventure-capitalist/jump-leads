import React, { Component } from 'react';
import "../App.css";
import Challenge26 from "./Challenge26";
import {GoDashboard} from "react-icons/go";

class Lesson26 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 26: Regular Expressions</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What are Regular Expressions? </h3>
                    <p className="flowingText">Regular Expressions, sometimes referred to by their nickname: "RegEx" can seem a little cryptic when you first start looking at them. </p>
                    <p className="flowingText">Although the syntax is a bit cumbersome at best, they are extremely efficient when it comes to hunting down strings that match a particular pattern. For example you can use regex to locate all postcodes and delete them from your data.</p>
                    <p className="flowingText">They are very useful for quickly finding and replacing strings that follow patterns like: telephone numbers, emails, phone numbers, ISBN Numbers and many many more.</p>
                <p className="flowingText">If you can get past the intimidating exterior, and get to know regular expressions, you can learn to love them and their extreme regularity. Unlike JavaScript, which can be a quirky fever-dream like adventure in the world of exceptions and irregularities, regular expressions would never do that to you. There is a complex method behind the madness with regex.</p>
                <h3 className="sectionHeading">Meta Characters</h3>
                    <p className="flowingText">It is totally possible to use regex directly to find all strings containing the word: "bird". This is called a direct lookup. On it's own, it isn't very impressive, but what if you could look up all sentences that contained bird that were exactly 25 characters long and also contained a number of some description. This is where regex starts to get really interesting!</p>
                    <p className="flowingText">More complex regular expressions are made up of a combination of things called meta characters. You could say they are the building blocks of regular expressions. The characters themselves have lost their literal meaning, but they are now interpreted to mean something entirely different in the world of regex. In other words if you search for "." you might be surprised to hear that you won't return all the fullstops. Here is a key of some of the meta characters to get you started:</p>
                    <ul className="bulletedList">
                        <li>. - represents a wildcard, and will match any character except a line break. </li>
                        <li>[] - denotes a character class. Any characters contained between the square brackets will be matched.</li>
                        <li>[^] - Negated character class. Matches any character that is not contained between the square brackets.</li>
                        <li>* - Allows you to indicate that the previous character can be repeated 0 or more times.</li>
                        <li>+ - Similar to the * meta character in that it allows you indicate that the previous character can be repeated 1 or more times.</li>
                        <li>? - Allows you to search saying that the previous character might only be included sometimes.</li>
                        <li>{"{n,m}"} - Allows you to indicate that the previous character can be repeated between n and m times.</li>
                        <li>(xyz) - represents a character group. This one would match the characters xyz in that exact order. </li>
                        <li>| - This is called an Alternation. It allows you to give an alternative for a character i.e. the character could be: T | t </li>
                        <li>^ - Matches the beginning of an input.</li>
                        <li>$ - Matches the end of an input.</li>
                    </ul>
                <p className="flowingText">Now, to be perfectly honest most people who use regex will use it referencing a list or a cheat sheet containing a list of these meta characters and their descriptions. There are also plenty of ready made regex validations on the internet ready for you to check. Simply search "regex for phone numbers" or "regex for email address validation" and you can save yourself some time by simply testing and tweaking existing strings of regex instead of starting from scratch.</p>
                
                <h3>Shorthand Character Sets</h3>
                    <ul className="bulletedList">
                        <li>\w - Matches all alphanumeric characters. Is equivalent to: [a-zA-Z0-9_]</li>
                        <li>\W - Matches non-alphanumeric characters. Is equivalent to: [^\w]</li>
                        <li>\d - Matches any digit. Is equivalent to: [0-9]</li>
                        <li>\D - Matches any non-digit. Is equivalent to: [^0-9]</li>
                        <li>\s - Matches a whitespace character. Is equivalent to: [\t\n\f\r\p{"{Z}"}]</li>
                        <li>\S - Matches any non-whitespace character. Is equivalent to: [^\s]</li>
                    </ul>
                <h3>What Else can Regex Do?</h3>
                 <h4>Look Arounds</h4>
                 <p className="flowingText">There are two kinds of look arounds; look behinds and look aheads. Much like the name suggests you can use these to search for bits of strings who have very specific neighbors. Let's take a look at positive look aheads first:</p>
                 <p className="flowingText">A positive look ahead is written using a question mark and an equals sign like this: ?= . What ever you type after the equals sign will be a neighbor that the original string is required to have. So, for example if you were looking for the string "Tel" followed up immediately after by a sequence of numbers, then you could use a positive lookahead to achieve this.</p>
                 <p className="flowingText">There are also negative look aheads which will return any string that does not live next to that neighbor. So if you are looking for all empty telephone numbers you could search for the string "Tel" without any numbers after it by typing a question mark and then an exclamation mark instead of an equals sign. So like this: ?! . Anything you type after the equals sign will be a neighbor that will disqualify the string from being returned. </p>
                 <p className="flowingText">Now on to the previously mentioned look behinds, which go backwards in the string and look at the previous words in the string. So instead of checking if the neighboring string comes right after the string in question, it will check if it comes right before in the sentence. Once again you can use the question mark but this time you use a less than symbol and an equals sign to carry out this kind of look around. Or like this: ?&lt;= . Whatever you write after the equals sign will be expected to come before the string you are searching for.</p>
                 <p className="flowingText">Just like with look aheads, there is also a negative look behind which will return all the instances of phrase you are looking for which are not precluded by the neighbor in question. You can write these like this: ?&lt;! . Once again anything written after the exclamation mark will act as a disqualifying neighbor for a potential matching phrase.</p>
                <h4>Flags</h4>
                <p className="flowingText">Flags are sometimes called modifiers because they modify the output of an expression. These can be used in combination with each other in any order or even on their own. They are as follows:</p>
                <ul className="bulletedList">
                    <li>i - case insensitive: ignores uppercase and lowercase and treats the uppercase and lowercase versions of letters as equal.</li>
                    <li>g - global search: returns all the matches at once instead of stopping after one, there is an interesting problem with the global tag as documented <a href="https://stackoverflow.com/questions/1520800/why-does-a-regexp-with-global-flag-give-wrong-results">here</a></li>
                    <li>m - multi-line: modifies both $ and ^ so that they work on a per line basis.</li>
                </ul>
                <h4>Escaping characters</h4>
                    <p className="flowingText">What if you actually want to search a text for some of the characters that are being used as meta characters? Great question! All you have to do is escape them, you can do this by adding back slashes in front of the characters in question. So if you genuinely are looking for sequences that contain a fullstop you can use \. to help you find them. </p>
                    <p className="flowingText">Speaking of slashes, it is worth noting that forward slashes are traditionally used to enclose the expression. They are used similarly to how parenthesis are usually used in language. They don't have any particular meaning they just indicate the start and end of the expression. The flags, however, are appended to the expression after the closing slash.</p>
                    
                <h3>Regular Expressions and JavaScript</h3>
                <p className="flowingText">Since you are all JavaScript developers, you're probably wondering how you can use this in JavaScript. Well the good news is that there is a RegExp() object [take a moment to notice the P in RegExp] that you can use to help you. The bad news is that it can be a bit clunky. Let's look at an example anyways:</p> 
                <pre className="codeBlock">{`
let myRegex = new RegExp('abc', i); // constructs a new regular expression equal to /ab+c/i;
                `}</pre>
                <p className="flowingText">Now, once you have declared a regular expression in JavaScript, you can use all the regular string methods on it that we learned when we covered data types. But crucially you will use .test(), let's look at an example.</p>
                <pre className="codeBlock">{`
myRegex.test("abCdEfGhiJklmnopqRsTuvWXyz"); // runs the regex declared in the myRegex variable against the string passed as an argument.
                `}</pre>
                    <p className="flowingText">Now, the best way to learn more about exactly how regex works is to get started writing some of your own. Please head to the challenge to start writing your very own regular expressions.</p>
                <button className="ready" onClick={() => this.props.callback(<Challenge26 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );     
    }
}
 
export default Lesson26;