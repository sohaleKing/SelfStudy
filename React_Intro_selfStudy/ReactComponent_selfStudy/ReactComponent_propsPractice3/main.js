const container = document.getElementById("root");
const navBarItems = { item1: "Home", item2: "aboutUs", item3: "ContactUs" };
const App = () => {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div>Header</div>
      <Navbar {...navBarItems}></Navbar>
      {/* <Navbar {...{ item1: "Home", item2: "aboutUs", item3: "ContactUs" }}></Navbar> */}
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
