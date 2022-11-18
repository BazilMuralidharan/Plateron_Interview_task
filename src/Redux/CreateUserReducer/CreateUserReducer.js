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
    }
  }
});
export const { addNewUser } = CreateUser.actions;
export default CreateUser.reducer;
