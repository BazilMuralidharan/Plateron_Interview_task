import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { editUser } from "../Redux/CreateUserReducer/CreateUserReducer";

export default function FormEditUser(props) {
  // const { name, email, city } = props.editingPayload;

  const {
    editingPayload: { name, email, city },
    editingsDone
  } = props;
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const cityRef = useRef(null);

  const clear = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    cityRef.current.value = "";
  };
  const submitAction = (e) => {
    e.preventDefault();
    const editedState = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      city: cityRef.current.value
    };
    const empty = !editedState.name || !editedState.email || !editedState.city;
    if (empty) {
      alert("FIll the details ");
    } else {
      dispatch(editUser(editedState));
      clear();
      editingsDone(false);
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
        <input type="text" name="name" ref={nameRef} defaultValue={name} />
        <label htmlFor="name" />
        Email
        <input type="text" name="email" ref={emailRef} defaultValue={email} />
        <label htmlFor="name" />
        City
        <input type="text" name="city" ref={cityRef} defaultValue={city} />
        <input type="submit" style={{ marginTop: "10px" }} />
      </form>
    </div>
  );
}
