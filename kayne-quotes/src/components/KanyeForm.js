import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const KanyeForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div className="form">
      {props.isFetchingData ? (
        console.log("fetching data")
      ) : (
        <button onClick={handleGetData}>Get Your new Kanye Quote</button>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData })(KanyeForm);
