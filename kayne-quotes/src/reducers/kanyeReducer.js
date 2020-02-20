import { FETCH_DATA, UPDATE_KANYE, SET_ERROR } from "../actions";

const initialState = {
  quote:
    "I'll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying.",
  isFetchingData: false,
  error: ""
};

export const kanyeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        quote: ""
      };
    case UPDATE_KANYE:
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
    default:
      return state;
  }
};
