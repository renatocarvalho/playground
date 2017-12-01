webpackJsonp([0xf5d73857f1be],{226:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(1),l=n(o),i=a(44),r=n(i),s=a(12),u=n(s),c=a(15),d=n(c),h=a(56),f=n(h),p=a(544),m=n(p),b=a(545),g=n(b),w=a(546),v=n(w),E=a(548),k=n(E),x=a(547),y=n(x),T=a(549),S=n(T),W=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"Find the Value of a Variable"),l.default.createElement("p",null,"A good first step towards moving away from console.log is to tackle one of its primary use cases: finding the value of a variable."),l.default.createElement("p",null,"Let’s take a look at a simple to-do app: "),l.default.createElement("p",null,l.default.createElement("a",{href:"https://mozilladevelopers.github.io/sample-todo/01-variables/",target:"_blank",rel:"noopener noreferrer"},"Open to-do app in new tab.")),l.default.createElement("p",null,"This app has a function called ",l.default.createElement("code",null,"addTodo")," which will take the value of the input form, create an object, and then push that object onto an array of tasks. Let’s test it out by adding a new task. You’d expect to have this new task added to the list, but instead you see"," ",'"[object HTMLInputElement]".'," "),l.default.createElement("p",null,"Something is broken, and we need to debug the code. The temptation is to start adding console.log throughout the function, to pinpoint where the problem is. This approach might look something like this:"),l.default.createElement(d.default,null,"\nconst addTodo = e => {\n  e.preventDefault();\n  const title = document.querySelector(\".todo__input\");\n  console.log('title is: ', title);\n  const todo = { title };\n  console.log('todo is: ', todo');\n  \n  items.push(todo);\n  saveList();\n  console.log(‘The updated to-do list is: ‘, items);\n  document.querySelector(\".todo__add\").reset();\n};\n      "),l.default.createElement("p",null,"This can work, but it is cumbersome and awkward. We also have to remember to remove these lines after fixing the code. There’s a much better way to do it with Debugger using what is called a breakpoint."),l.default.createElement("p",null,"A breakpoint is something that signals to Debugger that we wish to pause execution at a specific place in the code. While paused, we can view the value of a variable at that particular point in the code. Using the example linked above, let’s add a breakpoint to line 13. We can do this by clicking on the number 13 to the left of the code. If done correctly, a little blue flag will appear."," "),l.default.createElement(f.default,{src:m.default,alt:"add breakpoint",caption:"Adding a breakpoint"}),l.default.createElement("p",null,"Now try adding a task. Because of the breakpoint, execution of the code will pause inside the",l.default.createElement("code",null,"addTodo")," function, just before line 13 is executed. We want to track the value of the ",l.default.createElement("code",null,"title")," and ",l.default.createElement("code",null,"todo")," variables to see why the value of the input form isn’t being used when rendering the to-do list. There are a few ways we can check the value of a variable."),l.default.createElement("h4",null,"Method 1: Use the console"),l.default.createElement("p",null,"When we hit a breakpoint, and pause execution, we can use the console within the scope of where the code was paused. This means we can type ",l.default.createElement("code",null,"title")," into the console, hit enter, and view the value of that variable."),l.default.createElement("h4",null,"Method 2: Hover"),l.default.createElement("p",null,"We can also hover over the variable in the source pane to view the value of that variable. Try hovering over other items such as an object or a function. Hovering provides us with quick access to all sorts of information that can be helpful for debugging."),l.default.createElement(f.default,{src:g.default,alt:"hover",caption:"Hovering for information"}),l.default.createElement("h4",null,"Method 3: Scope Section"),l.default.createElement("p",null,"At the bottom right of the Firefox Debugger is a section that displays all objects that are in scope at this point in the program. The first block will list variables in the current block/function and their values."),l.default.createElement(f.default,{src:v.default,alt:"overview",caption:"The scopes section in the Firefox Debugger"}),l.default.createElement("p",null,"If you tried any of those methods while paused at line 13, you may have noticed a little problem: the title and todo variables are undefined. This is because execution has paused just before line 13, and the lines that would assign a value to those variables haven’t been executed yet. We need to continue to move through the script until those variables are assigned a value. This is where the toolbar comes in."),l.default.createElement(f.default,{src:k.default,alt:"overview",caption:"The Firefox Debugger toolbar"}),l.default.createElement("p",null,"Here is what the toolbar buttons do:"),l.default.createElement("dl",null,l.default.createElement("dt",null,"Play/Pause"),l.default.createElement("dd",null,'Pauses or resumes execution of the script we are debugging. When it displays a "play" icon, that means the script is paused, either because we’ve paused it with this button or because we’ve hit a breakpoint.'),l.default.createElement("dt",null,"Step over"),l.default.createElement("dd",null,"Steps across the current line of JavaScript code."),l.default.createElement("dt",null,"Step in"),l.default.createElement("dd",null,"Steps into the function call on the current line of JavaScript code."),l.default.createElement("dt",null,"Step out"),l.default.createElement("dd",null,"Runs the script until the current function exits.")),l.default.createElement("p",null,"Right now, we are going to focus on the ‘Step Over’ button. This will step through the code one line at a time. If it comes across a function, it will execute the entire function. This is different from the ‘Step In’ button which will enter into that function instead of executing it. Don’t worry about understanding the difference just yet. We’ll cover ‘Step In’ more in the next section."),l.default.createElement("p",null,"Press the ‘Step Over’ button once. The code is still paused, but line 14 is now highlighted. This means line 13 has executed. The ",l.default.createElement("title",null,"title")," variable is still undefined, but that is because we have paused just before line 14. Press ‘Step Over’ one more time and...now we are getting somewhere! We can now hover over ",l.default.createElement("code",null,"title")," to get the value. We can also check the scope section."," "),l.default.createElement(f.default,{src:y.default,alt:"hovering over title",caption:"Hovering over 'title' to see its value"}),l.default.createElement("p",null,"If we use one of the three methods to look at the value of ",l.default.createElement("code",null,"title"),", we can spot our issue. The value isn’t a string like we’d expect, but rather it is an entire object! If we hover over ",l.default.createElement("code",null,"title")," and scroll through its different properties, we’ll find that we should have referenced the ‘value’ property of the object instead of the entire object itself. Fix line 14 and the app will work properly."),l.default.createElement("p",null,"When we are done stepping through the code, we can press the 'Play/Pause' button which will resume execution of the script (until it hits another breakpoint)."),l.default.createElement("p",null,"Phew. That was a lot of information. Try adding some other breakpoints in the app, and using the toolbar to step through the code. As you get comfortable with the basics of breakpoints and stepping through code, you will start to understand how powerful Debugger is."),l.default.createElement("p",null,"When you are ready, move on to the next section of the tutorial to learn more about how we can use Firefox Debugger to debug our code."))},j=function(){return l.default.createElement(u.default,{title:"Firefox DevTools: Hot Tip"},l.default.createElement("p",null,"Another handy method for monitoring the value of a variable (or any expression) is to use the Watch Expressions section in the sidebar. You can set a watch expression by clicking “Add Watch Expression”, and typing the expression (in this case a variable), that you’d like to watch. Using the example above, try adding an expression for ‘title’ and another for ‘todo’. Set a breakpoint on line 13, add a new todo item to trigger the breakpoint, and start stepping through the function. When a value is assigned to the variable, the value will appear in the ‘Watch Expressions’ section."),l.default.createElement(f.default,{src:S.default,alt:"Using Watch Expressions",caption:"Using watch expressions",dark:!0}))};t.default=function(){return l.default.createElement(r.default,{currentPageNum:2,tutorial:l.default.createElement(W,null),homework:l.default.createElement(j,null)})},e.exports=t.default},544:function(e,t,a){e.exports=a.p+"static/add.ea433c8d.gif"},545:function(e,t,a){e.exports=a.p+"static/hover.8ba1d250.png"},546:function(e,t,a){e.exports=a.p+"static/scopes.8162ccab.png"},547:function(e,t,a){e.exports=a.p+"static/title.d9d2f0ab.png"},548:function(e,t,a){e.exports=a.p+"static/toolbar.b37b535e.png"},549:function(e,t,a){e.exports=a.p+"static/watch.096ea210.gif"}});
//# sourceMappingURL=component---src-pages-debugger-02-check-variable-values-js-f149857a96fcc3ce701d.js.map