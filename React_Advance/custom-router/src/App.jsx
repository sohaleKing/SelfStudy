import React, { useState } from "react";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Service } from "./components/service";

export function App() {
  const current_url = window.location.pathname;
  const [_, setState] = useState(0);

  let style = {
    backgroundColor: "white",
  };
  let content;
  switch (current_url) {
    case "/about":
      style.backgroundColor = "red";
      content = <About />;
      break;
    case "/contact":
      style.backgroundColor = "green";
      content = <Contact />;
      break;
    case "/service":
      style.backgroundColor = "blue";
      content = <Service />;
      break;

    default:
      break;
  }

  //we need not to refresh the page when clicking on anker tab! if there is href means there is a refresh!
  function handleClick(e) {
    // console.log(e.target.name);

    //now need to let the react knows there is a change to let it re-render : {1-when event, 2-when props changes, 3-when stated changes}
    setState({});

    //need to change the current URl somehow, we hacking it by using the web API, history, replaceState
    window.history.replaceState(_, "", `${e.target.name}`);
  }

  return (
    <React.Fragment>
      <div>
        <ul>
          <li>
            <a name="home" onClick={handleClick}>
              Home
            </a>
          </li>
          <li>
            <a name="about" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a name="service" onClick={handleClick}>
              Services
            </a>
          </li>
          <li>
            <a name="contact" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div style={style}>{content}</div>
    </React.Fragment>
  );
}
