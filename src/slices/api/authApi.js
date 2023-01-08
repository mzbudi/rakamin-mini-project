import axios from "axios";

export function loginUser({ email, password }) {
  return axios.post("https://todo-api-18-140-52-65.rakamin.com/auth/login", {
    email: email,
    password: password,
  });
}
