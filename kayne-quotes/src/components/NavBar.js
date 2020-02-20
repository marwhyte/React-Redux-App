import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { resetForm } from "../actions";

const NavBar = props => {
  const handleResetForm = e => {
    e.preventDefault();
    props.resetForm();
  };

  return (
    <div className="navbar">
      <button onClick={handleResetForm} className="navButton">
        <Link to="/" className="link">
          Kanye
        </Link>
      </button>
      <button onClick={handleResetForm} className="navButton">
        <Link to="/trump" className="link">
          Trump
        </Link>
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    quote: state.quote
  };
};

export default connect(mapStateToProps, { resetForm })(NavBar);
