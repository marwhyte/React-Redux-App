import React from "react";
import "./App.scss";
import KanyeQuote from "./components/KanyeQuote";
import KanyeForm from "./components/KanyeForm";
import { createStore, applyMiddleware } from "redux";
import { kanyeReducer as reducer } from "./reducers/kanyeReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Animated from "react-animated-css";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Welcome to your Kanye Ispiration</h1>
        <KanyeForm />
        <KanyeQuote />
      </div>
    </Provider>
  );
}

export default App;
