import React, { Component } from '../../node_modules/react';
import "../App.css";
import Challenge36 from "./Challenge36";
import {GoDashboard} from "../../node_modules/react-icons/go";



class Lesson36 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 36: The Command Line Interface</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">What is the command line?</h3>
                    <p className="flowingText">In this lesson we will be covering how to use that little black window that hackers use. It might look a bit scary and matrix-y at first, but it's really just a little window waiting for your commands. This window, which is usually called the command line or command-line interface, is a text-based application for viewing, handling, and manipulating files on your computer. It's much like Windows Explorer or Finder on the Mac, but without the user friendly graphical interface. Other names for the command line include: cmd, CLI, prompt, console or terminal.</p>
                    <p className="flowingText">You can use the command line to run programs that don't have a user-interface yet. You can also use it to directly interface with your operating system in a way that you can't otherwise. The command line allows you to develop quickly, efficiently, and it opens up a whole new world of development for you.</p>
                <h4>Opening the command line</h4> 
                    <p className="flowingText">Because the command line is closely related to the operating system there are a lot of differences based on which system you are using. So for the rest of this lesson please pay attention to the instructions for the kind of system that you have (i.e. Mac or Windows). That being said, depending on which operating system you are running, you will open the command line slightly differently.</p>
                    <p className="flowingText">On Mac:</p>
                    <ol className="bulletedList">
                        <li>cmd + space - opens spotlight (you can also click on the magnifying glass on the taskbar near the clock)</li>
                        <li>Start typing "terminal" it will show up for you, no downloads needed.</li>
                        <li>Press enter/return to launch the program</li>
                    </ol>
                    <p className="flowingText">On Windows:</p>
                    <ol className="bulletedList">
                        <li>Click the Windows button, or press the Windows key on the keyboard.</li>
                        <li>Start typing "command prompt" it will show up for you as you are typing</li>
                        <li>Press enter/return or click on the program to launch it.</li>
                    </ol>
                    <p className="flowingText">Windows note: the built in command line is not as good in windows as it is on Mac, it is probably worth downloading an alternative like git bash, consoleZ, Cmder or Cygwin. If you do download an alternative you can use the Mac commands.</p>
                <h4>Shells</h4>
                    <p className="flowingText">As a bit of infrastructure knowledge, the command line acts as an input/output interface for something called a "shell". A shell runs a process and has access to your computers resources. It automatically has access to the information stored in environment variables. </p>
                    <p className="flowingText">Shells have predefined commands that they accept and because of this, technically these commands constitute a programming language.</p>
                    <p className="flowingText">There are different flavors of shells, BASH, ZSH, powershell etc.</p>
                    <p className="flowingText">It is possible to write entire programs inside the shell, however it's quite ugly due to it's lack of user interface.</p>
                    <p className="flowingText">These shells are usually used for automating things, and although you can learn to do quite advanced things in the terminal, realistically you will not need to use the more advanced features often.</p>
                <h4>Using the command line</h4>
                    <p className="flowingText">Once you have the command line open, you will see that there is a file path potentially just before the dollar sign. Or you might see a "~" or something like "~Documents" which is an abbreviated file path.</p>
                    <p className="flowingText">The command line is a pointer, and it will point to these file paths and consider them to be its Present Working Directory (PWD).</p>
                    <p className="flowingText">Anytime you run commands using the command line, that command will be run in the Present Working Directory you are currently pointing at.</p>
                    <p className="flowingText">However, if you run a global command the command will run globally (as the name suggests) and the PWD doesn't matter. An example of a global command would be brew install or you can use the global flag. More on flags later.</p>
                <h4>Syntax</h4>
                    <p className="flowingText">Depending on the program you are running the syntax will vary, however the basic structure of a command will be as follows:</p>
                    <pre className="codeBlock">
        {`
<set any variables> <program/command> <parameters/operations> -<flag>[<flag value] --word-flag <wordflag value>
`}
</pre>
                    <p className="flowingText">Now, this is all kind of confusing without an example to look at so let's take a peak at something more concrete:</p>
<pre className="codeBlock">
        {`
git commit -m "my new header"
`}
</pre>
                    <p className="flowingText">The above example is for committing staged changes to git. Don't worry too much about what that exactly means, let's just dissect the command to study its parts.</p>
                    <p className="flowingText">Here, "git" is the program that we are using, "commit" is the operation that we are doing, "-m" is the message flag and that flag has the value "my new header".</p>
                    <p className="flowingText">Some commands are a lot simpler, however. Go ahead and type: whoami into your command line.</p>
                    <p className="flowingText">Your computer should respond with your user name. There were no flags or anything in this command, and that's alright. It might take you a bit until you have memorized all of the commands that you regularly use, however, if you don't remember so long as you know what it is you are trying to do you can often google the correct command for your needs.</p>
                <h4>Moving your pointer</h4>
                    <p className="flowingText">This is another one of those things that depends on your operating system so please pay attention to which instructions apply to your set up.</p>
                    <p className="flowingText">On Windows, you can type: cd/ which will take you to the root of your drive. I.e. C://.</p>
                    <p className="flowingText">You can also type cd.. to go up a level in the file structure, or cd../.. to move up two levels. Much like with importing scripts, . will mean here in this folder and .. will mean up one level in the next folder. You can also switch between drives on your windows machine just by typing in the drive letter followed by a colon. Like this C:</p>
                    <p className="flowingText">On Mac you can use cd~ at any time to move you into your user's folder. You can type cd/ to take you to the root of your drive. </p>
                    <p className="flowingText">cd .. will move you back one level and cd ../.. will move you up two.</p>
                    <p className="flowingText">In both systems you can use cd to get anywhere, but on windows if you include the file path you can go there directly. On Mac, you can type in the open . command and it will open your finder. </p>
                <h4>Listing contents of files</h4>
                    <p className="flowingText">Again this depends on what OS you are running.</p>
                    <p className="flowingText">On Windows you can type dir to see the contents of your PWD. If that list is too long and cumbersome, feel free to abbreviate using: dir /b which stands for brief list and returns the names of the files around you. You can also use dir /a to show you the name of all the files in your PWD including the hidden files. </p>
                    <p className="flowingText">On Mac you can use the command ls to see the contents of your PWD. If you want to see the hidden files you can run ls -a. If you need even more details about privileges and file ownership etc. you can type ls -lah which stands for "list long".</p>
                <h4>Creating things</h4>
                    <p className="flowingText">It is possible to create new files and folders. To create a new folder you can use the command: mkdir foldernamehere </p>
                    <p className="flowingText">To create a new document you should use the touch keyword like this: touch filename.html</p>
                    <p className="flowingText">You can list several names after both of these commands to create multiple folders and files at once.</p>
                <h4>Reading files</h4>
                    <p className="flowingText">There are a few commands that you can can run to take a look at files.</p>
                    <ul className="bulletedList">
                        <li>code . - opens the file in VS code</li>
                        <li>cat filename.html - (cat = concatenate) will give you a quick preview of the contents of one or more files</li>
                        <li>tail filename.html - shows you the end of a document</li>
                        <li>head filename.html - shows you the start of a document</li>
                        <li>less filename.html - shows the file in screen-sized chunks</li>
                        <li>vim filename.html - shows the vim editor (cheatsheet available <a href="https://external-preview.redd.it/iigrixvxp5aYN9ox7Gr1dfI_rhLRotWlLsCafjJqjEQ.png?auto=webp&s=1594ddc17408cb9186a73c2a6d1a1bf1e00769dd">here</a>)</li>
                    </ul>
                <h4>Copying/Moving files/folders</h4>
                    <p className="flowingText">Once again depending on your OS there are different commands.</p>
                    <p className="flowingText">If you are on Windows and you want to copy use: COPY old/file/path/here new/file/path/here</p>
                    <p className="flowingText">If you want to move stuff, more like "cut and paste" functionality, use: MOVE old/file/path/here new/file/path/here instead</p>
                    <p className="flowingText">You can also rename using: REN ./oldfilename.html ./newfilename.html</p>
                    <p className="flowingText">If you are on Mac, and you want to copy stuff use: cp old/file/path new/file/path</p>
                    <p className="flowingText">And if you want to move things more like "cut and paste" functionality use: mv old/file/path new/file/path</p>
                    <p className="flowingText">With mac the mv command also allows you to rename files you can use it like this: mv/old/file/path file/path/with/new/unique/name</p>
                <h4>Deleting files/folders</h4>
                    <p className="flowingText">If you are on Mac and you want to remove a file use: rm filename.html</p>
                    <p className="flowingText">And if you want to remove a whole folder use: rm -rf foldernamehere</p>
                    <p className="flowingText">If you are on Windows and you want to remove a file use: del filename.html</p>
                    <p className="flowingText">And if you want to remove a whole folder use: rd /s foldernamehere</p>
                    <p className="flowingText">You can check if it's gone by using your list functionality, but be warned once it's gone it's gone. There is no undo in the command line.</p>
                <h4>Tips</h4>
                    <p className="flowingText">If you are unsure which commands are there to use and you need a little help on Windows type HELP, it's worth noting that the command line will quite often tell you the next command that needs to be typed so if something looks angry, check to see if there is a suggested next step </p>
                    <p className="flowingText">If you are unsure which commands are there to use and you need a little help on Mac OS type: nameofprogramhere --help, it's worth noting that the command line will quite often tell you the next command that needs to be typed so if something looks angry, check to see if there is a suggested next step </p>
                    <p className="flowingText">You can zip the contents of a directory using zip -r nameofzippedfile.zip .</p>
                    <p className="flowingText">And you can also unzip using unzip -a nameofzippedfile.zip</p>
                    <p className="flowingText">There are also tar archives which are similar to zipped folders but do not do any compression. They have the file extension .tar and can be made like this: tar -czf nameoftardrive.tar.gz . </p>
                    <p className="flowingText">And to unzip a tar file it is: gunzip -c nameoftarzip.tar.gz</p>
                    <p className="flowingText">When you are typing commands a log is kept in the terminal if you type: history you will be able to see the commands.</p>
                    <p className="flowingText">If you get a permissions error when you are typing something try using: sudo in the front of the command. You shouldn't need sudo all the time if you find you need it for everything read <a href="https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally">this article</a>.</p>
                    <p className="flowingText">Using the chown command can change who owns a file.</p>
                    <p className="flowingText">There are also other read/write/execute permissions saved under chmod. Read <a href="https://www.howtoforge.com/tutorial/linux-chmod-command/">this guide </a> if you need to know how to update these permissions for a given user.</p>
                    
                
                
                
                <button className="ready" onClick={() => this.props.callback(<Challenge36 callback={this.props.callback}/>)}>Challenge</button>
        
                </div>
            </div>
         );     
    }
}
 
export default Lesson36;