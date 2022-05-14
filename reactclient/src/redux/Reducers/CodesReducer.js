import { CODES_LOAD } from "../Types";

const initialState = {
  codes: []
}

export const codesReducer = (state = initialState, action) => {
  switch(action.type){
    case CODES_LOAD:
      return loadCodes(state, action.data);

    default:
      return state;
  }
}

function loadCodes(state, data){
  return {
    ...state,
    codes: data
  }
}