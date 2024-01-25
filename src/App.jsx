import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favorites from "./Routes/Favorites";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <ContextProvider>
        <div className={`App ${theme}`}>
          <Navbar toggleTheme={toggleTheme} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dentist/:id" exact component={Detail} />
            <Route path="/contacto" component={Contact} />
            <Route path="/favs" component={Favorites} />
          </Switch>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;






