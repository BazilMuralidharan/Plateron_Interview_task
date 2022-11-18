export default function Card({ name, email, city }) {
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
    </div>
  );
}
