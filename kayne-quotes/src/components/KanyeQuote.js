import React from "react";
import { connect } from "react-redux";
import { Animated } from "react-animated-css";

const KanyeQuote = props => {
  return (
    <div className="quote">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <p>
          "{props.quote}" <br></br>- Kanye West
        </p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    error: state.error
  };
};
export default connect(mapStateToProps, {})(KanyeQuote);
