import { deleteUser } from "../Redux/CreateUserReducer/CreateUserReducer";
import { useDispatch } from "react-redux";

export default function Card({ name, email, city, editOnToggele }) {
  const dispatch = useDispatch();
  const delteUser = () => {
    const deletePayload = { name, email, city };
    if (window.confirm("Are you sure want to delete")) {
      dispatch(deleteUser(deletePayload));
    } else {
      return;
    }
  };
  const editUser = () => {
    const editPayload = { name, email, city };
    editOnToggele(editPayload);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between",
        border: "2px solid black",
        width: "300px",
        marginTop: "10px"
      }}
    >
      <div>NAME: {name}</div>
      <div>EMAIL: {email}</div>
      <div>CITY: {city}</div>

      <div>
        <button onClick={delteUser}>DELETE</button>
        <button onClick={editUser}>EDIT</button>
      </div>
    </div>
  );
}
