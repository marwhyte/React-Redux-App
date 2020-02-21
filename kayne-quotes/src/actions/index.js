import axios from "axios";

export const FETCH_QUOTE = "FETCH_QUOTE";
export const UPDATE_QUOTE = "UPDATE_QUOTE";
export const SET_ERROR = "SET_ERROR";
export const RESET_QUOTE = "RESET_QUOTE";

export const getKanyeData = () => dispatch => {
  dispatch({ type: FETCH_QUOTE });
  axios
    .get("https://api.kanye.rest/?format=text")
    .then(res => {
      console.log("response", res);
      dispatch({ type: UPDATE_QUOTE, payload: res.data });
    })
    .catch(err => {
      console.error("error with KANYE DATA", err);
      dispatch({ type: SET_ERROR, payload: "Error getting API DATA" });
    });
};

export const getTrumpData = () => dispatch => {
  dispatch({ type: FETCH_QUOTE });
  axios
    .get("https://www.tronalddump.io/random/quote")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_QUOTE, payload: res.data.value });
    })
    .catch(err => {
      console.error("error with TRUMP DATA", err);
      dispatch({ type: SET_ERROR, payload: "Error getting API DATA" });
    });
};

export const resetForm = () => dispatch => {
  dispatch({ type: RESET_QUOTE });
};
