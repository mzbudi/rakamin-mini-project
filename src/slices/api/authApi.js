import axios from "axios";

export function loginUser({ email, password }) {
  return axios.post("https://todo-api-18-140-52-65.rakamin.com/auth/login", {
    email: email,
    password: password,
  });
}

export function registerUser(data) {
  return axios.post("https://todo-api-18-140-52-65.rakamin.com/signup", {
    name: data.name,
    email: data.email,
    password: data.password,
    password_confirmation: data.password_confirmation,
  });
}
