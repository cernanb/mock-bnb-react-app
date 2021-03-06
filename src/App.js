import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import ListingsContainer from "./containers/ListingsContainer"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/listings" component={ListingsContainer} />
        </div>
      </Router>
    )
  }
}

export default App
