import axios from "axios";

export const getTodos = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNjYsImV4cCI6MTY4MTgwODUxM30.DVSFxh5AWBKUMdhQAMqVZMDp3_6xcsN6aP3ZAlf4fmI";
  return axios.get("https://todo-api-18-140-52-65.rakamin.com/todos", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getItems = (id) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNjYsImV4cCI6MTY4MTgwODUxM30.DVSFxh5AWBKUMdhQAMqVZMDp3_6xcsN6aP3ZAlf4fmI";
  return axios.get(
    `https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createNewTodos = (data) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNjYsImV4cCI6MTY4MTgwODUxM30.DVSFxh5AWBKUMdhQAMqVZMDp3_6xcsN6aP3ZAlf4fmI";
  return axios.post("https://todo-api-18-140-52-65.rakamin.com/todos", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
