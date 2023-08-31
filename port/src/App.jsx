import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import About from './componentsAbout';
import Contact from './components/Contact';
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
         < Route path="/Projects" component={Projects} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
