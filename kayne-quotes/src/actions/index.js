import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_KANYE = "UPDATE_KANYE";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://api.kanye.rest/?format=text")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_KANYE, payload: res.data });
    })
    .catch(err => {
      console.error("error with API DATA", err);
      dispatch({ type: SET_ERROR, payload: "Error getting API DATA" });
    });
};
