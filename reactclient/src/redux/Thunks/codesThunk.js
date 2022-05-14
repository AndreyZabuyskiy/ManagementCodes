import { codesLoad } from "../Actions";
import * as axios from "axios";

export const loadCodesThunk = () => {
  return async dispatch => {
    axios.get("https://localhost:7030/api/Codes").then(responce => {
      dispatch(codesLoad(responce.data));
    });
  }
}