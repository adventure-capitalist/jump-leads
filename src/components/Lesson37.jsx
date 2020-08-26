import React, { Component } from '../../node_modules/react';
import "../App.css";
import Challenge37 from "./Challenge37";
import {GoDashboard} from "../../node_modules/react-icons/go";
import Essays from "../images/Essays.jpg";
import git from "../images/git.png";
import rebase from "../images/rebase.png";
import Challenge37 from './Challenge37';



class Lesson37 extends Component {


    render() { 
        return ( 
            <div className="mainHolder">
                <div className="lessonHeader">
                    <h2 className="lessonTitle">Lesson 37: Git &amp; Github</h2>
                    <GoDashboard onClick={() => this.props.callback(null)} className="dashIcon"/>
                </div>
                
            <div className="spacer"></div>
                <div className="lessonBody">
                <h3 className="sectionHeading">What is Git?</h3>
                    <p className="flowingText">Git is a version control system that helps developers collaborate and create "recovery points" to go back to should something go wrong in development.
                    Git runs primarily in the command line, but if you get stuck and something is going really really wrong there are a few overrides and work-arounds that can help get you unstuck.
                    However, git has really excellent error handling, so the first thing you should do if something is starting to go wrong is read the error message carefully. 
                    Nine times out of ten the git error message will contain the next commands that you need to type in order to get "unstuck". </p>
                    <p className="flowingText">If you have ever used Microsoft Word's track changes feature, or compare versions feature then you have already worked with the concept of version control.
                    However, if you have also ever saved different versions of an essay or dissertation something like this: </p>
                        <img className="graphic" src={Essays}/>
                    <p className="flowingText">then you have also used the principles of version control, albeit a somewhat rudimentary rendition.</p>
                    <p className="flowingText">Git works by allowing you to create different versions or "branches" of your software and have different people working on different features.
                    It is possible to work on the new version and then combine it with the main "production" version once it is ready to go live. This process helps you to save some of the things you are working on as you work on them and then once they are perfect you can push them live.
                    For a static website that you are working on all by yourself this concept might seem a little abstract, however, imagine you have an entire team making something like Microsoft Word.</p>
                    <p className="flowingText">Maybe you want one team working on the formatting options, and another working on the layout options maybe there is another guy working on different file type compatibility. So that you corrupt Microsoft word for every single user while you add lines of code, you can work on these features in different branches.
                    These branches look a little like this:</p>
                        <img className="graphic" src={git}/>
                    <p className="flowingText">In this image, the branches look a little like an underground map, however, what's important to see is that the grey line, is the branch that is live. And all the other branches are being pushed into it. Maybe the red line is Rory's branch for responsive design, and Rory decides half way through that they need to restructure the front end onto css grid.
                    So they open a new branch (the yellow branch), change the software to css grid and merge everything back into their red branch then they then continue with their responsiveness work, by adding a few media queries etc. and then once their work is ready and approved they merge that into the main grey branch and launches it to customers.</p>
                    <p className="flowingText">All of the circles, along the branch are "commits" a point at which the developer saved a chunk of their work. If something goes wrong it will be possible to go back to one of the commits where things were less wrong.</p>
                <h3 className="sectionHeading">Getting Started with Git</h3>
                    <p className="flowingText">Git can be a little intense at first because it works primarily in the command line. But once you have the hang of it, the popular git flows will become second nature to you.</p>
                    <p className="flowingText">If you are starting a project from scratch, you will simply create a new folder to store your code navigate into that folder using the command line navigation tools then type: git init</p>
                    <p className="flowingText">Git init stands for git initialize. Typing this will create a hidden .git folder and a .gitignore file in your directory.</p>
                    <p className="flowingText">If you are borrowing code from an existing repository instead you will need the URL for that repository wherever it is stored (github, gitlab, bitbucket) and you'll need to run this command in the folder where you keep all your coding folders: git clone https://github.com/reallycoolusername/reallycoolrepoThatIWantToSteal MyBrandNewFolderName</p>
                    <p className="flowingText">If this is your first ever time using git, you will run into some authentication issues. Github/BitBucket/GitLab all want to be sure you aren't a nasty hacker so they will ask you to generate a secure shell key and upload it to the website. <a href="https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh">Here</a> is a guide for how to do this on GitHub.</p>
                    <p className="flowingText">If you are being asked for your credentials all the time, you can add your email address to the git user, and get git to cache your password for you. <a href="https://docs.github.com/en/github/using-git/caching-your-github-credentials-in-git">Here</a> is a guide for how to do this, but fun fact: if you upload the SSH key properly, it shouldn't ask you for your credentials every time.</p>
                    <p className="flowingText">If under for any reason you want to stop using git version control, you just have to delete that hidden .git folder. But what if you don't want to version track the boring stuff.
                    Conveniently, git allows you to create a file named .gitignore and inside this file you can put the names of any files or folders that you want to exclude from version control.</p>
                    <p className="flowingText">Examples for what you might want your git ignore to include:</p>
                    <ul className="bulletedList">
                        <li>node_modules - a directory which contains dependencies/libraries that you are using. Very large, will slow everything down.</li>
                        <li>.DS_Store - a file that the Mac OS makes automatically but that isn't totally necessary</li>
                        <li>*.log - using the * wildcard will allow you to ignore all .log files</li>
                        <li>.env - environment files that usually contain lots of passwords and things you want to keep secret and definitely not on GitHub.</li>
                        <li>dist - a folder that contains the built product might also sometimes be called build</li>
                    </ul>
                    <p className="flowingText"><a href="https://gist.github.com/markbrouch/1026ed545d306febcea4">Here</a> is a complete example of what a .gitignore file might look like for a front-end project, and <a href="https://github.com/github/gitignore/blob/master/Node.gitignore">here</a> is an example of a completed git ignore file for a backend node project, feel free to steal liberally.</p>
                    <p className="flowingText">By default, git will not track sub-folders that are completely empty. In order to track it, all you have to do is add a file to it. Traditionally, that file is named .gitkeep but any file will trigger the tracking.</p>
                    <p className="flowingText">It is unlikely, but if you are storing copies of video files in your project instead of embedding links or if you have some other massive file, you will want to think about excluding it or hosting it elsewhere. This is because everytime you make a new version and commit another copy of your project to git, you are duplicating that file and if you duplicate a massive file a bunch of times you can really take up a lot of space quick!</p>
                 <h3 className="sectionHeading">Your First Commit</h3>
                    <p className="flowingText">You are coding along in your project and let's say that you finish the about page and you want to commit it. There are three steps that you need to do to make a commit.</p>
                    <ul className="bulletedList">
                        <li>git add * - if you have made any new files or made changes to existing files it grabs them and groups them together as "new stuff".</li>
                        <li>git commit -m "my really cool commit message about completing the about page" - locks in the changes on your local machine and commits this version to memory.</li>
                        <li>git push - sends this version over the internet to the remote repository on the github website.</li>
                    </ul>
                    <p className="flowingText">If you struggle to remember the order, just know that they go in alphabetical order. (add, commit, push) </p>
                    <h4>How do I know if it is working?</h4>
                        <p className="flowingText">If you want to check that all your changes are being added after you run git add, you can run: git status</p>
                        <p className="flowingText">If your changes are being added, then you will see the names of all the files that you have changed lit up in green in the terminal. If you're not seeing green stuff read the error messages carefully and double check that you are in the right folder. It's also possible that you haven't made any changes to save.</p>
                        <p className="flowingText">If you want to see a list of all the latest commits with their respective messages, you can use: git log</p>
                        <p className="flowingText">If your colleague writes really descriptive git commit messages like "did stuff" and you need to understand what exactly changed between two versions, you can use git diff with either a commit reference number (SHA) or a file path to compare two versions of your code.</p>
                    <h4>What if I don't want to add everything</h4>
                        <p className="flowingText">Typing "git add *"  or "git add ." or "git add -A" will add all files that have changed. You can also add files individually using: git add index.html</p>
                        <p className="flowingText">If you run git status and realise there is way too much being added and you want to "un-add" you can run: git reset HEAD * to reset everything OR run: git reset HEAD mysecretfile.txt if you only want to reset certain files.</p>
                    <h4>Commit messages</h4>
                        <p className="flowingText">If you forget to include a git message, git will open vim in the terminal and force you to write out a commit message. you can exit vim by typing :wq or ctrl + C</p>
                        <p className="flowingText">If you need to update a commit message you can use: git commit --amend -m "My totally way improved commit message here"</p>
                        <p className="flowingText">You should try to write really descriptive and meaningful commit messages. It is bad practice to just write "wrote some code" as a commit message. Especially if you are working in a team environment. One day you will have to roll back a product to a previous commit, and it is a lot easier to tell when you started working on the feature that broke everything if you mention what you were working on in the comment instead of having to resort to comparing the versions using git diff</p>
                        <p className="flowingText">Alongside your commit message, every commit will also be assigned a random identifier called a SHA (secure hash algorithm) this can be used as a name/pointer if you need to go back to a certain version.</p>
                    <h4>Git tags</h4>
                        <p className="flowingText">It is also possible to leave a "bookmark" in your code versions by creating a git tag. 
                        These are often used as milestones to mark the official versions or releases of software. They are really handy and can be checked out, using git checkout just like with branches and commit SHA hashes.
                        To create a new tag simply write: git tag -a IDubTheeVersion1.0 -m "Really great descriptive message for this version"</p>
                        <p className="flowingText">If you want to see a list of your tags, you can type: git tag , and a list should appear in the terminal.</p>
                        <p className="flowingText">Generally, you should not go around deleting important tags but it is possible to overwrite them by creating a new one in the same spot.</p>
                
                <h3 className="sectionHeading">Undoing and Troubleshooting</h3>
                        <p className="flowingText">Speaking of one day having to rollback your changes, how on Earth would you achieve this?
                        Well, there are two scenarios, the first scenario is that you have saved everything and committed locally but you haven't pushed it up to the remote repo on Github.com
                        The second scenario is where you have pushed everything up to the remote repo and you now have regrets. Let's look at the first scenario first.</p>
                        <p className="flowingText">Okay, so you've just committed something but maybe you're on the wrong branch by accident or something else is amiss. To undo a commit you can type: git reset HEAD~1 , to rollback a commit.
                        Technically this alone will not completely remove the commit, git reset has different levels of strength depending on what you want to do. The --soft option will just rollback the commit and your changes will still be added and ready to re-commit. 
                        The --mixed option is similar to soft but it also un-adds your changes. The --hard option will go one step further and undo your changes. (However if you want to burn all evidence that you ever made that commit you will need to also run git clean).</p>
                        <p className="flowingText">If you've already pushed, you can use: git revert  plus the identifying SHA of the commit that you want to undo to rollback the changes.</p>
                    <h4>Moving commits</h4>
                        <p className="flowingText">If you want to move around, between different commits you can use git checkout and that identifying SHA to have a look around at other commits, however this checking out is generally just for having a look and tinkering about. Think of it like checking out a library book from the library archive. You can check it out take it home, thumb around in it even but ultimately it goes back to the library archive.</p>
                        <p className="flowingText">If you decide you like whatever you've done with the library book, or that you've somehow improved it with your unique coffee ring placements, you can keep it, you just have to create a new branch: git checkout -b ReallyCoolBranchName</p>
                <h3 className="sectionHeading">Branches</h3>
                        <p className="flowingText">Branches allow you to keep different versions of your code running in parallel. There are plenty of reasons that you might want to do this. However, if you want to see a list of all the possible branches simply type: git branch</p>
                        <p className="flowingText">If you've gotten this code from somewhere else, cloned a repo etc. There might be remote branches that you haven't copied down yet. to see a list of the remote branches simply type: git branch -r</p>
                        <p className="flowingText">If you have local branches that you've made and also some mysterious remote branches then you can view all of them at the same ime by typing: git branch -a</p>
                        <p className="flowingText">Say you want to create a new branch, all you have to do is add a -b flag to your checkout command like this: git checkout -b MyBrandNewBranchName</p>
                        <p className="flowingText">The b does not officially stand for baby, but it's kind of like a baby branch. If that helps you remember the syntax better.</p>
                    <h4>Moving branches</h4>
                        <p className="flowingText">If you want to move to another branch you can use: git checkout CoolFeatureBranchName</p>
                        <p className="flowingText">You might find that git is complaining about files that you haven't committed yet. Maybe you aren't ready to commit yet. No pressure, you can simply stash your changes using: git stash</p>
                        <p className="flowingText">This will keep your changes and make git happy about the state you are trying to leave one of it's branches in. If you want to return and then pull things back out of the stash all you have to do, is use: git stash apply</p>
                    <h4>Combining branches</h4>
                        <p className="flowingText">There are two ways to combine branches: merge, and rebase. Merge is the one you will be using for now but let's go through how they are different and how to trigger each one.</p>
                        <p className="flowingText">In order to merge two branches together you can type: git merge ReallyCoolBranchName , this sort of "tie together" the branches, it is possible to untie the branches and revert things.</p>
                        <p className="flowingText">If you ever want to rebase things you only type: git rebase TheOtherReallyCoolBranchName, this will sort of twist and combine the branches into a single branch. </p>
                        <p className="flowingText">Graphically it looks a bit like this:</p>
                            <img className="graphic" src={rebase}/>
                    <h4>Merge Conflicts</h4>
                        <p className="flowingText">You might get an auto merge failure message that says something like: CONFLICT: merge conflict in reallycoolfile.html</p>
                        <p className="flowingText">If you see this you will need to open up the file that it is moaning about either in the command line, or in VS Code. You should see a bunch of carets &lt;&lt;&lt;&lt;&lt;&lt;&lt; and HEAD, a bunch of equals signs ========= and another line of carets &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; </p>
                        <p className="flowingText">This line of equals signs is effectively separating the two versions that you need to choose from. You must delete one version and all the merge conflict syntax (carets and equals signs) basically, leave the file ready to ship.</p>
                        <p className="flowingText">Then you will be able to merge properly once you've resolved all the conflicts manually.</p>
                <h3 className="sectionHeading">Remote Repos</h3>
                        <p className="flowingText">If you want to save your work somewhere else like on Github, BitBucket, or GitLab you'll be dealing with a remote repository. It is also possible to clone down code from remote repositories, if you do this, your code will come with one remote already.</p>
                        <p className="flowingText">You can look at your remote by typing: git remote , if you ever want to remove it, you can use: git remote remove NameOfRemoteGoesHere</p>
                        <p className="flowingText">On the other hand if you want to add a remote, you can use: git remote add NewNameOfRemoteGoesHere github.com/mycoolusername/mygreatrepoidea </p>
                        <p className="flowingText">If you want to rename your remote, you should use: git rename OldLessCoolRemoteName NewReallyCoolRemoteName</p>
                    <h4>Getting stuff from the remote</h4>
                        <p className="flowingText">If you are working in a team and lots of people are pushing to the same remote repo, you will sometimes find that git won't let you push your changes unless you have the latest version of the remote in your local project.</p>
                        <p className="flowingText">Maybe you aren't sure about the changes from the remote, the best way to check them out is to run git fetch, which adds all the changes in the remote but doesn't go so far as to commit them. This means you can run git status and have a look at the different files that have changed to see what you think.</p>
                        <p className="flowingText">If you decide that the remote changes aren't so suspicious after all you can commit them after fetching using a merge.</p>
                        <p className="flowingText">You'll often find that you are working on your projects by yourself at this level, this means that you'll probably trust your past self and all of the changes that you pushed to your remote repo. You can quickly grab all the changes by running: git pull</p>
                        <p className="flowingText">If you want to pull down a remote branch all you have to do is checkout that branch. Git knows which branches list in the remote and in your local system.</p>
                        <p className="flowingText">Maybe you want to use someone's code and keep their history and all their commits etc. If that is the case, then you'll need to fork their repo. Which can be done for example via the Github.com interface via the fork button.</p>
                    <h4>Pushing stuff to the remote</h4>
                        <p className="flowingText">Let's say you finish a super cool feature and you want to save it to your remote repo so all your teammates can pull it down.</p>
                        <p className="flowingText">It's worth noting that you can only push to repos that you have permission to push to. To push, you just run: git push RemoteName ReallyCoolBranchName</p>
                        <p className="flowingText">It's possible to force things to push, but it is not usually recommended. Please save your use of force for real emergencies.</p>
                    <h4>Pull Requests</h4>
                        <p className="flowingText">If you want to edit someone else's code or if you want to have your changes reviewed before they are accepted, then you can make a pull request. Pull requests can be made for example on Github.com with the pull request interface and not in the terminal. 
                        You can suggest changes, and then if the repo owner likes them they can pull them in, if they have comments to improve your changes then they can tell you what you need to improve before they will accept them.</p>
                
                
                <button className="ready" onClick={() => this.props.callback(<Challenge37 callback={this.props.callback}/>)}>Challenge</button>
        
                </div>
            </div>
         );     
    }
}
 
export default Lesson37;