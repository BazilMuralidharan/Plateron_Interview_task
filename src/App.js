import FormAddUser from "./Components/FormAddUser";
import "./styles.css";

import { useSelector } from "react-redux";
import { useState } from "react";
import Card from "./Components/Card";
import FormEditUser from "./Components/FormEditUser";

export default function App() {
  const {
    userMetaData: { data }
  } = useSelector((state) => state);

  const [toggleForm, setToggleForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [editingPayload, setEditingPayload] = useState();

  const editUserFromCard = (payloadForEdit) => {
    setToggleForm(false);
    setEditForm((prev) => !prev);
    setEditingPayload(payloadForEdit);
  };

  const create = () => setToggleForm((prev) => !prev);

  return (
    <div className="App">
      <h4>Dev: BAZIL MURALIDHARAN</h4>
      <button onClick={create}>Create User</button>
      <div className="dashboard" style={{ display: "flex" }}>
        <div>{toggleForm && <FormAddUser createDone={setToggleForm} />}</div>
        <div>
          {editForm && (
            <FormEditUser
              editingPayload={editingPayload}
              editingsDone={setEditForm}
            />
          )}
        </div>
        <div style={{ marginLeft: "10px" }}>
          {data?.map((el, i) => (
            <Card
              name={el.name}
              email={el.email}
              city={el.city}
              key={i}
              editOnToggele={editUserFromCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
