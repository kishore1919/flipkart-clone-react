import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Plus from "./components/Plus";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/plus">
              <Plus />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
