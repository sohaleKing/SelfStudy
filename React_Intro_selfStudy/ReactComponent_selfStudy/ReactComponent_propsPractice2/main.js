const container = document.getElementById("root");

const App = () => {
  return (
    <>
      <Header item1="Home" item2="About" item3="Contact"></Header>
      <Main></Main>
    </>
  );
};

const Header = (props) => {
  return (
    <>
      <div>Header</div>
      <Navbar {...props}></Navbar>
    </>
  );
};

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
