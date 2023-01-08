import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTodos, getItems, createNewTodos } from "./api/kanbanApi";

const initialState = {
  value: {
    todos: [],
    items: {},
  },
  status: "idle",
};

export const getTodosApi = createAsyncThunk("kanban/getTodos", async () => {
  const response = await getTodos();
  return response.data;
});

export const getItemsApi = createAsyncThunk("kanban/getItems", async (id) => {
  const response = await getItems(id);
  return { [id]: response.data };
});

export const createNewTodosApi = createAsyncThunk(
  "kanban/createNewTodos",
  async (data) => {
    const response = await createNewTodos(data);
    return response.data;
  }
);

export const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodosApi.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = { ...state.value, todos: action.payload };
      })
      .addCase(getTodosApi.rejected, (state) => {
        state.status = "err";
        state = { ...state };
      })
      .addCase(getItemsApi.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = {
          ...state.value,
          items: { ...state.value.items, ...action.payload },
        };
      })
      .addCase(getItemsApi.rejected, (state) => {
        state.status = "err";
        state = { ...state };
      })
      .addCase(createNewTodosApi.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = {
          ...state.value,
          todos: [...state.value.todos, action.payload],
        };
      })
      .addCase(createNewTodosApi.rejected, (state) => {
        state.status = "err";
        state = { ...state };
      });
  },
});

export const selectKanban = (state) => state.kanban.value;

export default kanbanSlice.reducer;
