import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';
import store from './store';
import { HashRouter as Router, Route } from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div>
              <NavBar />
              <Route exact path="/" component={Landing} />
              <Route exact path="/movie/:id" component={Movie} />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;

// function App() {
//   return <div>asdf</div>;
// }
