import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

const CreateUser = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      state.data.push(action.payload);
    },
    deleteUser: (state, action) => {
      let findIndex = state.data.findIndex((el) => el.name === action.payload);
      state.data.splice(findIndex, 1);
    },
    editUser: (state, action) => {
      let findIndex = state.data.findIndex((el) => el.name === action.payload);
      state.data.splice(findIndex, 1, action.payload);
    }
  }
});
export const { addNewUser, deleteUser, editUser } = CreateUser.actions;
export default CreateUser.reducer;
