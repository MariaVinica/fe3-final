import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';  
import Detail from './Routes/Detail';  
import Contact from './Routes/Contact';  
import Favorites from './Routes/Favorites';  


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dentist/:id" exact component={Detail}/>
          <Route path="/contacto" component={Contact} />
          <Route path="/favs" component={Favorites} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

