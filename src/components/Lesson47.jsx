import React, { Component } from '../../node_modules/react';
import "../App.css";
import {GoDashboard} from "../../node_modules/react-icons/go";
import graphql from "../images/GraphQL.JPG";
import Challenge47 from './Challenge47';


class Lesson47 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 47: GraphQL</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">What is GraphQL?</h3>
                    <p className="flowingText">GraphQL is an open-source query language developed by Facebook. It provides us with a more efficient way to create, design, and consume APIs.
                    It is intended as a challenger to RESTful development of APIs.</p>
                    <p className="flowingText">Now you're probably wondering what sets GraphQL apart from a normal API structure. Well, for starters there is only a single endpoint to deal with. Furthermore, you can tell it the data that you are looking to fetch, and it will fetch exactly that data.
                    Which is in stark contrast to the over-delivery of extra or irrelevant data customary of RESTful development. 
                    GraphQL is also "strongly-typed" which means that you can validate a query within the GraphQL type system even before it is executed.</p>
                <h3 className="sectionHeading">Writing GraphQL</h3>
                    <p className="flowingText">GraphQL has three main elements: Queries, Mutations and Types.</p>
                    <ul className="bulletedList">
                        <li>Queries: used to look up data, they can be used alongside query variables (more on these later) which can either be named or anonymous.</li>
                        <li>Mutations: are used for changing or manipulating data and are always used with query variables</li>
                        <li>Types: we've already been through the different types of data that can exist, but GraphQL will insist that you include these types everywhere.</li>
                    </ul>
                    <h4>GraphCMS</h4>
                        <p className="flowingText">GraphQL also comes equipped with it's own CMS, or Content Management System.
                        This means that you can send through template data that can then be combined into templates for different platforms, due it's headless nature. It also equips admin users with the ability to manage their content through an admin interface that connects to a GraphQL endpoint so that you can live query your data.</p>
                        <p className="flowingText">If you are an admin, whenever you create a new app, you'll get a new dashboard.
                        Inside of the dashboard you'll see several different settings in the menu where you can access different features. They are as follows:</p>
                        <ul className="bulletedList">
                            <li>Schema - the design/layout for your template. I.e. a blog post or a sales listing etc..</li>
                            <li>Content - the actual content that you've created with your schemas</li>
                            <li>Assets - the images that you've uploaded etc.</li>
                            <li>API Playground - GraphiQL (more on GraphiQL later)</li>
                            <li>Settings - here you will find different options for setting up the CMS</li>
                            <li>Docs - help and documentation for using the CMS</li>
                            <li>Community - there is a chat feature and the people are friendly and helpful</li>    
                        </ul>
                    <h4>GraphiQl Playground</h4>
                        <p className="flowingText">In order to access the playground you'll need to make the endpoint public via the app control panel.
                        Simply head into the Settings menu, click on API access and change the public API permissions. Then you should see the details for your external endpoint.
                        If you navigate to that endpoint, you'll automatically be routed to a GraphiWL playground, but occasionally you'll need to add /graphiql to the end of the path.
                        The GraphiQL interface looks like this:</p>
                        <img alt="graphql interface" className="graphic" src={graphql}/>
                        <p className="flowingText">As you can see there is documentation on the far right, which is automatically updated and generated with the most relevant bits.
                        This is especially useful as it allows you to read the description of each type of data that is required by the server. The data types that you make yourself will be relatively simplistic, however there are some inbuilt types that are a little more complicated.</p>
                        <p className="flowingText">In the middle you'll see the section where you can type Queries. GraphQL uses it's very own language for writing queries. Notably, there are no commas in the language. Queries can either be anonymous or named. Let's look at an example of both.</p>
                        <p className="flowingText">Here you will see an anonymous query:</p>
                        <pre className="codeBlock">{`
{
    todos() {
        id
        name
    }
}
                `}</pre>
                <p className="flowingText">And here is a named query:</p>
                <pre className="codeBlock">{`
	
query Todos() {
    todos(){
        name
        description
    }
}
                `}</pre>
                <p className="flowingText">In these examples name, id and description represent the data you'll get back from the query.  "Todos()" is the name of the query. </p>
                <p className="flowingText">It is also possible to filter and sort, using query variables like this:</p>
                <pre className="codeBlock">{`
	
	
	
query Todos($orderByVar: TodoOrderByInput, $firstVar: Int, $skipVar: Int) {
    todos(orderBy: $orderByVar, first: $firstVar, skip: $skipVar){
        name
        description
    }
}
// you can create the query variables like this:
{
    "where": {
      "id": "ck9abdvmo03e801991yh3tafr"
    },
    "orderByVar": "name_ASC",
    "firstVar": 5,
    "skipVar": 3
  }
                `}</pre>
                <p className="flowingText">Things like where will help you select and nest certain records and criterion if you ever need to. You can use this same structure to carry out create, update, and delete mutations. Query variables are really important because the let you re-use the same code. They are written in JSON format.</p>
        <h4>React and GraphQL</h4>
        <p className="flowingText">If you want to use React and GraphQL together you will want to use a framework. There are a few available, facebook have their own tool called 'relay' but the Apollo client is really nice.
        You will learn all about how these three technologies work together in the Challenge.</p>
           
           
           <button className="ready" onClick={() => this.props.callback(<Challenge47 callback={this.props.callback}/>)}>Challenge</button>

                </div>
            </div>
         );     
    }
}
 
export default Lesson47;