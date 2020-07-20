import React, { Component } from 'react';
import {GoDashboard, GoBook} from "react-icons/go";
import Lesson16 from './Lesson16';

class Challenge16 extends Component {

    state = {  }

    render() { 
        return ( 
        <div className="mainHolder">
            <div className="lessonHeader">
                <h2 className="lessonTitle">Lesson 16:  Introduction to Programming</h2>
                <div class="icons">
                <GoBook onClick={() => this.props.callback(<Lesson16 callback={this.props.callback}/>)} className="dashIcon"/>
                <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                <div className="lessonBody">
                        <p>Welcome to Installfest!</p>
                        <p>Now, depending on whether you are running Mac or Windows or even Linux, the stuff you need to install will be slightly different but it will result in the same outcome. So don't feel like you are missing out!</p>
                        <p>First all of you will need Visual Studio code. This is a code editor there are many, but VS Code is one of the most widely used. This is like Microsoft Word except for code. You can download it <a href="https://code.visualstudio.com/download">here</a>.</p>
                        <p>If and ONLY if you are running Mac. Please download homebrew, which will basically download some developer stuff that isn't on your computer terminal by default. Once again, Mac people (and some Linux people double check with the instructor if you are running Linux) download this here:<a href="https://brew.sh/"> here.</a> Sorry windows people, you can't sit with us.</p>
                        <p>Now the gang is back together again, Mac and Windows people unite and please install Node.js <a href="https://nodejs.org/en/download/">here</a> node will allow you to install other packages in the terminal later on in the course.</p>
                    </div>
                </div>
            </div>
        
        </div> 
        );
    }
}
 
export default Challenge16;