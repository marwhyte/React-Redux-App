import React from "react";
import "./App.scss";
import KanyeQuote from "./components/KanyeQuote";
import KanyeForm from "./components/KanyeForm";
import TrumpQuote from "./components/TrumpForm";
import TrumpForm from "./components/TrumpQuote";
import NavBar from "./components/NavBar";
import { createStore, applyMiddleware } from "redux";
import { kanyeReducer as reducer } from "./reducers/kanyeReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Router>
      <Provider store={store}>
        <NavBar />
        <Route exact path="/">
          <div className="App">
            <h1>Welcome to your Kanye Ispiration</h1>
            <KanyeForm />
            <KanyeQuote />
          </div>
        </Route>
        <Route path="/trump">
          <div className="AppTrump">
            <h1>Welcome to your Trump Tweet Generator</h1>
            <TrumpForm />
            <TrumpQuote />
          </div>
        </Route>
      </Provider>
    </Router>
  );
}

export default App;
