import React from "react";
import { connect } from "react-redux";
import { SocialIcon } from "react-social-icons";

const TrumpQuote = props => {
  return (
    <div className="quote">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <p>
          <SocialIcon url="http://twitter.com" />
          <span> </span>
          {props.quote} <br></br>
          <br></br>- Trump
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
export default connect(mapStateToProps, {})(TrumpQuote);
