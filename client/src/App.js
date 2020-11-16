import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

import "./assets/style/main.scss";

// Components
import Container from "./components/Container";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <Router>
      <Switch>
        <GlobalProvider>
          <Container>
            <Navbar />
            <Route exact path="/">
              <Home />
            </Route>
            <AppFooter />
          </Container>
        </GlobalProvider>
      </Switch>
    </Router>
  );
}

export default App;
