import { create } from "apisauce";

const authApi = create({
  baseURL: "http://192.168.1.122:5000/",
});

export default {
  authApi,
};
