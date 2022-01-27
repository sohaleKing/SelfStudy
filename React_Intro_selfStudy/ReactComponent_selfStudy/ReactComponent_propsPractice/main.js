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
      <Navbar></Navbar>
    </>
  );
};
//you cant just nested component inside the App component needs to do it inside the parent component function
function Navbar() {
  return (
    <ul>
      <li>Home</li>
      <li>AboutUs</li>
      <li>ContactUs</li>
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
