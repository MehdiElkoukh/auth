import axios from "axios";

export const getUserInfo = () =>
  axios.get("https://randomuser.me/api/").then(res => res);
