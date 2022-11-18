import FormAddUser from "./Components/FormAddUser";
import "./styles.css";

import { useSelector } from "react-redux";
import { useState } from "react";
import Card from "./Components/Card";

export default function App() {
  const {
    userMetaData: { data }
  } = useSelector((state) => state);

  const [toggleForm, setToggleForm] = useState(false);

  const create = () => setToggleForm((prev) => !prev);
  console.log("metat", data);
  return (
    <div className="App">
      <button onClick={create}>Create User</button>
      <div className="dashboard" style={{ display: "flex" }}>
        <div>{toggleForm && <FormAddUser />}</div>

        <div style={{ marginLeft: "10px" }}>
          {data?.map((el, i) => (
            <Card name={el.name} email={el.email} city={el.city} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
