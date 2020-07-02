import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import Landing from './components/home/Landing';
import store from './store';
export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <NavBar />
          <Landing />
        </Provider>
      </div>
    );
  }
}

export default App;

// function App() {
//   return <div>asdf</div>;
// }
