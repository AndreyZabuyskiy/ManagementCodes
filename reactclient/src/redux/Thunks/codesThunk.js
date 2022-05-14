import { codesLoad } from "../Actions";
import * as axios from "axios";

export const loadCodesThunk = () => {
  return async dispatch => {
    axios.get("https://localhost:7030/api/Codes").then(responce => {
      dispatch(codesLoad(responce.data));
    });
  }
}

export const createCodeThunk = (code) => {
  return async dispatch => {
    axios.post("https://localhost:7030/api/Codes", code).then(responce => {
      if(responce.status === 200){
        dispatch(loadCodesThunk());
      }
    });
  }
}

export const changeCodeThunk = (code) => {
  return async dispatch => {
    axios.put("https://localhost:7030/api/Codes", code).then(responce => {
      if(responce.status === 200){
        dispatch(loadCodesThunk());
      }
    });
  }
}