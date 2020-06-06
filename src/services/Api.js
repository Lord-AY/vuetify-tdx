import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `http://142.93.207.91/`
  });
};
