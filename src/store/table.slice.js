import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    users: [
      {
        id: 0,
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      },
    ],
  },
  reducers: {
    replaceTable(state, action) {
      state.users = action.payload.users;
    },
    addUserToTable(state, action) {
      const newUser = action.payload;
      const existingUser = state.users.find((user) => user.id === newUser.id);
      state.changed = true;
      if (!existingUser) {
        state.users.push({
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        });
      }
    },
    removeUserFromTable(state, action) {
      const id = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      state.changed = true;
      if (existingUser) {
        state.users = state.users.filter((user) => user.id !== id);
      }
    },
  },
});

export const tableActions = tableSlice.actions;

export default tableSlice;
