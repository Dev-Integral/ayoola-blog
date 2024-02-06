import axios from "axios";
import { GET_AUTH_START } from "./type";

export const getAuth = () => {
    return (dispatch) => {
      dispatch({ type: GET_AUTH_START });
      axios.post("https://powered-by-bamboo-sandbox.investbamboo.com/oauth/token", {username: "test", password: "test"})
        .then((res) => {
            console.log("res", res);
        })
        .catch((error) => {
            console.log("error", error)
        });
    };
  };