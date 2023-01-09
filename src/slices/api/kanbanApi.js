import axios from "axios";

export const getTodos = () => {
  const token = localStorage.getItem("auth_token");
  return axios.get("https://todo-api-18-140-52-65.rakamin.com/todos", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getItems = (id) => {
  const token = localStorage.getItem("auth_token");
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
  const token = localStorage.getItem("auth_token");
  return axios.post("https://todo-api-18-140-52-65.rakamin.com/todos", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createNewItems = (id, data) => {
  const token = localStorage.getItem("auth_token");
  return axios.post(
    `https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteItem = (data) => {
  const token = localStorage.getItem("auth_token");
  return axios.delete(
    `https://todo-api-18-140-52-65.rakamin.com/todos/${data.todo_id}/items/${data.item_id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updateItem = (data) => {
  const token = localStorage.getItem("auth_token");
  return axios.patch(
    `https://todo-api-18-140-52-65.rakamin.com/todos/${data.todo_id}/items/${data.id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
