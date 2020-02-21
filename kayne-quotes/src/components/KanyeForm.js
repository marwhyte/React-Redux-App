import React from "react";
import { connect } from "react-redux";
import { getKanyeData } from "../actions";

const KanyeForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getKanyeData();
  };

  return (
    <div className="form">
      {props.isFetchingData ? (
        console.log("fetching data")
      ) : (
        <button className="button" onClick={handleGetData}>
          Get Your new Kanye Quote
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

export default connect(mapStateToProps, { getKanyeData })(KanyeForm);
