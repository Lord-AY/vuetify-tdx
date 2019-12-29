import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `http://157.245.82.193/`
  });
};
