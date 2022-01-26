const ReactBabelContent = (
  <div>
    <h1>header</h1>{" "}
    {/*This is syntactic sugar for React.createElement("h1", null, "header"),
    every time the is { means you switch to JS code and when its } means you go back to html*/}
    <p>this is a jsx content written in JS side</p>
    <p>the end</p>
  </div>
);
const ReactElement = React.createElement(
  "div",
  { id: "rootDOM", className: "container" }, // the props would be an object including the attributes
  //always put className as class atribute
  React.createElement("h1", null, "header"),
  React.createElement("p", null, "this is a React content written in JS side"),
  React.createElement("p", null, "the end")
);

//you cant appendChild the ReactElement inside a native Node!! needs render to transfer to something understandable for browser

ReactDOM.render(ReactElement, document.getElementById("root"));
