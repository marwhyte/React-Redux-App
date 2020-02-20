import { FETCH_QUOTE, UPDATE_QUOTE, SET_ERROR, RESET_QUOTE } from "../actions";

const initialState = {
  quote: "",
  isFetchingData: false,
  error: ""
};

export const kanyeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE:
      return {
        ...state,
        isFetchingData: true,
        quote: ""
      };
    case UPDATE_QUOTE:
      console.log(action.payload);
      return {
        ...state,
        quote: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    case RESET_QUOTE:
      return {
        ...state,
        quote: ""
      };
    default:
      return state;
  }
};
