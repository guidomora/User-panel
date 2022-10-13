import React, { useState } from "react";
import useValue from "./Hooks/useValue";
import Input from "./Components/Input";
import Card from "./Components/Card";
import Container from "./Components/Container";
import Boton from "./Components/Boton";


function App() {
  const [users, setUsers] = useState([]);
  const [value, handleChange, reset] = useValue({
    nombre: "",
    apellido: "",
    mail: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setUsers([...users, value]);
    reset();
    console.log(value);
  };

  return (
    <Container>
      <Card>
        <form onSubmit={submit}>
          <Input
            label="Nombre"
            type="text"
            name="nombre"
            value={value.nombre}
            onChange={handleChange}
          />
          <Input
            label="Apellido"
            type="text"
            name="apellido"
            value={value.apellido}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            name="mail"
            value={value.mail}
            onChange={handleChange}
          />
          <Boton>Enviar</Boton>
        </form>
      </Card>
      <Card>
        <p>
          {users.map(usuario => usuario.nombre)}
          {users.map(usuario => usuario.apellido)}
        </p>
      </Card>
    </Container>
  );
}

export default App;
