// const content = (
//   <div>
//     <h1>first content</h1>
//     <p>hello from the first</p>
//   </div>
// );
const FirstComponent = (props) => {
  //always needs to start the name with Capital letter
  //   return content;  //alertanive way - but the better way its better to do it straight here since we are going to use the props param
  console.log("FirstComponent props", props); //as you see in console the param props for this function since that's a component
  //it would be an object with two property directly related to the component FirstComponent props(attribute)
  return (
    <div>
      <h1>first component</h1>
      <p>hello from first component</p>
      <p>show my name: {props.myName}</p>
      <p>show my type: {props.myType}</p>
    </div>
  );
};
//lets imagine we have second component which includes the first component- in fact first one is nested to second one
function SecondComponent(props2) {
  //that also can be props--> just to clarify the concept we named it props2
  console.log("SecondComponent props", props2);
  return <FirstComponent {...props2}></FirstComponent>;
}

const target = document.getElementById("root");

//ReactDOM.render(<FirstComponent myName="firstComponent" myType="react component" />,target); --> to make that nesting we need to change this

ReactDOM.render(
  <SecondComponent
    myName="react component named"
    myType="react component typed"
  />,
  target
);
