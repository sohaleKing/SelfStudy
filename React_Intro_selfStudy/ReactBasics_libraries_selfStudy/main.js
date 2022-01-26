//now the both React and ReactDom are added to windows API
console.log("React library = ", React);
console.log("ReactDOM library", ReactDOM);
//you cant do it the same with babel since its a min JS file and works on your JS imported code

//=================================================================================
//============================Native DOM Manipulation==============================
//=================================================================================
const DOM_createElement = document.createElement("div");

//this is a native object for browser! browser easily understands the object like <div></div>
console.log("DOM Manipulation original manner = ", DOM_createElement);

//to see new div added by creatElement in browser
const DomTarget = document.getElementById("nativeDOM");
DOM_createElement.innerHTML = "Native DOM div added by createElement method";
DomTarget.appendChild(DOM_createElement);

//=================================================================================
//============================React DOM Manipulation==============================
//=================================================================================
const ReactCreateElement = React.createElement(
  "div", //node type
  null, //props (attribute)
  "React DOM div added by createElement method" // children
);

//this is not a browser native object so the browser cant see it as div tag, it would be a complicated object
console.log("DOM Manipulation React Library manner = ", ReactCreateElement);

//to see the new div added by React in browser
const ReactTarget = document.getElementById("ReactRoot");
ReactDOM.render(ReactCreateElement, ReactTarget);

//=================================================================================
//============================babel/jsx DOM Manipulation==============================
//=================================================================================
const BabelJSX_createElement = (
  <div>babel/jsx DOM div added by createElement method</div> //This is syntactic sugar for React.createElement("div", null, null)
);
//pretier will add () before doing it but its not part of the syntax. syntax=> const newDiv = <div></div> thats it
console.log(
  "DOM Manipulation Babel/JSX Library manner",
  BabelJSX_createElement
); //as you see its very close to DOM React object- not native for sure to browser
console.log(
  "DOM Manipulation Babel/JSX Library manner---JSON",
  JSON.stringify(BabelJSX_createElement)
);
//you are only allowed to have one ReactDOM.render(what to display, where to display- target)
