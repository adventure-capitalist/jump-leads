import React, { Component } from 'react';
import "../App.css";
import Challenge12 from "./Challenge12";
import {GoDashboard} from "react-icons/go";

class Lesson12 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 12: CSS Grid</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
            </div>
            <div className="spacer"></div>
            <div className="lessonBody">
                <h3 className="sectionHeading">What is the CSS grid?</h3>
                <p className="flowingText">The CSS grid layout system is the latest in a series of CSS layouts, but unlike the other layout systems you will need to plan ahead with regard to how your wider web design is going to fit into the grid as a whole, as opposed to coding each element with stand alone proportions.</p>
                <p className="flowingText">
                    with other systems like flexbox, although the elements were either the flex-container (or parent element) or flex-items (child elements), it wasn't as strictly planned in terms of the space, arrangement, and dimensions. For the CSS grid, you layout a grid and then you can place items into it in an order independant fashion.
                </p>
                    <p className="flowingText">If you have ever done any sort of quilting, cross-stitch, knitting, or anything similar, you will be familiar with the idea of using a grid to plan a design.</p>
                    <p className="flowingText">Much like with quilting, you must first decide which sort of grid you want, how many columns, how many rows, is there space between the squares, are all the squares the same size? Or are some of them big and some of them little?</p>
                    <p  className="flowingText">Although not all the rows and columns or elements have to be uniform in size, the grid lines or seams that determine where the borders of these columns and rows still hypothetically exists even if some elements overlap these lines or take up two rows etc.</p>
                <h3 className="sectionHeading">What do I need to use CSS grid?</h3>
                    <p className="flowingText">You must be the kind of person who is able to look at the bigger picture, and who enjoys planning ahead to a reasonable degree.</p>
                    <p className="flowingText">Additionally, you will need to understand a few semantic elements that will help you to find your way. We will cover the different elements that you need to know now.</p>
                    <ul className="bulletedList">
                        <li> grid-line: a "seam" or line on the grid separating either columns or rows. They can be indexed forwards starting with 1 and they can also be indexed backwards starting with -1.</li>
                        <li> track: refers to the gap between two adjacent gridlines (most people call these columns or rows).</li>
                        <li> cell: this is the area where two tracks cross (most people think of this as an individual square) you can position stuff in here.</li>
                        <li> grid-area: this is where you combine multiple cells and treat them as one container for positioning your content.</li>
                    </ul> 
                <h3 className="sectionHeading">How can I plan out my first grid?</h3>
                    <p className="flowingText">It is more logical than you would think. All that you need to do is define how many columns and rows you want and how big each of them should be.</p>
                    <p className="flowingText">There are a few methods that you can use to do this:</p>
                    <pre className="codeBlock">{`
.myClass {
    grid-template-columns: 100px 100px 100px; // results in three columns of each 100px wide
    grid-template-columns: repeat(3, 100px); // also results in three columns each 100px wide
    grid-template-columns: 50px repeat(3, 100px); // results in one 50px wide column and three 100px wide columns

}
                `}</pre>
                    <p className="flowingText"></p>
                   
                    <p className="flowingText">The examples above only determine how the columns will be laid out, but the rows work exactly the same.</p>
                    <pre className="codeBlock">{`
.myClass {
    grid-template-rows: 100px 100px 100px; // results in three rows each 100px tall
    grid-template-rows: repeat(3, 100px); // also results in three rows each 100px tall
    grid-template-rows: 50px repeat(3, 100px); // results in one 50px tall row and three 100px tall rows

}
                `}</pre>
                 <h3 className="sectionHeading">There are special CSS Grid units</h3>
                    <p className="flowingText">Obviously you can determine the width of columns and rows using pixels, or other CSS measurement units, but there are a few unique things about how size works in the grid.</p>
                    <ol className="bulletedList">
                        <li> If you as the developer do not specify a size, the width or height of the cells will be determined by the size of their content.</li>
                        <li> You can use "auto" much like you might normally do with margin to allow columns to take up more space than their content would dictate if there is extra space available.</li>
                        <li> If you want to split an area evenly, you can use a grid specific unit: <strong>fr</strong> (divides the remaining area into fractions)</li>
                        <li> In the name of responsiveness, grid supports a sliding measurement called minmax()</li>
                        <li> There is "fit-content()" which takes a maximum value as a parameter</li>
                        <li> On the one hand there is "min-content" which takes the smallest possible width, based on the longest word or element</li>
                        <li> On the other hand there is "max-content" which takes the widest possible width of a sentence or element</li>
                    </ol>
                <p className="flowingText">Interestingly, auto and fr act similarly if they are used in isolation, but if you start mixing and matching fr is more dominant and auto will lose its width.</p>
                <p className="flowingText">Here are some more examples using these neat measurements:</p>
                <pre className="codeBlock">{`
.myClass {
    grid-template-columns: 200px  minmax(100px, 1fr); // results in one column that is 200px wide and a column that is at least 100px but at most the remaining area split into one fraction
    grid-template-columns: fit-content(300px) fit-content(400px) 1fr; // results in a column that is maximum 300 pixels wide, a column that is maximum 400 pixels wide and a column that is the remaining area split into one fraction
}
                `}</pre>
                <p className="flowingText">NOTE: You cannot use 1fr as a minimum value for the time being. This is sadly not yet supported.</p>
                <h3 className="sectionHeading">What if we want to add some space between the rows around the seams?</h3>
                    <p className="flowingText">No problem you can use any of these:</p>
                    <ul className="bulletedList">
                        <li>grid-row-gap - sets a gap between the rows</li>
                        <li>grid-column-gap - sets a gap between the columns</li>
                        <li>grid-gap - sets the same value as a gap between both columns and rows</li>
                    </ul>
                <h3 className="sectionHeading">Can I give things names?</h3>
                    <p className="flowingText">Apart from having both a positive and negative index you can also name grid-lines using square brackets like this:</p>
                    <pre className="codeBlock">{`
.myClass {
    grid-template-columns: [page-left] auto [content-left] 1fr [content-right] auto [page-right]
};
                `}</pre>
                    <p className="flowingText">You can also name areas. Which is a bit more conceptual but very useful:</p>
                    <pre className="codeBlock">{`
.myClass {
    grid-template-areas: “header header” “sidebar content” “footer footer”;
};
                `}</pre>
                    <p className="flowingText">When you're naming areas, you can use a "." to leave an area blank. It is also worth noting that some of the gridlines in areas will automatically respond to names like "header start" or "header end" </p>
                <h3 className="sectionHeading">Ok great how do I put stuff in these areas?</h3>
                <p className="flowingText">Well there are a few options, one option is to use the grid lines to give starting and stopping points for the element: </p>
                    <pre className="codeBlock">{`
.myClass {
    grid-row: 2 / 4; // This element will start on the 2nd horizontal grid line and end on the 4th horizonta grid-line
    grid-column: 3 / -1; // This element will start on the 3rd vertical end line and end on the last vertical grid-line
 };
                `}</pre>

    <p className="flowingText">Another option is to use the named grid areas to specify where things should go</p>
<pre className="codeBlock">{`
.myClass {
    grid-area: sidebar; // this element will stretch to fill the sidebar area.
 };
                `}</pre>
    <p className="flowingText">It is worth noting that if you have overlapping elements you can use their z-index to control which one is "pushed to front"</p>
    <h3 className="sectionHeading"> Can I control which part of the cells elements appear in?</h3>
    <p className="flowingText">Yes of course! This part of CSS grid is basically ripped off from Flexbox. It functions nearly identically. Here are the operators you should know:</p>
    <ul className="bulletedList">
        <li>justify-self: start | end | center | stretch; // aligns the content horizontally within the cell</li>
        <li>align-self: start | end | center | stretch; // aligns the content vertically within the cell</li>
        <li>justify-content: start | end | center | stretch; // aligns contents horizontally within its borders</li>
        <li>align-content: start | end | center | stretch; // aligns contents vertically within its borders</li>
        <li>justify-items: start | end | center | stretch; // aligns all items horizontally within the grid</li>
        <li>align-items: start | end | center | stretch; // aligns all items vertically within the grid</li>
    </ul>       

<button className="ready" onClick={() => this.props.callback(<Challenge12 callback={this.props.callback}/>)}>Challenge</button>
            </div>

            </div>
         );
    }
}
 
export default Lesson12;