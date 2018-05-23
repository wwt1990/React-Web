import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Proj from './Proj';
import Contact from './Contact';
import Other from './Other';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/react-projects' component={Proj} />
           <Route path='/other-projects' component={Other} />
           <Route path='/contact' component={Contact} />
           <Route render={function () {
                 return <h1>Not found</h1>
           }} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
