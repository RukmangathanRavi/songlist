import React, { Component } from 'react';
import Header from './components/Header/Header';
import { Route, Redirect } from 'react-router-dom';
import Songs from './container/Songs/Songs'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Redirect exact from="/songs" to="/" />
        <Redirect exact from="/login" to="/" />
        <Route path="/" exact component={Songs} />

      </div>
    )
  }
}

export default App