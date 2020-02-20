import React from "react";
import { connect } from "react-redux";
import { getTrumpData } from "../actions";

const TrumpForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getTrumpData();
  };

  return (
    <div className="form">
      {props.isFetchingData ? (
        console.log("fetching data")
      ) : (
        <button className="button" onClick={handleGetData}>
          Get Your new Trump Tweet
        </button>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getTrumpData })(TrumpForm);
