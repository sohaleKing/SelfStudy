const container = document.getElementById("root");

//when its JSX it wont matter if you use a component like header inside the App component before declaration- in actual JS it matters
const App = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Main></Main>
    </React.Fragment>
  );
};
//instead of <React.Fragment></React.Fragment> you could simply used <></> JSX would know what that means

const Header = () => {
  return (
    <>
      <div>Header</div>
      <Navbar item1="home" item2="about" item3="contact"></Navbar>
    </>
  );
};
//you cant just nested component inside the App component needs to do it inside the parent component function
function Navbar(props) {
  return (
    <ul>
      <li>{props.item1}</li>
      <li>{props.item2}</li>
      <li>{props.item3}</li>
    </ul>
  );
}

const Main = function () {
  return (
    <div>
      <p>main information is here now</p>
    </div>
  );
};

ReactDOM.render(<App />, container);
