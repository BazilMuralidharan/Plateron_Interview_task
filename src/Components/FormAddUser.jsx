import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../Redux/CreateUserReducer/CreateUserReducer";

export default function FormAddUser({ createDone }) {
  const {
    userMetaData: { data }
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    city: ""
  });

  const changeHandler = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const clear = () => {
    setState({
      name: "",
      email: "",
      city: ""
    });
  };
  const submitAction = (e) => {
    e.preventDefault();
    // console.log(state);

    const empty = !state.name || !state.email || !state.city;
    if (empty) {
      alert("FIll the details ");
    } else {
      const verify = data?.find((el) => {
        return (
          el.name === state.name ||
          el.email === state.email ||
          e.city === state.city
        );
      });

      if (verify) {
        alert("userEXIST");
      } else {
        dispatch(addNewUser(state));
        clear();
        createDone(false);
      }
    }
  };
  return (
    <div>
      <form
        onSubmit={submitAction}
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          width: "270px"
        }}
      >
        <label htmlFor="name" />
        Name
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          value={state.name}
        />
        <label htmlFor="name" />
        Email
        <input
          type="text"
          name="email"
          onChange={changeHandler}
          value={state.email}
        />
        <label htmlFor="name" />
        City
        <input
          type="text"
          name="city"
          onChange={changeHandler}
          value={state.city}
        />
        <input type="submit" style={{ marginTop: "10px" }} />
      </form>
    </div>
  );
}
