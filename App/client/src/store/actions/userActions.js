import { LOGINSUCESS } from "../constants/actionTypes";
import * as api from "../../api/";

export const signin = (result) => async (dispatch) => {
  try {
    console.log(result);
    const { data } = await api.signIn(result);
    dispatch({ type: LOGINSUCESS, data: data });
  } catch (error) {
    console.log(error);
  }
};
