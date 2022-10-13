import React, { useState } from "react";
import Card from "./Components/Card";
import Container from "./Components/Container";
import UserForm from "./Components/UserForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const submit = (usuario) => {
    setUsers([...users, usuario]);
  };

  return (
    <Container>
      <body>
        <Card>
          <UserForm submit={submit} />
          <ul >
            {users.map((x) => (
              <li className="user" key={x.mail}>{`${x.nombre} ${x.apellido} ${x.mail}`}</li>
            ))}
          </ul>
        </Card>
      </body>
    </Container>
  );
}

export default App;
